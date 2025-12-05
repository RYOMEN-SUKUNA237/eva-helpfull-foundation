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
  const amount = Number(formData.get("amount") || 0);
  const frequency = String(formData.get("frequency") || "one-time");

  if (!donor_name || !email || !amount) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("donations").insert({
    donor_name,
    email,
    amount,
    frequency,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
