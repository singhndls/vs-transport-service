
import React from "react";

export default function TaxiService() {
  const phone = "9891188858";
  const email = "info@vstransport.in";
  const message =
    "Hello, I am interested in a monthly fixed-contract corporate taxi service. Please share the details.";

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-2xl bg-slate-900 px-6 py-12 text-white md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
          Corporate Transport Solutions
        </p>

        <h1 className="mb-5 text-3xl font-bold md:text-5xl">
          Corporate Monthly Taxi Service in Delhi NCR
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-200">
          Reliable monthly fixed-contract taxi services for companies,
          offices and business establishments. Routes, duty hours and
          contract terms are agreed in advance.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${phone}`}
            className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-900"
          >
            Call Now: {phone}
          </a>

          <a
            href={`https://wa.me/91${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white"
          >
            WhatsApp Enquiry
          </a>

          <a
            href={`mailto:${email}?subject=${encodeURIComponent("Corporate Monthly Taxi Service Enquiry")}`}
            className="rounded-lg border border-white px-6 py-3 font-semibold text-white"
          >
            Email Us
          </a>
        </div>
      </section>

      <section className="py-10">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Monthly Fixed Taxi Contracts for Companies Only
        </h2>

        <p className="mb-6 leading-7 text-slate-600">
          VS Transport Service provides planned monthly taxi arrangements
          for companies seeking dependable office and corporate staff
          transportation. Service plans can be discussed according to
          routes, vehicle requirements, duty hours and monthly schedules.
        </p>

        <ul className="list-disc space-y-3 pl-6 leading-7 text-slate-700">
          <li>Monthly fixed-contract arrangements for companies</li>
          <li>Office and corporate staff transportation</li>
          <li>Fixed routes and duty hours agreed in advance</li>
          <li>Pricing based on vehicle, route and contract requirements</li>
          <li>Service subject to vehicle availability and agreed terms</li>
        </ul>

        <div className="mt-8 rounded-xl bg-slate-100 p-6">
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            Corporate Taxi Enquiries
          </h3>
          <p className="text-slate-700">
            Phone: {phone}
          </p>
          <p className="text-slate-700">
            Email: {email}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Available for corporate clients on monthly fixed contracts only.
            Individual on-demand taxi bookings are not offered.
          </p>
        </div>
      </section>
    </main>
  );
}
