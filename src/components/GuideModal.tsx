import { X, BookOpen, Camera, Image as ImageIcon, Edit3, CheckCircle2, FolderTree } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GuideModal({ isOpen, onClose }: GuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-3xl bg-[#11131B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Kepala Modal */}
        <div className="p-5 bg-[#181B26] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Panduan Penggunaan & Pembaruan Portofolio
              </h3>
              <p className="text-xs text-white/50">
                Petunjuk praktis untuk Fajar Nur Kaviyar (Mahasiswa Sistem Informasi)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Tutup dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Isi Panduan */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-white/80">
          
          {/* Bagian 1: Mengganti SEMUA Foto Langsung di Website */}
          <div className="p-5 rounded-2xl bg-[#0B0C10] border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Camera className="w-4 h-4 text-[#FF5252]" />
              <h4>1. Cara Mengganti SEMUA Foto Langsung di Website</h4>
            </div>
            <p className="text-white/70 leading-relaxed">
              Kini <strong>seluruh foto dan gambar</strong> di website dapat Anda ubah langsung tanpa perlu mengedit baris kode program:
            </p>
            <ul className="space-y-2 text-white/75 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-[#FF5252] font-bold">&bull;</span>
                <span>
                  <strong>Foto Profil Wajah Asli:</strong> Klik tombol <em>"Ganti / Unggah Foto Anda"</em> di bawah foto profil pada halaman depan.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF5252] font-bold">&bull;</span>
                <span>
                  <strong>Foto PKL Percetakan (CV. Mulya Mediatama):</strong> Pada kartu pengalaman kerja Praktik Kerja Lapangan, klik tombol <em>"Ganti Foto"</em> di pojok kanan atas gambar.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF5252] font-bold">&bull;</span>
                <span>
                  <strong>Tangkapan Layar Proyek Perpustakaan:</strong> Pada bagian Proyek Unggulan, klik tombol <em>"Ganti / Unggah Foto Proyek"</em>.
                </span>
              </li>
            </ul>
            <p className="text-[11px] text-cyan-400/90 pt-1">
              * Seluruh foto yang Anda pilih dari komputer atau ponsel akan otomatis tersimpan di peramban dan tetap ada meski halaman dimuat ulang. Anda juga dapat mengembalikannya ke gambar bawaan kapan pun!
            </p>
          </div>

          {/* Bagian 2: Memperbarui Informasi CV & Data Diri */}
          <div className="p-5 rounded-2xl bg-[#0B0C10] border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Edit3 className="w-4 h-4 text-emerald-400" />
              <h4>2. Memperbarui Informasi CV dan Teks Website</h4>
            </div>
            <p className="text-white/70 leading-relaxed">
              Seluruh teks, riwayat pendidikan, pengalaman kerja, daftar keahlian, dan kontak tersentralisasi di dalam <strong>SATU berkas data utama</strong>:
            </p>
            <div className="p-3 bg-white/5 rounded-xl font-mono text-xs text-white/90 border border-white/10">
              📁 src/data/portfolioData.ts
            </div>
            <p className="text-white/70 leading-relaxed">
              Mahasiswa pemula tidak perlu mencari-cari kode di banyak berkas. Cukup buka berkas tersebut untuk mengedit nomor WhatsApp, email, menambah pengalaman baru, atau menambahkan keterampilan baru.
            </p>
          </div>

          {/* Bagian 3: Mengunduh CV sebagai PDF */}
          <div className="p-5 rounded-2xl bg-[#0B0C10] border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <h4>3. Fitur Unduh CV dalam Format PDF</h4>
            </div>
            <p className="text-white/70 leading-relaxed">
              Fitur CV PDF telah diprogram dengan standar cetak resmi. Cukup klik tombol <strong>"Lihat CV"</strong> pada navigasi atas atau <strong>"Buka & Unduh CV Lengkap ↓"</strong> di bagian biodata, lalu tekan tombol <strong>"Cetak / Unduh PDF"</strong>. Di kotak dialog cetak peramban Anda, pilih <em>"Simpan sebagai PDF (Save as PDF)"</em>. Dokumen CV akan tersimpan bersih dengan format kertas putih formal tanpa elemen gelap website.
            </p>
          </div>

          {/* Bagian 4: Struktur Berkas Proyek */}
          <div className="p-5 rounded-2xl bg-[#0B0C10] border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <FolderTree className="w-4 h-4 text-indigo-400" />
              <h4>4. Struktur Berkas Proyek yang Rapi</h4>
            </div>
            <pre className="p-3 bg-black/60 rounded-xl font-mono text-[11px] text-white/80 overflow-x-auto">
{`src/
├── data/
│   └── portfolioData.ts    <-- Pusat data diri, pengalaman, proyek, dan CV
├── types/
│   └── portfolio.ts        <-- Definisi tipe data TypeScript dalam bahasa Indonesia
├── components/
│   ├── Navbar.tsx          <-- Navigasi atas (Top Bar Contract)
│   ├── Hero.tsx            <-- Tampilan utama bertema gelap & aksen neon
│   ├── AboutSection.tsx    <-- Biodata diri & riwayat pendidikan
│   ├── ExperienceSection.tsx <-- CV Mulya Mediatama (dengan tombol ganti foto)
│   ├── ProjectSection.tsx  <-- Aplikasi Perpustakaan Desktop (dengan tombol ganti tangkapan layar)
│   ├── SkillsSection.tsx   <-- Keterampilan teknis (tanpa % fiktif)
│   ├── HobbiesSection.tsx  <-- Berenang, teknologi & finansial
│   ├── ContactSection.tsx  <-- Tombol WhatsApp & Email resmi
│   ├── CVModal.tsx         <-- Tampilan CV lengkap & tombol cetak PDF
│   ├── MediaManagerModal.tsx <-- Pengunggah untuk foto profil, PKL, dan proyek
│   ├── GuideModal.tsx      <-- Panduan praktis ini
│   └── Footer.tsx          <-- Kaki halaman bersih & tautan
├── App.tsx                 <-- Komponen utama perakit aplikasi
└── index.css               <-- Tailwind CSS & aturan cetak PDF`}
            </pre>
          </div>

        </div>

        {/* Tombol Bawah */}
        <div className="p-4 bg-[#181B26] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
          >
            Mengerti & Tutup Panduan
          </button>
        </div>

      </div>
    </div>
  );
}
