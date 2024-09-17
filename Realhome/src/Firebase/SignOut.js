import { signOut } from "firebase/auth";

const handleLogout = async () => {
  await signOut(auth);
  alert("Logged out successfully!");
};
