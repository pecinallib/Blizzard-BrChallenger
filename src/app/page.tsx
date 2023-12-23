import Footer from "pages/footer";
import Games from "pages/games";
import Header from "pages/header";
import HomePage from "pages/home";
import "../app/globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Games />
      <Footer />
    </div>
  );
}
