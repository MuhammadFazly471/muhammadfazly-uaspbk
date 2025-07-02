<script setup>
import { onMounted } from 'vue'
import { useMenuStore } from '@/stores/MenuStore.js'
import { useRouter } from 'vue-router'

const store = useMenuStore()
const router = useRouter()

onMounted(() => {
  store.getMenus()
})

const toggleTersedia = (menu) => {
  const updatedMenu = { ...menu, tersedia: !menu.tersedia }
  store.updateMenu(menu.id, updatedMenu)
}

const handleEdit = (menu) => {
  router.push({ name: 'editmenu', params: { id: menu.id } })
}

const handleDelete = (id) => {
  if (confirm("Yakin ingin menghapus menu ini?")) {
    store.deleteMenu(id)
  }
}
</script>

<template>
  <div class="p-8 w-full bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 min-h-screen">
    <!-- Header -->
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-gray-800">Daftar Menu</h1>
      <p class="text-gray-600 mt-2">Kelola menu makanan dan minuman restoran</p>
      <div class="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-3"></div>
    </div>

    <!-- Tabel Makanan -->
    <div class="mb-10">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
        <h2 class="text-2xl font-bold text-gray-800">🍽️ Makanan</h2>
      </div>
      
      <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <tr>
                <th class="text-left px-6 py-4 font-bold text-sm uppercase tracking-wider">Nama</th>
                <th class="text-left px-6 py-4 font-bold text-sm uppercase tracking-wider">Harga</th>
                <th class="text-left px-6 py-4 font-bold text-sm uppercase tracking-wider">Tersedia</th>
                <th class="text-left px-6 py-4 font-bold text-sm uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200/50">
              <tr v-for="menu in store.makanan" :key="menu.id" class="hover:bg-orange-50/50 transition-colors duration-200">
                <td class="px-6 py-4 font-semibold text-gray-800">{{ menu.nama }}</td>
                <td class="px-6 py-4 font-bold text-gray-900">Rp {{ Number(menu.harga).toLocaleString('id-ID') }}</td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex px-3 py-1 rounded-full text-sm font-bold shadow-sm"
                    :class="menu.tersedia ? 'bg-gradient-to-r from-green-400 to-green-500 text-white' : 'bg-gradient-to-r from-red-400 to-pink-400 text-white'"
                  >
                    {{ menu.tersedia ? 'Tersedia' : 'Habis' }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex gap-2">
                    <button @click="handleEdit(menu)" class="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm">
                      Edit
                    </button>
                    <button @click="handleDelete(menu.id)" class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm">
                      Hapus
                    </button>
                    <button @click="toggleTersedia(menu)" class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm">
                      Status
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Tabel Minuman -->
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
        <h2 class="text-2xl font-bold text-gray-800">🥤 Minuman</h2>
      </div>
      
      <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <tr>
                <th class="text-left px-6 py-4 font-bold text-sm uppercase tracking-wider">Nama</th>
                <th class="text-left px-6 py-4 font-bold text-sm uppercase tracking-wider">Harga</th>
                <th class="text-left px-6 py-4 font-bold text-sm uppercase tracking-wider">Tersedia</th>
                <th class="text-left px-6 py-4 font-bold text-sm uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200/50">
              <tr v-for="menu in store.minuman" :key="menu.id" class="hover:bg-blue-50/50 transition-colors duration-200">
                <td class="px-6 py-4 font-semibold text-gray-800">{{ menu.nama }}</td>
                <td class="px-6 py-4 font-bold text-gray-900">Rp {{ Number(menu.harga).toLocaleString('id-ID') }}</td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex px-3 py-1 rounded-full text-sm font-bold shadow-sm"
                    :class="menu.tersedia ? 'bg-gradient-to-r from-green-400 to-green-500 text-white' : 'bg-gradient-to-r from-red-400 to-pink-400 text-white'"
                  >
                    {{ menu.tersedia ? 'Tersedia' : 'Habis' }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex gap-2">
                    <button @click="handleEdit(menu)" class="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm">
                      Edit
                    </button>
                    <button @click="handleDelete(menu.id)" class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm">
                      Hapus
                    </button>
                    <button @click="toggleTersedia(menu)" class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-sm">
                      Status
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>