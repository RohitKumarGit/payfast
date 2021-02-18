<template>
  <div>
    <div>
      <b-modal v-bind:scrollable="true" id="addnew" v-bind:ok-title="ok_title" @ok="formsubmit" v-bind:title="modal_title">
          <b-form>
         <b-form-group
        id="name"
        label="Name:"
        label-for="name"
      >
      <b-form-input
          id="name"
          v-model="product_data.name"
          placeholder="Enter product name"
          required
        ></b-form-input>
        </b-form-group>
         <b-form-group
        id="brand_name"
        label="Brand Name:"
        label-for="brand_name"
      >
      <b-form-input
          id="brand_name"
          v-model="product_data.brand_name"
          placeholder="Enter brand name"
          required
        ></b-form-input>
        </b-form-group>
         <b-form-group
        id="quantity"
        label="Quantity:"
        label-for="quantity"
      >
      <b-form-input
          id="price"
          placeholder="Quantity"
          v-model="product_data.quantity"
          required
        ></b-form-input></b-form-group>
         <b-form-group
        id="price"
        label="Price:"
        label-for="price"
      >
      <b-form-input
          id="price"
          type="number"
          placeholder="Price"
          v-model="product_data.price"
          required
        ></b-form-input></b-form-group>
         <b-form-group
        id="expiry"
        label="Expiry:"
        label-for="expiry"
      >
      <b-form-input
          id="expiry"
          type="date"
          placeholder="Expiry"
          v-model="product_data.expire"
          required
        ></b-form-input></b-form-group>
        <b-form-group
        id="instruction"
        label="Instruction:"
        label-for="instruction">
         <b-form-textarea
      id="instruction"
      placeholder="Instruction for use(optional)"
      v-model="product_data.instruction"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </b-form-group>
        </b-form>
      </b-modal>
    </div>
    <b-container id="Product" fluid>
      <b-row
        ><b-col cols="12">
          <b-button block squared id="AddNew" @click="addnew">Add New</b-button>
        </b-col></b-row
      >
      <b-row align-h="center">
        <b-col cols="11">
          <b-row class="border border-dark product-head">
            <b-col class="border border-dark py-1" cols="6">Name</b-col>
            <b-col class="border border-dark py-1" cols="3">Price</b-col>
            <b-col class="border border-dark py-1" cols="3">Edit</b-col>
          </b-row>
        </b-col>
        <b-col cols="11" v-for="prod in prods" :key="prod.id">
            <b-row class="product-item py-0">
            <b-col class="border-right border-bottom border-left border-dark py-1" cols="6">{{prod.name}}</b-col>
            <b-col class="border-right border-bottom border-dark py-1" cols="3">{{prod.price}}</b-col>
            <b-col class="border-right border-bottom border-dark py-1 my-0 editbtn" @click="editprod($event,prod.id)" cols="3">{{prod.id}}</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "Product",
  data(){
      return{
          prods:[{"name":"prod1","price":1200,
          "id":1,"brand_name":"brand_1","quantity":5,"expire":"2001-20-02","instruction":""},{"name":"prod2","price":1600,
          "id":2,"brand_name":"brand_1","quantity":5,"expire":"2001-20-02","instruction":""},{"name":"prod3","price":1800,
          "id":3,"brand_name":"brand_1","quantity":5,"expire":"2001-20-02","instruction":""}],
          product_data:{
              id:null,
              name:null,
              price:0,
              quantity:0,
              expire:null,
              instruction:"",
              brand_name:null
          },
          modal_title:"Add new product",
          ok_title:"Add",
          form_url:"#",
      }
  },
  methods: {
    addnew: function () {
      this.ok_title="Add";
      this.modal_title="Add new product";
      this.form_url="add";
      this.$bvModal.show("addnew");
    },
    editprod:function(e,id){
        let prod=null;
        for(let pr of this.prods)
        {
          if(pr.id==id) {
            prod=pr; 
            break;
          }
        }
        console.log(prod);

    },
    formsubmit:function(){
        console.log(this.product_data);
    }
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,900&display=swap");
$colors: (
  "dark-0": #f6f5f5,
  "dark-1": #d3e0ea,
  "dark-2": #1687a7,
  "dark-3": #276678,
);
#Product {
    font-family: "Roboto", sans-serif;
  #AddNew {
    margin-bottom: 20px;
    background: map-get($colors, "dark-3") !important;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 2rem;
    font-weight: 900;
    font-style: italic;
    border: 1px solid map-get($colors, "dark-3") !important;
    box-shadow: 0px 0px 5px 2px map-get($colors, "dark-2");
    &:hover {
      cursor: pointer;
      background: map-get($colors, "dark-0") !important;
      color: map-get($colors, "dark-3") !important;
    }
  }
  .product-head{
      font-size:1.3rem;
      font-weight: 800;
      color:map-get($colors, "dark-0" );
      background-color: map-get($colors, "dark-2" );
  }
  .product-item{
      font-size: 1.1rem;
      font-weight:600;
      color: black;
      &:hover{
        background: map-get($colors, "dark-0");
        cursor: pointer;
      }
  }
  .editbtn{
    cursor: pointer;
    background: map-get($colors, "dark-1");
    color: map-get($colors, "dark-3");
  }
}
</style>