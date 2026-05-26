export const SELLER_CONFIG = {
    email: process.env.SELLER_EMAIL || "blactifyofficial@gmail.com",
    supportEmail: "blactifyofficial@gmail.com",
    fromEmail: (process.env.RESEND_FROM_EMAIL || "Blactify <blactifyofficial@gmail.com>").trim().replace(/^["']|["']$/g, ""),
    telegramToken: process.env.TELEGRAM_BOT_TOKEN || "",
    telegramChatId: process.env.TELEGRAM_CHAT_ID || "",
};
