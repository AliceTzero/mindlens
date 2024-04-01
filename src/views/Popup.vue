<template>
    <h1>{{ title }}</h1>
    <div>
        <table id="tbl-alert">
            <tr>
                <th></th>
                <th>All</th>
                <th>Content only</th>
                <th>Title and Content</th>
                <th>Title only</th>
            </tr>
            <tr>
                <th>Info</th>
                <td>
                    <InfoModal />
                </td>
                <td class="title-or-content" id="content-only">
                    <InfoModal />
                </td>
                <td class="title-content-only">
                    <InfoModal />
                </td>
                <td class="title-or-content">
                    <InfoModal />
                </td>
            </tr>
            <tr>
                <th>Error</th>
                <td>
                    <ErrorModal />
                </td>
                <td class="title-or-content" id="content-only">
                    <ErrorModal />
                </td>
                <td class="title-content-only">
                    <ErrorModal />
                </td>
                <td class="title-or-content">
                    <ErrorModal />
                </td>
            </tr>
            <tr>
                <th>Warning</th>
                <td>
                    <WarningModal />
                </td>
                <td class="title-or-content" id="content-only">
                    <WarningModal />
                </td>
                <td class="title-content-only">
                    <WarningModal />
                </td>
                <td class="title-or-content">
                    <WarningModal />
                </td>
            </tr>
            <tr>
                <th>Success</th>
                <td>
                    <SuccessModal />
                </td>
                <td class="title-or-content" id="content-only">
                    <SuccessModal />
                </td>
                <td class="title-content-only">
                    <SuccessModal />
                </td>
                <td class="title-or-content">
                    <SuccessModal />
                </td>
            </tr>
            <tr>
                <td></td>
                <td><tr>Responsive mobile state</tr>
                <tr id="mobile-state"><InfoModal /></tr>
                </td>

            </tr>
        </table>
    </div>

</template>

<script>

import InfoModal from '../components/InfoModal.vue'
import ErrorModal from '../components/ErrorModal.vue'
import WarningModal from '../components/WarningModal.vue'
import SuccessModal from '../components/SuccessModal.vue'


export default {
    name: 'Popup',
    components: {
        InfoModal, ErrorModal, WarningModal, SuccessModal
    },
    data() {
        return {
            title: 'Popup',
        }
    },
}
</script>

<style>
#tbl-alert>td {
    padding: 20px;
}

#tbl-alert th{
    padding: 10px 20px;
}


/* Title or Content section */

.title-or-content {
    .modal {
        height: 48px;
    }

    .tbl-modal {

        margin: 12px;
    }

    .row-content {
        width: 636px;
        height: 24px;

        p {
            margin-bottom: 0px;
        }

        .modal-content,
        button {
            display: none;
        }
    }

    .icon-header {
        font-size: 20px;
        padding-right: 8px;
    }

}

/* Content only */
#content-only .row-content .modal-header {
    font-weight: normal;
}



/* Title and Content only section */
.title-content-only {
    .modal {
        height: 128px;
    }

    .row-content {
        width: 596px;
        height: 80px;

        button {
            display: none;

        }
    }

    .btn-action {
        display: none;
    }

}

/* Responsive mobile state */
#mobile-state {
    .modal {
    width: 330px;
    height: 312px;
    }
}
</style>