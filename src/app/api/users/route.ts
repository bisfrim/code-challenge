import { NextRequest, NextResponse } from "next/server";
import client from "@/app/utils";

export async function GET() {
    return NextResponse.json({ message: "Bismark" });
}

/**
 * Handles the POST request to create a new user.
 */

export async function POST(req: NextRequest) {
    const body = await req.json();
    // name field is invalid or empty
    if (!body.name) {
        return NextResponse.json({ error: "Name is required!" }, { status: 400 });
    }
    try {
        // insert the name into the "users" collection in the "challenge" database
        await client.db("challenge").collection("users").insertOne({ name: body.name });
        return NextResponse.json({ message: body.name }, { status: 201 });
    } catch (error) {
        console.log('error::', error)
        throw error
        
    }
}