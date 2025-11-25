import type { Express } from "express";
import express, { type Request, type Response } from "express";
import { createServer, type Server } from "http";

// We import the shared schemas for validation
import {
  insertContactSchema,
  insertBookingSchema,
  insertFacilitySchema,
  insertUserSchema,
} from "@shared/schema";

import { z } from "zod";
import bcrypt from "bcryptjs";

export async function registerRoutes(app: Express): Promise<Server> {
  const router = express.Router();

  // Health check
  router.get("/health", (_req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  // Lazy require storage so startup doesn't fail early in environments
  // where DATABASE_URL may be intentionally missing.
  const getStorage = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { storage } = require("./storage");
      return storage;
    } catch (err) {
      return null;
    }
  };

  // Facilities
  router.get("/facilities", async (_req: Request, res: Response) => {
    const storage = getStorage();
    if (!storage) return res.status(503).json({ message: "database not configured" });

    const facilities = await storage.getAllFacilities();
    res.json(facilities);
  });

  router.get("/facilities/:id", async (req: Request, res: Response) => {
    const storage = getStorage();
    if (!storage) return res.status(503).json({ message: "database not configured" });

    const facility = await storage.getFacilityById(req.params.id);
    if (!facility) return res.status(404).json({ message: "not found" });
    res.json(facility);
  });

  // Bookings
  router.post("/bookings", async (req: Request, res: Response) => {
    const parsed = insertBookingSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ errors: parsed.error.format() });

    const storage = getStorage();
    if (!storage) return res.status(503).json({ message: "database not configured" });

    const booking = await storage.createBooking(parsed.data);
    res.status(201).json(booking);
  });

  router.get("/bookings", async (req: Request, res: Response) => {
    const storage = getStorage();
    if (!storage) return res.status(503).json({ message: "database not configured" });

    const { facilityId, date } = req.query as Record<string, string | undefined>;
    if (facilityId && date) {
      const rows = await storage.getBookingsByFacilityAndDate(facilityId, date);
      return res.json(rows);
    }

    if (facilityId) {
      const rows = await storage.getBookingsByFacility(facilityId);
      return res.json(rows);
    }

    if (date) {
      const rows = await storage.getBookingsByDate(date);
      return res.json(rows);
    }

    const rows = await storage.getAllBookings();
    res.json(rows);
  });

  // Contacts
  router.post("/contacts", async (req: Request, res: Response) => {
    const parsed = insertContactSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ errors: parsed.error.format() });

    const storage = getStorage();
    if (!storage) return res.status(503).json({ message: "database not configured" });

    const contact = await storage.createContact(parsed.data);
    res.status(201).json(contact);
  });

  // User registration (simple, hashes password)
  router.post("/users/register", async (req: Request, res: Response) => {
    const parsed = insertUserSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ errors: parsed.error.format() });

    const storage = getStorage();
    if (!storage) return res.status(503).json({ message: "database not configured" });

    const existing = await storage.getUserByUsername(parsed.data.username);
    if (existing) return res.status(409).json({ message: "username already exists" });

    const hashed = await bcrypt.hash(parsed.data.password, 10);
    const created = await storage.createUser({ username: parsed.data.username, password: hashed });

    // Do not return password field
    // @ts-ignore
    if (created.password) delete created.password;
    res.status(201).json(created);
  });

  // Mount router under /api
  app.use("/api", router);

  const httpServer = createServer(app);
  return httpServer;
}
