import { NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabase/server";

// Webhook endpoint to receive payment status updates from the gateway
// You will later verify signatures here and update the matching donation record.
export async function POST(request: Request) {
  const supabase = getServerSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY." },
      { status: 500 },
    );
  }

  const payloadText = await request.text();

  // TODO: Verify the gateway's signature using your secret key.
  // For now we just parse the JSON body.
  let event: any;
  try {
    event = JSON.parse(payloadText);
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  // Example shape you might expect from a gateway like Flutterwave:
  // {
  //   event: "charge.completed",
  //   data: {
  //     status: "successful",
  //     tx_ref: "donation_...",
  //     amount: 50,
  //     currency: "USD"
  //   }
  // }

  // Here you would match event.data.tx_ref or a stored donationId
  // and update the donations table accordingly, e.g.:
  // await supabase
  //   .from("donations")
  //   .update({ payment_status: event.data.status })
  //   .eq("id", donationId);

  return NextResponse.json({ ok: true });
}
