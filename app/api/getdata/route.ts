import {NextResponse}  from 'next/server';
import OpenAI from "openai";

let answer: string = '';

export async function POST(req: Request) {
    const openai = new OpenAI();
    let counter = 0;

    const body = await req.json()
    console.log('body: ', body)

    console.log(body.query)
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": body.query}],
      });
    
    const json = response.choices[0];
    console.log("return successful")

    return NextResponse.json({ data: `${answer}` })
}