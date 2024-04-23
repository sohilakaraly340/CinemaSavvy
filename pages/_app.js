import Nav from "@/components/nav";
import "@/styles/globals.css";
import SessionProvider from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);

  return (
    <div className="grid grid-cols-12">
      {/* <SessionProvider session={session}> not working  */}
      <Nav></Nav>
      <Component {...pageProps} />
      {/* </SessionProvider> */}
    </div>
  );
}
