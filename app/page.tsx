import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import MainContent from "@/components/mainContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <Header />
        <MainContent />
      </main>
    </div>
  );
}
