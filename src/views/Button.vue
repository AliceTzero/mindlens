<template>
    <h1>{{ title }}</h1>
    <div id="app-button">
        <table id="tbl-button">

            <tr>
          <th> </th>
          <th class="tbl-col-button-header">
            <span style="padding-left: 30px;">Left icon</span>
            <span style="padding-left: 10px;">Right icon</span>
            <span >No icon</span>
            <span>Icon only</span>
          </th>
        </tr>
        <tr>
          <th class="tbl-row-button-header"><span>Primary</span></th>
          <td>
            <Primary />
          </td>
        </tr>
        <tr>
          <th class="tbl-row-button-header"><span>Primary Hover</span></th>
          <td>
            <Primary id="btn-primary-hover" />
          </td>
        </tr>
        <tr>
          <th class="tbl-row-button-header"><span>Secondary</span></th>
          <td>
            <Secondary />
          </td>
        </tr>
        <tr>
          <th class="tbl-row-button-header"><span>Secondary Hover</span></th>
          <td>
            <Secondary id="btn-secondary-hover"/>
          </td>
        </tr>

        </table>
    </div>
</template>

<script>
import Primary from '../components/Button/PrimaryButton.vue'
import Secondary from '../components/Button/SecondaryButton.vue'


export default {
    name: 'Button',
    components: {
        Primary, Secondary
    },
    data() {
        return {
            title: 'Button',
        }
    },
}
</script>

<style>
#app-button {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    float: left;
    font-family: 'Open Sans';
    font-size: 16px;
    
}

#tbl-button {
    width: 1000px;

    th,
    td {
        padding-bottom: 50px;
       
    }

   .tbl-col-button-header span {
        margin-right: 150px;
       
        text-align: center;
        font-weight: lighter;
    }

    .tbl-row-button-header
    {
        
       
        text-align: center;
        font-weight: lighter;
    }


}


#btn-primary-hover button:hover {
    background-color: orange;
    box-shadow: 1px 8px 10px 0px rgba(0, 0, 0, 0.2);
}


#btn-secondary-hover button:hover {
    box-shadow: 1px 8px 10px 0px rgba(0, 0, 0, 0.2);
}


</style>