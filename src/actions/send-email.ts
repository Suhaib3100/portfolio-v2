// src/actions/send-email.ts
"use server";

import { sendEmailNodemailer } from './send-email-nodemailer';

interface FormData {
  email: string;
  title: string;
  message: string;
}

export const sendEmail = async (formData: FormData) => {
  return await sendEmailNodemailer(formData);
};
