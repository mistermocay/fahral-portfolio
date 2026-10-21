# Mocay Portfolio

Portfolio editorial-interaktif menggunakan React, Vite, TypeScript, Framer Motion, dan Lucide.

## Jalankan lokal

```bash
npm install
npm run dev
```

## Build produksi

```bash
npm run build
npm run preview
```

## Deploy GitHub Pages

1. Buka Settings → Pages.
2. Pilih GitHub Actions dan tambahkan workflow deployment Vite.
3. Konfigurasi Vite memakai `base: './'` agar aset menggunakan path relatif.

## Checklist sebelum publikasi

- Ganti tautan placeholder dengan URL demo atau repository yang memang ingin dipublikasikan.
- Gunakan screenshot project asli di folder `public/projects/` dan perbarui `src/data/projects.ts`.
- Verifikasi deskripsi, peran, tahun, dan klaim project.
- Jangan tampilkan data karyawan, rekening, gaji, atau informasi perusahaan sensitif.
- Uji desktop, mobile, keyboard, dan `prefers-reduced-motion`.

Repository ini terpisah dari enam repository project lama.
