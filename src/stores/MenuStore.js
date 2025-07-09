import { defineStore } from "pinia";
import axios from "axios";

export const useMenuStore = defineStore('menu', {
    state: () => ({
        menus: []
    }),
    getters: {
        makanan: (state) => {
            return state.menus.filter((menu) => menu.kategori.toLowerCase() === 'makanan')
        },
        minuman: (state) => {
            return state.menus.filter((menu) => menu.kategori.toLowerCase() === 'minuman')
        }
    },
    actions: {
        async getMenus() {
            try {
                const res = await axios.get('http://localhost:3000/menu')
                this.menus = res.data
            } catch (error) {
                console.error("Gagal Fetch Data", error)
            }
        },

        async addMenu(menu) {
            try {
                await this.getMenus()

                let maxId = 0
                if (this.menus.length > 0) {
                    maxId = Math.max(...this.menus.map(item => Number(item.id)))
                }

                const newMenu = {
                    id: String(maxId + 1),
                    ...menu
                }

                const res = await axios.post('http://localhost:3000/menu/', newMenu)
                this.menus.push(res.data)

            } catch (error) {
                console.error("Gagal Menambahkan Data", error)
            }
        },
        async updateMenu(id, updatedMenu) {
            try {
                await axios.put(`http://localhost:3000/menu/${id}`, updatedMenu)
                const index = this.menus.findIndex(item => item.id === id)
                if (index !== -1) {
                    this.menus[index] = { id, ...updatedMenu }  
                }
            } catch (error) {
                console.error("Gagal Update Menu", error)
            }
        },
        async deleteMenu(id){
            try {
                await axios.delete(`http://localhost:3000/menu/${id}`)
                console.log("berhasil delete")
                this.getMenus()
            } catch (error) {
                console.log(error)
            }
        }

    }
})