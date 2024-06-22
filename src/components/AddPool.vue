<template>
  <div class="container">
    <form @submit.prevent="dodajAnketu" class="form">
      <div class="main-div">
        <div class="sub-div">
          <label for="broj">BROJ ČLANA</label>
          <input type="number" v-model="novaAnketa.broj" id="broj">
          <label for="kolicina_dan">KOLIKO CIGARA PUŠIŠ DNEVNO</label>
          <input type="number" v-model="novaAnketa.kolicina_dan" id="kolicina_dan">
          <label for="kolicina_max_dan">KOLIKO SI CIGARA NAJVIŠE PUŠILA U JEDNOM DANU</label>
          <input type="number" v-model="novaAnketa.kolicina_max_dan" id="kolicina_max_dan">
          <label for="trenutne_cigare">KOJE CIGARE TRENUTNO PUŠIŠ</label>
          <input type="text" v-model="novaAnketa.trenutne_cigare" id="trenutne_cigare">
          <label for="najdraze_cigare">KOJE SU TI NAJDRAŽE CIGARE</label>
          <input type="text" v-model="novaAnketa.najdraze_cigare" id="najdraze_cigare">
        </div>
        <div class="sub-div">
          <label for="meksanje">JESI LI IKADA MEKŠALA CIGARU</label>
          <input type="text" v-model="novaAnketa.meksanje" id="meksanje">
          <label for="kolicina_meksanja">KOLIČINA MEKŠANJA</label>
          <input type="text" v-model="novaAnketa.kolicina_meksanja" id="kolicina_meksanja">
          <label for="lizanje">JESI LI IKADA OBLIZALA CIGARU</label>
          <input type="text" v-model="novaAnketa.lizanje" id="lizanje">
          <label for="kolicina_lizanja">KOLIČINA LIZANJA</label>
          <input type="text" v-model="novaAnketa.kolicina_lizanja" id="kolicina_lizanja">
          <label for="grickanje">JESI LI IKADA GRICKALA CIGARU</label>
          <input type="text" v-model="novaAnketa.grickanje" id="grickanje">
          <label for="kolicina_grickanja">KOLIČINA GRICKANJA</label>
          <input type="text" v-model="novaAnketa.kolicina_grickanja" id="kolicina_grickanja">
        </div>
        <div class="sub-div">
          <label for="nova_cigara">NA KOJI NAČIN PROBAŠ CIGARU PRVI PUT</label>
          <input type="text" v-model="novaAnketa.nova_cigara" id="nova_cigara">
          <label for="kolicina_gutanja_dima">KOLIKO PUTA UVUČEŠ DIM(PROGUTAŠ)?</label>
          <input type="number" v-model="novaAnketa.kolicina_gutanja_dima" id="kolicina_gutanja_dima">
          <label for="kolutici_od_dima">JESI LI IKADA NAPRAVILA KOLUTIĆE OD DIMA?</label>
          <input type="text" v-model="novaAnketa.kolutici_od_dima" id="kolutici_od_dima">
        </div>
        <div class="sub-div">
          <label for="ocjena_pusenja">OCJENI PUŠENJE:</label>
          <input type="number" v-model="novaAnketa.ocjena_pusenja" id="ocjena_pusenja">
          <label for="opis_pusenja">OBJASNI ZAŠTO TI SE SVIĐA PUŠENJE: </label>
          <input type="text" v-model="novaAnketa.opis_pusenja" id="opis_pusenja">
          <label for="ocjena_meksanja">OCJENI MEKŠANJE</label>
          <input type="number" v-model="novaAnketa.ocjena_meksanja" id="ocjena_meksanja">
          <label for="opis_meksanja">OBJASNI ZAŠTO MEKŠAŠ CIGARU I ODGOVORI NA NEKA PITANJA</label>
          <input type="text" v-model="novaAnketa.opis_meksanja" id="opis_meksanja">
          <label for="ocjena_lizanja">OCJENI LIZANJE</label>
          <input type="number" v-model="novaAnketa.ocjena_lizanja" id="ocjena_lizanja">
          <label for="opis_lizanja">OBJASNI ZAŠTO LIŽEŠ CIGARU I ODGOVORI NA NEKA PITANJA</label>
          <input type="text" v-model="novaAnketa.opis_lizanja" id="opis_lizanja">
        </div>
      </div>
      <button type="submit" class="responsive-button">DODAJ ANKETU</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'AddPool',
  data(){
    return{
      novaAnketa:{
        broj:null,
        kolicina_dan:null,
        kolicina_max_dan:null,
        trenutne_cigare:'',
        najdraze_cigare:'',
        meksanje:'',
        kolicina_meksanja:'',
        lizanje:'',
        kolicina_lizanja:'',
        grickanje:'',
        kolicina_grickanja:'',
        nova_cigara:'',
        kolicina_gutanja_dima:null,
        kolutici_od_dima:'',
        ocjena_pusenja:null,
        opis_pusenja:'',
        ocjena_meksanja:null,
        opis_meksanja:'',
        ocjena_lizanja:null,
        opis_lizanja:''
      }
    }
  },
  methods:{
    async dodajAnketu(){
      try{ 
          const response=await axios.post('http://localhost:3000/ankete',this.novaAnketa);
          if(response.status===201){
            this.novaAnketa={
              broj:null,
              kolicina_dan:null,
              kolicina_max_dan:null,
              trenutne_cigare:'',
              najdraze_cigare:'',
              meksanje:'',
              kolicina_meksanja:'',
              lizanje:'',
              kolicina_lizanja:'',
              grickanje:'',
              kolicina_grickanja:'',
              nova_cigara:'',
              kolicina_gutanja_dima:null,
              kolutici_od_dima:'',
              ocjena_pusenja:null,
              opis_pusenja:'',
              ocjena_meksanja:null,
              opis_meksanja:'',
              ocjena_lizanja:null,
              opis_lizanja:''
            };
            alert('Anketa je dodana');
          }else{
            alert('Došlo je do greške prilikom dodavanja ankete.');
          }
      }catch(error){
        console.error('Greška',error);
        alert('Došlo je do greške prilikom komunikacije sa serverom.');
      }
    }
  }
}
</script>

<style scoped>
body {
  background-color: whitesmoke;
}
.container {
  background-color: whitesmoke;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.form {
  background-color: blue;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: yellow;
}
.main-div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.sub-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.sub-div label {
  text-align: center;
}
.responsive-button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 10px;
    background-color: #5ADCAD; /* Set button background color to blue */
    color: yellow; /* Set button text color to yellow */
    border: none; /* Remove border */
    cursor: pointer;
    transition: background-color 0.3s ease; /* Smooth transition for background color */
}

.responsive-button:hover {
    background-color: navy; /* Darker blue on hover */
}
</style>
