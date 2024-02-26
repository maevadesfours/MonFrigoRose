<script setup>
import { ref } from "vue";
defineProps(["mesAliments"]);

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
        <option v-for="aliment in mesAliments" :key="aliment" :value="aliment">{{ aliment.nom }}</option>
      </select>
      -->
</template>


<style scoped>
</style>