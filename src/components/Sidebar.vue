<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menus = [
  {
    name: 'Dashboard',
    key: 'dashboard',
    submenus: [],
  },
  {
    name: 'Menu',
    key: 'menu',
    submenus: [
      { name: 'Tambah Menu', path: 'addmenu' },
      { name: 'Daftar Menu', path: 'menu' }
    ]
  },
  {
    name: 'Pemesanan',
    key: 'pemesanan',
    submenus: [
      { name: 'Tambah Pemesanan', path: 'addpemesanan' },
      { name: 'Daftar Pemesanan', path: 'pemesanan' }
    ]
  },
  {
    name: 'Laporan',
    key: 'laporan',
    submenus: [],
  }
]
</script>

<template>
  <aside class="w-64 min-h-screen bg-gray-800 text-white shadow-lg">
    <div class="p-4 text-2xl font-bold border-b border-gray-700">
      Manajemen Resto
    </div>

    <nav class="mt-4">
      <ul>
        <li v-for="menu in menus" :key="menu.key" class="mb-1">
          <!-- Menu utama -->
          <div
            class="px-4 py-2 hover:bg-gray-700 cursor-pointer font-medium"
          >
            {{ menu.name }}
          </div>

          <!-- Submenu jika ada -->
          <ul v-if="menu.submenus.length" class="ml-4">
            <li
              v-for="submenu in menu.submenus"
              :key="submenu.path"
              class="text-sm"
            >
              <router-link
                :to="{ name: submenu.path }"
                class="block w-full px-4 py-2 hover:bg-gray-700 rounded"
                :class="{
                  'bg-gray-700 font-semibold': route.name === submenu.path
                }"
              >
                {{ submenu.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>
