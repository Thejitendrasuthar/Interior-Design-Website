"use client";
import Script from "next/script";

export default function WhatsAppWidget() {
  return (
    <div className="whatsapp-safe-container relative overflow-hidden pointer-events-none">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div
        className="elfsight-app-02c8c599-0dfa-4814-872e-b36a83b73a1d pointer-events-auto"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
