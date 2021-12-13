import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://inixindo_itk.test/api/',
    daftarSale: [
      {
        hari: 'Senin',
        tanggal: '2021-11-01',
        kegiatan: 'Belanja Flash Sale'
      },
      {
        hari: 'Minggu',
        tanggal: '2021-11-04',
        kegiatan: 'Belanja Flash Sale Murah'
      },
      {
        hari: 'Rabu',
        tanggal: '2021-12-03',
        kegiatan: 'Belanja Flash Sale Banget'
      },
      {
        hari: 'Sabtu',
        tanggal: '2021-12-05',
        kegiatan: 'Belanja Flash Sale Uy'
      }
    ],
    mahasiswa: [],
    token: ''
  },
  getters: {
      url_mahasiswa: (state) => (state.url)
  },
  mutations: {
      set_mahasiswa (state, data){
        state.mahasiswa = data
      },
      set_token (state, data){
        if (localStorage.getItem('token')){
            state.token = localStorage.getItem('token')
        } else {
            state.token = data
            localStorage.setItem('token', data)
        }
      }
  }
})
