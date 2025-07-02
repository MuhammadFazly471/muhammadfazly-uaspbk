<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menus = [
  {
    name: 'DASHBOARD',
    key: 'dashboard',
    submenus: [],
    path: 'dashboard'
  },
  {
    name: 'MENU',
    key: 'menu',
    submenus: [
      { name: 'Tambah Menu', path: 'addmenu' },
      { name: 'Daftar Menu', path: 'menu' }
    ]
  },
  {
    name: 'PEMESANAN',
    key: 'pemesanan',
    submenus: [
      { name: 'Tambah Pemesanan', path: 'addpemesanan' },
      { name: 'Daftar Pemesanan', path: 'pemesanan' }
    ]
  },
  {
    name: 'LAPORAN',
    key: 'laporan',
    submenus: [],
    path: 'laporan'
  }
]
</script>

<template>
  <aside class="w-64 fixed min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 text-gray-800 shadow-lg">
    <div class="p-6 text-xl font-bold text-orange-700 border-b border-orange-200">
      🍽️ Manajemen Resto
    </div>
    
    <nav class="mt-4 px-2">
      <ul class="space-y-1">
        <li v-for="menu in menus" :key="menu.key">
          <!-- Menu tanpa submenu -->
          <div v-if="menu.submenus.length === 0">
            <router-link
              :to="{ name: menu.path }"
              class="flex items-center gap-3 px-4 py-3 rounded-md transition duration-200 hover:bg-orange-100 text-sm font-semibold"
              :class="{
                'bg-orange-100 border-l-4 border-orange-500 text-orange-700':
                  route.name === menu.path
              }"
            >
              {{ menu.name }}
            </router-link>
          </div>
          
          <!-- Menu dengan submenu -->
          <div
            v-else
            class="flex items-center gap-2 px-4 py-2 text-xs font-medium text-amber-600 uppercase tracking-wide select-none"
          >
            <span>{{ menu.name }}</span>
            <span class="text-xs text-amber-400">▾</span>
          </div>
          
          <!-- Submenus -->
          <ul v-if="menu.submenus.length > 0" class="ml-4 space-y-1">
            <li
              v-for="submenu in menu.submenus"
              :key="submenu.path"
            >
              <router-link
                :to="{ name: submenu.path }"
                class="block px-4 py-2 rounded-md transition duration-200 hover:bg-orange-100 text-sm font-medium"
                :class="{
                  'bg-orange-100 border-l-4 border-orange-500 font-semibold text-orange-700':
                    route.name === submenu.path
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