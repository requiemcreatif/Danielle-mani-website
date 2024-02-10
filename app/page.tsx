import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col justify-between">
      <main className="mx-auto mt-10 px-10 py-12">
        {/* Header */}
        <div className="flex flex-col justify-center items-center ">
          <p className="text-4xl uppercase font-black lg:text-5xl pb-20 slide-down">
            DM
          </p>
          <h1 className=" text-4xl uppercase font-black lg:text-6xl slide-down">
            Danielle Mani
          </h1>
          <p className="text-xl font-light p-2 fade-in">
            Coach Sportif Et Bien Être
          </p>
          <p className="text-lg font-medium pt-8 text-center text-yellow-500 animate-pulse">
            Site officiel en construction!
          </p>
        </div>
      </main>
      <div className=" pt-5">
        <Footer />
      </div>
    </div>
  );
}
