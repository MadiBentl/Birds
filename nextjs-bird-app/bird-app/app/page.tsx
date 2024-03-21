import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-18">
      
      <Hero />

    </div>
  );
}
