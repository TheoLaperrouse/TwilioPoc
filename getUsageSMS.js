import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const getSMSUsage = async () => {
  try {
    const usageRecords = await client.usage.records
      .list({ category: 'sms', startDate: '2024-01-01', endDate: '2024-12-31' });

    usageRecords.forEach(record => {
      console.log(`Date: ${record.startDate} - Nombre de SMS envoyés: ${record.count}`);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'usage :', error);
  }
};

getSMSUsage();