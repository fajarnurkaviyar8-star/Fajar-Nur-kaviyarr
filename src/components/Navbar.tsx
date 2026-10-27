import { useState } from 'react';
import { Mail, MessageSquare, Menu, X, FileText, Sparkles, Camera } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenGuide: () => void;
  onOpenPhotoModal: () => void;
}

export function Navbar({ onOpenCV, onOpenGuide, onOpenPhotoModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B0C10]/85 border-b border-white/5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zona 1: Logo Nama Fajar */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#hero"
            className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-white whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            <span>Fajar</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5252]"></span>
          </a>
          <span className="text-xs text-white/30 hidden sm:inline">|</span>
          <a
            href={`mailto:${contactInfo.email}`}
            className="hidden sm:flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 transition-colors whitespace-nowrap"
            title="Kirim Email ke Fajar"
          >
            <Mail className="w-3.5 h-3.5 text-[#FF5252]" />
            <span className="truncate max-w-[200px]">{contactInfo.email}</span>
          </a>
        </div>

        {/* Zona 2: Tautan Navigasi Satu Baris */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/60">
          <a href="#about" className="hover:text-white transition-colors whitespace-nowrap">
            Tentang
          </a>
          <a href="#experience" className="hover:text-white transition-colors whitespace-nowrap">
            Pengalaman
          </a>
          <a href="#project" className="hover:text-white transition-colors whitespace-nowrap">
            Proyek
          </a>
          <a href="#skills" className="hover:text-white transition-colors whitespace-nowrap">
            Keterampilan
          </a>
          <a href="#hobbies" className="hover:text-white transition-colors whitespace-nowrap">
            Minat
          </a>
          <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap">
            Kontak
          </a>
        </nav>

        {/* Zona 3: Tombol Aksi Utama */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenPhotoModal}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all whitespace-nowrap"
            title="Ganti foto profil langsung di website"
          >
            <Camera className="w-3.5 h-3.5 text-[#FF5252]" />
            <span>Ganti Foto</span>
          </button>

          <button
            onClick={onOpenCV}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF5252]" />
            <span>Lihat CV</span>
          </button>

          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#FF5252] to-[#FF3366] rounded-full hover:shadow-lg hover:shadow-[#FF5252]/25 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hubungi</span>
          </a>

          {/* Tombol menu seluler */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white rounded-lg focus:outline-none"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu dropdown tampilan seluler */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1117] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2.5 text-sm font-medium text-white/70">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Tentang Fajar
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Pengalaman Kerja & PKL
            </a>
            <a
              href="#project"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Proyek Aplikasi Perpustakaan
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Keterampilan Teknis
            </a>
            <a
              href="#hobbies"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Minat & Hobi
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-3 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Kontak & WhatsApp
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex-1 inline-flex justify-center items-center gap-1.5 py-2 px-3 text-xs font-medium text-white bg-white/10 rounded-lg hover:bg-white/15"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5252]" />
              Lihat CV (PDF)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="inline-flex justify-center items-center gap-1.5 py-2 px-3 text-xs font-medium text-white/80 bg-white/5 rounded-lg hover:bg-white/10"
              title="Panduan Kelola Portofolio"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Panduan
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
