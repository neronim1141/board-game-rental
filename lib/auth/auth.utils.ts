import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getUserAuth = async () => {
  const session = await getServerSession(authOptions);

  return { session };
};

export const checkAuth = async () => {
  const user = await getUserAuth();
  if (!user) {
    redirect("/unauthorized");
  }
};
