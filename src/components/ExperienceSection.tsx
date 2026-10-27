import { CheckCircle2, Building2, Camera, Layers, Sparkles } from 'lucide-react';
import { experienceList } from '../data/portfolioData';
import { PhotoTargetKey } from '../types/portfolio';

interface ExperienceSectionProps {
  currentExpMulya: string;
  onOpenMediaModal: (target: PhotoTargetKey) => void;
}

export function ExperienceSection({
  currentExpMulya,
  onOpenMediaModal,
}: ExperienceSectionProps) {
  const exp = experienceList[0];

  return (
    <section id="experience" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Judul Bagian */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5252] block mb-2">
            Pengalaman Riil
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Praktik Kerja Lapangan (PKL)
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 leading-relaxed">
            Pengalaman nyata di industri periklanan dan percetakan yang membentuk kedisiplinan kerja, ketelitian teknis, dan pemahaman alur produksi media promosi secara langsung.
          </p>
        </div>

        {/* Kartu Showcase Pengalaman Tunggal PKL */}
        <div className="rounded-3xl bg-[#0F1118] border border-white/10 hover:border-white/15 overflow-hidden shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Sisi Kiri: Foto Dokumentasi PKL */}
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[280px] lg:min-h-full overflow-hidden bg-[#181B26]">
              <img
                src={currentExpMulya}
                alt={exp.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1118] via-transparent to-black/30 pointer-events-none lg:bg-gradient-to-r lg:from-transparent lg:to-[#0F1118]/80" />

              {/* Lencana Jenis Pengalaman */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-black/75 backdrop-blur-md border border-white/15 shadow-md">
                  <Building2 className="w-3.5 h-3.5 text-[#FF5252]" />
                  <span>{exp.type}</span>
                </span>
              </div>

              {/* Tombol Interaktif Ganti Foto Dokumentasi */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => onOpenMediaModal('exp-mulya')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/75 hover:bg-black/90 backdrop-blur-md rounded-full border border-white/20 shadow-lg hover:border-white/40 transition-all"
                  title="Ganti foto dokumentasi PKL ini dengan foto Anda sendiri"
                >
                  <Camera className="w-3.5 h-3.5 text-[#FF5252]" />
                  <span>Ganti Foto</span>
                </button>
              </div>

              {/* Keterangan Lokasi Bawah */}
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-xs text-white/80 block font-medium drop-shadow-md">
                  {exp.companyOrContext} &bull; {exp.location}
                </span>
              </div>
            </div>

            {/* Sisi Kanan: Uraian Aktivitas & Kompetensi Industri */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Industri Percetakan & Media Periklanan</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.title} &mdash; {exp.companyOrContext}
                  </h3>
                  <p className="text-xs text-white/50 mt-1">
                    Wilayah Penugasan: {exp.location}, Cilacap
                  </p>
                </div>

                <p className="text-sm text-white/75 leading-relaxed">
                  {exp.description}
                </p>

                {/* Daftar Aktivitas Peran Nyata */}
                <div className="pt-2 border-t border-white/5 space-y-3">
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block">
                    Aktivitas & Peran Nyata Selama PKL:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.activities.map((act, actIdx) => (
                      <li
                        key={actIdx}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-white/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF5252] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tag Keterampilan yang Dilatih */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5">
                    Finishing Spanduk / Banner
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5">
                    Finishing Stiker Promosi
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5">
                    Desain Spanduk CorelDRAW
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5">
                    Standar Mutu Percetakan
                  </span>
                </div>
              </div>

              {/* Tanda Otentik Footer */}
              <div className="pt-4 border-t border-white/5 text-[11px] text-white/40 flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Pengalaman Praktik Kerja Lapangan Resmi Terverifikasi
                </span>
                <span>Alumni SMK Farmasi Majenang</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
