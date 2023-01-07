<<<<<<< HEAD
import { AddLayoutProps } from "./types";
import Header from "./header";
import Footer from "./footer";
=======
import {AddLayoutProps} from './types'
import Header from './header'
import Footer from './footer'
>>>>>>> 326be14c30291fc5012133fa55e3c922fe63cc79

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <div>{children}</div>
      <Footer />
=======
        <Header/>
        <h1>layout</h1>
        <div>{children}</div>
        <Footer/>
>>>>>>> 326be14c30291fc5012133fa55e3c922fe63cc79
    </>
  );
}
