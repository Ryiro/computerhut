import Threepc from "./Threepc/page";

export default function Home() {
  return (
    <div
      className="h-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/background.jpg')`,
        height: "972px",
      }}
    >
      <div className="flex justify-center items-center w-screen h-screen">
        <Threepc></Threepc>
      </div>
    </div>
  );
}
