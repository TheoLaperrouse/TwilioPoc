import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendSMS = async (to) => {
  try {
    const message = await client.messages.create({
      body: 'Message depuis TWILIO',
      from: process.env.TWILIO_PHONE_NUMBER, 
      to
    });
    console.log(`Message envoyé avec succès. SID: ${message.sid}`);
  } catch (error) {
    console.error(`Erreur lors de l'envoi du message: ${error}`);
  }
};

if (process.argv.length < 3) {
  console.log("Usage: node sendSMS.mjs <phone_number>");
  process.exit(1);
}

const recipientNumber = process.argv[2];

sendSMS(recipientNumber);