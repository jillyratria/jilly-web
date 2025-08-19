# Cara Deploy NextJS 15 ke Clodflare Workers Pages

Kamu udah mulai malas dengan "gurita ketergantungan" Vercel di semua lini kodinganmu? Atau Hobby plan kamu udah mulai habis kuotanya? Atau sesederhana malas memindahkan DNS konfigurasi domain-mu dari cloudflare ke vercel? Atau pengen nyobain hal baru aja?

Bagi saya alasan di atas semuanya benar, alias relate dengan saya. Setelah menjelajah dokumentasi cloudflare dan bertanya ke LLM di sekitar saya. Berikut cara-cara yang saya lakukan untuk melakukan deployment untuk nextjs app (existing) saya.

### Persiapan

##### Install wrangler CLI as a devDependency

Wrangler adalah CLI Cloudflare Developer Platform untuk mengatur projects workers dari device kerjamu langsung, jadi tidak perlu buka web mereka yang (menurutku) UX nya kurang itu .

```sh
    npm i -D wrangler@latest
```

##### Install @opennextjs/cloudflare

Opennextjs adalaha library/adaptor buatan Cloudflare yang memungkinkan kamu deploy aplikasi nextjs-mu ke Cloudflare.

```sh
    npm i @opennextjs/cloudflare@latest
```

##### Tambahkan file konfigurasi Wrangler `wrangler.jsonc`

File harus diletakkan di root app (sejajar dengan package.json)

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

Sejak Wrangler v3.91.0, Cloudflare merekomendasikan untuk menggunakan file `.jsonc` dibanding `.toml` [(source)](https://developers.cloudflare.com/workers/wrangler/configuration).

Jangan lupa, perbarui `compability_date` data ke tanggal saat ini, dengan menentukan `compatibility_date`, akan lebih mudah untuk Cloudflare menentukan kompabilitas feature di Worker mereka untuk aplikasimu [(source)](https://developers.cloudflare.com/workers/configuration/compatibility-dates/)

##### Tambahkan file konfigurasi OpenNext `open-next.config.ts`

File harus diletakkan di root app (sejajar dengan package.json)

```javascript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
```

Konfigurasi ini digunakan digunakan untuk mengatur caching aplikasimu, untuk konfigurasi lebih kamu bisa langsung cek dokumentasinya di [sini](https://opennext.js.org/cloudflare/caching).

##### Perbarui `package.json`

Tambahkan script berikut ke package.json file-mu

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

` JANGAN LUPA UNTUK MENAMBAHKAN .open-next & .wrangler DI FILE .gitignore`

### Preview dan Deploy dari local

##### Develop Locally

Ya seperti sebelumnya, tidak ada yang berubah. Running menggunkaan server development milik Next.js

```sh
    npm dev
```

##### Preview

Script ini digunakan untuk menguji apakah aplikasi web-mu benar-benar berjalan menggunakan Cloudflare adapter.

```sh
    npm run preview
```

##### Deploy

Last but not least,

```sh
    npm run deploy
```
