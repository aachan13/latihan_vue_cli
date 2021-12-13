<template>
    <div class="col-md-6">
        <div class="card h-100">
            <h3 class="card-header">
                Upcoming Flash Sale
            </h3>
            <div class="card-body">
                <ul>
                    <li v-for="(baris, index) in upcomingSale" :key="index">
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
    computed: {
        upcomingSale () {
            return this.$store.state.daftarSale.filter((sale) => {
                return new Date(sale.tanggal) > new Date()
            })
        }
    }
}
</script>
