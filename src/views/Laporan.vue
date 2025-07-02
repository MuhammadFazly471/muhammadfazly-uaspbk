<script setup>
// Data dummy statistik laporan
const laporanStats = [
  { title: 'Pendapatan Hari Ini', value: 'Rp 2.450.000', icon: '💰', color: 'bg-gradient-to-br from-green-400 to-green-600', textColor: 'text-white' },
  { title: 'Jumlah Pesanan Hari Ini', value: '27', icon: '📦', color: 'bg-gradient-to-br from-blue-400 to-blue-600', textColor: 'text-white' },
  { title: 'Rata-rata Transaksi', value: 'Rp 90.741', icon: '📊', color: 'bg-gradient-to-br from-yellow-400 to-amber-500', textColor: 'text-white' },
  { title: 'Menu Terlaris', value: 'Ayam Bakar', icon: '🔥', color: 'bg-gradient-to-br from-orange-400 to-red-500', textColor: 'text-white' }
]

// Data dummy transaksi hari ini
const transaksiHarian = [
  { id: '#TRX101', waktu: '2025-07-02 10:12', pelanggan: 'Ahmad Fauzi', item: 3, total: 'Rp 75.000', metode: 'Cash', status: 'Selesai' },
  { id: '#TRX102', waktu: '2025-07-02 11:45', pelanggan: 'Rina Marlina', item: 2, total: 'Rp 50.000', metode: 'QRIS', status: 'Diproses' },
  { id: '#TRX103', waktu: '2025-07-02 12:22', pelanggan: 'Budi Santoso', item: 1, total: 'Rp 28.000', metode: 'Debit', status: 'Menunggu' }
]
</script>

<template>
  <div class="p-8 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 min-h-screen">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Laporan</h1>
      <p class="text-gray-600 mt-2">Data rekap pendapatan dan transaksi harian restoran</p>
      <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-3"></div>
    </div>

    <!-- Statistik -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div
        v-for="stat in laporanStats"
        :key="stat.title"
        class="rounded-xl shadow-lg p-6 border border-white/20 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        :class="stat.color"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium opacity-90" :class="stat.textColor">{{ stat.title }}</p>
            <p class="text-2xl font-bold mt-2" :class="stat.textColor">{{ stat.value }}</p>
          </div>
          <div class="text-4xl opacity-80">{{ stat.icon }}</div>
        </div>
      </div>
    </div>

    <!-- Rekap Transaksi -->
    <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
      <div class="p-6 border-b border-gray-200/50">
        <div class="flex items-center gap-3">
          <div class="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
          <h2 class="text-xl font-bold text-gray-800">Transaksi Hari Ini</h2>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gradient-to-r from-gray-50 to-orange-50 text-gray-700 uppercase text-xs font-bold">
            <tr>
              <th class="px-6 py-4 text-left">ID</th>
              <th class="px-6 py-4 text-left">Waktu</th>
              <th class="px-6 py-4 text-left">Pelanggan</th>
              <th class="px-6 py-4 text-left">Item</th>
              <th class="px-6 py-4 text-left">Total</th>
              <th class="px-6 py-4 text-left">Metode</th>
              <th class="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200/50">
            <tr 
              v-for="trx in transaksiHarian" 
              :key="trx.id" 
              class="hover:bg-orange-50/50 transition-colors duration-200"
            >
              <td class="px-6 py-4 font-bold text-orange-600">{{ trx.id }}</td>
              <td class="px-6 py-4 text-gray-700">{{ trx.waktu }}</td>
              <td class="px-6 py-4 font-semibold text-gray-800">{{ trx.pelanggan }}</td>
              <td class="px-6 py-4 text-center text-gray-600">{{ trx.item }}</td>
              <td class="px-6 py-4 font-bold text-gray-900">{{ trx.total }}</td>
              <td class="px-6 py-4 text-gray-600">{{ trx.metode }}</td>
              <td class="px-6 py-4">
                <span 
                  class="inline-flex px-3 py-1 text-xs font-bold rounded-full shadow-sm"
                  :class="{
                    'bg-gradient-to-r from-green-400 to-green-500 text-white': trx.status === 'Selesai',
                    'bg-gradient-to-r from-yellow-400 to-orange-400 text-white': trx.status === 'Diproses',
                    'bg-gradient-to-r from-red-400 to-pink-400 text-white': trx.status === 'Menunggu'
                  }"
                >
                  {{ trx.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
