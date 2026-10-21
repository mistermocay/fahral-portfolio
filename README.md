# Fahral Portfolio

Portofolio personal berbasis React, Vite, TypeScript, Framer Motion, dan Lucide. Repository ini adalah **main base** untuk pengembangan portofolio di VS Code.

## Persiapan lokal

Pastikan Node.js 22 atau versi LTS yang kompatibel sudah terpasang.

```bash
git clone https://github.com/mistermocay/fahral-portfolio.git
cd fahral-portfolio
npm install
npm run dev
```

Vite akan menampilkan alamat lokal di terminal (biasanya `http://localhost:5173`). Buka alamat tersebut di browser; perubahan file akan diperbarui melalui hot reload.

## Perintah utama

```bash
npm run dev      # jalankan server pengembangan
npm run build    # cek TypeScript dan buat build produksi
npm run preview  # pratinjau build produksi
```

## Struktur proyek

- `src/App.tsx` — struktur dan konten halaman utama.
- `src/styles.css` — styling, layout responsif, dan animasi CSS.
- `src/components/` — komponen yang dapat digunakan ulang, termasuk kartu proyek dan reveal.
- `src/data/projects.ts` — data proyek yang ditampilkan pada bagian Selected Work.
- `index.html` — metadata dan entry HTML.
- `vite.config.ts`, `tsconfig*.json` — konfigurasi build dan TypeScript.
- `.github/workflows/deploy.yml` — workflow deploy GitHub Pages.

## Alur kerja yang disarankan

1. Buka folder repository ini langsung di VS Code.
2. Jalankan `npm install` satu kali setelah clone atau saat dependency berubah.
3. Jalankan `npm run dev` saat mengedit.
4. Sebelum commit, jalankan `npm run build` dan pastikan tidak ada error.
5. Commit perubahan dengan pesan yang jelas lalu push ke GitHub.

- Ganti tautan placeholder dengan URL demo atau repository yang memang ingin dipublikasikan.
- Perbarui ringkasan dan ilustrasi proyek di `src/data/projects.ts` dan `src/components/ProjectArtwork.tsx`.
- Verifikasi deskripsi, peran, tahun, dan klaim project.
- Jangan tampilkan data karyawan, rekening, gaji, atau informasi perusahaan sensitif.
- Uji desktop, mobile, keyboard, dan `prefers-reduced-motion`.

## Deployment GitHub Pages

Workflow `.github/workflows/deploy.yml` membangun dan menerbitkan folder `dist` ketika ada push ke `main`, serta dapat dijalankan manual dari GitHub Actions. Di Settings → Pages, pastikan Source menggunakan **GitHub Actions**. Periksa hasil run di tab Actions setelah push; commit saja tidak menjamin deployment berhasil.

## Sebelum mempublikasikan proyek

- Ganti tautan demo placeholder dengan URL yang benar-benar tersedia.
- Pastikan semua gambar eksternal dapat dimuat; untuk kestabilan, pertimbangkan menyimpan gambar yang boleh dipublikasikan di folder lokal proyek.
- Verifikasi deskripsi, peran, tahun, dan klaim setiap proyek.
- Jangan publikasikan data karyawan, gaji, rekening, atau informasi perusahaan yang sensitif.
- Uji tampilan desktop, mobile, navigasi keyboard, dan pengaturan `prefers-reduced-motion`.

## Kebersihan repository

Jangan menghapus konfigurasi build, TypeScript, atau workflow deploy tanpa memeriksa dependensinya terlebih dahulu. Folder `node_modules` dan `dist` memang tidak dilacak Git (lihat `.gitignore`); keduanya dibuat secara lokal atau saat build.

Repository ini terpisah dari enam repository proyek lama.
