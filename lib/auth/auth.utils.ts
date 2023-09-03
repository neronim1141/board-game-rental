import { redirect } from "next/navigation";
import { authOptions } from ".";
import { getServerSession } from "next-auth/next";

export const getUser = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};

export const authorizedGuard = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/unauthorized");
  }
};
