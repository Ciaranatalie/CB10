"use client";

import { getUser } from "@/action/get-user";
import { IUser } from "@/model/product";
import { useState, useEffect, useTransition } from "react";

function User() {
  const [user, setUser] = useState<IUser | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleGetUser = async () => {
    startTransition(async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : "An error occurred while downloading user.";
        console.log(message);
      }
    });
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div>
      {isPending && <h1>sto ad aspettà</h1>}
      <div>{user?.name}</div>
    </div>
  );
}

export default User;
