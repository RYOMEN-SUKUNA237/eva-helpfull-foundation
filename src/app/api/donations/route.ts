import { NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = getServerSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY." },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const donor_name = String(formData.get("donor_name") || "");
  const email = String(formData.get("email") || "");
  const phone = String(formData.get("phone") || "");
  const amount = Number(formData.get("amount") || 0);
  const frequency = String(formData.get("frequency") || "one-time");

  if (!donor_name || !email || !phone || !amount) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("donations").insert({
    donor_name,
    email,
    phone,
    amount,
    frequency,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const accept = request.headers.get("accept") || "";
  // If this was a regular browser form POST (e.g. from the home page),
  // send the user to the donate page with a success flag so the UI can
  // show a proper thank-you message instead of raw JSON.
  if (accept.includes("text/html")) {
    const url = new URL("/donate?status=success", request.url);
    const target = `${url.pathname}${url.search}`;
    const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=${target}" /></head><body></body></html>`;
    return new NextResponse(html, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return NextResponse.json({ ok: true });
}
