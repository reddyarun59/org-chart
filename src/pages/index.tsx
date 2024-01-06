import { Inter } from "next/font/google";
import OrgChart from "@/components/OrgChart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-start p-2 ${inter.className} text-center `}
    >
      {/* <div className="flex  items-center justify-center bg-black mx-auto w-screen"></div> */}
      <div style={{ transform: `scale(${0.7})` }}>
        <OrgChart />
      </div>
    </main>
  );
}
