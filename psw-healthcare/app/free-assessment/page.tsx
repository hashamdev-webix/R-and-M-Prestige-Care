"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function FreeAssessmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    whoNeedsCare: "",
    careType: "",
    preferredTime: "",
    city: "",
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

    if (!formData.whoNeedsCare) {
      newErrors.whoNeedsCare = "Please select who needs care";
    }

    if (!formData.careType) {
      newErrors.careType = "Please select the type of care needed";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a preferred contact time";
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
      <div className="min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green/10 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-heading">
            Thank You for Your Request!
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Our team will contact you shortly to schedule your free in-home care
            assessment. We look forward to helping you find the right care
            solution.
          </p>
          <Link
            href="/"
            className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-20 bg-gradient-to-br from-navy-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-heading">
              Book Your Free In-Home Care Assessment
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              R&M Prestige Care will review your care needs and recommend the
              right care option at no cost. Our team will work with you to
              understand your situation and create a personalized care plan that
              fits your schedule, budget, and preferences.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
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

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Email <span className="text-red-500">*</span>
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

                {/* Who Needs Care */}
                <div>
                  <label
                    htmlFor="whoNeedsCare"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Who needs care? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="whoNeedsCare"
                    name="whoNeedsCare"
                    value={formData.whoNeedsCare}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green transition-colors ${
                      errors.whoNeedsCare
                        ? "border-red-500"
                        : "border-gray-300 focus:border-green"
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.whoNeedsCare}
                    aria-describedby={
                      errors.whoNeedsCare ? "whoNeedsCare-error" : undefined
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="myself">Myself</option>
                    <option value="parent">A parent</option>
                    <option value="spouse">A spouse</option>
                    <option value="family">Another family member</option>
                    <option value="facility">A facility/organization</option>
                  </select>
                  {errors.whoNeedsCare && (
                    <p
                      id="whoNeedsCare-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.whoNeedsCare}
                    </p>
                  )}
                </div>

                {/* Type of Care Needed */}
                <div>
                  <label
                    htmlFor="careType"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Type of care needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="careType"
                    name="careType"
                    value={formData.careType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green transition-colors ${
                      errors.careType
                        ? "border-red-500"
                        : "border-gray-300 focus:border-green"
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.careType}
                    aria-describedby={
                      errors.careType ? "careType-error" : undefined
                    }
                  >
                    <option value="">Select a care type</option>
                    <option value="home-care">Home Care</option>
                    <option value="senior-care">Senior Care</option>
                    <option value="personal-care">Personal Care</option>
                    <option value="dementia-care">
                      Dementia & Alzheimer&apos;s Care
                    </option>
                    <option value="24-hour-care">
                      24-Hour or Overnight Care
                    </option>
                    <option value="companionship">Companionship</option>
                    <option value="housekeeping">Housekeeping</option>
                    <option value="healthcare-staffing">
                      Healthcare Staffing
                    </option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                  {errors.careType && (
                    <p
                      id="careType-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.careType}
                    </p>
                  )}
                </div>

                {/* Preferred Contact Time */}
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Preferred contact time{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green transition-colors ${
                      errors.preferredTime
                        ? "border-red-500"
                        : "border-gray-300 focus:border-green"
                    }`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.preferredTime}
                    aria-describedby={
                      errors.preferredTime ? "preferredTime-error" : undefined
                    }
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="anytime">Anytime</option>
                  </select>
                  {errors.preferredTime && (
                    <p
                      id="preferredTime-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.preferredTime}
                    </p>
                  )}
                </div>

                {/* City / Area */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    City / Area in Calgary
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g., Downtown, Beltline, Airdrie"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors"
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Additional details or message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your care needs, schedule preferences, or any specific questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Request My Free Assessment
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to be contacted by R&M
                  Prestige Care regarding your care needs.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
