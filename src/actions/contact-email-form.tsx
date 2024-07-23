import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  title: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  title,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-900 text-gray-100 font-sans">
          <Container className="max-w-3xl mx-auto">
            {/* Header Section with Logo */}
            <Section className="bg-gray-900 text-center py-6 border-b border-gray-700">
              <img
                src="https://protool.cloud/logosaas.png"
                alt="Protool Logo"
                className="max-w-xs mx-auto"
              />
            </Section>
            {/* Main Content Section */}
            <Section className="bg-gray-800 border border-gray-700 my-10 px-8 py-6 rounded-lg shadow-lg">
              <Heading className="text-2xl font-semibold text-white mb-4">{title}</Heading>
              <Text className="text-gray-300 mb-4">{message}</Text>
              <Hr className="border-gray-700 mb-4" />
              <Text className="text-gray-400">Sender Email: {senderEmail}</Text>
            </Section>
            {/* Footer Section */}
            <Section className="bg-gray-900 text-center py-4 border-t border-gray-700">
              <Text className="text-gray-500 text-sm">Powered by Suhaib King</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
