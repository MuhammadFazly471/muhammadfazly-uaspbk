# 🍽️ Aplikasi Manajemen Menu Restoran

Aplikasi ini dibuat menggunakan **Vue 3**, **Pinia**, **Vue Router**, **Axios**, dan **TailwindCSS**. Aplikasi ini bertujuan untuk membantu pengelolaan menu makanan dan minuman pada restoran secara sederhana, cepat, dan efisien.

---

## ✨ Fitur Utama

- Menampilkan daftar menu berdasarkan kategori (Makanan & Minuman)
- Menambah menu baru
- Mengedit menu berdasarkan ID
- Menghapus menu
- Menandai menu tersedia atau tidak
- Dashboard statistik (dummy)
- Laporan transaksi & ringkasan menu (dummy)

---

## 🧭 Routing Aplikasi

Berikut adalah daftar path URL yang digunakan beserta komponen dan fungsinya:

| URL Path             | Name Route   | Komponen         | Fungsi                               |
|----------------------|--------------|------------------|--------------------------------------|
| `/`                  | `dashboard`  | `Dashboard.vue`  | Halaman dashboard utama              |
| `/dashboard`         | `dashboard`  | `Dashboard.vue`  | Alias dashboard                      |
| `/menu`              | `menu`       | `MenuList.vue`   | Daftar semua menu                    |
| `/addmenu`           | `addmenu`    | `MenuAdd.vue`    | Form untuk menambah menu             |
| `/editmenu/:id`      | `editmenu`   | `MenuEdit.vue`   | Form untuk mengedit menu berdasar ID|
| `/laporan`           | `laporan`    | `Laporan.vue`    | Halaman laporan ringkasan            |

---

## 🌐 API Endpoint

Aplikasi ini menggunakan backend mock API menggunakan **JSON Server** (default `http://localhost:3000/menu`).

### Endpoint yang Digunakan:

| Method | Endpoint             | Fungsi                               |
|--------|----------------------|--------------------------------------|
| GET    | `/menu`              | Mengambil semua data menu            |
| POST   | `/menu`              | Menambahkan menu baru                |
| PUT    | `/menu/:id`          | Memperbarui data menu                |
| DELETE | `/menu/:id`          | Menghapus menu                       |

### Contoh Data Menu:

```json
{
  "id": "1",
  "nama": "Nasi Goreng",
  "kategori": "Makanan",
  "harga": 25000,
  "tersedia": true
}
