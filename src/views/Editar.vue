<template>
    <div class="tarea">
        <p>Tarea a editar: {{tarea.nombre }}</p>
        <form @submit.prevent="editarTarea(tarea)" class="form-inline text-center">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Nombre</span>
                </div>
                <input type="text" class="form-control" v-model="tarea.nombre">
            </div>
            <button type="submit" class="btn btn-primary mb-2"> Editar </button>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getTarea(this.id)
    },
    computed: {
        ...mapState(['tarea'])
    },
    methods: {
        ...mapActions(['getTarea', 'editarTarea'])
    }
}
</script>

<style>

</style>