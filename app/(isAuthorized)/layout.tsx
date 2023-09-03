import { authorizedGuard } from "@/lib/auth/auth.utils";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await authorizedGuard();
  return <>{children}</>;
}
