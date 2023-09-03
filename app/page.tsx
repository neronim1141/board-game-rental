import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/auth/authButtons";

export default function Home() {
  return (
    <div>
      <LoginButton />
      <RegisterButton />
      <LogoutButton />
      <ProfileButton />
    </div>
  );
}
