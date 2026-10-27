import { useState } from 'react';
import { Camera, ArrowDownRight, MessageSquare, Mail, Phone, ExternalLink } from 'lucide-react';
import { contactInfo, heroBio } from '../data/portfolioData';

interface HeroProps {
  currentPhoto: string;
  onOpenPhotoModal: () => void;
  onOpenCV: () => void;
  onOpenChat: () => void;
}

export function Hero({ currentPhoto, onOpenPhotoModal, onOpenCV, onOpenChat }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12 md:py-16">
      {/* Latar belakang halus & aksen geometris neon sesuai referensi desain */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pendaran aura di tengah */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-900/10 via-[#FF5252]/10 to-transparent rounded-full blur-3xl opacity-60" />

        {/* Cincin geometris neon cyan dan coral di kanan atas (sesuai gambar referensi) */}
        <div className="absolute top-12 right-8 md:top-20 md:right-24 lg:right-36 w-36 h-36 opacity-75 hidden sm:block">
          <svg viewBox="0 0 160 160" className="w-full h-full fill-none">
            {/* Cincin cyan */}
            <circle cx="65" cy="65" r="45" stroke="#22D3EE" strokeWidth="2.5" strokeDasharray="3 0" className="animate-pulse" style={{ animationDuration: '4s' }} />
            {/* Cincin coral saling silang */}
            <circle cx="95" cy="55" r="32" stroke="#FF5252" strokeWidth="2" strokeOpacity="0.85" />
            {/* Bola titik menyala cyan */}
            <circle cx="128" cy="92" r="7.5" fill="#22D3EE" filter="drop-shadow(0 0 8px #22D3EE)" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* KOLOM KIRI: Sapaan & Tombol Aksi Utama */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-sm font-medium tracking-wider uppercase text-white/50 block">
                Portofolio Personal
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span>{heroBio.greeting}</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5252] via-[#FF6B6B] to-[#FF8E53]">
                  {heroBio.name}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/70 font-medium">
                {heroBio.role}
              </p>

              <p className="text-xs sm:text-sm text-white/50">
                Universitas Komputer Majenang (UNIKMA)
              </p>

              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="#project"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#FF5252] to-[#FF3366] rounded-full shadow-lg shadow-[#FF5252]/20 hover:shadow-[#FF5252]/40 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Lihat Proyek</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#FF5252]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Tombol pintasan kontak langsung di kiri bawah */}
            <div className="pt-8 lg:pt-12 flex items-center justify-center lg:justify-start gap-4">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Hubungi via WhatsApp"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-white/70 hover:text-emerald-400 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                title="Salin Alamat Email"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-[#FF5252]/40 flex items-center justify-center text-white/70 hover:text-[#FF5252] transition-all relative"
              >
                <Mail className="w-4 h-4" />
                {copiedEmail && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded border border-white/20 whitespace-nowrap">
                    Disalin!
                  </span>
                )}
              </button>

              <a
                href={`mailto:${contactInfo.email}`}
                title="Buka Aplikasi Email"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-white/70 hover:text-cyan-400 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <span className="text-xs text-white/30 pl-1 hidden sm:inline">
                {contactInfo.phoneWhatsapp}
              </span>
            </div>
          </div>

          {/* KOLOM TENGAH: Foto Profil Moody dengan efek rim light & gradien menyatu */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
            <div className="relative group w-64 sm:w-72 md:w-80 aspect-[3/4] max-w-full">
              {/* Pendaran lampu latar halus */}
              <div className="absolute inset-0 -m-3 bg-gradient-to-b from-[#FF5252]/15 via-transparent to-cyan-500/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Wadah foto dengan bingkai halus */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#0F1016] shadow-2xl">
                <img
                  src={currentPhoto}
                  alt="Foto Profil Fajar Nur Kaviyar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradasi pudar di bawah agar menyatu sempurna dengan latar belakang gelap */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/60 to-transparent pointer-events-none" />

                {/* Tombol Interaktif Ganti Foto Profil */}
                <div className="absolute bottom-3 inset-x-3 flex justify-center opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={onOpenPhotoModal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/75 hover:bg-black/90 backdrop-blur-md rounded-full border border-white/20 shadow-lg hover:border-white/40 transition-all"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#FF5252]" />
                    <span>Ganti / Unggah Foto Anda</span>
                  </button>
                </div>
              </div>

              {/* Label nama di bagian bawah foto */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#12141C]/90 backdrop-blur-md border border-white/10 px-3.5 py-1 rounded-full text-center whitespace-nowrap shadow-lg">
                <span className="text-xs font-medium text-white/90">Fajar Nur Kaviyar</span>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Ringkasan Biodata & Unduh CV */}
          <div className="lg:col-span-4 flex flex-col justify-center order-3 text-center lg:text-left space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5252]">
                Profil & Latar Belakang
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
                {heroBio.locationBadge}
              </h2>
              <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-0.5">
                Alumni SMK Farmasi Majenang &bull; Mahasiswa UNIKMA
              </p>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              {heroBio.shortSummary}
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenCV}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#FF5252] transition-colors py-1"
              >
                <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-[#FF5252]">
                  Buka & Unduh CV Lengkap
                </span>
                <span className="text-base group-hover:translate-y-0.5 transition-transform">&darr;</span>
              </button>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-center lg:justify-start gap-3 text-xs text-white/45">
              <span>Sistem Informasi</span>
              <span>&bull;</span>
              <span>Aplikasi Desktop</span>
              <span>&bull;</span>
              <span>Basis Data Relasional</span>
            </div>
          </div>

        </div>
      </div>

      {/* Tombol mengambang "KIRIM PESAN 💬" di pojok kanan bawah (sesuai referensi UI) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={onOpenChat}
          className="group flex items-center gap-2.5 px-4 py-2 bg-[#141722]/90 hover:bg-[#1C2030] backdrop-blur-md border border-white/10 hover:border-[#FF5252]/40 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          title="Kirim Pesan WhatsApp Langsung ke Fajar"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-white/90 group-hover:text-white">
            Kirim Pesan
          </span>
          <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF5252] to-[#FF3366] flex items-center justify-center text-white text-xs shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </section>
  );
}
