import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      company,
      description,
      productName,
      timestamp
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !productName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you can add your logic to save the data
    // For now, we'll just log it to console
    console.log('Product Interest Request:', {
      productName,
      userDetails: {
        name,
        email,
        phone,
        company: company || 'Not provided',
      },
      description: description || 'No additional details provided',
      timestamp,
    });

    // You can integrate with:
    // - Database (MongoDB, PostgreSQL, etc.)
    // - Email service (SendGrid, Nodemailer, etc.)
    // - CRM (HubSpot, Salesforce, etc.)
    // - Slack/Discord notifications
    
    // Example: Send email notification (uncomment when you have email service)
    /*
    await sendEmailNotification({
      to: 'your-email@company.com',
      subject: `New Product Interest: ${productName}`,
      html: `
        <h2>New Product Interest Request</h2>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Description:</strong> ${description || 'No additional details'}</p>
        <p><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
      `
    });
    */

    return NextResponse.json(
      { 
        message: 'Interest request submitted successfully',
        data: {
          productName,
          name,
          email,
          timestamp
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing interest request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}