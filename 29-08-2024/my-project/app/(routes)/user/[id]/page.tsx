import { getUser } from "@/action/get-user";
import Link from "next/link";

interface UserProps {
  params: { id: string };
}

async function User({ params }: UserProps) {
  const { id } = params;

  const user = await getUser(id);

  //if (!user.name) return redirect("/");
  if (!user.name) return <Link href={"/"}>utente non trovato</Link>;

  return <div>user: {user.username}</div>;
}

export default User;