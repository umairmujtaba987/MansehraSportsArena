import { 
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type Facility,
  type InsertFacility,
  type Booking,
  type InsertBooking,
} from "@shared/schema";
import { db } from "./db";
import { users, contacts, facilities, bookings } from "@shared/schema";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  createFacility(facility: InsertFacility): Promise<Facility>;
  getAllFacilities(): Promise<Facility[]>;
  getFacilityById(id: string): Promise<Facility | undefined>;
  
  createBooking(booking: InsertBooking): Promise<Booking>;
  getAllBookings(): Promise<Booking[]>;
  getBookingsByFacility(facilityId: string): Promise<Booking[]>;
  getBookingsByDate(date: string): Promise<Booking[]>;
  getBookingsByFacilityAndDate(facilityId: string, date: string): Promise<Booking[]>;
}

export class DBStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const result = await db.insert(contacts).values(insertContact).returning();
    return result[0];
  }

  async getAllContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async createFacility(insertFacility: InsertFacility): Promise<Facility> {
    const result = await db.insert(facilities).values(insertFacility).returning();
    return result[0];
  }

  async getAllFacilities(): Promise<Facility[]> {
    return await db.select().from(facilities);
  }

  async getFacilityById(id: string): Promise<Facility | undefined> {
    const result = await db.select().from(facilities).where(eq(facilities.id, id));
    return result[0];
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const result = await db.insert(bookings).values(insertBooking).returning();
    return result[0];
  }

  async getAllBookings(): Promise<Booking[]> {
    return await db.select().from(bookings);
  }

  async getBookingsByFacility(facilityId: string): Promise<Booking[]> {
    return await db.select().from(bookings).where(eq(bookings.facilityId, facilityId));
  }

  async getBookingsByDate(date: string): Promise<Booking[]> {
    return await db.select().from(bookings).where(eq(bookings.bookingDate, date));
  }

  async getBookingsByFacilityAndDate(facilityId: string, date: string): Promise<Booking[]> {
    return await db.select().from(bookings).where(
      and(
        eq(bookings.facilityId, facilityId),
        eq(bookings.bookingDate, date)
      )
    );
  }
}

export const storage = new DBStorage();
