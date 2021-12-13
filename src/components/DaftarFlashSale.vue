<template>
    <div class="col-md-6">
        <div class="card">
            <h3 class="card-header">
                Daftar Flash Sale
            </h3>
            <div class="card-body">
                <ul>
                    <li v-for="(baris, index) in daftarFlashSale" :key="index">
                    <strong>{{ baris.hari }}</strong> - {{ baris.kegiatan }}
                    <p><small>{{ baris.tanggal }}</small></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // name: 'Daftar Flash Sale',
    computed: {
        daftarFlashSale () {
            return this.$store.state.daftarSale
        }
    }
}
</script>
