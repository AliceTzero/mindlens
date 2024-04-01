<template>
    <div id="modal-error" class="modal">
        <table id="tbl-modal-error" class="tbl-modal">
            <tr>
                <td valign="top">
                    <fa icon="fa-solid fa-circle-exclamation" id="icon-header" style="color: #CC3123;" />
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
    name: 'ErrorModal',

}
</script>

<style>

#modal-error{
    background: #FEF5F5;
        border: 1px solid #CC3123;
}

#tbl-modal-error {
    .btn-bg-white {
        color: #CC3123;
        background-color: white;
        border: 2px solid #CC3123;
    }

    .btn-bg-dark {
        color: white;
        background-color: #CC3123;
        border: 2px solid transparent;
    }

    .btn-bg-dark:hover {
        background-color: #CC3123;
    }

}
</style>
