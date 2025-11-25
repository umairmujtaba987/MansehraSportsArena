import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 md:pt-24">
        <section className="bg-card py-12 md:py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              CONTACT <span className="text-primary">US</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for bookings, inquiries, or feedback
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <ContactForm />
        </section>

        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              VISIT US TODAY
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We're always open and ready to welcome you!
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Always Open</div>
              </div>
              <div>
                <a href="tel:+923409188204" className="text-3xl font-bold mb-2 hover:underline">
                  +92 340 9188204
                </a>
                <div className="text-sm opacity-80">Call Anytime</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.5★</div>
                <div className="text-sm opacity-80">Google Rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
