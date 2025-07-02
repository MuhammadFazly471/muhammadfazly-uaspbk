<script setup>
import { ref, onMounted } from 'vue'
import { useMenuStore } from '@/stores/MenuStore.js'
import { useRoute, useRouter } from 'vue-router'

const store = useMenuStore()
const route = useRoute()
const router = useRouter()

const nama = ref('')
const kategori = ref('Makanan')
const harga = ref('')
const tersedia = ref(true)

const id = route.params.id

onMounted(async () => {
  await store.getMenus()
  const menu = store.menus.find(m => m.id === id)

  if (menu) {
    nama.value = menu.nama
    kategori.value = menu.kategori
    harga.value = menu.harga
    tersedia.value = menu.tersedia
  } else {
    alert('Menu tidak ditemukan!')
    router.push({ name: 'menu' })
  }
})

const resetForm = () => {
  const menu = store.menus.find(m => m.id === id)
  if (menu) {
    nama.value = menu.nama
    kategori.value = menu.kategori
    harga.value = menu.harga
    tersedia.value = menu.tersedia
  }
}

const handleUpdate = async () => {
  if (!nama.value || !harga.value) {
    alert('Nama dan harga harus diisi!')
    return
  }

  const updatedMenu = {
    nama: nama.value,
    kategori: kategori.value,
    harga: Number(harga.value),
    tersedia: tersedia.value
  }

  await store.updateMenu(id, updatedMenu)
  router.push({ name: 'menu' })
}
</script>

<template>
  <div class="w-full min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 p-6">
    <!-- Header -->
    <div class="max-w-7xl mx-auto mb-10">
      <h1 class="text-3xl font-bold text-gray-800">Edit Menu</h1>
      <p class="text-gray-600 mt-1">Perbarui data menu yang sudah ada</p>
      <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-3"></div>
    </div>

    <!-- Form Container -->
    <div class="w-full max-w-5xl mx-auto">
      <div class="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/30">
        <!-- Form Header -->
        <div class="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-6 rounded-t-2xl">
          <div class="flex items-center gap-3">
            <div class="w-2 h-8 bg-white/30 rounded-full"></div>
            <h2 class="text-xl font-bold text-white">✏️ Form Edit Menu</h2>
          </div>
        </div>

        <!-- Form Content -->
        <div class="p-8 sm:p-10">
          <form @submit.prevent="handleUpdate" class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <!-- Nama Menu -->
            <div class="space-y-2 col-span-2">
              <label class="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                Nama Menu
              </label>
              <input
                v-model="nama"
                type="text"
                placeholder="Contoh: Nasi Goreng Spesial"
                class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-gray-50/50"
                required
              />
            </div>

            <!-- Kategori -->
            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                Kategori
              </label>
              <div class="relative">
                <select
                  v-model="kategori"
                  class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-gray-50/50 appearance-none cursor-pointer"
                >
                  <option value="Makanan">🍽️ Makanan</option>
                  <option value="Minuman">🥤 Minuman</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Harga -->
            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                Harga (Rp)
              </label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">Rp</span>
                <input
                  v-model="harga"
                  type="number"
                  min="0"
                  placeholder="25000"
                  class="w-full border-2 border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-800 font-medium focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-gray-50/50"
                  required
                />
              </div>
            </div>

            <!-- Tersedia -->
            <div class="col-span-2">
              <label class="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">
                Status Menu
              </label>
              <div class="flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl border border-gray-200">
                <div class="flex items-center space-x-3">
                  <input
                    v-model="tersedia"
                    type="checkbox"
                    id="tersedia"
                    class="w-5 h-5 rounded border-2 border-gray-300 text-orange-500 focus:ring-orange-400 focus:ring-2"
                  />
                  <label for="tersedia" class="text-sm font-semibold text-gray-700 cursor-pointer">
                    Menu tersedia untuk dijual
                  </label>
                </div>
                <span 
                  class="inline-flex px-3 py-1 rounded-full text-sm font-bold shadow-sm"
                  :class="tersedia ? 'bg-gradient-to-r from-green-400 to-green-500 text-white' : 'bg-gradient-to-r from-red-400 to-pink-400 text-white'"
                >
                  {{ tersedia ? 'Tersedia' : 'Tidak Tersedia' }}
                </span>
              </div>
            </div>

            <!-- Tombol -->
            <div class="col-span-2 flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                class="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ✅ Update Menu
              </button>
              <button
                type="button"
                @click="resetForm"
                class="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🔄 Reset Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
