import React from "react";
import { 
  PieChart, 
  Users, 
  BookOpen, 
  Clock, 
  ClipboardCheck, 
  Star, 
  Calendar, 
  HeartHandshake, 
  Wand2, 
  Bot, 
  Printer, 
  Settings, 
  GraduationCap,
  Trash2,
  X,
  FileCheck,
  LogOut,
  MonitorPlay,
  TestTube,
  StickyNote,
  Archive
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onLogout?: () => void;
  userRole?: 'guru' | 'admin' | null;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
  onLogout,
  userRole
}) => {
  const navItems = [
    {
      group: "MENU UTAMA",
      items: [
        { id: "dashboard", label: "Dashboard", icon: PieChart },
        { id: "siswa", label: "Kelola Siswa", icon: Users },
        ...(userRole === 'admin' ? [{ id: "kelolaguru", label: "Kelola Guru", icon: Users }] : []),
        { id: "mapel", label: "Kelola Mapel", icon: BookOpen },
        ...(userRole === 'admin' ? [{ id: "kontrolsandi", label: "Kontrol Sandi Akun", icon: Settings }] : []),
      ]
    },
    {
      group: "AKADEMIK",
      items: [
        { id: "jadwal", label: "Jadwal Mengajar", icon: Clock },
        { id: "absensi", label: "Input Absensi", icon: ClipboardCheck },
        { id: "penilaian", label: "Input Penilaian", icon: Star },
        { id: "agenda", label: "Agenda Mengajar", icon: Calendar },
        { id: "catatan", label: "Catatan Penting Guru", icon: StickyNote },
        { id: "arsip", label: "Arsip Perangkat Pembelajaran", icon: Archive },
        { id: "bimbingan", label: "Bimbingan Guru Wali", icon: HeartHandshake },
      ]
    },
    {
      group: "KECERDASAN BUATAN (AI)",
      items: [
        { id: "perangkat_ai", label: "Generator Perangkat Ajar AI", icon: FileCheck, highlight: true },
        { id: "modulai", label: "Modul Ajar AI", icon: Wand2, highlight: true },
        { id: "asistenai", label: "Asisten Guru AI", icon: Bot, highlight: true },
        { id: "bahanajar", label: "Bahan Ajar Digital", icon: MonitorPlay, highlight: true, externalUrl: "https://ajargen.vercel.app/" },
        { id: "pabriksoal", label: "Pabrik Soal", icon: TestTube, highlight: true, externalUrl: "https://pabriksoal.netlify.app/" },
      ]
    },
    {
      group: "SISTEM & OUTPUT",
      items: [
        { id: "laporan", label: "Pusat Laporan", icon: Printer },
        { id: "pengaturan", label: "Pengaturan & Profil", icon: Settings },
        ...(userRole === 'admin' ? [{ id: "resetdb", label: "Hapus Isi Database", icon: Trash2, dangerous: true }] : []),
      ]
    }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 lg:w-64 bg-slate-900 text-slate-100 flex flex-col shadow-2xl transition-transform duration-300 rounded-r-2xl lg:rounded-r-none lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center text-slate-950 font-black shadow-lg">
              <GraduationCap className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white block leading-none">
                SATU GURU
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Sistem Administrasi Terpadu Guru</span>
            </div>
          </div>

          <button 
            className="lg:hidden text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95 transition-all"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar pb-safe">
          {navItems.map((group, idx) => (
            <div key={idx} className="space-y-1">
              <p className="px-3 text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2">
                {group.group}
              </p>
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all duration-150 active:scale-[0.98] min-h-[44px] ${
                      isActive
                        ? (item as any).dangerous
                          ? "bg-red-600 text-white shadow-md font-bold"
                          : item.highlight
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md font-bold"
                          : "bg-blue-600 text-white shadow-md font-bold"
                        : (item as any).dangerous
                        ? "text-red-400 hover:bg-red-950/50 hover:text-red-300"
                        : item.highlight
                        ? "text-amber-300 hover:bg-slate-800 hover:text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : (item as any).dangerous ? "text-red-400" : item.highlight ? "text-amber-400" : "text-slate-400"}`} />
                    <span className="truncate">{item.label}</span>
                    {item.highlight && (
                      <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 shrink-0">
                        AI
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 flex flex-col gap-3 bg-slate-950/50">
          {onLogout && (
            <button 
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-red-950/50 text-slate-300 hover:text-red-400 rounded-xl text-xs font-bold transition-colors border border-slate-700 hover:border-red-900/50 active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              Keluar dari Aplikasi
            </button>
          )}
          <div className="text-center text-[11px] text-slate-400">
            <p className="font-semibold text-slate-300">SATU GURU &copy; 2026</p>
            <p className="text-[10px] text-slate-500 mt-0.5">Sistem Administrasi Terpadu Guru</p>
          </div>
        </div>
      </aside>
    </>
  );
};
