<script setup>
import { defineEmits, ref  } from "vue";
// -- donnée réactive pour la saisie du libellé
const nom = ref("");
const qte = ref("");




// -- les events émis par le composant
const emit = defineEmits(["addAliment"]);
nom.value = "";


function handlerSubmit() {
  emit('addAliment', nom.value, qte.value);
  // réinitialise les champs du formulaire
  nom.value = "";
  qte.value = "";
}
</script>




<template>    
  <form @submit.prevent="handlerSubmit">
 <input type="text" v-model="nom" placeholder="nouvel aliment" />
    <br>
    <input type="text" v-model="qte" placeholder="quantitée" />
    <br>
    <input type="submit" value="valider" />
  </form>
</template>


<style scoped>
</style>