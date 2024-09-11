import { NextResponse } from "next/server";
import fs from "node:fs/promises";

/**
 * Handles the POST request to upload an image file.
 */

export async function POST(req: Request) {
    try {

        const data: FormData = await req.formData();

        const file  = data.get('file') as File;
        const buffer = Buffer.from(await file.arrayBuffer())
        await fs.writeFile(`./public/assets/${file.name}`, buffer)
    
        return NextResponse.json({ message: "success" });
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: "failed to upload", error: error });
        
    }
   
}