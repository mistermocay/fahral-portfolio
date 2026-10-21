export type Project = {
  id: string
  number: string
  title: string
  subtitle: string
  category: 'Business Systems' | 'Digital Experience' | 'Creative'
  year: string
  description: string
  image: string
  accent: string
  tags: string[]
  href: string
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
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=85',
    accent: '#dbe6ed',
    tags: ['Dashboard', 'Search & filters', 'Documentation'],
    href: '#contact',
  },
  {
    id: 'payroll',
    number: '02',
    title: 'Masterbus Payroll',
    subtitle: 'Payroll & attendance workflow',
    category: 'Business Systems',
    year: '2026',
    description: 'Aplikasi internal untuk data karyawan, absensi, lembur, dan alur perhitungan payroll.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85',
    accent: '#e5dce8',
    tags: ['Payroll', 'Attendance', 'Reporting'],
    href: '#contact',
  },
  {
    id: 'sigudang',
    number: '03',
    title: 'SIGUDANG',
    subtitle: 'Inventory management',
    category: 'Business Systems',
    year: '2026',
    description: 'Antarmuka informasi gudang dengan ringkasan stok, aktivitas barang, dan indikator kebutuhan pemesanan.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
    accent: '#d9e3dc',
    tags: ['Inventory', 'Transactions', 'Low-stock alerts'],
    href: '#contact',
  },
  {
    id: 'luma',
    number: '04',
    title: 'LUMA',
    subtitle: 'Moments worth keeping',
    category: 'Digital Experience',
    year: '2026',
    description: 'Konsep pengalaman berbagi foto untuk acara, dirancang agar tamu dapat mengabadikan momen dalam satu album.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=85',
    accent: '#e9d4a9',
    tags: ['Event experience', 'Photo sharing', 'Branding'],
    href: '#contact',
  },
  {
    id: 'wedding',
    number: '05',
    title: 'Fabi & Oca',
    subtitle: 'Wedding invitation experience',
    category: 'Creative',
    year: '2026',
    description: 'Undangan pernikahan digital dengan tipografi editorial, fotografi sinematik, dan detail botani yang hangat.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',
    accent: '#ead8ce',
    tags: ['Art direction', 'Editorial design', 'Motion'],
    href: '#contact',
  },
  {
    id: 'masterbus-home',
    number: '06',
    title: 'Masterbus Dashboard',
    subtitle: 'A home for business tools',
    category: 'Business Systems',
    year: '2026',
    description: 'Homepage yang menghubungkan berbagai tools internal dalam satu pintu masuk yang konsisten.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    accent: '#d9e2f3',
    tags: ['Navigation', 'Dashboard', 'Design system'],
    href: '#contact',
  },
]
