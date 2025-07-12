"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const PrivacyPolicy = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[9999] p-6"
      onClick={handleClosePopup}
    >
      <div
        className="bg-white p-6 rounded-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-lg relative scrollbar-hide hover:scrollbar-default text-justify"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
       

        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>Last Updated:</strong> Jul 11, 2025
          </p>
          <p>
            Wise AI Inc., doing business as Valley AI ("Valley AI", "we", "our",
            or "us"), is committed to safeguarding your privacy and protecting
            personal information. This Privacy Policy explains how we collect,
            use, share, and secure information when you access or use our
            services, website, mobile applications, or participate in pilot
            programs—especially in senior care environments such as elder care
            facilities or private homes.
          </p>
          <p>
            By using our Services, you agree to the terms in this Privacy
            Policy. If you do not agree, please discontinue use.
          </p>

          <h2 className="text-lg font-semibold mt-6">1. Who We Are</h2>
          <p>
            Valley AI is a Harvard-MIT-incubated startup building privacy-first
            AI intelligence for senior care. We transform everyday off-the-shelf
            sensors—such as indoor cameras and microphones—into proactive
            caregiving tools designed to predict health risks (e.g., falls,
            UTIs, cognitive decline) without recording or storing sensitive
            content.
          </p>
          <p>
            <strong>Legal Name & Address:</strong>
            <br />
            Wise AI Inc. (dba Valley AI)
            <br />
            56 Broad St STE 14226, Boston, MA 02109
            <br />
            📧 <strong>support@valleyai.io</strong>
          </p>

          <h2 className="text-lg font-semibold mt-6">
            2. Applicability: Business & Individual Clients
          </h2>
          <p>This Privacy Policy applies to:</p>
          <ul className="list-disc pl-6">
            <li>
              Facility Clients & Staff (e.g., nursing homes, assisted living
              facilities)
            </li>
            <li>
              Legally Authorized Representatives (LARs) of individual seniors
            </li>
            <li>Individuals using Valley AI at home for aging-in-place care</li>
          </ul>
          <p>
            Regardless of context, use of our system is at the user’s sole
            discretion. Valley AI is not liable for any privacy violation
            arising from inappropriate setup, unauthorized recording, or misuse.
          </p>

          <h2 className="text-lg font-semibold mt-6">
            3. LAR Consent & Responsibilities
          </h2>
          <p>
            If a resident lacks capacity to consent (e.g., dementia), a Legally
            Authorized Representative (LAR) must provide consent on their
            behalf. The LAR is solely responsible for:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Ensuring the senior is aware (to the extent possible) of the
              monitoring
            </li>
            <li>Complying with any applicable ethical or legal frameworks</li>
            <li>
              Withdrawing consent if the resident becomes uncomfortable or
              declines
            </li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">
            4. What Information We Collect
          </h2>
          <p>
            <strong>a. Information Provided:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Contact details (e.g., name, email, phone)</li>
            <li>Feedback voluntarily shared by facility staff or LARs</li>
            <li>Demo bookings or support inquiries</li>
            <li>Job applications (e.g., CV, LinkedIn profile)</li>
          </ul>
          <p>
            <strong>b. Automatically Collected:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Sensor metadata (e.g., motion, timestamps, room ID)</li>
            <li>Environmental triggers (e.g., pressure pads)</li>
            <li>Device usage patterns</li>
            <li>
              Anonymized analytics data (IP, session, browser/device info)
            </li>
          </ul>
          <p>
            📌 We do not collect or store raw video, audio, biometric data, or
            directly identifiable health records unless required via Business
            Associate Agreement (BAA).
          </p>

          <h2 className="text-lg font-semibold mt-6">
            5. How We Use the Information
          </h2>
          <ul className="list-disc pl-6">
            <li>Operate and improve services</li>
            <li>Enhance AI with non-identifiable insights</li>
            <li>Support authorized users</li>
            <li>Comply with regulations (HIPAA, CCPA, GDPR, DPDPA)</li>
          </ul>
          <p>
            We do not sell personal data or use it for marketing without
            consent.
          </p>

          <h2 className="text-lg font-semibold mt-6">
            6. Legal Basis for Processing
          </h2>
          <ul className="list-disc pl-6">
            <li>Consent from LAR</li>
            <li>Legitimate interest (non-identifiable analytics)</li>
          </ul>
          <p>You may withdraw consent at any time via support@valleyai.io</p>

          <h2 className="text-lg font-semibold mt-6">
            7. Cross-Border Data Transfers
          </h2>
          <p>
            Data may be securely transferred to the U.S. We follow laws like
            India’s DPDPA (2023) and use encryption & access controls.
          </p>

          <h2 className="text-lg font-semibold mt-6">8. Data Retention</h2>
          <p>
            We store only the minimum data required for operations and legal
            obligations. Health insights are stored in a non-identifiable form.
          </p>

          <h2 className="text-lg font-semibold mt-6">9. Data Security</h2>
          <ul className="list-disc pl-6">
            <li>HTTPS & encrypted transmission</li>
            <li>Role-based access</li>
            <li>Audit logging</li>
            <li>Internal security reviews</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">
            10. Your Privacy Rights
          </h2>
          <p>
            Depending on your location (US, EU, India), you may request access,
            correction, deletion, or restriction of your data.
          </p>

          <h2 className="text-lg font-semibold mt-6">
            11. Mobile Communication & Consent
          </h2>
          <p>
            By providing your phone number, you consent to receive messages. You
            may opt out by replying “STOP.” We never share mobile opt-in data
            for marketing.
          </p>

          <h2 className="text-lg font-semibold mt-6">
            12. HIPAA, CCPA, and GDPR Compliance
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>HIPAA:</strong> We only handle PHI under a BAA. Health
              insights are non-identifiable.
            </li>
            <li>
              <strong>CCPA:</strong> You may request access, deletion, or data
              disclosures without facing discrimination.
            </li>
            <li>
              <strong>GDPR:</strong> We rely on consent or legitimate interest.
              Cross-border transfers follow SCCs.
            </li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">13. Children’s Privacy</h2>
          <p>
            Our services are not for children under 13. We do not knowingly
            collect data from them. If discovered, it will be deleted.
          </p>

          <h2 className="text-lg font-semibold mt-6">
            14. Changes to This Policy
          </h2>
          <p>
            This policy may be updated with a new “Last Updated” date. Continued
            use indicates acceptance.
          </p>

          <h2 className="text-lg font-semibold mt-6">15. Contact Us</h2>
          <p>
            Wise AI Inc. (dba Valley AI)
            <br />
            📍 56 Broad St STE 14226, Boston, MA 02109
            <br />
            📧 <strong>support@valleyai.io</strong>
          </p>
        </div>

        
        <Button
         type="button"
          onClick={() => setIsOpen(false)}
          className="block mt-6 mx-auto  px-6 py-2 rounded-md bg-[#1F09FF]  hover:bg-[#9e67fd] hover:text-[#1F09FF] text-white transition hover:shadow-2xl"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
