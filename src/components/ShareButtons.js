import React from "react";

const ShareButtons = ({ blogTitle, blogUrl }) => {
  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${blogTitle} - ${blogUrl}`
    )}`;
    window.open(url, "_blank");
  };

  const handleInstagramShare = () => {
    // Assuming you have an Instagram API integration or share URL
    // Replace <INSTAGRAM_SHARE_URL> with the actual Instagram share URL
    const url = "<INSTAGRAM_SHARE_URL>";
    window.open(url, "_blank");
  };

  const handleFacebookShare = () => {
    // Assuming you have an Facebook API integration or share URL
    // Replace <FACEBOOK_SHARE_URL> with the actual Facebook share URL
    const url = "<FACEBOOK_SHARE_URL>";
    window.open(url, "_blank");
  };

  return (
    <div>
      <button onClick={handleWhatsAppShare}>Share on WhatsApp</button>
      <button onClick={handleInstagramShare}>Share on Instagram</button>
      <button onClick={handleFacebookShare}>Share on Facebook</button>
    </div>
  );
};

export default ShareButtons;