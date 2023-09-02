import { AuthProvider } from "@/components/auth/AuthProvider";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return redirect("/unauthorized");
  }
  return <AuthProvider user={session.user}>{children}</AuthProvider>;
}
