import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { ENV } from "../lib/env.js";

export const protectRoute = (req, res, next) => {
  const token = req.cookies.jwt_token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized, no token provided" });
  }
  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET); // decoded token contains the payload that was signed when the token was created, which typically includes the user's ID and other relevant information
    req.user = decoded; // Attach the decoded user information to the request object
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized, invalid token" });
    }

    const user = User.findById(decoded.id).select("-password"); // Fetch the user from the database using the ID from the token, excluding the password field
    if (!user) {
      return res.status(401).json({ message: "Unauthorized, user not found" });
    }

    req.user = user; // Attach the user object to the request for use in subsequent middleware or route handlers
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ message: "Unauthorized, invalid token" });
  }
};
