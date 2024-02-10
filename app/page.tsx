import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <main className="mx-auto mt-20 px-10 py-12">
        {/* Header */}
        <div className="flex flex-col justify-center items-center ">
          <p className="text-4xl uppercase font-black lg:text-5xl pb-20">DM</p>
          <h1 className=" text-4xl uppercase font-black lg:text-6xl">
            Danielle Mani
          </h1>
          <p className="text-xl font-light p-2">Coach Sportif Et Bien Être</p>
          <p className="text-md font-thin py-10 text-center">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. <br /> Le Lorem
            Ipsum est simplement du faux texte employé dans la composition et la
            mise en page avant impression.
          </p>
        </div>
      </main>
      <div className=" py-10">
        <Footer />
      </div>
    </div>
  );
}
