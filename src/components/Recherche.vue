<script setup>
import { ref } from "vue";

const nomRecherche = ref("");
const emit = defineEmits(["recherche"]);
</script>

<template>
  <div class="titre">
    <h4>Qu'est ce que je peux bien manger ? </h4>
    </div>
  <form @submit.prevent="$emit('recherche',nomRecherche )">
    <div>
      <input id="text" v-model="nomRecherche" placeholder="Saisir l'aliment" />
    </div>
    <input id="button" type="submit" value="Rechercher" />
    <div id="recherche"></div>
  </form>
</template>

<style scoped>


#text{
  border: black;
  background-color: pink;
  padding-top: 5px;
  width: 150px;
  border-radius: 8px;
  border: 1px solid gray;
  margin-top: 1vh;
}

#button{
  align-self: center; 
  background-color: rgb(209, 208, 209);
  border: 2px solid #000000;
  width: 120px;
  border-radius: 12px;
  margin-bottom: 40px;
}
.titre {
    margin-top: 5vh;
}

</style>