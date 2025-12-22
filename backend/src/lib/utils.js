import jwt from "jsonwebtoken";
import { ENV } from "./env";

export const generateToken = (userId, res) => {
  const JWT_SECRET = ENV.JWT_SECRET;
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not configured.");

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // In milliseconds
    httpOnly: true, // Prevents Cross Site Scripting (XSS) attacks
    sameSite: "strict", // Prevents CSRF attacks
    secure: ENV.NODE_ENV === "developement" ? false : true,
  });

  return token;
};
