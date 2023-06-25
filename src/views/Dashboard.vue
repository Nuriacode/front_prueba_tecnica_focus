<template>
  <div>
    <HeaderLogin />

    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">DNI</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="paciente in Listapacientes" :key="paciente.PacienteId">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>

    <FooterLogin />
  </div>
</template>

<script>
import HeaderLogin from "@/components/HeaderLogin.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import axios from "axios";
export default {
  name: "DashBoard",
  data() {
    return {
      Listapacientes: null,
      pagina: 1,
    };
  },
  components: {
    HeaderLogin,
    FooterLogin,
  },
  mounted: function () {
    let direction = "https://api.solodata.es/pacientes?page=" + this.pagina;
    axios.get(direction).then((data) => {
      this.Listapacientes = data.data;
    });
  },
};
</script>

<style lang="stylus" scoped></style>
