import { useState } from 'react';
import { MessageSquare, Mail, MapPin, Send, Phone, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState('umum');
  const [customNote, setCustomNote] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getWhatsappUrl = () => {
    let text = 'Halo Fajar Nur Kaviyar, ';
    if (selectedTopic === 'proyek') {
      text += 'saya tertarik berdiskusi mengenai proyek sistem informasi / pengembangan aplikasi.';
    } else if (selectedTopic === 'studi') {
      text += 'saya ingin berdiskusi mengenai studi di UNIKMA atau portofolio Anda.';
    } else if (selectedTopic === 'kolaborasi') {
      text += 'saya ingin mengajak kolaborasi atau ada tawaran kegiatan/pekerjaan.';
    } else {
      text += 'salam kenal! Saya melihat website portofolio Anda.';
    }

    if (customNote.trim()) {
      text += ` Catatan tambahan: ${customNote.trim()}`;
    }

    return `https://wa.me/6287714442352?text=${encodeURIComponent(text)}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Judul Bagian */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5252] block mb-2">
            Terhubung & Diskusi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Hubungi Fajar Nur Kaviyar
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-3 leading-relaxed">
            Terbuka untuk diskusi akademik, kesempatan magang, kolaborasi pengembangan perangkat lunak, maupun pertukaran wawasan seputar teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kartu Kontak Langsung (Kiri) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Kartu WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/5 hover:border-emerald-500/30 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Respon Cepat
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">WhatsApp Langsung</h3>
                <p className="text-xs text-white/50 mt-0.5">Buka percakapan chat WhatsApp tanpa perantara</p>
                <p className="text-lg font-mono font-bold text-emerald-400 mt-2">
                  {contactInfo.phoneWhatsapp}
                </p>
              </div>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-950/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Buka Chat WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Kartu Email */}
            <div className="p-6 rounded-2xl bg-[#0F1118] border border-white/5 hover:border-[#FF5252]/30 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#FF5252]/10 border border-[#FF5252]/20 flex items-center justify-center text-[#FF5252]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-[11px] font-medium text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full border border-white/10 transition-colors"
                >
                  {copiedEmail ? 'Disalin ke Papan Klip!' : 'Salin Email'}
                </button>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">Email Resmi</h3>
                <p className="text-xs text-white/50 mt-0.5">Untuk korespondensi formal, tugas, atau kerja sama</p>
                <p className="text-sm font-mono font-medium text-white/90 mt-2 truncate">
                  {contactInfo.email}
                </p>
              </div>

              <a
                href={`mailto:${contactInfo.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#FF5252] to-[#FF3366] hover:brightness-110 rounded-xl transition-all shadow-lg shadow-[#FF5252]/20"
              >
                <Mail className="w-4 h-4" />
                <span>Buka Aplikasi Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Kartu Wilayah Domisili (Menghormati privasi) */}
            <div className="p-5 rounded-2xl bg-[#0F1118]/60 border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="text-white/40 block">Wilayah Domisili:</span>
                <span className="text-white/90 font-medium">{contactInfo.locationGeneral}</span>
              </div>
            </div>

          </div>

          {/* Penyusun Pesan Cepat untuk WhatsApp (Kanan) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0F1118] border border-white/10 space-y-6 shadow-xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                Kirim Pesan Terformat
              </span>
              <h3 className="text-lg font-bold text-white">
                Siapkan Pesan WhatsApp Otomatis
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1">
                Pilih topik pesan yang ingin Anda sampaikan agar Fajar dapat langsung membalas sesuai konteks.
              </p>
            </div>

            {/* Pilihan Topik */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-white/70 block">
                Topik Percakapan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'umum', label: '👋 Salam Kenal & Tanya Jawab' },
                  { id: 'proyek', label: '💻 Tanya Proyek Perpustakaan' },
                  { id: 'studi', label: '🎓 Perkuliahan UNIKMA / Sistem Informasi' },
                  { id: 'kolaborasi', label: '🤝 Tawaran Magang & Kolaborasi' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedTopic(item.id)}
                    className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                      selectedTopic === item.id
                        ? 'bg-white/10 border-[#FF5252] text-white shadow-sm'
                        : 'bg-white/[0.02] border-white/5 text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Kotak Catatan Khusus */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-white/70 block">
                Pesan atau Catatan Tambahan (Opsional):
              </label>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Tulis pesan atau pertanyaan spesifik yang ingin disampaikan ke Fajar..."
                rows={3}
                className="w-full rounded-xl bg-[#0B0C10] border border-white/10 p-3.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF5252] transition-colors resize-none"
              />
            </div>

            {/* Tombol Pemicu WhatsApp */}
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl transition-all shadow-lg shadow-emerald-950/50"
            >
              <Send className="w-4 h-4" />
              <span>Kirimkan Langsung ke WhatsApp Fajar</span>
            </a>

            <div className="text-[11px] text-white/40 text-center">
              Akan membuka aplikasi WhatsApp resmi pada perangkat Anda dengan pesan yang telah disusun secara rapi.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
