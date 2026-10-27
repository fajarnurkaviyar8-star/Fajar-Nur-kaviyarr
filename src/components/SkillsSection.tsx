import { Code2, Database, Server, Laptop, Globe, FileText } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#FF5252]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Judul Bagian */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5252] block mb-2">
            Kompetensi Nyata
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Keterampilan Teknis & Perangkat Lunak
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 leading-relaxed">
            Daftar keterampilan dan perangkat lunak yang dikuasai secara riil dan objektif, tanpa penilaian persentase fiktif, disajikan dengan deskripsi kapabilitas praktis.
          </p>
        </div>

        {/* Kisi Kartu Keterampilan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((skill, index) => {
            const isBasic = skill.name.toLowerCase().includes('dasar');

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#0F1118] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Baris atas kartu */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(skill.iconName)}
                    </div>
                    
                    <span className="text-[11px] text-white/40 tracking-wider">
                      {skill.category}
                    </span>
                  </div>

                  {/* Judul Keterampilan */}
                  <h3 className="text-base font-bold text-white group-hover:text-[#FF5252] transition-colors">
                    {skill.name}
                  </h3>

                  {/* Deskripsi Kapabilitas */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {skill.levelDescription}
                  </p>
                </div>

                {/* Status Penguasaan Bawah */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  {isBasic ? (
                    <span className="text-amber-300/90 font-medium text-[11px]">
                      &bull; Tingkat Dasar (Fondasi)
                    </span>
                  ) : (
                    <span className="text-emerald-400/90 font-medium text-[11px]">
                      &bull; Penggunaan Praktis
                    </span>
                  )}
                  <span className="text-white/30 text-[11px]">Kompetensi Nyata</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catatan Transparansi */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 text-center max-w-2xl mx-auto">
          Seluruh keterampilan di atas disajikan sesuai dengan penggunaan riil dalam kegiatan akademik di Universitas Komputer Majenang (UNIKMA) serta proyek aplikasi yang telah diselesaikan.
        </div>

      </div>
    </section>
  );
}
