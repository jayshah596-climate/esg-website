/**
 * BTW AI — Google Apps Script for Contact Form
 * ─────────────────────────────────────────────
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1mhxZQHed0xQihSweHxqWqzJC66PBPUV3I94EfDlx5Ww
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Save (Ctrl+S)
 * 5. Click Deploy > New Deployment
 * 6. Type: Web app | Execute as: Me | Who has access: Anyone
 * 7. Click Deploy and copy the Web App URL
 * 8. Replace REPLACE_WITH_YOUR_CONTACT_SCRIPT_URL in /src/app/contact/page.tsx
 *    with the Web App URL you copied
 */

function doPost(e) {
  try {
    const raw = e.postData ? e.postData.contents : ''
    const data = JSON.parse(raw)

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

    // Set headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Name', 'Company', 'Email', 'Service', 'Message', 'Date'])
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold')
    }

    sheet.appendRow([
      data.name || '',
      data.company || '',
      data.email || '',
      data.service || '',
      data.message || '',
      data.date || new Date().toISOString(),
    ])

    // Optional: send email notification
    MailApp.sendEmail({
      to: 'jayshah596@gmail.com',
      subject: 'New Contact Form Submission — BTW AI',
      body: [
        'New enquiry received via the BTW AI website contact form.',
        '',
        'Name: ' + (data.name || ''),
        'Company: ' + (data.company || ''),
        'Email: ' + (data.email || ''),
        'Service: ' + (data.service || ''),
        'Message: ' + (data.message || ''),
        '',
        'Date: ' + (data.date || new Date().toISOString()),
      ].join('\n'),
    })

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet() {
  return ContentService
    .createTextOutput('BTW AI Contact Webhook is running.')
    .setMimeType(ContentService.MimeType.TEXT)
}
