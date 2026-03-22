import { NextResponse } from "next/server";

type Item = { name?: string; quantity?: number; unit?: string };

/**
 * Optional backend hook for medicine availability requests.
 * Wire this to email, CRM, or internal tools; the main UI sends via WhatsApp.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { items?: Item[] };
    if (!Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json({ error: "items array required" }, { status: 400 });
    }
    const valid = body.items.every(
      (i) => typeof i.name === "string" && i.name.trim().length > 0 && typeof i.quantity === "number",
    );
    if (!valid) {
      return NextResponse.json({ error: "Invalid item shape" }, { status: 400 });
    }
    return NextResponse.json({ ok: true, received: body.items.length });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
