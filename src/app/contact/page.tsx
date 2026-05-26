import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Information | Blactify",
  description: "Contact information for Blactify",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pb-20 pt-20">
      <div className="px-6 max-w-2xl mx-auto">
        <h1 className="font-empire text-4xl mb-12">Contact information</h1>

        <div className="space-y-8 text-sm font-medium tracking-wide">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Trade name</span>
            <p className="text-black text-lg">Blactify</p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Phone number</span>
            <p className="text-black text-lg">7306663523</p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Email</span>
            <a href="mailto:nithinnt07@gmail.com" className="text-black text-lg hover:underline">
              nithinnt07@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">Physical address</span>
            <p className="text-black text-lg leading-relaxed max-w-md">
              BLACTIFY, 4X74+V76, Karuvankallu,<br />
              Peruvallur, Kerala 673638
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
