import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/page-banner";
import { ContactForm } from "@/components/ui/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Mitralearn about Cisco, Cloud, Cybersecurity, DevOps, or corporate technology training programs.",
};

type ContactPageProps = {
  searchParams?: { course?: string };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const selectedCourse = searchParams?.course;
  return (
    <div className="space-y-12">
      <PageBanner
        title="Let’s Design Your Academy"
        description="Share your objectives and we’ll respond with an enablement plan tailored to your teams."
      />

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-[32px] border border-white/30 bg-white/80 p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-slate-900">Send a Note</h2>
          <p className="mt-2 text-sm text-slate-600">
            Our concierge responds in under 24 hours on business days.
          </p>
          <div className="mt-6">
            <ContactForm initialCourse={selectedCourse} />
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[32px] border border-white/30 bg-white/80 p-8 shadow-card">
            <h3 className="text-lg font-semibold text-slate-900">Visit Us</h3>
            {siteConfig.contact.address ? (
              <p className="mt-3 text-sm text-slate-600">
                {siteConfig.contact.address}
              </p>
            ) : null}
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Phone:</span>{" "}
              {siteConfig.contact.phone}
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              {siteConfig.contact.email}
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Hours:</span>{" "}
              {siteConfig.contact.hours}
            </p>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/30 shadow-card">
            <iframe
              title="Mitralearn Pune"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2649830501715!2d73.85674397518341!3d18.46931738262702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06203dd4611%3A0x4b4af149048393ca!2sPune%20International%20Exhibition%20%26%20Convention%20Center!5e0!3m2!1sen!2sin!4v1732034580000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

