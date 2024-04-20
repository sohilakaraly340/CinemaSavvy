import Nav from "@/components/nav";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);

  return (
    <div className="grid grid-cols-12">
      <Nav></Nav>
      <Component {...pageProps} />
    </div>
  );
}
