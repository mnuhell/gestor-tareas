<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarTarea(nombre)" class="form-block text-center">
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <span class="input-group-text">Nombre</span>
                </div>
                <input type="text" class="form-control mr-2" v-model="nombre">

                <div class="input-group-append">
                    <button type="submit" class="btn btn-primary">Agregar</button>
                </div>
            </div>
        </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Agregar',
    data() {
        return {
            nombre: ''
        }
    },
    methods: {
        ...mapActions(['agregarTarea'])
    }
}
</script>

<style>

</style>