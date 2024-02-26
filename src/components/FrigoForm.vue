<script setup>
import { ref } from "vue";

const photo = ref("");
const nom = ref("");
const qte = ref("");

defineEmits(["addA"]);

</script>


<template>
  <body class="saisie">
    <h4>Ajouter un aliment au frigo: </h4>
    <form @submit.prevent="$emit('addA', nom, qte, photo)" class="formInput">
      <div class="input">
        <input class="inputA" type="text" v-model="nom" placeholder="Aliment ?"/> 
        <input class="inputQ" type="text" v-model="qte" placeholder="Quantité ?"/> 
        <input class="inputP" type="text" v-model="photo" placeholder="Photo ?" title="Ajouter un lien vers une photo pour un meilleur visuel!" />
      </div>
      <!-- Bouton Valider -->
      <button class="send" type="submit"> 
        <img id ="valider" src="./icons/send.png" alt="Bouton Valider">
      </button>
    </form>
  </body>
</template>


<style scoped>

.saisie{
  margin-left: 25px;
  background-color: rgba(247, 137, 194, 0.025);
}

.formInput{
  padding-left: 40px;
  display: flex;
  justify-content: center;
}

.input{
  display: flex;
  flex-direction: column;
}

.inputA, .inputQ, .inputP {
  border: none;

  background-color: rgb(247, 137, 194, 0.025);
  background-image: url('icons/food.png');
  background-size: 20%;
  background-position: right;
  background-repeat: no-repeat;
  padding-top: 15px;
  width: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.send {
  border: none;
  padding: 15px;
  background: none;
  cursor: pointer;
  align-self: flex; 
}

#valider {
  width: 50px;
  height: 50px; 
}


</style>