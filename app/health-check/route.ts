import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const response = {
		ok: true,
		url: request.url,
		method: request.method,
	}
	return NextResponse.json(response)
}
