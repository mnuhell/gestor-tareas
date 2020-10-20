import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import {db} from '../config/firebase';
import Swal from 'sweetalert2';
const doctareas = db.collection('Tareas');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: { nombre: '', id: ''}
  },
  mutations: {
    setTareas( state, payload){
      state.tareas = payload;
    },
    setTarea( state, payload ) {
      state.tarea = payload;
    },
    agregarTarea( state, payload) {
      state.tarea = payload;
    },
    setEliminarTarea( state, payload) {
      state.tareas = state.tareas.filter( tarea => tarea.id !== payload );
    }
  },
  actions: {
    getTareas( {commit} ) {
      const tareas = [];
      db.collection('Tareas').get()
      .then( res => {
        res.forEach( doc => {
          let tarea = doc.data();
          tarea.id = doc.id;
          tareas.push(tarea);
        })
      })
      commit('setTareas', tareas)
    },
    getTarea( {commit}, idTarea ) {
       doctareas.doc(idTarea).get()
       .then( doc => {
         let tarea = doc.data();
         tarea.id = doc.id;
         commit('setTarea', tarea) 
       })
    },
    editarTarea( { commit }, tarea){
      doctareas.doc(tarea.id).update({
        nombre: tarea.nombre,
      }).then(() => {
        Swal.fire({
          title: 'Tarea Actualizada correctamente',
          icon: 'success',
        });
        router.push("/");
      });
    },
    agregarTarea( { commit }, nombreTarea){
      doctareas.add({
        nombre: nombreTarea,
      }).then(doc => {
        Swal.fire({
          title: 'Tarea creada correctamente',
          icon: 'success',
        })

        setTimeout( () => {
          router.push('/')
        }, 2500)
        
      }).catch( err => {
        console.log(err) 
      })
    },
    eliminarTarea( { commit, dispatch}, tarea_id) {
      doctareas.doc(tarea_id).delete()
      .then( () => {
        console.log('Tarea eliminada');
        commit('setEliminarTarea', tarea_id )
      })
      .catch( err => {
        console.log( err );
      })
    }
  },
  modules: {
  }
})
