/* eslint-disable */
export const state = () => ({
  dataFileInput: {
    file_path: "<Isi isi data file path>", // menggunakan ternary operator, jadi, jika data kosong/null diisi dengan default-value
    input_path: "<Silakan isi data input path>",
    header: true,
    delimiter: "|",
  } 
})

export const mutations = {
  SET_FILE_INPUT (state, value) {
    console.log('SET_VAR_1', value)
    state.var1 = value
  }
}