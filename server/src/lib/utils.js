import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (user, res) => {
  const token = jwt.sign({ id: user._id }, ENV.JWT_SECRET, {
    expiresIn: "7d",
  });

  // for this res to work we need to import express

  res.cookie("jwt_token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true, // this will prevent the cookie from being accessed by client-side JavaScript for security reasons
    secure: ENV.NODE_ENV === "development" ? false : true, // this will ensure that the cookie is only sent over HTTPS in production for security reasons
    sameSite: "strict", // this will prevent the cookie from being sent in cross-site requests for security reasons
  });

  return token;
};
