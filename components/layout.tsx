
import { AddLayoutProps } from "./types";
import Header from "./header";
import Footer from "./footer";



export default function Layout({ children }: AddLayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />

    </>
  );
}
