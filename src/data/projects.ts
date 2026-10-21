export type Project = {
  id: string
  number: string
  title: string
  subtitle: string
  category: 'Business Systems' | 'Digital Experience' | 'Creative'
  year: string
  description: string
  accent: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'manage-unit',
    number: '01',
    title: 'Masterbus Manage Unit',
    subtitle: 'Fleet documentation system',
    category: 'Business Systems',
    year: '2026',
    description: 'Sistem dokumentasi kendaraan untuk membantu tim menemukan folder unit melalui nomor NB, status, dan informasi terkait.',
    accent: '#dbe6ed',
    tags: ['Dashboard', 'Search & filters', 'Documentation'],
  },
  {
    id: 'payroll',
    number: '02',
    title: 'Masterbus Payroll',
    subtitle: 'Payroll & attendance workflow',
    category: 'Business Systems',
    year: '2026',
    description: 'Aplikasi internal untuk data karyawan, absensi, lembur, dan alur perhitungan payroll.',
    accent: '#e5dce8',
    tags: ['Payroll', 'Attendance', 'Reporting'],
  },
  {
    id: 'sigudang',
    number: '03',
    title: 'SIGUDANG',
    subtitle: 'Inventory management',
    category: 'Business Systems',
    year: '2026',
    description: 'Antarmuka informasi gudang dengan ringkasan stok, aktivitas barang, dan indikator kebutuhan pemesanan.',
    accent: '#d9e3dc',
    tags: ['Inventory', 'Transactions', 'Low-stock alerts'],
  },
  {
    id: 'luma',
    number: '04',
    title: 'LUMA',
    subtitle: 'Moments worth keeping',
    category: 'Digital Experience',
    year: '2026',
    description: 'Konsep pengalaman berbagi foto untuk acara, dirancang agar tamu dapat mengabadikan momen dalam satu album.',
    accent: '#e9d4a9',
    tags: ['Event experience', 'Photo sharing', 'Branding'],
  },
  {
    id: 'wedding',
    number: '05',
    title: 'Fabi & Oca',
    subtitle: 'Wedding invitation experience',
    category: 'Creative',
    year: '2026',
    description: 'Undangan pernikahan digital dengan tipografi editorial, fotografi sinematik, dan detail botani yang hangat.',
    accent: '#ead8ce',
    tags: ['Art direction', 'Editorial design', 'Motion'],
  },
  {
    id: 'masterbus-home',
    number: '06',
    title: 'Masterbus Dashboard',
    subtitle: 'A home for business tools',
    category: 'Business Systems',
    year: '2026',
    description: 'Homepage yang menghubungkan berbagai tools internal dalam satu pintu masuk yang konsisten.',
    accent: '#d9e2f3',
    tags: ['Navigation', 'Dashboard', 'Design system'],
  },
]
