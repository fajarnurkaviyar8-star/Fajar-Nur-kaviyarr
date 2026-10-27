import { GraduationCap, Award, Compass, Sparkles, BookOpen } from 'lucide-react';
import { educationList, contactInfo } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5252] block mb-2">
            Tentang & Pendidikan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Mengenal Fajar Nur Kaviyar
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 leading-relaxed">
            Dedikasi belajar, fondasi kejuruan yang disiplin, dan antusiasme aktif dalam mendalami rekayasa perangkat lunak serta sistem basis data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Identity & Personal Statement (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF5252]/10 border border-[#FF5252]/20 flex items-center justify-center text-[#FF5252]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Profil Diri</h3>
                  <p className="text-xs text-white/50">Identitas & Karakter</p>
                </div>
              </div>

              <p className="text-sm text-white/75 leading-relaxed">
                Halo! Saya <strong>Fajar Nur Kaviyar</strong>, seorang mahasiswa yang memiliki minat tinggi dalam dunia teknologi informasi, rekayasa logika pemrograman, dan manajemen basis data.
              </p>

              <p className="text-sm text-white/70 leading-relaxed">
                Ketertarikan saya dimulai sejak bangku SMK saat pertama kali merancang aplikasi perpustakaan berbasis desktop. Bagi saya, memecahkan masalah komputasi dan mentransformasikan kebutuhan manual menjadi alur aplikasi yang otomatis serta rapi adalah proses yang sangat memuaskan.
              </p>

              <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-white/60">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Nama Lengkap</span>
                  <span className="font-medium text-white/90">{contactInfo.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Pendidikan Sekarang</span>
                  <span className="font-medium text-white/90">S1 Sistem Informasi</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Perguruan Tinggi</span>
                  <span className="font-medium text-white/90">UNIKMA</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Asal Sekolah</span>
                  <span className="font-medium text-white/90">{contactInfo.schoolOrigin}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/40">Domisili</span>
                  <span className="font-medium text-white/90">{contactInfo.locationGeneral}</span>
                </div>
              </div>
            </div>

            {/* Core Values / Learning Mindset */}
            <div className="p-5 rounded-2xl bg-[#0F1118]/60 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>Prinsip Pembelajaran</span>
              </div>
              <p className="text-xs text-white/65 leading-relaxed">
                "Tidak ada jalan pintas dalam menguasai teknologi; konsistensi membedah baris kode, keberanian mencoba hal baru, dan ketelitian adalah fondasi utama seorang pembangun sistem."
              </p>
            </div>
          </div>

          {/* Education Timeline (Right Column) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-[#FF5252]" />
              <h3 className="text-lg font-bold text-white tracking-tight">Riwayat Pendidikan</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
              {educationList.map((edu, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline bullet */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#0B0C10] border-2 border-[#FF5252] group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/5 hover:border-white/15 transition-all space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-white group-hover:text-[#FF5252] transition-colors">
                        {edu.institution}
                      </h4>
                      <span className="text-xs text-white/45">
                        {edu.period} &bull; {edu.location}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-cyan-400">
                      {edu.degreeOrMajor}
                    </p>

                    <p className="text-sm text-white/70 leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        {edu.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-white/60">
                            <span className="text-[#FF5252] font-bold">&bull;</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
