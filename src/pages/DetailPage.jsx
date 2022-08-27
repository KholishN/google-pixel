import Header from "../components/detailPage/HeaderDetail";
import Navbar from "./../components/navbar&footer/Navbar";
import Footer from "./../components/navbar&footer/Footer";
import Carousel from "../components/detailPage/Carousel";
import Content from "../components/detailPage/Content";
import Description from "../components/detailPage/Description";

export default function DetailPage() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* title */}
      <div className=" px-7">
        <div className=" bg-gray-100">
          <div className="p-6">
            <div>
              <div className="text-center text-sm">
                <strong>Google Store exlusive </strong>
                and subject to stock availability
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className=" ">
          <div>
            <div className="font-semibold text-blue-gray-800 mt-4">
              <span className="text-5xl">The best of Google, built</span>
              <p className="text-5xl"> around you</p>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      <Carousel />
      <Content />
      <Description />
      <Footer />
    </div>
  );
}
