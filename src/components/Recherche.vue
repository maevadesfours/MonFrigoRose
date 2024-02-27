<script setup>
import { ref } from "vue";

const nomRecherche = ref("");
const emit = defineEmits(["recherche"]);
</script>

<template>
  <form @submit.prevent="$emit('recherche',nomRecherche )">
    <div>
      <input id="text" v-model="recherche" placeholder="Saisir l'aliment" />
    </div>
    <input id="button" type="submit" value="Rechercher" />
    <div id="rechercheAliment"></div>
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
}

#button{
  background-color: gray;
  border: 3px solid #000000;
  width: 120px;
  border-radius: 8px;
}

</style>