import { redirect } from "next/navigation";
import { authOptions } from ".";
import { getServerSession } from "next-auth/next";

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return redirect("/unauthorized");
  }
  return session.user;
};
