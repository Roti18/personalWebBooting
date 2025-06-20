"use client";

import { useState } from "react";
import { Mahasiswa } from "@/app/page";
import { Search } from "lucide-react";
import MahasiswaCard from "@/components/MahasiswaCard"; // pastikan path-nya benar

export default function CardList({ data }: { data: Mahasiswa[] }) {
  const [query, setQuery] = useState("");

  const filteredData = data.filter((mhs) => {
    const searchTerm = query.toLowerCase();
    return (
      mhs.nama.toLowerCase().includes(searchTerm) ||
      String(mhs.nim).toLowerCase().includes(searchTerm)
    );
  });

  return (
    <section className="mt-5">
      <div className="mb-10">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari berdasarkan nama atau nim......"
            className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a]/70 backdrop-blur-sm border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-neutral-500" />
          </div>
        </div>
      </div>

      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.map((mhs) => (
            <MahasiswaCard key={mhs.id} mhs={mhs} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 border border-dashed border-neutral-800 rounded-lg">
          <p className="text-neutral-500">
            Anggota tim dengan nama atau NIM{" "}
            <span className="text-white font-medium">&quot;{query}&quot;</span>{" "}
            tidak ditemukan.
          </p>
        </div>
      )}
    </section>
  );
}
