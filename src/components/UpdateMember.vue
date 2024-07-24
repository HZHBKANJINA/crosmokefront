<template>
    <div>
        <h1>AŽURIRAJ ČLANA</h1>
        <form @submit.prevent="azurirajClana">
            <div class="clan">
                <label for="clan" class="clan-label" style="color: yellow;">ODABERI ČLANA</label>
                <select id="clan" v-model="clan._id" @change="dohvatiClana">
                    <option value="" disabled selected>ODABERITE ČLANA</option>
                    <option v-for="clan in clanovi" :value="clan._id" :key="clan._id">{{ clan.broj_clana }}</option>
                </select>
            </div>
            <label for="pitanje_za_lizanje">PITANJE ZA LIZANJE</label>
            <input type="text" v-model="clan.pitanje_za_lizanje" id="pitanje_za_lizanje">
            <label for="glavni_nacin_obrade_cigare">GLAVNI NAČIN OBRADE CIGARE</label>
            <input type="text" v-model="clan.glavni_nacin_obrade_cigare" id="glavni_nacin_obrade_cigare">
            <label for="ukupan_broj_sezona">UKUPAN BROJ SEZONA</label>
            <input type="number" v-model="clan.ukupan_broj_sezona" id="ukupan_broj_sezona">
            <label for="glavni_nacin_meksanja">GLAVNI NAČIN MEKŠANJA CIGARA</label>
            <input type="text" v-model="clan.glavni_nacin_meksanja" id="glavni_nacin_meksanja">
            <label for="glavni_nacin_grickanja">GLAVNI NAČIN GRICKANJA CIGARA</label>
            <input type="text" v-model="clan.glavni_nacin_grickanja" id="glavni_nacin_grickanja">
            <label for="glavni_nacin_lizanja">GLAVNI NAČIN LIZANJA CIGARA</label>
            <input type="text" v-model="clan.glavni_nacin_lizanja" id="glavni_nacin_lizanja">
            <label for="ukupan_broj_pravilnog_stavljanja">UKUPAN BROJ PRAVILNOG STAVLJANJA</label>
            <input type="text" v-model="clan.ukupan_broj_pravilnog_stavljanja" id="ukupan_broj_pravilnog_stavljanja">
            <label for="ukupan_broj_trikova">UKUPAN BROJ TRIKOVA</label>
            <input type="text" v-model="clan.ukupan_broj_trikova" id="ukupan_broj_trikova">
            <button type="submit">Ažuriraj</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UpdateMember',
    data() {
        return {
            clanovi: [],
            clan: {
                _id: '',
                pitanje_za_lizanje: '',
                glavni_nacin_obrade_cigare: '',
                ukupan_broj_sezona: '',
                glavni_nacin_meksanja: '',
                glavni_nacin_grickanja: '',
                glavni_nacin_lizanja: '',
                ukupan_broj_pravilnog_stavljanja: '',
                ukupan_broj_trikova: ''
            }
        };
    },
    created() {
        this.dohvatiClanove();
    },
    methods: {
        async dohvatiClanove() {
            try {
                const response = await axios.get('http://localhost:3000/clanovi');
                this.clanovi = response.data;
            } catch (error) {
                console.error('Greška pri dohvaćanju članova:', error);
            }
        },
        async dohvatiClana() {
            try {
                const response = await axios.get(`http://localhost:3000/clanovi/${this.clan._id}`);
                this.clan = response.data;
            } catch (error) {
                console.error('Greška pri dohvaćanju člana:', error);
            }
        },
        async azurirajClana() {
            try {
                const response = await axios.put(`http://localhost:3000/clanovi/${this.clan._id}`, {
                    pitanje_za_lizanje: this.clan.pitanje_za_lizanje,
                    glavni_nacin_obrade_cigare: this.clan.glavni_nacin_obrade_cigare,
                    ukupan_broj_sezona: this.clan.ukupan_broj_sezona,
                    glavni_nacin_meksanja: this.clan.glavni_nacin_meksanja,
                    glavni_nacin_grickanja: this.clan.glavni_nacin_grickanja,
                    glavni_nacin_lizanja: this.clan.glavni_nacin_lizanja,
                    ukupan_broj_pravilnog_stavljanja: this.clan.ukupan_broj_pravilnog_stavljanja,
                    ukupan_broj_trikova: this.clan.ukupan_broj_trikova
                });
                if (response.status === 200) {
                    alert('Član uspješno ažuriran!');
                } else {
                    console.error('Greška pri ažuriranju člana.');
                }
            } catch (error) {
                console.error('Greška pri ažuriranju člana:', error);
            }
        }
    }
};
</script>

<style scoped>
/* Dodajte svoje stilove ovdje */
</style>
