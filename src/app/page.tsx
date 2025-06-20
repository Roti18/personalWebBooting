// app/page.tsx

import Profile from "@/components/Profile";
import CardList from "@/components/CardList";
import InteractiveAurora from "@/components/InteractiveAurora"; // <-- 1. Impor komponen baru
import fs from "fs/promises";
import path from "path";

export type Mahasiswa = {
  id: number;
  nama: string;
  nim: string;
  kelompok: number;
  fotoformal: string;
  web: string;
  alamat: string;
  ttl: string;
  no: string;
};

export default async function Page() {
  const teamFilePath = path.join(process.cwd(), "src", "data", "data.json");
  const teamJsonData = await fs.readFile(teamFilePath, "utf-8");
  const teamData: Mahasiswa[] = JSON.parse(teamJsonData);

  return (
    <main className="relative min-h-screen bg-transparent text-neutral-300">
      {/* 2. Gunakan komponennya di sini. Semua kode background lama dihapus. */}
      <InteractiveAurora />

      <div className="relative z-10 container mx-auto lg:flex">
        <aside className="w-full lg:w-2/5 lg:h-screen lg:sticky lg:top-0 p-8 md:p-12">
          <Profile />
        </aside>
        <div className="w-full lg:w-3/5 p-8 md:p-12">
          <CardList data={teamData} />
        </div>
      </div>
    </main>
  );
}
