// components/MahasiswaCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, MapPin, Calendar, Phone } from "lucide-react";
import { Mahasiswa } from "@/app/page";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function MahasiswaCard({ mhs }: { mhs: Mahasiswa }) {
  const fallbackFoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    mhs.nama
  )}&background=1a1a1a&color=fff&size=80`;
  const [fotoSrc, setFotoSrc] = useState(mhs.fotoformal);

  return (
    <CardContainer className="inter-var h-full w-full">
      <CardBody className="bg-gray-950/80 relative group/card hover:shadow-2xl hover:shadow-blue-500/20 border border-neutral-800 hover:border-blue-500/40 w-full h-full rounded-2xl p-0 overflow-hidden transition-all duration-300 flex flex-col min-h-[380px]">
        {/* ...bagian header */}
        <div className="relative h-16 flex-shrink-0 border-b border-neutral-800">
          <div className="absolute inset-0 bg-neutral-900/50" />
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <CardItem translateZ={20} className="absolute top-3 left-4 z-10">
            <span className="px-3 py-1 bg-neutral-800/60 backdrop-blur-sm text-neutral-300 text-xs font-semibold rounded-full border border-neutral-700 tracking-wide">
              Kelompok {mhs.kelompok}
            </span>
          </CardItem>
          <CardItem translateZ={30} className="absolute top-3 right-4 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (mhs.web) window.open(mhs.web, "_blank");
              }}
              disabled={!mhs.web}
              className={`p-2 bg-neutral-800/60 backdrop-blur-sm rounded-full transition-all duration-200 border group ${
                mhs.web
                  ? "border-neutral-700 hover:bg-neutral-700 cursor-pointer"
                  : "border-neutral-800 cursor-not-allowed"
              }`}
              aria-label={
                mhs.web
                  ? `Visit ${mhs.nama}'s website`
                  : `Website not available for ${mhs.nama}`
              }
            >
              <Globe
                className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                  mhs.web ? "text-blue-400" : "text-neutral-500"
                }`}
              />
            </button>
          </CardItem>
        </div>

        {/* Foto */}
        <div className="relative -mt-8 mb-4 flex justify-center flex-shrink-0">
          <CardItem translateZ={100} className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-neutral-700 shadow-lg overflow-hidden bg-neutral-800 relative">
              <Image
                src={fotoSrc}
                alt={mhs.nama}
                width={80}
                height={80}
                className="object-cover transition-transform duration-300 group-hover/card:scale-110"
                onError={() => setFotoSrc(fallbackFoto)}
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-950 shadow-sm"></div>
          </CardItem>
        </div>

        {/* Info */}
        <div className="px-5 pb-5 flex-1 flex flex-col justify-between">
          <div className="space-y-2 mb-4 text-center">
            <CardItem translateZ={50}>
              <h3
                className="text-white capitalize text-xl font-bold leading-tight line-clamp-2 h-14 flex items-center justify-center"
                title={mhs.nama}
              >
                {mhs.nama.toLowerCase()}
              </h3>
            </CardItem>
            <CardItem translateZ={40}>
              <p className="text-blue-400 text-sm font-mono bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 inline-block tracking-wider">
                {mhs.nim}
              </p>
            </CardItem>
          </div>
          <div className="space-y-2 pr-5 overflow-hidden">
            <CardItem
              translateZ={30}
              className="flex items-center text-neutral-400 text-sm"
            >
              <MapPin className="h-4 w-4 mr-3 text-neutral-500 flex-shrink-0" />
              <span className="truncate">{mhs.alamat}</span>
            </CardItem>
            <CardItem
              translateZ={30}
              className="flex items-center text-neutral-400 text-sm"
            >
              <Calendar className="h-4 w-4 mr-3 text-neutral-500 flex-shrink-0" />
              <span className="truncate">{mhs.ttl}</span>
            </CardItem>
            <CardItem
              translateZ={30}
              className="flex items-center text-neutral-400 text-sm"
            >
              <Phone className="h-4 w-4 mr-3 text-neutral-500 flex-shrink-0" />
              <span className="truncate">{mhs.no}</span>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
