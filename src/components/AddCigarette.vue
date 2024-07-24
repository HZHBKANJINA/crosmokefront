<template>
  <div class="container">
    <form @submit.prevent="dodajCigaru" class="form">
      <h1 class="title">DODAJ CIGARU</h1>
      <div class="clan">
        <label for="clan" class="clan-label" style="color: yellow;">ODABERI ČLANA</label>
        <select v-model="novaCigara.clan" id="clan">
          <option value="" disabled selected>ODABERITE ČLANA</option>
          <option v-for="clan in clanovi" :value="clan._id" :key="clan._id">{{ clan.broj_clana }}</option>
        </select>
      </div>
      <div class="clan">
        <label for="sezona">ODABERI SEZONU</label>
        <select v-model="novaCigara.sezona" id="sezona">
          <option value="" disabled selected>ODABERI SEZONU</option>
          <option v-for="sezona in sezone" :value="sezona._id" :key="sezona._id">{{ sezona.broj }}-{{ sezona.naziv }}</option>
        </select>
      </div>
      <div class="clan">
        <label for="broj_cigare">UNESI BROJ CIGARE</label>
        <input type="number" v-model="novaCigara.broj_cigare" id="broj_cigare">
      </div>
      <label for="meksanje" class="centered-label">MEKŠANJE</label>
      <div class="main-div">
        <div class="sub-div">
          <label for="meksanje" style="color: yellow;">JE LI CIGARA MEKŠANA</label>
          <select v-model="novaCigara.meksanje" id="meksanje">
            <option value="da">+</option>
            <option value="ne">-</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="tip_meksanja">ODABERI NAČIN MEKŠANJA</label>
          <select v-model="novaCigara.tip_meksanja" id="tip_meksanja">
            <option value="" disabled selected>ODABERI NAČIN MEKŠANJA</option>
            <option v-for="meksanje in meksanja" :value="meksanje._id" :key="meksanje._id">{{ meksanje.naziv }}</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="bodovi_meksanja" style="color: yellow;">UNESI BODOVE MEKŠANJA</label>
          <input type="number" v-model="novaCigara.bodovi_meksanja" id="bodovi_meksanja">
        </div>
      </div>
      <label for="grickanje" class="centered-label">GRICKANJE</label>
      <div class="main-div">
        <div class="sub-div">
          <label for="grickanje" style="color: yellow;">JE LI CIGARA GRICKANA</label>
          <select v-model="novaCigara.grickanje" id="grickanje">
            <option value="da">+</option>
            <option value="ne">-</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="tip_grickanja">ODABERI NAČIN GRICKANJA</label>
          <select v-model="novaCigara.tip_grickanja" id="tip_grickanja">
            <option value="" disabled selected>ODABERI NAČIN GRICKANJA</option>
            <option v-for="grickanje in grickanja" :value="grickanje._id" :key="grickanje._id">{{ grickanje.naziv }}</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="bodovi_grickanja" style="color: yellow;">UNESI BODOVE GRICKANJA</label>
          <input type="number" v-model="novaCigara.bodovi_grickanja" id="bodovi_grickanja">
        </div>
      </div>
      <label for="lizanje" class="centered-label">LIZANJE</label>
      <div class="main-div">
        <div class="sub-div">
          <label for="lizanje" style="color: yellow;">JE LI CIGARA LIZANA</label>
          <select v-model="novaCigara.lizanje" id="lizanje">
            <option value="da">+</option>
            <option value="ne">-</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="tip_lizanja">ODABERI NAČIN LIZANJA</label>
          <select v-model="novaCigara.tip_lizanja" id="tip_lizanja">
            <option value="" disabled selected>ODABERI NAČIN LIZANJA</option>
            <option v-for="lizanje in lizanja" :value="lizanje._id" :key="lizanje._id">{{ lizanje.naziv }}</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="bodovi_lizanja" style="color: yellow;">UNESI BODOVE LIZANJA</label>
          <input type="number" v-model="novaCigara.bodovi_lizanja" id="bodovi_lizanja">
        </div>
      </div>
      <label for="pravilno_stavljanje" class="centered-label">PRAVILNO STAVLJANJE</label>
      <div class="main-div">
        <div class="sub-div">
          <label for="pravilno_stavljanje" style="color: yellow;">JE LI CIGARA PRAVILNO STAVLJENA</label>
          <select v-model="novaCigara.pravilno_stavljanje" id="pravilno_stavljanje">
            <option value="da">+</option>
            <option value="ne">-</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="tip_stavljanja">ODABERI NAČIN PRAVILNOG STAVLJANJA</label>
          <select v-model="novaCigara.tip_stavljanja" id="tip_stavljanja">
            <option value="" disabled selected>ODABERI NAČIN PRAVILNOG STAVLJANJA</option>
            <option v-for="stavljanje in stavljanja" :value="stavljanje._id" :key="stavljanje._id">{{ stavljanje.naziv }}</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="bodovi_pravilnog_stavljanja" style="color: yellow;">UNESI BODOVE PRAVILNOG STAVLJANJA</label>
          <input type="number" v-model="novaCigara.bodovi_pravilnog_stavljanja" id="bodovi_pravilnog_stavljanja">
        </div>
      </div>
      <label for="trik" class="centered-label">TRIKOVI</label>
      <div class="main-div">
        <div class="sub-div">
          <label for="trik" style="color: yellow;">JESU LI RAĐENI TRIKOVI</label>
          <select v-model="novaCigara.trik" id="trik">
            <option value="da">+</option>
            <option value="ne">-</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="tip_trikova">ODABERI TRIKOVE</label>
          <select v-model="novaCigara.tip_trikova" id="tip_trikova">
            <option value="" disabled selected>ODABERI TRIKOVE</option>
            <option v-for="trik in trikovi" :value="trik._id" :key="trik._id">{{ trik.naziv }}</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="bodovi_trikova" style="color: yellow;">UNESI BODOVE TRIKOVA</label>
          <input type="number" id="bodovi_trikova">
        </div>
      </div>
      <label for="ostali_nacin_obrade" class="centered-label">OSTALI NAČIN OBRADE CIGARE</label>
      <div class="main-div">
        <div class="sub-div">
          <label for="ostali_nacin_obrade" style="color: yellow;">JE LI CIGARA OBRAĐENA NA NEKI DRUGI NAČIN</label>
          <select v-model="novaCigara.ostali_nacin_obrade" id="ostali_nacin_obrade">
            <option value="da">+</option>
            <option value="ne">-</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="tip_ostalog_nacina_obrade">ODABERI OSTALI NAČIN OBRADE CIGARE</label>
          <select v-model="novaCigara.tip_ostalog_nacina_obrade" id="tip_ostalog_nacina_obrade">
            <option value="" disabled selected>ODABERI OSTALI NAČIN OBRADE CIGARE</option>
            <option v-for="ostali_nacin in ostali_nacini" :value="ostali_nacin._id" :key="ostali_nacin._id">{{ ostali_nacin.naziv }}</option>
          </select>
        </div>
        <div class="sub-div">
          <label for="bodovi_ostalog_nacina_obrade" style="color: yellow;">UNESI BODOVE OSTALOG NAČINA OBRANE</label>
          <input type="number" v-model="novaCigara.bodovi_ostalog_nacina_obrade" id="bodovi_ostalog_nacina_obrade">
        </div>
      </div>
      <label for="pravilne_cigare" class="eu-label">JESU LI CIGARE IZ EU</label>
      <div class="centered-select">
        <select v-model="novaCigara.pravilne_cigare" id="pravilne_cigare">
          <option value="da">+</option>
          <option value="ne">-</option>
        </select>
      </div>
      <div>
        <label for="boja">ODABERI BOJU</label>
        <select v-model="novaCigara.boja" id="boja">
          <option value="" disabled selected>ODABERI BOJU</option>
          <option value="#40e0d0">OBIČNA</option>
          <option value="#5ADCAD">SPECIJALNA</option>
        </select>
      </div>
      <button type="submit" class="responsive-button">Submit</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'AddCigarette',
  data(){
    return{
      clanovi:[],
      sezone:[],
      meksanja:[],
      lizanja:[],
      grickanja:[],
      trikovi:[],
      stavljanja:[],
      ostali_nacini:[],
      novaCigara:{
        clan:'',
        sezona:'',
        broj_cigare:null,
        meksanje:'',
        tip_meksanja:'',
        bodovi_meksanja:null,
        grickanje:'',
        tip_grickanja:'',
        bodovi_grickanja:null,
        lizanje:'',
        tip_lizanja:'',
        bodovi_lizanja:null,
        pravilno_stavljanje:'',
        tip_stavljanja:'',
        bodovi_pravilnog_stavljanja:null,
        trik:'',
        tip_trikova:'',
        bodovi_trikova:null,
        ostali_nacin_obrade:'',
        tip_ostalog_nacina_obrade:'',
        bodovi_ostalog_nacina_obrade:null,
        pravilne_cigare:'',
        boja:''
      }
    }
  },
  methods:{
    async dodajCigaru(){
      try{
        const response=await axios.post('http://localhost:3000/cigare',this.novaCigara);
        if(response.status===201){
          this.novaCigara={
            clan:'',
            sezona:'',
            broj_cigare:null,
            meksanje:'',
            tip_meksanja:'',
            bodovi_meksanja:null,
            grickanje:'',
            tip_grickanja:'',
            bodovi_grickanja:null,
            lizanje:'',
            tip_lizanja:'',
            bodovi_lizanja:null,
            pravilno_stavljanje:'',
            tip_stavljanja:'',
            bodovi_pravilnog_stavljanja:null,
            trik:'',
            tip_trikova:'',
            bodovi_trikova:null,
            ostali_nacin_obrade:'',
            tip_ostalog_nacina_obrade:'',
            bodovi_ostalog_nacina_obrade:null,
            pravilne_cigare:'',
            boja:''
          };
          alert('Cigara dodana');
        }else{
          alert('Došlo je do greške dodavanja cigare');
        }
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviSezonu(){
      try{
        const response=await axios.get('http://localhost:3000/sezone');
        this.sezone=response.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviClana(){
      try{
        const respone=await axios.get('http://localhost:3000/clanovi');
        this.clanovi=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviMeksanja(){
      try{
        const respone=await axios.get('http://localhost:3000/meksanje');
        this.meksanja=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviGrickanje(){
      try{
        const respone=await axios.get('http://localhost:3000/grickanje');
        this.grickanja=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviLizanje(){
      try{
        const respone=await axios.get('http://localhost:3000/lizanje');
        this.lizanja=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviStavljanje(){
      try{
        const respone=await axios.get('http://localhost:3000/stavljanje');
        this.stavljanja=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviTrikove(){
      try{
        const respone=await axios.get('http://localhost:3000/trikovi');
        this.trikovi=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviOsatleNacine(){
      try{
        const respone=await axios.get('http://localhost:3000/ostalinacini');
        this.ostali_nacini=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
  },
  mounted(){
    this.dobaviSezonu();
    this.dobaviClana();
    this.dobaviMeksanja();
    this.dobaviGrickanje();
    this.dobaviLizanje();
    this.dobaviStavljanje();
    this.dobaviTrikove();
    this.dobaviOsatleNacine();
  }
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: whitesmoke; /* Set body background color to whitesmoke */
}

.container {
    background-color: whitesmoke; /* Set non-form content background color to whitesmoke */
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.form {
    background-color: blue; /* Set form background color to blue */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: yellow; /* Set text color inside the form to yellow */
}

.title {
    font-size: 28px;
    margin-bottom: 20px;
    color: yellow;
}

.centered-label {
    display: block;
    margin-bottom: 30px; /* Increase the space below the centered label */
    font-size: 24px;
    font-weight: bold;
    color: yellow;
}

.main-div {
    display: flex;
    justify-content: space-between; /* space evenly between child elements */
    gap: 20px; /* Increase the gap between sub-divs */
    margin-bottom: 20px; /* Add space below the main-div */
}

.sub-div {
    text-align: center;
    flex-basis: 30%; /* each sub-div takes up 30% of the width */
    box-sizing: border-box;
}

.sub-div label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
}

input[type="text"], input[type="number"], select {
    width: 80%; /* Reduce width of input and select */
    padding: 10px;
    box-sizing: border-box;
    margin: 0 auto; /* Center the elements horizontally */
    border-radius: 5%; /* Round the borders */
    border: none; /* Remove border */
    background-color: whitesmoke; /* Set background color to whitesmoke */
    color: black; /* Set text color to black */
}

.centered-select {
    text-align: center;
    margin-bottom: 20px; /* Add space below the centered select */
}

.centered-select select {
    width: 30%; /* Set width for the select element */
    padding: 10px;
    box-sizing: border-box;
    border: none; /* Remove border */
    background-color: whitesmoke; /* Set background color to whitesmoke */
    color: black; /* Set text color to black */
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
.clan-label {
  margin-right: 30px;
  margin-left: auto;
}
.clan{
  margin-bottom: 50px;
}
.eu-label{
  margin-bottom: 20px;
  color: yellow;
}

</style>
