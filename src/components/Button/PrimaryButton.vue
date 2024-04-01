<template>
    <div class="div-button" >
        <div id="div-primary">
        <button class="btn-text-icon" @click="isClicked($event)">
            
                <fa icon="arrow-right" style="padding-right: 8px;" /> Action
          
        </button>

        <button class="btn-text-icon" @click="isClicked($event)">
            Action
                <fa icon="arrow-right" style="padding-left: 8px;" />
            
        </button>

        <button class="btn-no-icon" @click="isClicked($event)">
          Action
        </button>

        <button class="btn-icon-only" @click="isClicked($event)">
           
                <fa icon="arrow-right" />
            
        </button>
    </div>
</div>
</template>
<script>


export default {
    name: "PrimaryButton",
    methods: {
        isClicked: function (e) {
            e.preventDefault()
            e.target.disabled = true
        }
    }
}
</script>

<style>
#div-primary {
    button {
        background-color: #f5bc4b;
        border: 1px solid transparent;
        color: black;
    }
}


.btn-text-icon {
    width: 130px;
}

.btn-no-icon {
    width: 98px;
}

.btn-icon-only {
    width: 40px;
}

.div-button {
    button {
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        margin-right: 100px;
        height: 40px;
        cursor: pointer;
        float: left;
        padding: 0px;
        -webkit-transition-duration: 0.4s;
        /* Safari */
        transition-duration: 0.4s;
        line-height: 24px;
    }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            pointer-events: none;
        }

        fa {
                font-size: 24px;
        
            }

       
    

}
</style>