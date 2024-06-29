<template>
  <table>
    <thead>
      <tr>
        <th class="header-cell">BROJ</th>
        <th class="header-cell">PITANJE ZA LIZANJE</th>
        <th class="header-cell">AKTIVNOST ČLANA</th>
        <th class="header-cell">GLAVNI NAČINI OBRADE CIGARE</th>
        <th class="header-cell">BROJ SEZONA</th>
        <th class="header-cell">BROJ LIZANIH CIGARA</th>
        <th class="header-cell">BROJ EU CIGARA</th>
        <th class="header-cell">MEKŠANJE</th>
        <th class="header-cell">GLAVNI NAČIN MEKŠANJA</th>
        <th class="header-cell">PRITISKANJE</th>
        <th class="header-cell">ROLANJE</th>
        <th class="header-cell">POVLAČENJE</th>
        <th class="header-cell">UDARANJE FILTERA</th>
        <th class="header-cell">KOMBINACIJA SVIH NAČINA</th>
        <th class="header-cell">GRICKANJE</th>
        <th class="header-cell">GLAVNI NAČIN GRICKANJA</th>
        <th class="header-cell">GRICKANJE ZA VRH</th>
        <th class="header-cell">GRICKANJE POČETAK SREDINA KRAJ ILI NEKA KOMBINACIJA</th>
        <th class="header-cell">GRICKANJE CIJELE STRANE</th>
        <th class="header-cell">GRICKANJE SA SVIH STRANA</th>
        <th class="header-cell">LIZANJE</th>
        <th class="header-cell">GLAVNI NAČIN LIZANJA</th>
        <th class="header-cell">TOČKASTI VRH</th>
        <th class="header-cell">USPRAVNI VRH</th>
        <th class="header-cell">KOSI VRH</th>
        <th class="header-cell">VODORAVNI VRH</th>
        <th class="header-cell">POLA STRANE</th>
        <th class="header-cell">CIJELA STRANA</th>
        <th class="header-cell">CIJELA STRANA 5 BODOVA</th>
        <th class="header-cell">CIJELA STRANA + POLA STRANE</th>
        <th class="header-cell">2 CIJELE STRANE</th>
        <th class="header-cell">2 CIJELE STRANE + POLA STRANE</th>
        <th class="header-cell">3 CIJELE STRANE</th>
        <th class="header-cell">SA SVIH STRANA</th>
        <th class="header-cell">PRAVILNO STAVLJANJE</th>
        <th class="header-cell">TRIKOVI</th>
        <th class="header-cell">ANKETA</th>
        <th class="header-cell"></th>
        <th class="header-cell"></th>
        <th class="header-cell"></th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="clan in clanovi" :value="clan._id" :key="clan._id">
          <td>{{ clan.broj_clana }}</td>
          <td :class="pzlKlasa(clan)">{{ clan.pitanje_za_lizanje }}</td>
          <td class="obicna">{{ clan.aktivnost_clana }}</td>
          <td :class="radnaKlasa(clan)">{{ clan.glavni_nacin_obrade_cigare }}</td>
          <td>{{ clan.ukupan_broj_sezona }}</td>
          <td>{{ clan.ukupan_broj_cigara}}</td>
          <td>{{ clan.ukupan_broj_EU_cigara }}</td>
          <td>{{ clan.ukupan_broj_meksanih_cigara }}</td>
          <td class="obicna">{{ clan.glavni_nacin_meksanja }}</td>
          <td>{{ clan.meksanje_pritiskanjem }}</td>
          <td>{{ clan.meksanje_rolanjem }}</td>
          <td>{{ clan.meksanje_povlacenjem }}</td>
          <td>{{ clan.meksanje_udaranje_filtera }}</td>
          <td>{{ clan.meksanje_kombinacija_svih_nacina }}</td>
          <td>{{ clan.ukupan_broj_grickanih_cigara }}</td>
          <td class="obicna">{{ clan.glavni_nacin_grickanja }}</td>
          <td>{{ clan.grickanje_vrha }}</td>
          <td>{{ clan.grickanje_psk_ili_kombinacija }}</td>
          <td>{{ clan.grickanje_cijele_strane }}</td>
          <td>{{ clan.grickanje_sa_svih_strana }}</td>
          <td>{{ clan.ukupan_broj_lizanih_cigara }}</td>
          <td class="obicna">{{ clan.glavni_nacin_lizanja }}</td>
          <td>{{ clan.lizanje_tockasti_vrh }}</td>
          <td>{{ clan.lizanje_uspravni_vrh }}</td>
          <td>{{ clan.lizanje_kosi_vrh }}</td>
          <td>{{ clan.lizanje_vodoravni_vrh }}</td>
          <td>{{ clan.lizanje_pola_strane }}</td>
          <td>{{ clan.lizanje_cijele_strane }}</td>
          <td>{{ clan.lizanje_cijele_strane_5_bodova }}</td>
          <td>{{ clan.lizanje_cijele_strane_i_pola_strane }}</td>
          <td>{{ clan.lizanje_2_cijele_strane }}</td>
          <td>{{ clan.lizanje_2_cijele_strane_i_pola_strane }}</td>
          <td>{{ clan.lizanje_3_cijele_strane }}</td>
          <td>{{ clan.lizanje_sa_svih_strana }}</td>
          <td :class="pravilnoStavljanje(clan)">{{ clan.ukupan_broj_pravilnog_stavljanja }}</td>
          <td :class="ukupnoTrikova(clan)">{{ clan.ukupan_broj_trikova }}</td>
          <td :class="odradjenaAnketa(clan)">{{ clan.anketa }}</td>
          <td class="granica"></td>
          <td class="granica"></td>
          <td class="granica"></td>
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
  name: 'MemberView',
  data(){
    return{
      clanovi:[]
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
    pzlKlasa(clan){
      if(clan.pitanje_za_lizanje==='DA'){
        return 'zelena';
      }else{
        return 'crvena';
      }
    },
    radnaKlasa(clan){
      const kljucnaRijec='lizanje';
      if(clan.glavni_nacin_obrade_cigare.toLowerCase().includes(kljucnaRijec)){
        return 'specijalna';
      }else{
        return 'obicna';
      }
    },
    pravilnoStavljanje(clan){
      if(clan.ukupan_broj_pravilnog_stavljanja>0){
        return 'zelena';
      }else if(clan.ukupan_broj_pravilnog_stavljanja==='UVIJEK'){
        return 'zelena';
      }else if(clan.ukupan_broj_pravilnog_stavljanja==='POVREMENO'){
        return 'zelena';
      }else{
        return 'crvena';
      }
    },
    ukupnoTrikova(clan){
      if(clan.ukupan_broj_trikova>0){
        return 'zelena';
      }else if(clan.ukupan_broj_trikova==='UVIJEK'){
        return 'zelena';
      }else if(clan.ukupan_broj_trikova==='POVREMENO'){
        return 'zelena';
      }else{
        return 'crvena';
      }
    },
    odradjenaAnketa(clan){
      if(clan.anketa==='DA'){
        return 'zelena';
      }else{
        return 'crvena';
      }
    }
  },
  mounted(){
    this.dobaviClanove();
  }
}
</script>

<style scoped>
.custom-table {
  width: 100%; /* Širina tablice */
  border-collapse: collapse; /* Spajanje granica ćelija */
}

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
.crvena{
  background-color: red;
}
.narancasta{
  background-color: orange;
}
.zelena{
  background-color: #22DD22;
}
.obicna{
  background-color: #6FC0DB;
}
.specijalna{
  background-color: #5ADCAD;
}
</style>

