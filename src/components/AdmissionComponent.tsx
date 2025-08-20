"use client";
import { useState } from "react";

export default function AdmissionComponent() {
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    phone: "",
    childName: "",
    childAge: "",
    previousSchool: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const res = await fetch("/api/admission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Application submitted successfully!");
      setFormData({
        parentName: "",
        parentEmail: "",
        phone: "",
        childName: "",
        childAge: "",
        previousSchool: "",
        message: "",
      });
    } else {
      setStatus("❌ Failed to submit. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Open 2025/2026</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Give your child the best start in life. Enroll today at <span className="font-semibold">MySchool</span> and secure a brighter future.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#apply"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Apply Now
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book a Visit
          </a>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Admission Process</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">1. Application</h3>
            <p>Fill out the online application form or pick up a physical copy at the school office.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">2. Assessment</h3>
            <p>Students may take a short placement test to determine readiness for the class level.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">3. Enrollment</h3>
            <p>Once accepted, parents complete the enrollment by submitting documents and paying fees.</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Admission Requirements</h2>
          <ul className="space-y-4 text-lg">
            <li>📌 Completed Application Form</li>
            <li>📌 Copy of Birth Certificate / Age Declaration</li>
            <li>📌 Recent Passport Photographs</li>
            <li>📌 Previous School Report (if applicable)</li>
            <li>📌 Medical Record / Immunization Card</li>
          </ul>
        </div>
      </section>

      {/* Application Form CTA */}
      <section id="apply" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Begin the journey to excellence for your child. Applications are now open for the 2025/2026 academic session.
        </p>
        <a
          href="/apply"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Start Application
        </a>
      </section>




      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Admission Application Form</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="parentName"
            placeholder="Parent's Full Name"
            value={formData.parentName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />
          <input
            type="email"
            name="parentEmail"
            placeholder="Parent's Email"
            value={formData.parentEmail}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="childName"
            placeholder="Child's Full Name"
            value={formData.childName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />
          <input
            type="number"
            name="childAge"
            placeholder="Child's Age"
            value={formData.childAge}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />
          <input
            type="text"
            name="previousSchool"
            placeholder="Previous School (optional)"
            value={formData.previousSchool}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Additional Information (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>

        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </div>
    </main>
  );
}
