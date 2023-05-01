import { createStore } from 'vuex'
import axios from 'axios'

import info from "./info"

export default createStore({
  state: {
    users: [],
    infos: [],
    cliniks: [],
    orgins: [],
    doctor: [],
    vrach: [],
    glavrach: [],
    qibray: [],
    nachalnik: [],
    director: [],
    upone: [],
    uptwoo: [],
    opendata: [],
    document: [],
    managements: [],
  
  },
  getters: {
  },
  mutations: {
    usersAdd(state, payload) {
      state.users = payload
    },
    infosAdd(state, payload) {
      state.infos = payload
    },
    cliniksAdd(state, payload) {
      state.cliniks = payload
    },
    orginsAdd(state, payload) {
      state.orgins = payload
    },
    doctorAdd(state, payload) {
      state.doctor = payload
    },
    vrachAdd(state, payload) {
      state.vrach = payload
    },
    glavrachAdd(state, payload) {
      state.glavrach = payload
    },
    qibrayAdd(state, payload) {
      state.qibray = payload
    },
    nachalnikAdd(state, payload) {
      state.nachalnik = payload
    },
   directorAdd(state, payload) {
      state.director = payload
    },
   uponeAdd(state, payload) {
     state.upone = payload
    },
   uptwooAdd(state, payload) {
     state.uptwoo = payload
    },
   opendataAdd(state, payload) {
     state.opendata = payload
    },
  documentAdd(state, payload) {
     state.document = payload
    },
  managementsAdd(state, payload) {
    state.managements = payload
    },
    filterUsers(state,payload) {
      let body = state.addUsers;
      let search = payload;
      if (!search) state.users = state.addUsers;
      search = search.trim().toLowerCase();
      state.users = body.filter((note) => {
        if (note.name.toLowerCase().indexOf(search) != -1) return note;
      });
    }
  },
  actions: {
    async getUsers({ state, commit }) {
      const res = await axios.get('http://127.0.0.1:8000/office_api/guides/')
      const infos = await axios.get('http://127.0.0.1:8000/office_api/about/')
      const cliniks = await axios.get('http://127.0.0.1:8000/office_api/regionals/')
      const orgins = await axios.get(`http://127.0.0.1:8000/office_api/organizations/1/`)
      const doctor = await axios.get(`http://127.0.0.1:8000/office_api/organizations/3/`)
      const vrach = await axios.get(`http://127.0.0.1:8000/office_api/organizations/4/`)
      const glavrach = await axios.get(`http://127.0.0.1:8000/office_api/organizations/5/`)
      const qibray = await axios.get(`http://127.0.0.1:8000/office_api/organizations/6/`)
      const nachalnik = await axios.get(`http://127.0.0.1:8000/office_api/organizations/7/`)
      const director = await axios.get(`http://127.0.0.1:8000/office_api/organizations/8/`)
      const upone = await axios.get(`http://127.0.0.1:8000/office_api/organizations/9/`)
      const uptwoo = await axios.get(`http://127.0.0.1:8000/office_api/organizations/10/`)
      const opendata = await axios.get(`http://127.0.0.1:8000/office_api/open_data/`)
      const document = await axios.get(`http://127.0.0.1:8000/office_api/documents/`)
      const managements = await axios.get(`http://127.0.0.1:8000/office_api/managements/`)

   
      commit("usersAdd", res.data)
      commit("infosAdd", infos.data)
      commit("cliniksAdd", cliniks.data)
      commit("orginsAdd", orgins.data)
      commit("doctorAdd", doctor.data)
      commit("vrachAdd", vrach.data)
      commit("glavrachAdd", glavrach.data)
      commit("qibrayAdd", qibray.data)
      commit("nachalnikAdd", nachalnik.data)
      commit("directorAdd", director.data)
      commit("uponeAdd", upone.data)
      commit("uptwooAdd", uptwoo.data)
      commit("opendataAdd", opendata.data)
      commit("documentAdd", document.data)
      commit("managementsAdd", managements.data)
    },
  },
  modules: {
    info
  }
})
