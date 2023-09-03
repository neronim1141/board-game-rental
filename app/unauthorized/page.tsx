import { buttonVariants } from "@/components/ui/button";
import { getUserAuth } from "@/lib/auth/auth.utils";
import Link from "next/link";

export default async function Profile() {
  const { session } = await getUserAuth();

  if (!session?.user) {
    <h1>
      You need to log In first to access this site
      <Link className={buttonVariants()} href="\">
        Home
      </Link>
    </h1>;
  }
}
