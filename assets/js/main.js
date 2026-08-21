// Put your WhatsApp number in international format (NO + sign)
const WHATSAPP_NUMBER = "2349135154419";

function waLink(message) {
  const text = encodeURIComponent(message || "Hi, I want a free business check.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function setWhatsAppButtons() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const msg = el.getAttribute("data-wa-message") || "Hi, I want a free business check.";
    el.setAttribute("href", waLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setWhatsAppButtons();
});
