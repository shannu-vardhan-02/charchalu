// this file contains the email template for the welcome email sent to new users when they sign up for the messaging platform. The template is designed to be visually appealing and informative, providing users with a warm welcome and guidance on how to get started with the platform.
export function createWelcomeEmailTemplate(name, clientURL) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to Messenger</title>
</head>

<body style="margin:0; padding:0; background-color:#0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0; background:linear-gradient(135deg, #0f172a, #1e293b);">
    <tr>
      <td align="center">

        <!-- Main Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1e293b; border-radius:18px; overflow:hidden; border:1px solid #334155;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding:40px 20px 20px 20px;">
              <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480"
                width="80" height="80"
                style="border-radius:50%; background-color:#ffffff; padding:10px; margin-bottom:15px;">
              
              <h1 style="color:#ffffff; font-size:26px; font-weight:500; margin:0;">
                Welcome to Messenger!
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px 35px; color:#d1d5db;">

              <p style="font-size:17px; color:#93c5fd; margin-top:0;">
                <strong>Hello ${name},</strong>
              </p>

              <p style="font-size:14px; line-height:1.7;">
                We're excited to have you join our messaging platform! Messenger connects you with friends, family, and colleagues in real-time, no matter where they are.
              </p>

              <!-- Glass Effect Box (Fake) -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:25px 0; background-color:#0f172a; border-radius:12px; border:1px solid #334155;">
                <tr>
                  <td style="padding:20px;">
                    
                    <p style="font-size:15px; font-weight:500; margin:0 0 12px 0; color:#e5e7eb;">
                      Get started in just a few steps:
                    </p>

                    <ul style="padding-left:18px; margin:0; font-size:14px; line-height:1.8;">
                      <li style="margin-bottom:8px;">Set up your profile picture</li>
                      <li style="margin-bottom:8px;">Find and add your contacts</li>
                      <li style="margin-bottom:8px;">Start a conversation</li>
                      <li>Share photos, videos, and more</li>
                    </ul>

                  </td>
                </tr>
              </table>

              <!-- Button -->
              <table align="center" cellpadding="0" cellspacing="0" style="margin:30px auto;">
                <tr>
                  <td align="center" style="border-radius:999px;" bgcolor="#6366f1">
                    <a href=${clientURL}
                      style="display:inline-block; padding:13px 34px; font-size:14px; font-weight:500; color:#ffffff; text-decoration:none; border-radius:999px;">
                      Open Messenger
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size:13px; margin-bottom:5px;">
                If you need any help or have questions, we're always here to assist you.
              </p>

              <p style="font-size:13px; margin-top:0;">
                Happy messaging!
              </p>

              <p style="margin-top:25px; font-size:13px;">
                Best regards,<br>
                <span style="color:#ffffff;">The Messenger Team</span>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:20px; font-size:11px; color:#9ca3af; border-top:1px solid #334155;">
              <p style="margin:0 0 8px 0;">© 2025 Messenger. All rights reserved.</p>
              
              <p style="margin:0;">
                <a href="#" style="color:#60a5fa; text-decoration:none; margin:0 8px;">Privacy Policy</a>
                <a href="#" style="color:#60a5fa; text-decoration:none; margin:0 8px;">Terms of Service</a>
                <a href="#" style="color:#60a5fa; text-decoration:none; margin:0 8px;">Contact Us</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
}
