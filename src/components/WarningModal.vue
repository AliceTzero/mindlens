<template>
    <div id="modal-warning" class="modal">
        <table id="tbl-modal-warning" class="tbl-modal">
            <tr>
                <td valign="top">
                    <fa icon="fa-solid fa-triangle-exclamation" id="icon-header" style="color:#dc5a00;" />
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
                    <fa icon="fa-solid fa-x" id="icon-close" style="color: #566271;" />
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    name: 'WarningModal',

}
</script>

<style>
#modal-warning {
    background: #FDF3E1;
    border: 1px solid #dc5a00;
}

#tbl-modal-warning {
    .btn-bg-white {
        color: #dc5a00;
        background-color: white;
        border: 2px solid #dc5a00;
    }

    .btn-bg-dark {
        color: white;
        background-color: #dc5a00;
        border: 2px solid transparent;
    }

    .btn-bg-dark:hover {
        background-color: #dc5a00;
    }
}
</style>
