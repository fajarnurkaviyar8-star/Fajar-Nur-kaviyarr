import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectSection } from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';
import { HobbiesSection } from './components/HobbiesSection';
import { ContactSection } from './components/ContactSection';
import { CVModal } from './components/CVModal';
import { MediaManagerModal } from './components/MediaManagerModal';
import { GuideModal } from './components/GuideModal';
import { Footer } from './components/Footer';
import { heroBio, featuredProject, experienceList, contactInfo } from './data/portfolioData';
import { PhotoTargetKey } from './types/portfolio';

export default function App() {
  // State untuk seluruh foto yang dapat diubah langsung di website
  const [currentPhoto, setCurrentPhoto] = useState<string>(heroBio.defaultHeroImage);
  const [currentScreenshot, setCurrentScreenshot] = useState<string>(featuredProject.screenshots[0].url);
  const [currentExpMulya, setCurrentExpMulya] = useState<string>(experienceList[0].imageSrc);
  
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [mediaModal, setMediaModal] = useState<{
    isOpen: boolean;
    target: PhotoTargetKey;
  }>({
    isOpen: false,
    target: 'photo',
  });

  // Muat gambar yang tersimpan di localStorage (jika sebelumnya sudah diubah oleh pengguna)
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('fajar_custom_photo');
      if (savedPhoto) setCurrentPhoto(savedPhoto);

      const savedScreenshot = localStorage.getItem('fajar_custom_screenshot');
      if (savedScreenshot) setCurrentScreenshot(savedScreenshot);

      const savedExpMulya = localStorage.getItem('fajar_custom_exp_mulya');
      if (savedExpMulya) setCurrentExpMulya(savedExpMulya);

      // Bersihkan data lama dekorasi jika ada di peramban
      localStorage.removeItem('fajar_custom_exp_dekorasi');
    } catch {
      // Abaikan jika ada pembatasan localStorage
    }
  }, []);

  const handleOpenMediaModal = (target: PhotoTargetKey) => {
    setMediaModal({ isOpen: true, target });
  };

  const handleCloseMediaModal = () => {
    setMediaModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleUpdateMedia = (target: PhotoTargetKey, newUrl: string) => {
    switch (target) {
      case 'photo':
        setCurrentPhoto(newUrl);
        break;
      case 'screenshot':
        setCurrentScreenshot(newUrl);
        break;
      case 'exp-mulya':
        setCurrentExpMulya(newUrl);
        break;
    }
  };

  const handleOpenChat = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(contactInfo.whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#E0E2EC] flex flex-col font-sans selection:bg-[#FF5252] selection:text-white">
      {/* Navigasi Bilah Atas */}
      <Navbar
        onOpenCV={() => setIsCVOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenPhotoModal={() => handleOpenMediaModal('photo')}
      />

      {/* Area Konten Utama */}
      <main className="flex-1">
        {/* Bagian Hero dengan tema gelap, cincin neon, dan foto profil */}
        <Hero
          currentPhoto={currentPhoto}
          onOpenPhotoModal={() => handleOpenMediaModal('photo')}
          onOpenCV={() => setIsCVOpen(true)}
          onOpenChat={handleOpenChat}
        />

        {/* Biodata & Riwayat Pendidikan */}
        <AboutSection />

        {/* Pengalaman Kerja Riil: Praktik Kerja Lapangan (PKL) CV. Mulya Mediatama Advertising */}
        <ExperienceSection
          currentExpMulya={currentExpMulya}
          onOpenMediaModal={handleOpenMediaModal}
        />

        {/* Proyek Unggulan: Sistem Informasi Peminjaman Buku Perpustakaan (Tangkapan layar dapat diubah) */}
        <ProjectSection
          currentProjectScreenshot={currentScreenshot}
          onOpenScreenshotModal={() => handleOpenMediaModal('screenshot')}
        />

        {/* Keterampilan Teknis & Perangkat Lunak (Tanpa persentase fiktif) */}
        <SkillsSection />

        {/* Minat & Hobi Personal */}
        <HobbiesSection />

        {/* Informasi Kontak & Pembuat Pesan Otomatis */}
        <ContactSection />
      </main>

      {/* Kaki Halaman (Footer) */}
      <Footer
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenPhotoModal={() => handleOpenMediaModal('photo')}
      />

      {/* Modal Daftar Riwayat Hidup / CV (Dapat langsung dicetak ke format PDF) */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      {/* Modal Pengelola Foto & Gambar di Website */}
      <MediaManagerModal
        isOpen={mediaModal.isOpen}
        target={mediaModal.target}
        onClose={handleCloseMediaModal}
        onUpdatePhoto={handleUpdateMedia}
        currentPhoto={currentPhoto}
        currentScreenshot={currentScreenshot}
        currentExpMulya={currentExpMulya}
      />

      {/* Modal Panduan Mahasiswa: Petunjuk Penggantian Foto & Pembaruan CV */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </div>
  );
}
