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

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const {
    amount,
    currency = "USD",
    donor_name,
    email,
    mode = "anonymous",
  }: {
    amount: number;
    currency?: string;
    donor_name?: string;
    email?: string;
    mode?: "anonymous" | "public";
  } = body;

  if (!amount || amount <= 0) {
    return NextResponse.json({ error: "Amount is required" }, { status: 400 });
  }

  // Store an initial payment intent record so we can track status later if needed
  const { data, error } = await supabase
    .from("donations")
    .insert({
      donor_name: donor_name || "Anonymous",
      email: email || null,
      amount,
      frequency: "one-time",
    })
    .select("id")
    .single();

  if (error || !data) {
    return NextResponse.json({ error: error?.message || "Failed to create donation record" }, { status: 500 });
  }

  // Placeholder response: in a real integration, call the payment gateway API here
  // and return its payment URL or client token to the frontend.
  return NextResponse.json({
    ok: true,
    donationId: data.id,
    payment_url: null,
    mode,
    currency,
  });
}
