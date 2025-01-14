import { About } from "./Components/About";
import { Enjoy } from "./Components/Enjoy";
import { Favorite } from "./Components/Favorite";
import { MobileApp } from "./Components/Mobile";

export const MainPage = () => {
  return (
    <main className="main">
      <Enjoy />
      <Favorite />
      <About />
      <MobileApp />
    </main>
  )
}