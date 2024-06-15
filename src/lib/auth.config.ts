import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Google({
      profile(profile) {
        return {
          role: profile.role ?? "user",
          ...profile,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user role to the token
      if (user) {
        token.role =
          user.email ===
          "admin@example.com"
            ? "admin"
            : "user"; // Example logic
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
} satisfies NextAuthConfig;
