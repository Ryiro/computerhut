import React from "react";

const WhatsAppButton: React.FC = () => {
  const message = "Hello, we are from computerhut!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "9850847346"; // Your business phone number in international format

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      Contact us on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
