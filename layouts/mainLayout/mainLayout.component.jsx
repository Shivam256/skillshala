import React, { useEffect } from "react";
import Header from "../../components/header/header.component";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname]);
  return (
    <div className="w-full max-w-full overflow-hidden">
      {router.pathname !== "/" ? (
        <>
          <Header />
          <main style={{ marginTop: "60px" }}>{children}</main>
        </>
      ) : (
        <main>{children}</main>
      )}
    </div>
  );
};

export default MainLayout;
