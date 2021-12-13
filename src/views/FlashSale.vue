<template>
    <div>
        <vue-headful title="Halaman Utama" description="Flash Sale"/>

        <p>Hello Ini FlashSale</p>

        <div class="row">
            <daftar-flash-sale></daftar-flash-sale>
            <upcoming-flash-sale></upcoming-flash-sale>
        </div>
    </div>
</template>

<script>
import DaftarFlashSale from '../components/DaftarFlashSale.vue'
import UpcomingFlashSale from '../components/UpcomingFlashSale.vue'

export default {
  name: 'App',
  components: {
    DaftarFlashSale,
    UpcomingFlashSale
  }
}

</script>