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
2. Pada Build and deployment, pilih **GitHub Actions** sebagai Source.
3. Workflow `.github/workflows/deploy.yml` akan membangun lalu menerbitkan folder `dist` setiap ada push ke `main`.
4. Buka Actions untuk memantau hasil deployment. Jika run sebelumnya gagal karena Pages belum aktif, jalankan ulang workflow setelah mengubah pengaturan.

Vite memakai `base: './'` agar aset menggunakan path relatif.

## Checklist sebelum publikasi

- Ganti tautan placeholder dengan URL demo atau repository yang memang ingin dipublikasikan.
- Perbarui ringkasan dan ilustrasi proyek di `src/data/projects.ts` dan `src/components/ProjectArtwork.tsx`.
- Verifikasi deskripsi, peran, tahun, dan klaim project.
- Jangan tampilkan data karyawan, rekening, gaji, atau informasi perusahaan sensitif.
- Uji desktop, mobile, keyboard, dan `prefers-reduced-motion`.

Repository ini terpisah dari enam repository project lama.
