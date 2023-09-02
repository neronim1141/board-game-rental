import { GoBackButton } from "@/components/GoBackButton";
import { LogoutButton } from "@/components/auth/authButtons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    <h1>
      You need to log In first to acces this site
      <LogoutButton />
    </h1>;
  }
  return (
    <h1>
      Hi {session?.user?.name}
      <GoBackButton />
    </h1>
  );
}
