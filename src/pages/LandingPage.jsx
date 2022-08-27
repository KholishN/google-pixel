import Card from "../components/landingPage/Card";
import Header from "../components/landingPage/HeaderLanding";
import Navbar from "./../components/navbar&footer/Navbar";
import Footer from "./../components/navbar&footer/Footer";
import CheckBox from "../components/landingPage/Checkbox";
import Pegnation from "../components/landingPage/Pegnation";

// icon

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="px-6">
        <div className="py-7">
          <div className="flex justify-center items-center"></div>
        </div>

        <div className="category grid grid-cols-3 min-h-screen">
          <CheckBox />
          <div>
            <div className="grid content">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <Pegnation />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
