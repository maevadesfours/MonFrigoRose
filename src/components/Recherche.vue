<script setup>
import { ref } from "vue";
defineProps(["listeC"]);
// -- donnée réactive pour la saisie du libellé
const motsCle = ref("");
const emit = defineEmits(["recherche"]);
</script>


<template>
  <form @submit.prevent="$emit('recherche',motsCle )">
    <div>
      <input type="text" v-model="motsCle" placeholder="Aliment recherché" />
    </div>
     
    <input type="submit" value="rechercher" />
  </form>
  <select id="listeAliment"></select>
  <!--<select>
        <option v-for="aliment in listeC" :key="aliment" :value="aliment">{{ aliment.nom }}</option>
      </select>
      -->
</template>


<style scoped>
</style>