import { ContactInfo, EducationItem, ExperienceItem, ProjectItem, SkillItem, HobbyItem } from '../types/portfolio';

export const contactInfo: ContactInfo = {
  name: 'Fajar Nur Kaviyar',
  title: 'Mahasiswa Sistem Informasi & Pengembang Pemula',
  email: 'fajarnurkaviyar8@gmail.com',
  phoneWhatsapp: '0877 1444 2352',
  whatsappUrl: 'https://wa.me/6287714442352',
  locationGeneral: 'Majenang, Jawa Tengah, Indonesia',
  university: 'Universitas Komputer Majenang (UNIKMA)',
  schoolOrigin: 'SMK Farmasi Majenang',
};

export const heroBio = {
  greeting: 'Halo, Saya',
  name: 'Fajar',
  fullName: 'Fajar Nur Kaviyar',
  role: 'Mahasiswa Sistem Informasi & Pengembang Pemula',
  shortSummary: 'Mahasiswa Program Studi Sistem Informasi di Universitas Komputer Majenang (UNIKMA) dengan ketertarikan mendalam pada teknologi, perancangan aplikasi desktop & basis data, serta dedikasi untuk terus belajar dan mengasah keterampilan di era digital.',
  locationBadge: 'Berdomisili di Majenang, Indonesia',
  defaultHeroImage: '/src/assets/images/hero_portrait_fajar_1792673812981.jpg',
};

export const educationList: EducationItem[] = [
  {
    institution: 'Universitas Komputer Majenang (UNIKMA)',
    degreeOrMajor: 'S1 Program Studi Sistem Informasi',
    period: 'Pendidikan Saat Ini',
    location: 'Majenang, Cilacap',
    description: 'Mendalami analisis kebutuhan sistem informasi, pemodelan basis data terstruktur, pemrograman aplikasi, serta penerapan teknologi informasi untuk mendukung efisiensi operasional organisasi.',
    highlights: [
      'Fokus studi pada analisis sistem dan perancangan basis data',
      'Aktif mengeksplorasi pemrograman dan arsitektur aplikasi',
      'Mengembangkan kemampuan pemecahan masalah melalui studi kasus nyata'
    ]
  },
  {
    institution: 'SMK Farmasi Majenang',
    degreeOrMajor: 'Pendidikan Menengah Kejuruan',
    period: 'Alumni',
    location: 'Majenang, Cilacap',
    description: 'Menempuh pendidikan kejuruan yang menanamkan kedisiplinan, ketelitian, etika kerja profesional, dan kemampuan kerja sama tim yang solid.',
    highlights: [
      'Berhasil merancang dan membangun proyek aplikasi perpustakaan berbasis desktop',
      'Menyelesaikan Praktik Kerja Lapangan (PKL) dengan performa memuaskan',
      'Fondasi ketelitian dan tanggung jawab tinggi dalam menyelesaikan tugas'
    ]
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'mulya-mediatama',
    title: 'Praktik Kerja Lapangan (PKL)',
    companyOrContext: 'CV. Mulya Mediatama Advertising',
    type: 'Pengalaman PKL',
    location: 'Majenang',
    description: 'Mengikuti program Praktik Kerja Lapangan di industri percetakan dan media periklanan, mempelajari alur kerja riil produksi media promosi visual dari tahap pra-cetak hingga penyelesaian akhir.',
    activities: [
      'Melakukan proses penyelesaian akhir (finishing) spanduk/banner cetak dengan kerapian dan standar mutu yang ditentukan.',
      'Membantu proses penyelesaian akhir stiker promosi, pemotongan, dan pengemasan materi cetak.',
      'Mencoba membuat rancangan desain spanduk menggunakan perangkat lunak grafis CorelDRAW.',
      'Mengenal dan memahami siklus pengerjaan produk percetakan komersial dan materi promosi publik.'
    ],
    imageSrc: '/src/assets/images/advertising_work_showcase_1792673813950.jpg'
  }
];

export const featuredProject: ProjectItem = {
  id: 'perpustakaan-desktop',
  title: 'Aplikasi Sistem Informasi Peminjaman Buku Perpustakaan',
  subtitle: 'Aplikasi Desktop Berbasis Windows untuk Digitalisasi Layanan Perpustakaan Sekolah',
  category: 'Aplikasi Desktop & Basis Data',
  period: 'Proyek Sekolah Menengah Kejuruan (SMK)',
  techStack: [
    'Visual Studio 2012',
    'Visual Basic .NET (VB.NET)',
    'Microsoft Access 2013',
    'Koneksi OLE DB / Kueri SQL',
    'Windows Forms / Laporan Terstruktur'
  ],
  description: 'Aplikasi desktop ini dirancang dan dibangun secara mandiri ketika masih bersekolah di SMK untuk mengatasi pencatatan manual buku dan transaksi peminjaman di perpustakaan sekolah. Memanfaatkan Visual Studio 2012 dengan bahasa Visual Basic .NET serta Microsoft Access 2013 sebagai basis data relasional lokal yang ringan dan andal.',
  features: [
    {
      title: 'Autentikasi & Hak Akses Petugas',
      description: 'Sistem masuk (login) dengan verifikasi akun petugas/admin perpustakaan untuk memastikan hanya personil berwenang yang dapat mengakses dan mengubah data inventaris serta transaksi.'
    },
    {
      title: 'Manajemen Data Buku (Tambah, Lihat, Ubah, Hapus / CRUD)',
      description: 'Fitur Tambah, Lihat, Ubah, dan Hapus data buku lengkap dengan kode buku, judul, pengarang, penerbit, tahun terbit, dan ketersediaan stok di rak.'
    },
    {
      title: 'Pengelolaan Data Anggota / Siswa',
      description: 'Pencatatan data siswa peminjam meliputi NISN, nama lengkap, kelas, jurusan, nomor kontak, serta riwayat buku yang sedang dipinjam.'
    },
    {
      title: 'Pencatatan Transaksi Peminjaman & Pengembalian',
      description: 'Sistem pencatatan transaksi terintegrasi yang menghitung tanggal peminjaman, batas tanggal jatuh tempo pengembalian, status buku, dan verifikasi ketersediaan stok buku secara otomatis.'
    }
  ],
  databaseSchema: [
    {
      tableName: 'tbl_buku',
      fields: ['Kode_Buku (Kunci Utama / PK)', 'Judul_Buku', 'Pengarang', 'Penerbit', 'Tahun', 'Jumlah_Stok'],
      purpose: 'Menyimpan seluruh katalog buku dan jumlah eksemplar yang tersedia di perpustakaan.'
    },
    {
      tableName: 'tbl_siswa',
      fields: ['NISN (Kunci Utama / PK)', 'Nama_Siswa', 'Kelas', 'Jurusan', 'Status_Aktif'],
      purpose: 'Menampung data keanggotaan siswa peminjam yang sah.'
    },
    {
      tableName: 'tbl_peminjaman',
      fields: ['No_Pinjam (Kunci Utama / PK)', 'NISN (Kunci Tamu / FK)', 'Kode_Buku (Kunci Tamu / FK)', 'Tgl_Pinjam', 'Tgl_Kembali', 'Status'],
      purpose: 'Mencatat transaksi aktif dan histori sirkulasi buku sekolah.'
    },
    {
      tableName: 'tbl_admin',
      fields: ['ID_Admin (Kunci Utama / PK)', 'Username', 'Kata_Sandi', 'Nama_Lengkap'],
      purpose: 'Mengamankan data akun masuk petugas perpustakaan.'
    }
  ],
  screenshots: [
    {
      url: '/src/assets/images/library_app_mockup_1792673814310.jpg',
      caption: 'Tampilan antarmuka katalog buku dan status sirkulasi transaksi peminjaman pada sistem desktop.'
    }
  ]
};

export const skillsData: SkillItem[] = [
  {
    name: 'Visual Basic .NET (VB.NET)',
    category: 'Bahasa & Basis Data',
    levelDescription: 'Pemrograman desktop antarmuka Windows Forms, penanganan aksi (event handling), koneksi basis data OLE DB, dan logika alur sistem informasi.',
    iconName: 'Code2'
  },
  {
    name: 'Microsoft Access 2013',
    category: 'Bahasa & Basis Data',
    levelDescription: 'Perancangan tabel relasional, kueri basis data SQL (SELECT, INSERT, UPDATE, DELETE), kunci utama (primary key), dan integrasi dengan aplikasi desktop.',
    iconName: 'Database'
  },
  {
    name: 'MySQL',
    category: 'Bahasa & Basis Data',
    levelDescription: 'Pemahaman konsep RDBMS, pembuatan basis data, manipulasi data via kueri SQL, serta relasi kunci antar-tabel.',
    iconName: 'Server'
  },
  {
    name: 'Visual Studio 2012',
    category: 'Alat Pengembangan',
    levelDescription: 'Lingkungan pengembangan terpadu (IDE) untuk perancangan antarmuka visual Windows Forms, uji kode (debugging), serta manajemen berkas solusi aplikasi.',
    iconName: 'Laptop'
  },
  {
    name: 'HTML & CSS (Tingkat Dasar)',
    category: 'Alat Pengembangan',
    levelDescription: 'Memahami struktur dasar kerangka web (HTML5) dan penataan gaya tampilan sederhana (CSS3) untuk antarmuka halaman web. (Tingkat Dasar)',
    note: 'Kemampuan berada pada tingkat dasar yang sedang aktif dipelajari dan dikembangkan.',
    iconName: 'Globe'
  },
  {
    name: 'Microsoft Word',
    category: 'Perkantoran & Produktivitas',
    levelDescription: 'Penyusunan dokumen formal, penulisan laporan praktikum, dokumentasi teknis sistem informasi, serta perapian tata letak dokumen.',
    iconName: 'FileText'
  }
];

export const hobbiesData: HobbyItem[] = [
  {
    title: 'Berenang',
    subtitle: 'Kesehatan Fisik & Disiplin Diri',
    description: 'Aktivitas rutin untuk menjaga kebugaran tubuh, stamina, dan melatih ketahanan serta fokus mental dalam menjalani rutinitas akademik sehari-hari.',
    iconName: 'Activity',
    tag: 'Olahraga & Kesehatan'
  },
  {
    title: 'Teknologi & Pengembangan Aplikasi',
    subtitle: 'Eksplorasi & Logika Pemrograman',
    description: 'Senang mempelajari perkembangan perangkat lunak terbaru, mengeksplorasi cara kerja sistem informasi modern, serta mencari tahu bagaimana teknologi dapat menyelesaikan masalah sehari-hari.',
    iconName: 'Cpu',
    tag: 'Eksplorasi Teknologi'
  },
  {
    title: 'Pengelolaan Keuangan & Pemahaman Finansial',
    subtitle: 'Aktivitas Pembelajaran Pribadi',
    description: 'Mempunyai minat belajar pribadi untuk memahami cara mengelola anggaran secara teratur, mengenal konsep literasi keuangan dasar, dan mempelajari prinsip-prinsip instrumen investasi secara bertanggung jawab.',
    iconName: 'TrendingUp',
    tag: 'Literasi Keuangan Pribadi'
  }
];
