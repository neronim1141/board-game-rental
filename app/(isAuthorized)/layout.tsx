import { checkAuth } from "@/lib/auth/auth.utils";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return <>{children}</>;
}
