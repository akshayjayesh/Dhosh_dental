import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, phone, service, date, time } = await request.json()

    // Validate required fields
    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Format the message
    const message = `
🎯 New Appointment Booking Request

👤 Name: ${name}
📱 Phone: ${phone}
🦷 Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}

Please confirm this appointment.
    `.trim()

    // Get Twilio credentials from environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER || "whatsapp:+14155238886" // Default Twilio sandbox
    const recipientNumber = `whatsapp:+91${phone.replace(/\D/g, "").slice(-10)}` // Ensure +91 country code

    if (!accountSid || !authToken) {
      console.error("Missing Twilio credentials")
      return NextResponse.json(
        { error: "WhatsApp service not configured" },
        { status: 500 }
      )
    }

    // Send via Twilio WhatsApp API
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString("base64")
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          From: twilioWhatsAppNumber,
          To: recipientNumber,
          Body: message,
        }).toString(),
      }
    )

    if (!response.ok) {
      const error = await response.json()
      console.error("Twilio error:", error)
      throw new Error("Failed to send WhatsApp message")
    }

    const result = await response.json()

    return NextResponse.json(
      {
        success: true,
        message: "Appointment request sent successfully!",
        messageSid: result.sid,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending WhatsApp message:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send message",
      },
      { status: 500 }
    )
  }
}
