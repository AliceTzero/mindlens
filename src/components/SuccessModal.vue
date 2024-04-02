src/components/ErrorModal.vue<template>
    <div id="modal-success" class="modal">
        <table id="tbl-modal-success" class="tbl-modal">
            <tr>
                <td valign="top">
                    <FontAwesomeIcon icon="fa-solid fa-circle-check" id="icon-header" style="color: #008700;" />
                </td>

                <td class="row-content" valign="top">
                    <p class="modal-header">A short descriptive header</p>
                    <p class="modal-content">This is a paragraph of information with additional supporting detail or
                        <router-link :to="{ name: 'Help' }" class="link-content">links</router-link> to <br />
                        help the user understand what they should do.
                    </p>
                    <div class="btn-action">
                        <button class="btn-bg-white">Action</button>
                        <button class="btn-bg-dark">Action</button>
                    </div>
                </td>
                <td valign="top">
                    <FontAwesomeIcon icon="fa-solid fa-x" id="icon-close" style="color: #566271;" />
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'SuccessModal',
    components: {FontAwesomeIcon}
}
</script>

<style>
#modal-success {
    background: #F8FFF2;
    border: 1px solid #008700;
}

#tbl-modal-success {
    .btn-bg-white {
        color: #008700;
        background-color: white;
        border: 2px solid #008700;
    }

    .btn-bg-dark {
        color: white;
        background-color: #008700;
        border: 2px solid transparent;
    }

    .btn-bg-dark:hover {
        background-color: #008700;
    }
}
</style>
