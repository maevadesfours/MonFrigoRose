<script setup>
defineProps(["aliment"]);
defineEmits(["supprimer", "ajouter", "enlever"])
</script>


<template>
        <div class="afficher">
            {{ aliment.afficherNom() }}
            {{ aliment.afficherQte() }}<br>
        </div>
        <div class="boutons">
            <button @click="$emit('supprimer', aliment.id)" class="button">Supprimer</button>
            <button @click="$emit('enlever', aliment)" class="button">Moins</button>
            <button @click="$emit('ajouter', aliment)" class="button">Plus</button>
        </div>
</template>

<style scoped>
.afficher {
    font-family: Arial, sans-serif;
    margin-top: 20px;
}

#supprimer, #ajouter, #enlever {
    width: 20px;
    height: 20px;
}

.button {
    border: none;
    background: none; 
    cursor: pointer;
    padding: 0; 
    margin-left:8px;
}
</style>



