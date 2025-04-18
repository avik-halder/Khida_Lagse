import { jwtDecode } from "jwt-decode";

export const useUser = () => {

  const token = localStorage.getItem("access_token");

  if (!token) {
    window.location.href = "/";
  }
  return jwtDecode(token);
};