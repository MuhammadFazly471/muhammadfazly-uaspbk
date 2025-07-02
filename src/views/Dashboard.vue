<script setup>
// Dummy data untuk dashboard
const stats = [
  { title: 'Total Menu', value: '24', icon: '🍽️', color: 'bg-gradient-to-br from-orange-400 to-red-400', textColor: 'text-white' },
  { title: 'Pesanan Hari Ini', value: '15', icon: '📋', color: 'bg-gradient-to-br from-blue-400 to-blue-600', textColor: 'text-white' },
  { title: 'Pendapatan Hari Ini', value: 'Rp 2.450.000', icon: '💰', color: 'bg-gradient-to-br from-green-400 to-green-600', textColor: 'text-white' },
  { title: 'Meja Tersedia', value: '8/12', icon: '🪑', color: 'bg-gradient-to-br from-purple-400 to-purple-600', textColor: 'text-white' }
]

const recentOrders = [
  { id: '#001', customer: 'Ahmad Fauzi', items: 'Nasi Goreng, Es Teh', total: 'Rp 35.000', status: 'Selesai' },
  { id: '#002', customer: 'Siti Nurhaliza', items: 'Ayam Bakar, Jus Jeruk', total: 'Rp 45.000', status: 'Diproses' },
  { id: '#003', customer: 'Budi Santoso', items: 'Gado-gado, Es Campur', total: 'Rp 28.000', status: 'Menunggu' }
]
</script>

<template>
  <div class="p-8 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 min-h-screen">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-gray-600 mt-2">Selamat datang di sistem manajemen restoran</p>
      <div class="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-3"></div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div 
        v-for="stat in stats" 
        :key="stat.title"
        class="rounded-xl shadow-lg p-6 border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        :class="stat.color"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium opacity-90" :class="stat.textColor">{{ stat.title }}</p>
            <p class="text-3xl font-bold mt-2" :class="stat.textColor">{{ stat.value }}</p>
          </div>
          <div class="text-4xl opacity-80">{{ stat.icon }}</div>
        </div>
      </div>
    </div>

    <!-- Recent Orders -->
    <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
      <div class="p-6 border-b border-gray-200/50">
        <div class="flex items-center gap-3">
          <div class="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
          <h2 class="text-xl font-bold text-gray-800">Pesanan Terbaru</h2>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gradient-to-r from-gray-50 to-orange-50">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">ID</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Pelanggan</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Items</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Total</th>
              <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200/50">
            <tr v-for="order in recentOrders" :key="order.id" class="hover:bg-orange-50/50 transition-colors duration-200">
              <td class="px-6 py-4 text-sm font-bold text-orange-600">{{ order.id }}</td>
              <td class="px-6 py-4 text-sm font-semibold text-gray-800">{{ order.customer }}</td>
              <td class="px-6 py-4 text-sm text-gray-600">{{ order.items }}</td>
              <td class="px-6 py-4 text-sm font-bold text-gray-900">{{ order.total }}</td>
              <td class="px-6 py-4">
                <span 
                  class="inline-flex px-3 py-1 text-xs font-bold rounded-full shadow-sm"
                  :class="{
                    'bg-gradient-to-r from-green-400 to-green-500 text-white': order.status === 'Selesai',
                    'bg-gradient-to-r from-yellow-400 to-orange-400 text-white': order.status === 'Diproses',
                    'bg-gradient-to-r from-red-400 to-pink-400 text-white': order.status === 'Menunggu'
                  }"
                >
                  {{ order.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>