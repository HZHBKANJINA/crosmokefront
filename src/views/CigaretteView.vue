<template>
  <div>
    <label for="clan">ODABERI ČLANA</label>
    <select  id="clan">
      <option value="" disabled selected>ODABERI ČLANA</option>
      <option ></option>
    </select>
    <label for="sezona">ODABERI SEZONU</label>
    <select  id="sezona">
      <option value="" disabled selected>ODABERI SEZONU</option>
      <option></option>
    </select>
  </div>
  
</template>

<script>

import axios from 'axios';

export default {
  name: 'CigaretteView',
  data(){
    return{
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
    }
  },
  mounted(){
    this.dobaviClanove();
  }
}
</script>
