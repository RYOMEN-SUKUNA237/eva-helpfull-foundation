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
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const phone = String(formData.get("phone") || "");
  const interest = String(formData.get("interest") || "");

  if (!name || !email || !phone || !interest) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("volunteers").insert({
    name,
    email,
    phone,
    interest,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const html = `<!DOCTYPE html><html><head><meta charSet="utf-8" /><title>Thank you for volunteering</title></head><body style="margin:0;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;background:#020617;color:#e5e7eb;display:flex;align-items:center;justify-content:center;min-height:100vh;"><div style="max-width:480px;padding:24px;border-radius:24px;background:rgba(15,23,42,0.9);box-shadow:0 18px 45px rgba(15,23,42,0.9);border:1px solid rgba(248,250,252,0.1);text-align:center;"><h1 style="font-size:20px;margin-bottom:8px;color:#f97316;">Thank you for offering to volunteer</h1><p style="font-size:14px;line-height:1.6;margin-bottom:16px;">Your details have been received. Our team will review your interest and reach out with next steps.</p><a href="/" style="display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;border-radius:9999px;background:#f97316;color:#0b1120;font-weight:600;font-size:14px;text-decoration:none;">Go back to main site</a></div></body></html>`;
  return new NextResponse(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
