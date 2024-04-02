<template>
    <div class="div-button" >
        <div id="div-secondary">
        <button class="btn-text-icon" @click="isClicked($event)">
            
            <FontAwesomeIcon icon="angle-left" style="padding-right: 8px;"/> Action
        </button>

        <button class="btn-text-icon" @click="isClicked($event)">
         Action
            <FontAwesomeIcon icon="arrow-right"  style="padding-left: 8px;" />
        </button>

        <button class="btn-no-icon" @click="isClicked($event)">
          Action
        </button>

        <button class="btn-icon-only" @click="isClicked($event)">
        <FontAwesomeIcon icon="arrow-right" />
        </button>
    </div>
</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: "SecondaryButton",
    components: {
     FontAwesomeIcon 
    },
    methods: {
        isClicked: function (e) {
            e.preventDefault()
            e.target.disabled = true
        }
    }
}

</script>

<style>
#div-secondary {
    button {
        background-color: white;
        border: 1px solid #C75100;
        color: #C75100;
    }
}
</style>