<template>
  <div id="app" class="container p-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Latihan Vue</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link to="/mahasiswa" class="nav-link">Mahasiswa</router-link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div v-show="!token">
          <div class="row">
            <div class="col-md-4">
              <form v-on:submit.prevent="login" id="formLogin">
                <div class="form-row">
                  <div class="form-group col-md">
                    <input type="text" class="form-control" name="nim" placeholder="nim anda, cth: 10151001">
                  </div>
                  <div class="form-group col-md">
                    <input type="password" class="form-control" name="password" placeholder="password" >
                  </div>
                </div>

                <button type="submit" class="btn btn-sm btn-primary">Login</button>
              </form>
            </div>
          </div>

          <div class="alert alert-danger" v-show="!token">
            Anda belum punya token, silahkan login
          </div>
        </div>
        <div class="alert alert-success" v-show="token">
          Token berhasil didapatkan
        </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  beforeMount: function (){
    // console.log('a')
    if (localStorage.getItem('token')){
      this.$store.commit('set_token', localStorage.getItem('token'))
    }
  },
  name: 'App',
  methods: {
    async login (e){
      e.preventDefault()
      const store = this.$store
      const form = document.querySelector('#formLogin')
      const formData = new FormData(form)

      fetch(this.$store.getters.url_mahasiswa + 'login', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                store.commit('set_token', data.data)
            }).catch(error => {
                console.log(error)
            })
    }
  },
  computed: {
      token (){
          return this.$store.state.token
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
