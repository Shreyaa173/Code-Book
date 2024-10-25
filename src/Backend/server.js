require("dotenv").config();
const express = require("express");
const session = require("express-session");
const firebase = require("firebase-admin");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Initialize Firebase
firebase.initializeApp({
  credential: firebase.credential.applicationDefault(),
  projectId: process.env.FIREBASE_PROJECT_ID,
});

const auth = firebase.auth();

// Google Login Route
app.post("/auth/google", async (req, res) => {
  const { idToken } = req.body;
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    req.session.user = uid;
    res.status(200).send({ message: "Google login successful" });
  } catch (error) {
    res.status(401).send({ error: "Authentication failed" });
  }
});

// Apple Login Route
app.post("/auth/apple", async (req, res) => {
  const { idToken } = req.body;
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    req.session.user = uid;
    res.status(200).send({ message: "Apple login successful" });
  } catch (error) {
    res.status(401).send({ error: "Authentication failed" });
  }
});

// User Logout
app.post("/logout", (req, res) => {
  req.session.destroy();
  res.status(200).send({ message: "Logged out successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
