import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/auth/authButtons";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Rental Board</h1>
      <LoginButton />
      <RegisterButton />
      <LogoutButton />
      <ProfileButton />
    </div>
  );
}
