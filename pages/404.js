import { useRouter } from "next/router";
import React from "react";

export default function Error() {
  const router = useRouter();

  return (
    <>
      <div>error</div>;
      <button
        onClick={() => {
          router.push("/home");
        }}
      >
        go home
      </button>
    </>
  );
}

Error.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
