import { AuthProvider } from "@/lib/auth/provider";
import { getUser } from "@/lib/auth/utils";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider user={await getUser()}>{children}</AuthProvider>;
}
