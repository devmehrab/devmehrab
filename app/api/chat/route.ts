import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "" });

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    // 1. Safety check for the key
    if (!process.env.GROQ_API_KEY) {
      return Response.json(
        { text: "API Key missing in .env" },
        { status: 500 },
      );
    }

    // 2. Format history for Groq (OpenAI-style: {role, content})
    const formattedHistory = (history || []).map((msg: any) => ({
      role: msg.role === "model" ? "assistant" : "user",
      content: typeof msg.parts === "object" ? msg.parts[0].text : msg.content,
    }));

    // 3. The Call
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are the AI version of Mehrab Hossain. Keep answers casual, short (1-3 sentences), and friendly. You are a developer at iMS Technologies and a CSE student at BUP. Your main stack is React, Next.js, MongoDB, Tailwind CSS, Node.js and TypeScript.",
        },
        ...formattedHistory,
        { role: "user", content: message },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseText =
      completion.choices[0]?.message?.content ||
      "I'm thinking... but I've got nothing!";
    return Response.json({ text: responseText });
  } catch (error: any) {
    console.error("GROQ ERROR:", error);
    // If you hit a quota, this will let you know
    const errorMsg =
      error.status === 429
        ? "I'm overwhelmed! Try again in a minute."
        : "Something went wrong.";
    return Response.json({ text: errorMsg }, { status: 500 });
  }
}
