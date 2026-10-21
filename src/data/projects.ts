export type Project = {
  id: string
  number: string
  title: string
  subtitle: string
  category: 'Business Systems' | 'Digital Experience' | 'Creative'
  year: string
  description: string
  image: string
  gallery?: string[]
  href: string
  accent: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'payroll',
    number: '01',
    title: 'Payroll Management System',
    subtitle: 'For PT Master Artha Kharisma',
    category: 'Business Systems',
    year: '2026',
    description: 'Sistem dokumentasi kendaraan untuk membantu tim menemukan folder unit melalui nomor NB, status, dan informasi terkait.',
    image: 'https://i.vgy.me/RD2dth.png',
    gallery: ['https://i.vgy.me/GyWtvY.png'],
    href: '#contact',
    accent: '#dbe6ed',
    tags: ['Dashboard', 'Search & filters', 'Documentation'],
  },
  {
    id: 'unit-documentation',
    number: '02',
    title: 'Unit Documentation System',
    subtitle: 'For PT Master Artha Kharisma',
    category: 'Business Systems',
    year: '2026',
    description: 'Aplikasi internal untuk data karyawan, absensi, lembur, dan alur perhitungan payroll.',
    image: 'https://i.vgy.me/cnYA9S.png',
    gallery: ['https://i.vgy.me/uCIZtl.png'],
    href: '#contact',
    accent: '#e5dce8',
    tags: ['Payroll', 'Attendance', 'Reporting'],
  },
  {
    id: 'sigudang',
    number: '03',
    title: 'SIGUDANG',
    subtitle: 'Inventory management system',
    category: 'Business Systems',
    year: '2026',
    description: 'Antarmuka informasi gudang dengan ringkasan stok, aktivitas barang, dan indikator kebutuhan pemesanan.',
    image: 'https://i.vgy.me/KooHUp.png',
    gallery: ['https://i.vgy.me/MRFhiT.png'],
    href: '#contact',
    accent: '#d9e3dc',
    tags: ['Inventory', 'Transactions', 'Low-stock alerts'],
  },
  {
    id: 'luma',
    number: '04',
    title: 'LUMA',
    subtitle: 'Live album for event guests',
    category: 'Digital Experience',
    year: '2026',
    description: 'Konsep pengalaman berbagi foto untuk acara, dirancang agar tamu dapat mengabadikan momen dalam satu album.',
    image: 'https://i.vgy.me/aLZD7u.png',
    gallery: ['https://i.vgy.me/H75xk5.png'],
    href: '#contact',
    accent: '#e9d4a9',
    tags: ['Event experience', 'Photo sharing', 'Branding'],
  },
  {
    id: 'wedding',
    number: '05',
    title: 'Interactive Wedding Invitation',
    subtitle: 'Fabi & Oca — digital invitation',
    category: 'Digital Experience',
    year: '2026',
    description: 'Undangan pernikahan digital dengan tipografi editorial, fotografi sinematik, dan detail botani yang hangat.',
    image: 'https://i.vgy.me/aRu5q4.png',
    gallery: ['https://i.vgy.me/H75xk5.png'],
    href: '#contact',
    accent: '#ead8ce',
    tags: ['Art direction', 'Editorial design', 'Motion'],
  },
  {
    id: 'graphic-design',
    number: '06',
    title: 'Graphic Design',
    subtitle: 'Catalogues, posters & brochures',
    category: 'Creative',
    year: '2026',
    description: 'Homepage yang menghubungkan berbagai tools internal dalam satu pintu masuk yang konsisten.',
    image: 'https://i.vgy.me/tBZlHk.png',
    gallery: ['https://i.vgy.me/RDH8g3.png', 'https://i.vgy.me/OKMXDG.png'],
    href: '#contact',
    accent: '#d9e2f3',
    tags: ['Navigation', 'Dashboard', 'Design system'],
  },
]
