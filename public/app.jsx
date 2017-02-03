var Greeter = React.createClass({
getDefaultProps: function(){
 return{
   name: 'React',
   message: "This is Default message"

 }
},
/*getInitialState:function(){
 return {
   name: this.props.name
 }
},*/

onButtonClick: function(e){
e.preventDefault();
var product = {
  name: this.refs.name.value,
  Price: parseInt(this.refs.price.value)
}

this.props.handleform(product);

this.refs.name.value ="";
this.refs.price.value= "";
},
render: function(){
// var name = this.state.name ;
// var message = this.props.message;
 return (
   <div>
         <form onSubmit = {this.onButtonClick}>
           <input type="text" placeholder= "Product Name" ref="name"/>
           <input type="text" placeholder= "Product Price" ref = "price"/>
           <button> Create New Product</button>
         </form>
       <hr/>
   </div>
 );
}

});

var Product = React.createClass({
 getInitialState: function(){
   return {qty: 0};
 },
 buy: function(){
   this.setState({qty: this.state.qty + 1});
   this.props.handleTotal(this.props.Price);
 },
 show: function(){
 this.props.handleShow(this.props.name);

 },
 remove: function(){
 if(this.state.qty > 0){
     this.setState({qty:this.state.qty - 1 });
     this.props.handleRemove(this.props.Price);
   }
   else{
     alert("You have nothing to remove. please buy the item first");
   }

 },
  render: function(){
    var name = this.props.name;
    var price = this.props.Price;
    return (
      <div>
        <p>{name}- ${price} </p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>
        <button onClick= {this.remove}>Remove</button>
        <h3> Qty : {this.state.qty} Item(s)</h3>
        <hr/>
      </div>
    );
  }

});

var Total = React.createClass({
  render: function(){
    return (
      <div>
        <h3> Total Cash: ${this.props.total} </h3>
      </div>
    );
  }
});

var ProductList = React.createClass({
  getInitialState: function(){
    return {
      total : 0,
      productList :[
        {name: "Android", Price: 200},{name: "Apple", Price: 300},{name: "Windows", Price: 150}
      ]

    };
  },
  createProduct : function (product){
    this.setState({
      productList: this.state.productList.concat(product)
    })

  },

  showProduct:function(name){

    alert("you have selected " + name);

  },
  calculateTotal: function(price){
    this.setState({total : this.state.total + price});
  },

  removeItem : function(price){
      this.setState({total : this.state.total - price});
  },
  render: function(){
    var self = this;
   var products = this.state.productList.map(function(product){
     return ( //key={result.id}>{result.text}
       <Product  name = {product.name} Price ={product.Price} handleShow = {self.showProduct}  handleTotal= {self.calculateTotal } handleRemove ={self.removeItem}/>
     );
   });
    return (
      <div>
          <Greeter handleform = {this.createProduct} />
          {products}
          <Total total = {this.state.total}/>

     </div>
   );
  }
});


var fname = 'Dhaval';
var msg = "message from props"
ReactDOM.render(
   <ProductList  />,
   document.getElementById('app')
 );
