<template>
  <div>
    <label for="clan">ODABERI ČLANA</label>
    <select  v-model="odabraniClan" @change="filtrirajSezonu"  id="clan">
      <option value="" disabled selected>ODABERI ČLANA</option>
      <option v-for="clan in clanovi" :value="clan._id" :key="clan._id">{{ clan.broj_clana }}</option>
    </select>
    <label for="sezona">ODABERI SEZONU</label>
    <select v-model="odabranaSezona" @change="filtrirajCigare" id="sezona">
      <option value="" disabled selected>ODABERI SEZONU</option>
      <option v-for="sezona in filtriraneSezone" :value="sezona._id" :key="sezona._id">{{ sezona.broj }}-{{ sezona.naziv }}</option>
    </select>
  </div>
  <table>
    <thead>
      <tr>
        <th class="header-cell">BROJ CIGARE</th>
        <th class="header-cell">MEKŠANJE</th>
        <th class="header-cell">TIP MEKŠANJA</th>
        <th class="header-cell">BODOVI MEKŠANJA</th>
        <th class="header-cell">GRICKANJE</th>
        <th class="header-cell">TIP GRICKANJA</th>
        <th class="header-cell">BODOVI GRICKANJA</th>
        <th class="header-cell">LIZANJE</th>
        <th class="header-cell">TIP LIZANJA</th>
        <th class="header-cell">BODOVI LIZANJA</th>
        <th class="header-cell">PRAVILNO STAVLJANJE</th>
        <th class="header-cell">TIP PRAVILNOG STAVLJANJA</th>
        <th class="header-cell">BODOVI PRAVILNOG STAVLJANJA</th>
        <th class="header-cell">TRIKOVI</th>
        <th class="header-cell">TIP TRIKOVA</th>
        <th class="header-cell">BODOVI TRIKOVA</th>
        <th class="header-cell">OSTALI NAČIN OBRADE CIGARE</th>
        <th class="header-cell">TIP OSTALOG NAČINA OBRADE CIGARE</th>
        <th class="header-cell">BODOVI OSTALOG NAČINA OBRADE CIGARE</th>
        <th class="header-cell">PRAVILNE CIGARE</th>
        <th class="header-cell"></th>
        <th class="header-cell"></th>
        <th class="header-cell"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cigara in cigare" :key="cigara._id" :style="{ backgroundColor: cigara.boja }">
        <td>{{ cigara.broj_cigare }}</td>
        <td>{{ cigara.meksanje }}</td>
        <td>{{ cigara.tip_meksanja }}</td>
        <td>{{ cigara.bodovi_meksanja }}</td>
        <td>{{ cigara.grickanje }}</td>
        <td>{{ cigara.tip_grickanja }}</td>
        <td>{{ cigara.bodovi_grickanja }}</td>
        <td>{{ cigara.lizanje }}</td>
        <td>{{ cigara.tip_lizanja }}</td>
        <td>{{ cigara.bodovi_lizanja }}</td>
        <td>{{ cigara.pravilno_stavljanje }}</td>
        <td>{{ cigara.tip_stavljanja }}</td>
        <td>{{ cigara.bodovi_pravilnog_stavljanja }}</td>
        <td>{{ cigara.trik }}</td>
        <td>{{ cigara.tip_trikova }}</td>
        <td>{{ cigara.bodovi_trikova }}</td>
        <td>{{ cigara.ostali_nacin_obrade }}</td>
        <td>{{ cigara.tip_ostalog_nacina_obrade }}</td>
        <td>{{ cigara.bodovi_ostalog_nacina_obrade }}</td>
        <td>{{ cigara.pravilne_cigare }}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="granica">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="granica">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="granica">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  
</template>

<script>

import axios from 'axios';

export default {
  name: 'CigaretteView',
  data(){
    return{
      odabraniClan:'',
      odabranaSezona: '',
      filtriraneSezone:[],
      filtriraneCigare:[],
      clanovi:[],
      cigare:[],
      sezone:[]
    }
  },
  methods:{
    async dobaviClanove(){
      try{
        const respone=await axios.get('http://localhost:3000/clanovi');
        this.clanovi=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviSezone(){
      try{
        const respone=await axios.get('http://localhost:3000/sezone');
        this.sezone=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviCigare(){
      try{
        const respone=await axios.get('http://localhost:3000/cigare');
        this.cigare=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    filtrirajSezonu(){
      console.log('Odabrani član:', this.odabraniClan);
      const clan = this.clanovi.find(c => c._id === this.odabraniClan);
      if(clan){
        console.log('Pronađeni član:', clan);
        this.filtriraneSezone=this.sezone.filter(s=>s.clan===clan._id);
        console.log('Pronađene sezone: ',this.filtriraneSezone);
      }
    },
    filtrirajCigare(){
      console.log('Odabrani član:',this.odabraniClan);
      const sezona=this.sezone.find(s=>s._id===this.odabranaSezona);
      if(sezona){
        console.log('Odabrana sezona:',sezona);
        this.filtriraneCigare=this.cigare.filter(c=>c.sezona===sezona._id);
        console.log('Pronađene cigare',this.filtriraneCigare);
      }
    }
  },
  mounted(){
    this.dobaviClanove();
    this.dobaviSezone();
    this.dobaviCigare();
  }
}
</script>

<style scoped>
thead {
  background-color: blue; /* Plava pozadina za zaglavlje */
  text-align: center; /* Centriranje teksta u zaglavlju */
}

thead th {
  padding: 10px; /* Padding za zaglavlje */
  border: 1px solid black; /* Granice zaglavlja */
}

tbody td {
  padding: 10px; /* Padding za tijelo tablice */
  border: 1px solid black; /* Granice tijela tablice */
  text-align: center; /* Centriranje teksta u tijelu tablice */
}
.granica{
  background-color: blue;
}
.granica td:nth-last-child(-n+3) {
    background-color: blue;
  }
</style>
