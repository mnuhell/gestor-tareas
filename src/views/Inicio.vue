<template>
    <div>
        <h1 class="h1 float-left strong">Listas de tareas</h1>
        <router-link to="/agregar">
            <button class="btn btn-primary mb-3 btn-block">Agregar Tarea</button>
        </router-link>
        
        <ul class="list-group"> 
            <li v-for="tarea in tareas" :key="tarea.id" class="list-group-item">
                {{ tarea.nombre }} - {{ tarea.id }}
                
                <div class="float-right">
                    <router-link 
                    :to="{ name: 'Editar', params: {id: tarea.id }}"
                    class="btn btn-warning mr-2 btn-sm"> Editar
                    </router-link>
                    <button @click="eliminarTarea(tarea.id)" class="btn btn-danger btn-sm"> Eliminar </button>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState} from 'vuex';
export default {

    data() {
        return {
            
        }
    },

    created() {
        this.getTareas()
    },
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['getTareas', 'eliminarTarea'])
    }

}
</script>

<style>

</style>