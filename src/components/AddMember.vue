<template>
  <div class="container">
    <form @submit.prevent="dodajClana" class="form">
      <div class="main-div">
        <div class="sub-div">
          <label for="broj_clana">UNESI BROJ ČLANA: </label>
          <input type="number" v-model="noviClan.broj_clana" id="broj_clana">
        </div>
        <div class="sub-div">
          <label for="pitanje_za_lizanje">JE LI ČLAN PITAN PITANJE DA LI LIŽE CIGARU</label>
          <input type="text" v-model="noviClan.pitanje_za_lizanje" id="pitanje_za_lizanje">
          <label for="aktivnost_clana">KOLIKO AKTIVNO ČLAN PUŠI</label>
          <input type="text" v-model="noviClan.aktivnost_clana" id="aktivnost_clana">
          <label for="glavni_nacin_obrade_cigare">KOJI JE GLAVNI NAČIN OBRADE CIGARE ČLANA</label>
          <input type="text" v-model="noviClan.glavni_nacin_obrade_cigare" id="glavni_nacin_obrade_cigare">
        </div>
        <div class="sub-div">
          <label for="glavni_nacin_meksanja">KOJI JE GLAVNI NAČIN MEKŠANJA CIGARA</label>
          <input type="text" v-model="noviClan.glavni_nacin_meksanja" id="glavni_nacin_meksanja">
          <label for="glavni_nacin_grickanja">KOJI JE GLAVNI NAČIN GRICKANJA CIGARA</label>
          <input type="text" v-model="noviClan.glavni_nacin_grickanja" id="glavni_nacin_grickanja">
          <label for="glavni_nacin_lizanja">KOJI JE GLAVNI NAČIN LIZANJA CIGARA</label>
          <input type="text" v-model="noviClan.glavni_nacin_lizanja" id="glavni_nacin_lizanja">
        </div>
        <div class="sub-div">
          <label for="ukupan_broj_pravilnog_stavljanja">UKUPAN BROJ PRAVILNOG STAVLJANJA</label>
          <input type="text" v-model="noviClan.ukupan_broj_pravilnog_stavljanja" id="ukupan_broj_pravilnog_stavljanja">
          <label for="ukupan_broj_trikova">UKUPAN BROJ TRIKOVA</label>
          <input type="text" v-model="noviClan.ukupan_broj_trikova" id="ukupan_broj_trikova">
        </div>
        <div class="sub-div">
          <label for="anketa">JE LI URAĐENA ANKETA</label>
          <select v-model="noviClan.anketa"  id="anketa">
            <option value="DA">DA</option>
            <option value="NE">NE</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="spremi_anketu">SPREMI ANKETU</label>
          <select v-model="noviClan.spremi_anketu" id="spremi_anketu">
            <option value="" disabled selected>SPREMI ANKETU</option>
            <option v-for="anketa in ankete" :value="anketa._id" :key="anketa._id">{{ anketa.broj }}</option>
          </select>
        </div>
      </div>
      <button type="submit" class="responsive-button">DODAJ ČLANA</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'AddMember',
  data(){
    return{
      noviClan:{
        broj_clana:null,
        pitanje_za_lizanje:'',
        aktivnost_clana:'',
        glavni_nacin_obrade_cigare:'',
        ukupan_broj_sezona:0,
        ukupan_broj_cigara:0,
        ukupan_broj_EU_cigara:0,
        ukupan_broj_meksanih_cigara:0,
        glavni_nacin_meksanja:'',
        meksanje_pritiskanjem:0,
        meksanje_rolanjem:0,
        meksanje_povlacenjem:0,
        meksanje_udaranje_filtera:0,
        meksanje_kombinacija_svih_nacina:0,
        ukupan_broj_grickanih_cigara:0,
        glavni_nacin_grickanja:'',
        grickanje_vrha:0,
        grickanje_psk_ili_kombinacija:0,
        grickanje_cijele_strane:0,
        grickanje_sa_svih_strana:0,
        ukupan_broj_lizanih_cigara:0,
        glavni_nacin_lizanja:'',
        lizanje_tockasti_vrh:0,
        lizanje_uspravni_vrh:0,
        lizanje_kosi_vrh:0,
        lizanje_vodoravni_vrh:0,
        lizanje_pola_strane:0,
        lizanje_cijele_strane:0,
        lizanje_cijele_strane_5_bodova:0,
        lizanje_cijele_strane_i_pola_strane:0,
        lizanje_2_cijele_strane:0,
        lizanje_2_cijele_strane_i_pola_strane:0,
        lizanje_3_cijele_strane:0,
        lizanje_sa_svih_strana:0,
        ukupan_broj_pravilnog_stavljanja:'',
        ukupan_broj_trikova:'',
        anketa:'',
        spremi_anketu:null
      },
      ankete:[]
    }
  },
  methods:{
    async dodajClana(){
      try{
        const response=await axios.post('http://localhost:3000/clanovi',this.noviClan)
        if(response.status===201){
          this.noviClan={
            broj_clana:null,
            pitanje_za_lizanje:'',
            aktivnost_clana:'',
            glavni_nacin_obrade_cigare:'',
            ukupan_broj_sezona:0,
            ukupan_broj_cigara:0,
            ukupan_broj_EU_cigara:0,
            ukupan_broj_meksanih_cigara:0,
            glavni_nacin_meksanja:'',
            meksanje_pritiskanjem:0,
            meksanje_rolanjem:0,
            meksanje_povlacenjem:0,
            meksanje_udaranje_filtera:0,
            meksanje_kombinacija_svih_nacina:0,
            ukupan_broj_grickanih_cigara:0,
            glavni_nacin_grickanja:'',
            grickanje_vrha:0,
            grickanje_psk_ili_kombinacija:0,
            grickanje_cijele_strane:0,
            grickanje_sa_svih_strana:0,
            ukupan_broj_lizanih_cigara:0,
            glavni_nacin_lizanja:'',
            lizanje_tockasti_vrh:0,
            lizanje_uspravni_vrh:0,
            lizanje_kosi_vrh:0,
            lizanje_vodoravni_vrh:0,
            lizanje_pola_strane:0,
            lizanje_cijele_strane:0,
            lizanje_cijele_strane_5_bodova:0,
            lizanje_cijele_strane_i_pola_strane:0,
            lizanje_2_cijele_strane:0,
            lizanje_2_cijele_strane_i_pola_strane:0,
            lizanje_3_cijele_strane:0,
            lizanje_sa_svih_strana:0,
            ukupan_broj_pravilnog_stavljanja:'',
            ukupan_broj_trikova:'',
            anketa:'',
            spremi_anketu:null
          }
          alert('Član je dodan');
        }else{
          alert('Došlo je do greške prilikom dodavanja člana.');
        }
      }catch(error){
        console.error('Greška',error);
        alert('Došlo je do greške prilikom komunikacije sa serverom.');
      }
    },
    async dobaviAnkete(){
      try{
        const respone=await axios.get('http://localhost:3000/ankete');
        this.ankete=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    }
  },
  mounted(){
    this.dobaviAnkete();
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
