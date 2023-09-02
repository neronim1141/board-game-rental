import { AuthProvider } from "@/lib/auth/auth.provider";
import { getUser } from "@/lib/auth/auth.utils";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider user={await getUser()}>{children}</AuthProvider>;
}
