import { useEffect } from "react";
import Router from "next/router";
import useUser from "../../data/use-user";
import Nav from "../../components/nav";
import { logout } from "../../libs/auth";



export default function Dashboard() {
  const { user, loading, loggedOut, mutate } = useUser();

  // if logged out, redirect to the homepage
  useEffect(() => {
    if (loggedOut) {
      Router.replace("/auth");
    }
  }, [loggedOut]);
  if (loggedOut) return "redirecting...";

  return (
    <div>
      <Nav title="Dashboard" />
      <main>
        {loading ? (
          "loading..."
        ) : (
          <>
            <h1>Welcome, {user?.name}</h1>
            <p>This is your dashboard.</p>
            <button
              onClick={() => {
                logout();
                mutate(null); // optimistically update the data and revalidate
                Router.replace("/auth");
              }}
            >
              Logout
            </button>
          </>
        )}
      </main>
    </div>
  );
}
