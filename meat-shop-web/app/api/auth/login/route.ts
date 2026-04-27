import { NextResponse } from "next/server";
import { mockUsers } from "../../../../lib/auth-users";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "E-Mail und Passwort erforderlich" }, { status: 400 });
    }

    const user = mockUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      return NextResponse.json({ error: "Ungültige Anmeldedaten" }, { status: 401 });
    }

    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword });
  } catch {
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}