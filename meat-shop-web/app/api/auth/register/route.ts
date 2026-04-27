import { NextResponse } from "next/server";
import { mockUsers } from "../../../../lib/auth-users";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "E-Mail und Passwort erforderlich" }, { status: 400 });
    }

    if (mockUsers.find(u => u.email === email)) {
      return NextResponse.json({ error: "Benutzer existiert bereits" }, { status: 400 });
    }

    const newUser = {
      id: Date.now().toString(),
      name: name || email.split("@")[0],
      email,
      password,
    };

    mockUsers.push(newUser);

    return NextResponse.json({ success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
  } catch {
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}