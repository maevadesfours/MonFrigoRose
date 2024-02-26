<script setup>
defineProps(["aliment"]);
defineEmits(["supprimer", "ajouter", "enlever"])
</script>


<template>
        <div class="show">
            {{ aliment.afficherNom() }}
            {{ aliment.afficherQte() }}<br>
        </div>
        <div class="feat">
            <button @click="$emit('supprimer', aliment.id)" class="button">Supprimer</button>
            <button @click="$emit('enlever', aliment)" class="button">Moins</button>
            <button @click="$emit('ajouter', aliment)" class="button">Plus</button>
        </div>
</template>

<style scoped>
.show {
    font-family: Arial, sans-serif;
    margin-top: 20px;
}

#delete, #more, #less {
    width: 20px;
    height: 20px;
}

#delete:hover, #more:hover, #less:hover {
  transform: scale(1.25); 
}
.button {
    border: none;
    background: none; 
    cursor: pointer;
    padding: 0; 
    margin-left:8px;
}
</style>



