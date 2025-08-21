---
title: "Cara Deploy Next.js 15 ke Cloudflare Workers Pages"
excerpt: "Mulai geregetan sama “gurita ketergantungan” Vercel di semua project? Kuota Hobby Plan kepentok? Atau sesimpel males mindahin konfigurasi DNS dari Cloudflare ke Vercel? Atau pengen coba sesuatu yang baru?"
date: "2025-08-19"
author: "Jilly R"
---

Mulai geregetan sama “gurita ketergantungan” Vercel di semua project? Kuota Hobby Plan kepentok? Atau sesimpel males mindahin konfigurasi DNS dari Cloudflare ke Vercel? Atau pengen coba sesuatu yang baru?

Semua alasan di atas relate banget buat saya. Setelah baca-baca dokumentasi Cloudflare dan nanya ke beberapa LLM, ini rangkuman langkah yang saya pakai buat deploy Next.js (existing app) ke Cloudflare.

### Persiapan

##### Install Wrangler CLI sebagai devDependency

Wrangler adalah CLI untuk Cloudflare Developer Platform. Dengan ini kamu bisa ngatur Workers langsung dari mesin lokal—tanpa perlu buka dashboard web mereka (yang menurutku UX-nya agak kurang nyaman).

```sh
    npm i -D wrangler@latest
```

##### Install `@opennextjs/cloudflare`

OpenNextJS adalah adaptor dari Cloudflare yang bikin aplikasi Next.js-mu bisa jalan mulus di Cloudflare.

```sh
    npm i @opennextjs/cloudflare@latest
```

##### Tambah file konfigurasi Wrangler `wrangler.jsonc`

Taruh di root project (sejajar dengan `package.json`).

```json
{
  "main": ".open-next/worker.js",
  "name": "my-app",
  "compatibility_date": "2025-03-25",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  }
}
```

Sejak Wrangler v3.91.0, Cloudflare merekomendasikan pakai `.jsonc` dibanding `.toml` [(source)](https://developers.cloudflare.com/workers/wrangler/configuration).

Jangan lupa, perbarui `compatibility_date` ke tanggal **hari ini**. Dengan set `compatibility_date`, Cloudflare bisa menentukan kompatibilitas fitur Worker yang pas buat aplikasimu [(source)](https://developers.cloudflare.com/workers/configuration/compatibility-dates/).

##### Tambah file konfigurasi OpenNext `open-next.config.ts`

Taruh juga di root project (sejajar dengan `package.json`).

```javascript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
```

Konfigurasi ini digunakan buat ngatur caching aplikasi. Butuh setup lebih lanjut? Cek dokumentasinya [di sini](https://opennext.js.org/cloudflare/caching).

##### Perbarui `package.json`

Tambahkan script berikut ke `package.json` kamu:

```json
{
    ...,
    "scripts": {
        ...,
        "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
        "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
        "cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
    }
}
```

**Catatan:** tambahkan **`.open-next`** dan **`.wrangler`** ke `.gitignore` biar folder build & config lokal nggak ikut ke repo.

---

### Preview & Deploy dari Lokal

##### Develop locally

Sama seperti biasa: jalankan dev server bawaan Next.js,

```sh
    npm dev
```

##### Preview

Pakai script ini untuk memastikan apakah app web kamu beneran jalan pakai Cloudflare adapter.

```sh
    npm run preview
```

##### Deploy

Terakhir, tinggal deploy ke Cloudflare.

```sh
    npm run deploy
```
