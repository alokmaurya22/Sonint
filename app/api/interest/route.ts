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
    if (!name || !phone || !productName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send data to Formspree
    const response = await fetch('https://formspree.io/f/xanpzpwj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formType: 'Product Interest',
        productName: productName,
        name: name,
        phone: phone,
        email: email || '',
        company: company || '',
        description: description || '',
        timestamp: timestamp
      }),
    });

    //console.log("body",body);
    //console.log("responce",response);

    if (response.ok) {
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
    } else {
      console.error('Formspree error:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to submit form to Formspree' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing interest request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}