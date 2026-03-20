/**
 * BTW AI — Google Apps Script for Lead Magnet Email Capture
 * ──────────────────────────────────────────────────────────
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1HdfvG-8nW73nN1iGCSh1NTJ2RvPtcATQY8cMOz3iVn0
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Save (Ctrl+S)
 * 5. Click Deploy > New Deployment
 * 6. Type: Web app | Execute as: Me | Who has access: Anyone
 * 7. Click Deploy and copy the Web App URL
 * 8. Replace REPLACE_WITH_YOUR_LEADS_SCRIPT_URL in
 *    /src/components/widgets/LeadMagnetBanner.tsx with the Web App URL
 */

function doPost(e) {
  try {
    const raw = e.postData ? e.postData.contents : ''
    const data = JSON.parse(raw)

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

    // Set headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Email', 'Date'])
      sheet.getRange(1, 1, 1, 2).setFontWeight('bold')
    }

    sheet.appendRow([
      data.email || '',
      data.date || new Date().toISOString(),
    ])

    // Optional: send notification email
    MailApp.sendEmail({
      to: 'jayshah596@gmail.com',
      subject: 'New Lead Magnet Download — BTW AI',
      body: [
        'Someone downloaded the Free ESG Starter Toolkit.',
        '',
        'Email: ' + (data.email || ''),
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
    .createTextOutput('BTW AI Leads Webhook is running.')
    .setMimeType(ContentService.MimeType.TEXT)
}
