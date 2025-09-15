// Using SendGrid integration for email functionality
import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email functionality will be disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  // If no API key is set, return false but don't throw
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email not sent - SENDGRID_API_KEY not configured');
    return false;
  }

  try {
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(formData.message).replace(/\n/g, '<br>')}</p>
    `;

    const emailText = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `;

    await mailService.send({
      to: 'tpiyush300@gmail.com',
      from: 'tpiyush300@gmail.com', // Using your verified email as sender
      subject: `Portfolio Contact: ${formData.name}`,
      text: emailText,
      html: emailHtml,
      replyTo: formData.email, // Allow replying directly to the sender
    });

    console.log('Contact email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}