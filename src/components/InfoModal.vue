<template>
    <div id="modal-info" class="modal">
        <table id="tbl-modal-info" class="tbl-modal">
            <tr>
                <td valign="top">
                    <fa icon="fa-solid fa-circle-exclamation" rotation=-180 id="icon-header" style="color: #2c75dd;"/>
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
    name: 'InfoModal',

}
</script>

<style>
.modal {
    width: 720px;
    height: 184px;
    
    border-radius: 4px;
    
}

#modal-info{
    background: #F4FAFF;
        border: 1px solid #2C75DD;
}

#tbl-modal-info {
   
    .btn-bg-white {
    color: darkorange;
    background-color: white;
    border: 2px solid darkorange;
}

.btn-bg-dark {
    color: #000000;
    background-color: #f5bc4b;
    border: 2px solid transparent;
}

.btn-bg-dark:hover {
    background-color: orange;
}

}

.tbl-modal {
    border-spacing: 0px;
    margin: 24px;

    th,
    td {
 
        vertical-align: top;
  text-align: left;
    }

}

.row-content {
    width: 596px;
    height: 136px;

    p {
        margin-bottom: 8px;
        margin-top: 0px;
        line-height: 24px;
  
    }

    .modal-content {
        font-weight: normal;

       
    }

    .modal-header {
        font-weight: 600;
       
    }

}


.link-content,
.link-content:hover,
.link-content:visited,
.link-content:focus {
    cursor: pointer;
    color: #0096ff;
    text-decoration: none;
}

/* Button style */

.btn-action button {
    border-radius: 4px;
    margin-top: 8px;
    margin-right: 16px;
    padding: 0;
    font-weight: 600;
    cursor: pointer;
    float: left;
    width: 98px;
    height: 40px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
}

.btn-action button:hover {
    /* top | right | bottom | left */
    box-shadow: 1px 8px 10px 0px rgba(0, 0, 0, 0.2);
}


#icon-header {
    font-size: 26.67px;
    padding-right: 12px;
    color: #2c75dd;
}

#icon-close {
    font-size: 12px;
    cursor: pointer;
    padding-left: 12px;
}
</style>
