<template>
  <div class="naslov">
    <label for="clan">ODABERI ČLANA: </label>
    <select @change="filtrirajAnkete" v-model="odabraniClan">
      <option value="" disabled selected>ODABERI ČLANA</option>
      <option v-for="clan in clanovi" :value="clan._id" :key="clan._id">{{ clan.broj_clana }}</option>
    </select>
  </div>
  <table v-if="filtriraneAnkete">
    <thead>
      <tr>
        <th>BROJ PITANJA: </th>
        <th>PITANJE: </th>
        <th>ODGOVOR: </th>
      </tr>
    </thead>
      <tbody v-for="anketa in filtriraneAnkete" :key="anketa._id">
        <tr>
          <td>1</td>
          <td>BROJ:</td>
          <td>{{ anketa.broj }}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>KOLIKO CIGARA PUŠIŠ DNEVNO?</td>
          <td>{{ anketa.kolicina_dan }}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>KOLIKO SI NAJVIŠE CIGARA PUŠILA U JEDNOM DANU?</td>
          <td>{{ anketa.kolicina_max_dan }}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>KOJE CIGARE TRENUTNO PUŠIŠ?</td>
          <td>{{ anketa.trenutne_cigare }}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>KOJE SU TI NAJDRAŽE CIGARE?</td>
          <td>{{ anketa.najdraze_cigare }}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>JESI LI IKADA SMEKŠALA CIGARU?</td>
          <td>{{ anketa.meksanje }}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>KOLIKO ČESTO SMEKŠAŠ CIGARU?</td>
          <td>{{ anketa.kolicina_meksanja }}</td>
        </tr>
        <tr>
          <td>8</td>
          <td>JESI LI IKADA OBLIZALA CIGARU?</td>
          <td>{{ anketa.lizanje }}</td>
        </tr>
        <tr>
          <td>9</td>
          <td>KOLIKO ČESTO OBLIŽEŠ CIGARU?</td>
          <td>{{ anketa.kolicina_lizanja }}</td>
        </tr>
        <tr>
          <td>10</td>
          <td>JESI LI IKADA GRICKALA CIGARU ZA PAPIR?</td>
          <td>{{ anketa.grickanje }}</td>
        </tr>
        <tr>
          <td>11</td>
          <td>KOLIKO ČESTO GRICKAŠ CIGARU ZA PAPIR?</td>
          <td>{{ anketa.kolicina_grickanja }}</td>
        </tr>
        <tr>
          <td>12</td>
          <td>
            NA KOJI NAČIN PROBAŠ CIGARU PRVI PUT:
            <p>NPR. AKO PUŠIŠ NORMALNE CIGARE I ŽELIŠ DA PROBAŠ TANKE,PRVO KAKO BI PRIPREMILA CIGARU PRIJE NEGO ŠTO JE ZAPALIŠ</p>
          </td>
          <td>{{ anketa.nova_cigara }}</td>
        </tr>
        <tr>
          <td>13</td>
          <td>KOLIKO PUTA UVUČEŠ DIM(PROGUTAŠ)?</td>
          <td>{{ anketa.kolicina_gutanja_dima }}</td>
        </tr>
        <tr>
          <td>14</td>
          <td>JESI LI IKADA NAPRAVILA KOLUTIĆE OD DIMA?</td>
          <td>{{ anketa.kolutici_od_dima }}</td>
        </tr>
        <tr>
          <td>15</td>
          <td>OCJENI PUŠENJE:</td>
          <td>{{ anketa.ocjena_pusenja }}</td>
        </tr>
        <tr>
          <td>16</td>
          <td>OBJASNI ZAŠTO TI SE SVIĐA PUŠENJE:</td>
          <td>{{ anketa.opis_pusenja }}</td>
        </tr>
        <tr>
          <td>17</td>
          <td>OCJENI MEKŠANJE:</td>
          <td>{{ anketa.ocjena_meksanja }}</td>
        </tr>
        <tr>
          <td>18</td>
          <td>
            ODGOVORI NA SVA PITANJA I OPIŠI ZAŠTO TI SE SVIĐA MEKŠANJE CIGARA:
            <p>
              1. ZAŠTO MEKŠAŠ CIGARU?-NAVEDI RAZLOGE
              2. KAD JE OMEKŠAŠ?-KAD TI PADNE NA PAMET DA MEKŠAŠ CIGARU I KAKO PREPOZNAŠ DA TREBAŠ MEKŠAT CIGARU
              3. KOLIKO PUTA DNEVNO MEKŠAŠ CIGARU?
              4. KAD SI PRVI PUT U ŽIVOTU MEKŠALA CIGARU?
              5. KOLIKO SI CIGARA NAJVIŠE MEKŠALA U JEDNOM DANU?
              6. NA KOJI NAČIN MEKŠAŠ CIGARU?
              AKO NE MEKŠAŠ CIGARU ODGOVOR JE "NE MEKŠAM CIGARU"
            </p>
          </td>
          <td>{{ anketa.opis_meksanja }}</td>
        </tr>
        <tr>
          <td>19</td>
          <td>OCJENI LIZANJE</td>
          <td>{{ anketa.ocjena_lizanja }}</td>
        </tr>
        <tr>
          <td>20</td>
          <td>
            ODGOVORI NA SVA PITANJA I OPIŠI ZAŠTO TI SE SVIĐA LIZANJE CIGARA:
            <p>
              1. ZAŠTO LIŽEŠ CIGARU?-NAVEDI RAZLOGE
              2. KAD JE LIŽEŠ ?-KAD TI PADNE NA PAMET DA LIŽEŠ CIGARU I KAKO PREPOZNAŠ DA TREBAŠ LIZATI CIGARU
              3. KOLIKO PUTA DNEVNO LIŽEŠ CIGARU?
              4. KAD SI PRVI PUT U ŽIVOTU LIZALA CIGARU?
              5. KOLIKO SI CIGARA NAJVIŠE LIZALA U JEDNOM DANU?
              6. NA KOJI NAČIN LIŽEŠ CIGARU?
              AKO NE LIŽEŠ CIGARU ODGOVOR JE "NE LIŽEM CIGARU"
            </p>
          </td>
          <td>{{ anketa.opis_lizanja }}</td>
        </tr>
      </tbody>
  </table>
</template>

<script>

import axios from 'axios';

export default {
  name: 'PoolView',
  data(){
    return{
      clanovi:[],
      ankete:[],
      filtriraneAnkete:[],
      odabraniClan: ''
    }
  },
  methods:{
    async dobaviClana(){
      try{
        const respone=await axios.get('http://localhost:3000/clanovi');
        this.clanovi=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    async dobaviAnketu(){
      try{
        const respone=await axios.get('http://localhost:3000/ankete');
        this.ankete=respone.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška na serveru');
      }
    },
    filtrirajAnkete(){
      console.log('Odabrani član:', this.odabraniClan);
      const clan = this.clanovi.find(c => c._id === this.odabraniClan);
      if(clan){
        console.log('Pronađeni član:', clan);
        this.filtriraneAnkete = this.ankete.filter(anketa => anketa._id === clan.spremi_anketu);
        console.log('Filtrirane ankete:', this.filtriraneAnkete);
      }else{
        this.filtriraneAnkete=[];
      }
    }
  },
  mounted(){
    this.dobaviClana();
    this.dobaviAnketu();
  },
  watch:{
    odabraniClan(){
      this.filtrirajAnkete();
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black; /* Dodaje crni obrub oko ćelija */
  padding: 8px;
}

thead {
  background-color: #f2f2f2; /* Svijetlo siva pozadina za zaglavlja */
}

th {
  text-align: center;
}

tr:not(:last-child) td {
  border-bottom: 1px solid black; /* Obrub ispod svakog retka, osim zadnjeg */
}

td:not(:last-child) {
  border-right: 1px solid black; /* Obrub desno od svake ćelije, osim zadnje */
}
p{
  font-size: 14px;
  font-style: italic
}
</style>
