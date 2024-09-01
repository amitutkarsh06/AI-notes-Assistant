import Image from "next/image";
import { Button } from "@/components/ui/button";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-light text-7xl text-center">Your AI <span className="font-semibold text-emerald-500">note taking
        </span> assistant</h1>
        <div className="mt-4" />
        <h2 className="font-semibold text-3xl text-center text-slate-700">
            <TypewriterTitle />
        </h2>
        <div className="mt-8" />

        <div className="flex justify-center">
        <Link href="/dashboard" >
            <Button className="bg-emerald-500 text-slate-200 hover:scale-105 hover:bg-emerald-600 hover:text-white">Get Started
              <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
         </Button>
        </Link>
        </div>

      </div>
   </div>
  );
}
