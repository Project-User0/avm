"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function InquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "04b69fee-5aac-4677-ae57-81c7ec943b16");

    // Optional
    formData.append("subject", "New Admission Inquiry");
    formData.append("from_name", "Annapurna Vidhya Mandir");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection
          title="Admission Inquiry"
          subtitle="Get Started"
          description="Complete this form to express your interest in Annapurna Vidhya Mandir. Our admission team will contact you within 24 hours."
          image="/images/programs/primary.png"
        />

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              title="Admission Inquiry Form"
              subtitle="Application"
              description="Tell us about your child and let us know how we can help."
            />

            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your inquiry has been submitted successfully. Our
                      admission team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Parent Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="UserName"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="UserEmail"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="UserPhone"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Student Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="StudentName"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Student's name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          required
                          name="DateOfBirth"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Applying for Grade *
                        </label>
                        <select
                          required
                          name="ApplyForGrade"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select grade</option>
                          <option value="nursery">Nursery</option>
                          <option value="kg">KG</option>
                          <option value="1">Grade 1</option>
                          <option value="6">Grade 6</option>
                          <option value="9">Grade 9</option>
                          <option value="11">Grade 11</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Current School/Institution
                        </label>
                        <input
                          type="text"
                          name="CurrentSchool"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Current school name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Contact Method
                        </label>

                        <select
                          name="Preferred_Contact"
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select</option>
                          <option>Phone</option>
                          <option>Email</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        How did you hear about us?
                      </label>

                      <select
                        name="Referral_Source"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select</option>
                        <option>Facebook</option>
                        <option>Google Search</option>
                        <option>Friend / Family</option>
                        <option>Newspaper</option>
                        <option>Instagram</option>
                        <option>School Event</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="Description"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24"
                        placeholder="Any additional information you'd like to share..."
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-4 h-4 rounded border-border"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground"
                      >
                        I agree to receive updates from Horizon Academy
                      </label>
                    </div>

                    <Button type="submit" disabled={loading} className="w-full">
                      {loading ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
