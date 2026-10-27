import { useState } from 'react';
import { featuredProject } from '../data/portfolioData';
import { 
  Laptop, Database, KeyRound, BookOpen, Users, 
  ArrowLeftRight, Image as ImageIcon, Upload, 
  Terminal, Camera
} from 'lucide-react';

interface ProjectSectionProps {
  currentProjectScreenshot: string;
  onOpenScreenshotModal: () => void;
}

export function ProjectSection({ currentProjectScreenshot, onOpenScreenshotModal }: ProjectSectionProps) {
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'fitur' | 'basisdata' | 'tampilan'>('ringkasan');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section id="project" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Judul Bagian */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5252] block mb-2">
            Proyek Unggulan SMK
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Sistem Informasi Perpustakaan Desktop
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 leading-relaxed">
            Perancangan dan implementasi aplikasi desktop Windows berbasis Visual Studio 2012 dan basis data Microsoft Access 2013 untuk digitalisasi peminjaman buku.
          </p>
        </div>

        {/* Wadah Proyek Unggulan */}
        <div className="rounded-3xl bg-[#0F1118] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Bagian Atas / Tajuk Proyek */}
          <div className="p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-white/[0.02] to-transparent">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/50 mb-2">
                <span className="text-[#FF5252] font-semibold">{featuredProject.category}</span>
                <span>&bull;</span>
                <span>{featuredProject.period}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {featuredProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-1">
                {featuredProject.subtitle}
              </p>
            </div>

            {/* Aksi Cepat: Ganti Tangkapan Layar */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenScreenshotModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
                title="Tambahkan atau ganti tangkapan layar asli aplikasi Anda"
              >
                <Camera className="w-3.5 h-3.5 text-[#FF5252]" />
                <span>Ganti / Unggah Foto Proyek</span>
              </button>
            </div>
          </div>

          {/* Tab Navigasi Interaktif */}
          <div className="px-6 border-b border-white/5 bg-[#0B0C10]/50 flex items-center gap-2 overflow-x-auto py-2">
            <button
              onClick={() => setActiveTab('ringkasan')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'ringkasan'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              Ringkasan & Arsitektur
            </button>
            <button
              onClick={() => setActiveTab('fitur')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'fitur'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              Fitur Utama (CRUD & Masuk)
            </button>
            <button
              onClick={() => setActiveTab('basisdata')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'basisdata'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              Skema Basis Data Access 2013
            </button>
            <button
              onClick={() => setActiveTab('tampilan')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === 'tampilan'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              Tampilan Antarmuka (GUI)
            </button>
          </div>

          {/* Konten Tab */}
          <div className="p-6 md:p-8">
            
            {/* TAB 1: RINGKASAN */}
            {activeTab === 'ringkasan' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-white">Latar Belakang & Tujuan Proyek</h4>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* Lencana Teknologi */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block">
                      Teknologi & Lingkungan Pengembangan:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sorotan Teknis */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <Terminal className="w-3.5 h-3.5 text-[#FF5252]" />
                        <span>Visual Studio 2012</span>
                      </div>
                      <p className="text-xs text-white/60">
                        Kerangka kerja .NET Windows Forms untuk antarmuka pengguna yang cepat dan responsif pada sistem operasi Windows.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <Database className="w-3.5 h-3.5 text-cyan-400" />
                        <span>MS Access 2013</span>
                      </div>
                      <p className="text-xs text-white/60">
                        Berkas basis data relasional (.accdb) dengan konektor OLE DB untuk penyimpanan lokal yang praktis tanpa memerlukan server eksternal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pratinjau Tangkapan Layar */}
                <div className="lg:col-span-5">
                  <div 
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#0B0C10] shadow-xl"
                  >
                    <img
                      src={currentProjectScreenshot}
                      alt="Pratinjau Antarmuka Aplikasi Peminjaman Buku"
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-sm">
                      <ImageIcon className="w-4 h-4 text-[#FF5252]" />
                      <span>Klik untuk Memperbesar</span>
                    </div>
                    <div className="p-3 bg-[#11131C] border-t border-white/5 text-[11px] text-white/50 truncate">
                      {featuredProject.screenshots[0].caption}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: FITUR */}
            {activeTab === 'fitur' && (
              <div className="space-y-6">
                <div className="max-w-2xl">
                  <h4 className="text-base font-bold text-white">4 Fitur Utama Aplikasi</h4>
                  <p className="text-xs sm:text-sm text-white/60 mt-1">
                    Dirancang untuk mencakup seluruh siklus operasional administrasi perpustakaan sekolah secara efisien.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredProject.features.map((feature, fIdx) => {
                    const icons = [KeyRound, BookOpen, Users, ArrowLeftRight];
                    const IconComponent = icons[fIdx % icons.length];
                    return (
                      <div
                        key={fIdx}
                        className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#FF5252]/10 border border-[#FF5252]/20 flex items-center justify-center text-[#FF5252]">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <h5 className="text-sm font-bold text-white">
                            {feature.title}
                          </h5>
                        </div>
                        <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: BASIS DATA */}
            {activeTab === 'basisdata' && (
              <div className="space-y-6">
                <div className="max-w-2xl">
                  <h4 className="text-base font-bold text-white">Struktur Relasional Basis Data (Microsoft Access 2013)</h4>
                  <p className="text-xs sm:text-sm text-white/60 mt-1">
                    Struktur tabel normalisasi untuk menjamin integritas data referensial antar transaksi dan data utama.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredProject.databaseSchema.map((tbl, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-5 rounded-2xl bg-[#0B0C10] border border-white/10 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm font-bold font-mono text-white">{tbl.tableName}</span>
                        </div>
                        <span className="text-[10px] text-white/40 uppercase">Tabel Basis Data</span>
                      </div>

                      <p className="text-xs text-white/60">
                        {tbl.purpose}
                      </p>

                      <div className="pt-2 border-t border-white/5">
                        <span className="text-[10px] font-semibold text-white/40 block mb-1.5 uppercase tracking-wider">
                          Kolom / Atribut:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {tbl.fields.map((field, fIdx) => (
                            <span
                              key={fIdx}
                              className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                                field.includes('(Kunci Utama')
                                  ? 'bg-[#FF5252]/20 text-[#FF8E8E] border border-[#FF5252]/30'
                                  : field.includes('(Kunci Tamu')
                                  ? 'bg-cyan-900/30 text-cyan-300 border border-cyan-700/40'
                                  : 'bg-white/5 text-white/70'
                              }`}
                            >
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: TAMPILAN ANTARMUKA */}
            {activeTab === 'tampilan' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-white">Pratinjau Antarmuka Visual</h4>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">
                      Visualisasi form Windows desktop dan tempat mengunggah screenshot asli milik Anda langsung di website.
                    </p>
                  </div>
                  <button
                    onClick={onOpenScreenshotModal}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#FF5252] to-[#FF3366] rounded-xl hover:shadow-lg hover:shadow-[#FF5252]/20 transition-all"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Unggah Tangkapan Layar Asli</span>
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B0C10] shadow-xl">
                  <div className="p-3 bg-[#13151F] border-b border-white/5 flex items-center justify-between text-xs text-white/60">
                    <span className="font-mono text-white/80">Perpustakaan - FormUtama.vb [Aktif Berjalan]</span>
                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      className="text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Buka Layar Penuh
                    </button>
                  </div>
                  <img
                    src={currentProjectScreenshot}
                    alt="Antarmuka Sistem Informasi Perpustakaan"
                    referrerPolicy="no-referrer"
                    className="w-full object-cover max-h-[480px] cursor-pointer"
                    onClick={() => setIsLightboxOpen(true)}
                  />
                  <div className="p-4 bg-[#0F1118] text-xs text-white/60 flex items-center justify-between">
                    <span>{featuredProject.screenshots[0].caption}</span>
                    <span className="text-white/40">Resolusi Tinggi</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Lightbox / Layar Penuh */}
      {isLightboxOpen && (
        <div 
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium flex items-center gap-1"
            >
              <span>Tutup</span>
              <span>&times;</span>
            </button>
            <img
              src={currentProjectScreenshot}
              alt="Tangkapan Layar Penuh"
              className="max-h-[80vh] w-auto rounded-xl object-contain border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-xs text-white/70 mt-3 text-center">
              {featuredProject.screenshots[0].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
