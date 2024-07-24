// src/components/CalEmbed.tsx
"use client"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", { calLink: "protool/30min", buttonText: "Schedule a Meeting" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return null;
}
