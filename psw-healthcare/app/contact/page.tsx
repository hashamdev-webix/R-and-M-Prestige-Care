"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real implementation, this would send data to a backend
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <main>
        <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-gradient-to-br from-navy-50 to-white">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green/10 rounded-full mb-6">
              <Mail className="w-10 h-10 text-green" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">
              Thank You for Contacting Us!
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Your request has been received. Our team will contact you shortly
              to discuss your home care or healthcare staffing needs.
            </p>
            <Link
              href="/"
              className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* 1. HERO / INTRO */}
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-navy-50 to-white"
        aria-label="Contact hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-heading">
              Contact R&M Prestige Care
            </h1>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Need home care for a loved one or healthcare staffing support for
              your facility? R&M Prestige Care is here to help families,
              seniors, private clients, care homes, assisted living facilities,
              hospitals, and healthcare environments across Calgary.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fill out the form below and our team will contact you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT: Two-Column Layout */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Contact form and details"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* LEFT COLUMN - Contact Form */}
            <div className="order-1">
              <h2 className="text-3xl font-bold text-navy mb-6 font-heading">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green transition-colors ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-gray-300 focus:border-green"
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={
                      errors.fullName ? "fullName-error" : undefined
                    }
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green transition-colors ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 focus:border-green"
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green transition-colors ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-green"
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green transition-colors ${
                      errors.inquiryType
                        ? "border-red-500"
                        : "border-gray-300 focus:border-green"
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.inquiryType}
                    aria-describedby={
                      errors.inquiryType ? "inquiryType-error" : undefined
                    }
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="home-care">Home Care</option>
                    <option value="healthcare-staffing">
                      Healthcare Staffing
                    </option>
                    <option value="general">General Question</option>
                  </select>
                  {errors.inquiryType && (
                    <p
                      id="inquiryType-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.inquiryType}
                    </p>
                  )}
                </div>

                {/* Message / Care Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Message / Care Details{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your care needs, staffing requirements, or any questions you have..."
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green transition-colors resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 focus:border-green"
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by R&M
                  Prestige Care regarding your inquiry.
                </p>
              </form>
            </div>

            {/* RIGHT COLUMN - Contact Details */}
            <div className="order-2">
              <h2 className="text-3xl font-bold text-navy mb-6 font-heading">
                Contact Details
              </h2>

              <p className="text-slate-600 mb-8 leading-relaxed">
                For home care inquiries, staffing requests, or general
                questions, contact R&M Prestige Care using the details below.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1 font-heading">
                      Phone
                    </h3>
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="text-slate-600 hover:text-green transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      24/7 Support Available
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1 font-heading">
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-slate-600 hover:text-green transition-colors break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1 font-heading">
                      Location
                    </h3>
                    <p className="text-slate-600">Calgary, Alberta</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Proudly serving the Calgary community
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4 p-4 bg-navy-50 rounded-xl">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1 font-heading">
                      Service Area
                    </h3>
                    <p className="text-slate-600">Calgary and nearby areas</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Serving families and facilities across the region
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
