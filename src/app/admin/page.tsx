import React from "react";
import { auth } from "@/lib/auth";
import {SignOut} from "@/components/signout-button";
export async function page() {
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

export default page;
