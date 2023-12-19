import { Games } from 'pages/games';
import '../app/globals.css';
import { Header } from 'pages/header';
import { HomePage } from 'pages/home';

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Games />
    </div>
  );
}
