import React from 'react';
import { 
  Presentation,
  Sparkles,
  Play,
  Users,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  FileEdit,
  BookMarked,
  Shield,
  FileText,
  Brain,
  Bot,
  Clock,
  MonitorPlay,
  TestTube,
  Printer,
  Sliders,
  Check
} from 'lucide-react';

interface LandingPageViewProps {
  onLoginClick: () => void;
}

export const LandingPageView: React.FC<LandingPageViewProps> = ({ onLoginClick }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);
  const [regData, setRegData] = React.useState({
    nama: "",
    noHp: "",
    email: "",
    jenisKelamin: "Laki-laki",
    paket: "Personal (Rp 99.000)"
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Admin, saya ingin mendaftar aplikasi SATU GURU.

Berikut data pendaftaran saya:
- Nama: ${regData.nama}
- No HP/WA: ${regData.noHp}
- Email: ${regData.email}
- Jenis Kelamin: ${regData.jenisKelamin}
- Pilihan Paket: ${regData.paket}

Untuk transfer pendaftaran dapat dilakukan ke:
BRI 022301014562531 AN. MUH IRFAN
DANA: 085255700081

Apabila sudah transfer silahkan konfirmasi ya kak, jangan lupa lampirkan tanda bukti, terima kasih semoga kakak dapat manfaat yang banyak dari aplikasi ini.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285255700081?text=${encodedMessage}`, "_blank");
    setIsRegisterModalOpen(false);
  };
  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
              <Presentation className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              SATU GURU
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#utama" className="hover:text-indigo-600 transition-colors">Utama</a>
            <a href="#akademik" className="hover:text-indigo-600 transition-colors">Akademik</a>
            <a href="#fitur-ai" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-indigo-600 font-semibold">
              <Sparkles className="w-4 h-4" /> Fitur AI
            </a>
            <a href="#output" className="hover:text-indigo-600 transition-colors">Sistem & Output</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsRegisterModalOpen(true)} className="hidden sm:block px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold rounded-xl transition-all">Daftar</button>
            <button onClick={onLoginClick} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02]">Masuk</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-indigo-500" /> Generasi Baru Administrasi Guru
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              SATU GURU
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              (Sistem Administrasi Terpadu Guru)<br/>Menekankan konsep one-stop solution di mana seluruh dokumen administrasi terintegrasi dalam satu pintu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button onClick={() => setIsRegisterModalOpen(true)} className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xl shadow-indigo-200 transition-all hover:scale-[1.02] text-center">
                Daftar Sekarang
              </button>
              <a href="#fitur-ai" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-xl transition-all text-center flex items-center justify-center gap-2">
                <Play className="w-4 h-4 text-indigo-600" fill="currentColor" /> Lihat Fitur AI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MENU UTAMA & AKADEMIK */}
      <section id="utama" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Manajemen Utama & Akademik</h2>
            <p className="text-slate-600 mt-2">Pusat kontrol harian untuk mengelola siswa, kelas, dan proses belajar mengajar secara terstruktur.</p>
          </div>

          {/* Grid Menu Utama */}
          <div className="mb-12">
            <h3 className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-4">📌 Menu Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Kelola Siswa</h4>
                <p className="text-slate-600 text-sm">Pangkalan data siswa komprehensif. Pantau biodata, rekam jejak akademis, hingga mutasi siswa secara *real-time*.</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Kelola Mapel</h4>
                <p className="text-slate-600 text-sm">Atur mata pelajaran, alokasi jam mengajar, serta capaian pembelajaran dasar dalam satu antarmuka yang intuitif.</p>
              </div>
            </div>
          </div>

          {/* Grid Menu Akademik */}
          <div id="akademik">
            <h3 className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-4">🎓 Menu Akademik</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Jadwal Mengajar</h4>
                <p className="text-slate-500 text-xs">Kalender pintar terintegrasi dengan pengingat otomatis sebelum kelas dimulai.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Input Presensi</h4>
                <p className="text-slate-500 text-xs">Absensi harian cepat. Rekapitulasi persentase kehadiran bulanan terhitung otomatis.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
                <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <FileEdit className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Input Penilaian</h4>
                <p className="text-slate-500 text-xs">Olah nilai formatif & sumatif secara otomatis menjadi format siap cetak untuk rapor.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
                <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <BookMarked className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Agenda Mengajar</h4>
                <p className="text-slate-500 text-xs">Buku batas harian digital untuk mencatat progres materi dan catatan penting kelas.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all ">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Bimbingan Guru Wali</h4>
                <p className="text-slate-500 text-xs">Modul khusus wali kelas untuk mencatat rekam konseling, catatan kedisiplinan, serta pencapaian prestasi siswa binaan.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Catatan Penting Guru</h4>
                <p className="text-slate-500 text-xs">Manajemen Catatan yang dapat dikelola dan diperbaharui oleh Guru, didalamnya menu ini ada Judul catatan, kategori, isi catatan dan Tindakan yang akan di lakukan oleh guru</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Arsip Perangkat Ajar</h4>
                <p className="text-slate-500 text-xs">Arsip repositori drive perangkat pembelajaran yang dapat diakses untuk melihat RPP yang telah di unggah di google drive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KECERDASAN BUATAN (AI) SECTION */}
      <section id="fitur-ai" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-semibold inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Artificial Intelligence Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">Kecerdasan Buatan Pendamping Guru</h2>
            <p className="text-slate-400 mt-2">Buat dokumen administrasi rumit secara instan dan presisi hanya dengan hitungan detik.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Generator Perangkat Ajar AI</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Buat 6 dokumen lengkap sekaligus: <span className="text-indigo-400 font-semibold">Analisis CP, TP, ATP, Prota, Prosem, dan KKTP</span> secara presisi.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium pt-4 border-t border-slate-700">
                <span className="bg-slate-700 px-2.5 py-1 rounded text-slate-200">PDF A4</span>
                <span className="bg-slate-700 px-2.5 py-1 rounded text-slate-200">Word (.doc)</span>
              </div>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Generator Modul Ajar (Deep Learning)</h3>
              <p className="text-slate-300 text-sm">
                Susun Modul Ajar berdiferensiasi dan mendalam sesuai struktur Kurikulum Merdeka hanya dari topik materi Anda.
              </p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Asisten AI Pendamping Guru</h3>
              <p className="text-slate-300 text-sm">
                Mitra diskusi cerdas 24/7 untuk konsultasi metode pedagogi, penanganan masalah siswa, dan ide aktivitas kelas.
              </p>
            </div>


            {/* AI Feature 5 */}
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Generator Bahan Ajar Digital</h3>
              <p className="text-slate-300 text-sm">
                Ubah ringkasan materi menjadi bahan tayang presentasi, komik edukasi, atau bahan bacaan interaktif.
              </p>
            </div>

            {/* AI Feature 6 */}
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-tr from-violet-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                <TestTube className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pabrik Soal AI</h3>
              <p className="text-slate-300 text-sm">
                Buat puluhan variasi soal latihan, Kuis, Sumatif (PG & Essay) lengkap dengan kunci jawaban dan rubrik penilaian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEM DAN OUTPUT */}
      <section id="output" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Sistem & Output Siap Cetak</h2>
            <p className="text-slate-600 mt-2">Seluruh dokumen yang dihasilkan rapi, standar resmi, dan siap pakai.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Pusat Laporan Resmi</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Cetak seluruh dokumen administrasi guru dalam format standar pemerintah. Dilengkapi dengan tata letak <strong>Kop Surat Sekolah</strong>, tabel yang rapi, dan kolom Tanda Tangan digital/manual.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Format PDF Siap Cetak Ukuran A4</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Tata Letak Tabel Rapi & Presisi</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Pengaturan Profil & Kop Sekolah</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Isi data profil dan identitas sekolah Anda satu kali. Sistem secara otomatis menerapkan identitas tersebut ke seluruh Kop Surat Laporan PDF, Kartu Pelajar, dan Nama Penandatangan.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Integrasi Otomatis ke Semua Dokumen</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Mendukung Logo Sekolah & TTD Digital</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION (CTA) */}
      <section className="py-20 bg-indigo-600 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Guru Hebat Fokus Mendidik,<br/>Biarkan AI yang Mengurus Administrasi.
          </h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            Hemat puluhan jam setiap bulannya. Bergabunglah dengan ribuan guru lainnya yang sudah beralih ke administrasi digital berbasis AI.
          </p>
        </div>
      </section>


      {/* HARGA SECTION */}
      <section id="harga" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Pilihan Harga</h2>
            <p className="text-slate-600 mt-2">Pilih paket yang paling sesuai dengan kebutuhan administrasi Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paket Personal */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Personal / Pribadi</h3>
              <p className="text-slate-500 text-sm mb-6">Cocok untuk penggunaan mandiri oleh satu orang guru.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">Rp 99.000</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-emerald-500" /> Akses penuh semua fitur administrasi
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-emerald-500" /> Asisten AI terintegrasi
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-emerald-500" /> Cetak laporan format PDF
                </li>
              </ul>
              <button onClick={() => { setRegData({...regData, paket: "Personal (Rp 99.000)"}); setIsRegisterModalOpen(true); }} className="w-full py-3 px-4 bg-indigo-50 text-indigo-700 font-bold rounded-xl text-center hover:bg-indigo-100 transition-colors">Daftar Paket Personal</button>
            </div>

            {/* Paket Sekolah */}
            <div className="bg-indigo-600 p-8 rounded-2xl border border-indigo-500 shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-white mb-2">Sekolah / Banyak Guru</h3>
              <p className="text-indigo-100 text-sm mb-6">Lisensi institusi untuk memfasilitasi banyak guru.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">Rp 199.000</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-indigo-50">
                  <Check className="w-5 h-5 text-indigo-200" /> Semua fitur pada paket Personal
                </li>
                <li className="flex items-center gap-3 text-indigo-50">
                  <Check className="w-5 h-5 text-indigo-200" /> Penggunaan multi-user (banyak guru)
                </li>
                <li className="flex items-center gap-3 text-indigo-50">
                  <Check className="w-5 h-5 text-indigo-200" /> Pemusatan data untuk manajemen sekolah
                </li>
              </ul>
              <button onClick={() => { setRegData({...regData, paket: "Sekolah (Rp 199.000)"}); setIsRegisterModalOpen(true); }} className="w-full py-3 px-4 bg-white text-indigo-600 font-bold rounded-xl text-center hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/20">Daftar Paket Sekolah</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              <Presentation className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">SATU GURU (Sistem Administrasi Terpadu Guru)</span>
          </div>
          <div className="text-sm">
            &copy; 2026 SATU GURU. Seluruh Hak Cipta Dilindungi.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6285255700081?text=Halo,%20saya%20ingin%20bertanya%20tentang%20aplikasi%20SATU%20GURU."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
        title="Hubungi kami via WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.06-.3-.15-1.265-.46-2.411-1.485-.893-.798-1.502-1.782-1.677-2.077-.175-.295-.018-.456.13-.603.136-.135.301-.344.451-.519.151-.175.201-.295.301-.495.101-.2.05-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.426.248-.705.248-1.31.173-1.426-.074-.115-.272-.18-.572-.33z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.002 22a9.96 9.96 0 01-5.112-1.408l-5.69 1.493 1.517-5.545A9.972 9.972 0 1112.002 22zM12 20a7.973 7.973 0 10-4.148-1.164l-.248.148-3.329.873.888-3.243-.162-.257A7.973 7.973 0 0012 20z" />
        </svg>
        <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">Hubungi via WhatsApp</span>
      </a>
      {/* REGISTER MODAL */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Formulir Pendaftaran</h3>
              <button onClick={() => setIsRegisterModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Nama Lengkap</label>
                  <input type="text" required value={regData.nama} onChange={(e) => setRegData({...regData, nama: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">No HP/WA</label>
                  <input type="tel" required value={regData.noHp} onChange={(e) => setRegData({...regData, noHp: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all" placeholder="08..." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Alamat Email</label>
                  <input type="email" required value={regData.email} onChange={(e) => setRegData({...regData, email: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all" placeholder="email@contoh.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Jenis Kelamin</label>
                  <select required value={regData.jenisKelamin} onChange={(e) => setRegData({...regData, jenisKelamin: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all">
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Pilihan Paket</label>
                  <select required value={regData.paket} onChange={(e) => setRegData({...regData, paket: e.target.value})} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all">
                    <option value="Personal (Rp 99.000)">Personal / Pribadi - Rp 99.000</option>
                    <option value="Sekolah (Rp 199.000)">Sekolah / Banyak Guru - Rp 199.000</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all text-center">
                    Kirim Pendaftaran
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
