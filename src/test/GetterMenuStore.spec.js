import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useMenuStore } from '@/stores/MenuStore'

describe('MenuStore Getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should return only makanan from menus', () => {
    const store = useMenuStore()

    store.menus = [
      { id: '1', nama: 'Nasi Goreng', kategori: 'Makanan' },
      { id: '2', nama: 'Es Teh', kategori: 'Minuman' },
      { id: '3', nama: 'Ayam Bakar', kategori: 'makanan' }
    ]

    expect(store.makanan).toHaveLength(2)
    expect(store.makanan.map(m => m.nama)).toContain('Nasi Goreng')
    expect(store.makanan.map(m => m.nama)).toContain('Ayam Bakar')
  })

  it('should return only minuman from menus', () => {
    const store = useMenuStore()

    store.menus = [
      { id: '1', nama: 'Nasi Goreng', kategori: 'Makanan' },
      { id: '2', nama: 'Es Teh', kategori: 'Minuman' },
      { id: '3', nama: 'Jus Jeruk', kategori: 'minuman' }
    ]

    expect(store.minuman).toHaveLength(2)
    expect(store.minuman.map(m => m.nama)).toContain('Es Teh')
    expect(store.minuman.map(m => m.nama)).toContain('Jus Jeruk')
  })
})
