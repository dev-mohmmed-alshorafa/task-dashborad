import { configureStore, createSlice } from '@reduxjs/toolkit'
const countSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    mode: false,
    lang: 'ltr',
    search: '',
    isUpdate: false,
    activeLink:0
  },
  reducers: {
    changeMode(state, action) {
      state.mode = !state.mode
    },
    changeLang(state, action) {
      state.lang = action.payload
    },
    login(state, action) {
      state.user = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    },
    setIsUpdate(state, action) {
      state.isUpdate = !state.isUpdate
    },
    setActiveLink(state, action){
      state.activeLink=action.payload
    }
  },
})
export const actions = countSlice.actions
const store = configureStore({
  reducer: countSlice.reducer,
})
export default store
