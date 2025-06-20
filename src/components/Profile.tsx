"use client";

import Image from "next/image";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const aboutMeData = {
  paragraph1: `Saya biasa dipanggil Roni, mahasiswa baru Teknik Informatika di Universitas Trunojoyo Madura. Lahir di Sumenep pada 18 Mei 2006. NIM saya adalah 240411100085. Jika ada perlu, Anda bisa menghubungi saya melalui salah satu sosial media di bawah.`,
};

const socialLinks = [
  { href: "https://github.com/Roti18", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/moch-zamroni-fahreza-b158a11b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/roti.co.id",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/share/8SBf7pBEMKR9MYu8/?mibextid=qi2Omg",
    label: "Facebook",
    icon: Facebook,
  },
];

export default function Profile() {
  return (
    <div className="flex flex-col justify-between h-full lg:p-8">
      <div className="space-y-10">
        <div>
          <Image
            src="/personalWebBooting/me.png"
            alt="Moch. Zamroni Fahreza"
            width={120}
            height={120}
            className="rounded-full mb-6"
          />
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">
              Moch. Zamroni Fahreza
            </h1>
            <p className="mt-2 text-lg text-neutral-400">240411100085</p>
          </div>
        </div>

        <div>
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>{aboutMeData.paragraph1}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-10 pt-8 justify-start  max-[770px]:justify-center">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-black hover:text-blue-900 hover:scale-110 hover:bg-blue-600 bg-blue-600 px-3 py-1 rounded-b-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <link.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
