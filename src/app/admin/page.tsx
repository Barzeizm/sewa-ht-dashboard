import React from "react";
import { auth } from "@/lib/auth";
import {SignOut} from "@/components/signout-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
}
export async function Admin() {
  const session = await auth();
  return (
    <div>
      <p>
        Welcome {session?.user.name}!
      </p>
      <SignOut/>
    </div>
  );
}

export default Admin;