import AddPemesanan from '@/views/pemesanan/AddPemesanan.vue'
import EditPemesanan from '@/views/pemesanan/EditPemesanan.vue'
import Pemesanan from '@/views/pemesanan/Pemesanan.vue'

export default [
    {path: '/pemesanan', name: 'pemesanan', component: Pemesanan},
    {path: '/pemesanan/add', name: 'addpemesanan', component: AddPemesanan},
    {path: '/pemesanan/edit/:id', name: 'editpemesanan', component: EditPemesanan},
]