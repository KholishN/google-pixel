import Image from "../../assets/image.webp";
export default function Content() {
  return (
    <>
      <div className="flex bg-gray-100 ">
        <div className="flex max-w-7xl justify-end pb-8 pl-52 pr-40">
          <div className="max-w-sm pt-12 ">
            <div className="mt-10 ">
              <div className="text-xl font-bold">
                Pixel’s powerful camera system.
              </div>
              <div className="text-lg mt-4">
                Capture photos with greater accuracy, finer detail and richer
                colours using the Pixel 6 Pro Camera. And shoot sharp, vivid
                video, even in low light. It’s a powerful camera system, with
                three rear cameras and pro-level lenses, including a telephoto
                lens with 4x optical zoom. The main sensor captures 150% more
                light – the most ever in a Pixel.1
              </div>
            </div>
            <div className="mt-10">
              <div className="text-xl font-bold">
                The smartest and fastest Pixel yet.
              </div>
              <div className="text-lg mt-4 mb-4">
                Google Tensor is Pixel’s powerful processor, the first ever made
                by Google. And it makes this phone the smartest and fastest
                Pixel yet – up to 80% faster than Pixel 5.2 The all-day battery
                charges fast.3,4 It adapts to you, so it saves power for the
                apps that you use most. The reimagined interface is a whole new
                way to experience Pixel, with colours that reflect your personal
                style. Live Translate helps you understand and communicate in
                languages other than your own.5 Pixel can even show you what you
                need, when you need it, like your boarding pass before your
                flight.6
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl ">
          <img src={Image} alt="imageContent" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}
