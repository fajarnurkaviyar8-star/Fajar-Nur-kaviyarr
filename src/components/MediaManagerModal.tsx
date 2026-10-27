import { useState, useRef } from 'react';
import { X, Camera, Upload, RotateCcw, Check, Image as ImageIcon } from 'lucide-react';
import { PhotoTargetKey } from '../types/portfolio';
import { heroBio, featuredProject, experienceList } from '../data/portfolioData';

interface MediaManagerModalProps {
  isOpen: boolean;
  target: PhotoTargetKey;
  onClose: () => void;
  onUpdatePhoto: (target: PhotoTargetKey, newUrl: string) => void;
  currentPhoto: string;
  currentScreenshot: string;
  currentExpMulya: string;
}

export function MediaManagerModal({
  isOpen,
  target,
  onClose,
  onUpdatePhoto,
  currentPhoto,
  currentScreenshot,
  currentExpMulya,
}: MediaManagerModalProps) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getTargetMeta = () => {
    switch (target) {
      case 'photo':
        return {
          title: 'Ganti Foto Profil Wajah Asli',
          desc: 'Unggah foto wajah asli Anda dari komputer atau ponsel untuk menggantikan foto bawaan.',
          defaultUrl: heroBio.defaultHeroImage,
          currentActive: currentPhoto,
          storageKey: 'fajar_custom_photo',
          aspect: 'aspect-[3/4]',
        };
      case 'screenshot':
        return {
          title: 'Ganti Tangkapan Layar Aplikasi Perpustakaan',
          desc: 'Unggah tangkapan layar (screenshot) asli dari aplikasi Visual Studio 2012 / Access milik Anda.',
          defaultUrl: featuredProject.screenshots[0].url,
          currentActive: currentScreenshot,
          storageKey: 'fajar_custom_screenshot',
          aspect: 'aspect-video',
        };
      case 'exp-mulya':
        return {
          title: 'Ganti Foto Dokumentasi PKL Percetakan',
          desc: 'Unggah foto dokumentasi kegiatan PKL Anda di CV. Mulya Mediatama Advertising.',
          defaultUrl: experienceList[0].imageSrc,
          currentActive: currentExpMulya,
          storageKey: 'fajar_custom_exp_mulya',
          aspect: 'aspect-video',
        };
    }
  };

  const meta = getTargetMeta();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPreviewImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApply = () => {
    const targetUrl = previewImage || (urlInput.trim() ? urlInput.trim() : null);
    if (!targetUrl) return;

    onUpdatePhoto(target, targetUrl);
    try {
      localStorage.setItem(meta.storageKey, targetUrl);
    } catch {
      // Abaikan jika localStorage terbatas
    }

    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    onUpdatePhoto(target, meta.defaultUrl);
    try {
      localStorage.removeItem(meta.storageKey);
    } catch {
      // Abaikan jika ada galat
    }
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#11131B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-6">
        
        {/* Kepala Modal */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FF5252]/10 border border-[#FF5252]/20 flex items-center justify-center text-[#FF5252]">
              {target === 'photo' ? <Camera className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {meta.title}
              </h3>
              <p className="text-xs text-white/50">
                {meta.desc}
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

        {/* Pilihan Tab */}
        <div className="grid grid-cols-2 gap-2 bg-[#0B0C10] p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('upload')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'upload'
                ? 'bg-white/10 text-white shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Pilih Berkas dari Perangkat
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'url'
                ? 'bg-white/10 text-white shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Masukkan Tautan Gambar
          </button>
        </div>

        {/* Tab 1: Unggah dari berkas lokal */}
        {activeTab === 'upload' && (
          <div className="space-y-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/15 hover:border-[#FF5252]/50 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-white/[0.01] hover:bg-white/[0.03]"
            >
              <Upload className="w-8 h-8 text-[#FF5252] mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-semibold text-white">
                Klik untuk memilih foto dari komputer atau ponsel Anda
              </p>
              <p className="text-[11px] text-white/40 mt-1">
                Format yang didukung: JPG, PNG, WEBP. Tersimpan langsung di peramban Anda.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Masukan URL */}
        {activeTab === 'url' && (
          <div className="space-y-3">
            <label className="text-xs font-medium text-white/70 block">
              Alamat URL Gambar Langsung:
            </label>
            <input
              type="url"
              value={urlInput}
              onChange={(e) => {
                setUrlInput(e.target.value);
                setPreviewImage(e.target.value);
              }}
              placeholder="https://contoh-domain.com/foto-saya.jpg"
              className="w-full rounded-xl bg-[#0B0C10] border border-white/10 p-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF5252]"
            />
          </div>
        )}

        {/* Area Pratinjau */}
        <div className="p-4 rounded-xl bg-[#0B0C10] border border-white/5 space-y-2">
          <span className="text-[11px] font-semibold text-white/40 uppercase tracking-wider block">
            Pratinjau Tampilan:
          </span>
          <div className="flex items-center gap-4">
            <div className={`overflow-hidden border border-white/15 bg-black/50 ${
              target === 'photo' ? 'w-20 h-24 rounded-lg' : 'w-32 h-20 rounded-lg'
            }`}>
              <img
                src={previewImage || meta.currentActive}
                alt="Pratinjau"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs space-y-1">
              <span className="text-white font-medium block">
                {previewImage ? 'Foto baru siap diterapkan ke website' : 'Foto yang saat ini sedang aktif'}
              </span>
              <span className="text-white/40 text-[11px] block">
                Setelah diterapkan, gambar ini akan langsung menggantikan tampilan di website Anda.
              </span>
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/5">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Kembalikan ke Bawaan</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5"
            >
              Batal
            </button>
            <button
              onClick={handleApply}
              disabled={!previewImage && !urlInput}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                saveSuccess
                  ? 'bg-emerald-600 text-white'
                  : previewImage || urlInput
                  ? 'bg-gradient-to-r from-[#FF5252] to-[#FF3366] text-white hover:brightness-110 shadow-md'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              {saveSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Berhasil Diterapkan!</span>
                </>
              ) : (
                <span>Terapkan Gambar</span>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
