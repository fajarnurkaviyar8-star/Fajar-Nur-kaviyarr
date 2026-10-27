import { ArrowUp, Mail, Phone, Camera, Sparkles } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenGuide: () => void;
  onOpenCV: () => void;
  onOpenPhotoModal: () => void;
}

export function Footer({ onOpenGuide, onOpenCV, onOpenPhotoModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#08090D] py-12 text-xs text-white/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Baris Atas */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-base font-bold text-white tracking-tight">{contactInfo.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5252]"></span>
            </div>
            <p className="text-white/60">
              Mahasiswa Sistem Informasi &bull; Universitas Komputer Majenang (UNIKMA)
            </p>
          </div>

          {/* Navigasi cepat dan pemicu panduan */}
          <div className="flex flex-wrap items-center justify-center gap-5 font-medium text-white/70">
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#experience" className="hover:text-white transition-colors">Pengalaman</a>
            <a href="#project" className="hover:text-white transition-colors">Proyek</a>
            <a href="#skills" className="hover:text-white transition-colors">Keterampilan</a>
            <button onClick={onOpenCV} className="hover:text-white transition-colors">Daftar Riwayat Hidup (CV)</button>
            <button
              onClick={onOpenPhotoModal}
              className="hover:text-[#FF5252] transition-colors inline-flex items-center gap-1"
            >
              <Camera className="w-3 h-3 text-[#FF5252]" />
              <span>Ganti Foto</span>
            </button>
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 rounded-full hover:bg-cyan-900/50 transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              <span>Panduan Kelola</span>
            </button>
          </div>
        </div>

        {/* Baris Bawah */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>
            &copy; {new Date().getFullYear()} {contactInfo.name}. Portofolio Personal Mahasiswa Sistem Informasi.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{contactInfo.phoneWhatsapp}</span>
            </a>
            <span>&bull;</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-[#FF5252] transition-colors flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              <span>{contactInfo.email}</span>
            </a>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 group"
              title="Kembali ke atas"
            >
              <span>Atas</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
