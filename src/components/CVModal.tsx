import { Printer, X, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, educationList, experienceList, featuredProject, skillsData, hobbiesData } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
      
      {/* Wadah Modal */}
      <div className="relative w-full max-w-4xl bg-[#11131B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Bilah Kontrol Atas (Disembunyikan saat dicetak ke PDF) */}
        <div className="no-print p-4 bg-[#181B26] border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5252]"></span>
            <h2 className="text-sm font-bold text-white tracking-tight">
              Daftar Riwayat Hidup (CV) &mdash; {contactInfo.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#FF5252] to-[#FF3366] hover:brightness-110 rounded-lg shadow-md transition-all"
              title="Cetak langsung atau simpan sebagai dokumen PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Unduh PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="Tutup formulir CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Konten CV Siap Cetak */}
        <div className="overflow-y-auto p-6 sm:p-10 text-white/90 space-y-8 bg-[#0D0F15] print:bg-white print:text-black print:p-8">
          
          {/* Kepala Dokumen CV */}
          <div className="border-b border-white/10 print:border-black/20 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-black">
                  {contactInfo.name}
                </h1>
                <p className="text-sm font-semibold text-[#FF5252] print:text-neutral-800 mt-1">
                  Mahasiswa Sistem Informasi &bull; Universitas Komputer Majenang (UNIKMA)
                </p>
              </div>

              {/* Data Kontak */}
              <div className="text-xs space-y-1 text-white/70 print:text-neutral-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FF5252] print:text-black" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                  <span>{contactInfo.phoneWhatsapp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  <span>{contactInfo.locationGeneral}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Profil Singkat */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5252] print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Ringkasan Profil
            </h2>
            <p className="text-xs sm:text-sm text-white/80 print:text-neutral-800 leading-relaxed">
              Mahasiswa aktif Program Studi Sistem Informasi di Universitas Komputer Majenang (UNIKMA) dengan latar belakang kejuruan dari SMK Farmasi Majenang. Memiliki ketertarikan tinggi pada pemrograman desktop, struktur basis data relasional, dan pengembangan sistem otomasi. Memiliki pengalaman kerja nyata dalam industri percetakan dan media periklanan melalui Praktik Kerja Lapangan (PKL) di CV. Mulya Mediatama Advertising yang menanamkan kedisiplinan kerja, ketelitian teknis, etos kerja tinggi, dan kerja sama tim.
            </p>
          </div>

          {/* 2. Riwayat Pendidikan */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5252] print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Riwayat Pendidikan
            </h2>
            <div className="space-y-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-white print:text-black text-sm">{edu.institution}</span>
                    <span className="text-white/50 print:text-neutral-600">{edu.period} &bull; {edu.location}</span>
                  </div>
                  <p className="text-xs font-semibold text-cyan-400 print:text-neutral-800">{edu.degreeOrMajor}</p>
                  <p className="text-xs text-white/70 print:text-neutral-700 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Pengalaman Kerja (PKL) */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5252] print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Pengalaman Kerja & Praktik Lapangan
            </h2>
            <div className="space-y-4">
              {experienceList.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-white print:text-black text-sm">{exp.companyOrContext}</span>
                    <span className="text-white/50 print:text-neutral-600">{exp.location}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#FF5252] print:text-neutral-800">{exp.title} ({exp.type})</p>
                  <p className="text-xs text-white/70 print:text-neutral-700 leading-relaxed">{exp.description}</p>
                  <ul className="list-disc list-inside text-xs text-white/70 print:text-neutral-700 space-y-0.5 pt-1">
                    {exp.activities.map((act, aIdx) => (
                      <li key={aIdx}>{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Proyek yang Pernah Dibuat */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5252] print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Proyek Sistem Informasi
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-bold text-white print:text-black text-sm">{featuredProject.title}</span>
                <span className="text-white/50 print:text-neutral-600">{featuredProject.period}</span>
              </div>
              <p className="text-xs font-semibold text-cyan-400 print:text-neutral-800">
                Teknologi: Visual Studio 2012, Visual Basic .NET (VB.NET), Microsoft Access 2013
              </p>
              <p className="text-xs text-white/70 print:text-neutral-700 leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="pt-1">
                <span className="text-[11px] font-semibold text-white/50 print:text-neutral-600 block mb-1">
                  Fitur Utama:
                </span>
                <ul className="list-disc list-inside text-xs text-white/70 print:text-neutral-700 space-y-0.5">
                  {featuredProject.features.map((f, fIdx) => (
                    <li key={fIdx}>
                      <strong>{f.title}:</strong> {f.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Keterampilan Teknis */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5252] print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Keterampilan Teknis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillsData.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded bg-white/[0.03] print:bg-neutral-100 border border-white/5 print:border-neutral-200">
                  <span className="font-bold text-white print:text-black block">{s.name}</span>
                  <span className="text-white/60 print:text-neutral-700 text-[11px]">{s.levelDescription}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Minat & Hobi */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5252] print:text-black border-b border-white/10 print:border-black/20 pb-1">
              Minat & Hobi
            </h2>
            <div className="space-y-1 text-xs text-white/75 print:text-neutral-800">
              {hobbiesData.map((h, idx) => (
                <div key={idx}>
                  <strong>{h.title}:</strong> {h.description}
                </div>
              ))}
            </div>
          </div>

          {/* Catatan Petunjuk Cetak */}
          <div className="no-print pt-4 text-center text-xs text-white/40">
            Klik tombol <strong className="text-white">Cetak / Unduh PDF</strong> di pojok kanan atas untuk menyimpan CV ini langsung ke format PDF melalui peramban Anda dengan memilih opsi <em>"Simpan sebagai PDF (Save as PDF)"</em>.
          </div>

        </div>

      </div>
    </div>
  );
}
