<template>
    <div>
        <!-- {{ mahasiswa }} -->
        <div class="card">
            <div class="card-header">
                Daftar mahasiswa dan mata kuliah
            </div>
            <div class="card-body">
                <ul v-if="mahasiswa">
                    <li v-for="(mhs, index) in mahasiswa" :key="index">
                        {{ mhs.nama }} - {{ mhs.nim }}
                        <p>
                            <small v-for="(krs, idx) in mhs.krs" :key="idx">
                            {{ krs.mata_kuliah }}<span v-if="idx + 1 != mhs.krs.length">, </span>
                            </small>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        async mounted (){
            const store = this.$store

            const data = await fetch(this.$store.getters.url_mahasiswa + 'mahasiswa-krs', {
                    headers: {
                        Authorization: 'Bearer ' + store.state.token
                    }
                }
            )
            .then((res) => {
                const hasil = res.json()
                return hasil
            }).then(dataMhs => {
                store.commit('set_mahasiswa', dataMhs.data)
                return dataMhs
            })
            .catch((e) => {
                console.log(e)
            })
            console.log(data)
        },
        computed: {
            mahasiswa (){
                return this.$store.state.mahasiswa
            }
        }
    }
</script>
