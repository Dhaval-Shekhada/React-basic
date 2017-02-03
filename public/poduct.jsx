var product = React.createClass({
 getInitialState: function(){
   return {qty: 0};
 },
 buy: function(){
   this.setState({qty: this.state.qty + 1});
 },

  render: function(){

    return (
      <div>
        <p> Android - $200</p>
        <button onClick={this.buy}>Buy</button>
        <h3> Qty : {this.state.qty} item(s)</h3>
      </div>
    );
  }

});

var Total = React.createClass({
  render: function(){
    return (
      <div>
        <h3> Total Cash: </h3>
      </div>
    );
  }
});

var ProductList = React.createClass({
  render: function(){

    return (
      <div>
          <product/>
          <product/>
          <product/>
          <Total/>
     </div>
   );
  }
});
ReactDOM.render(<ProductList/>, document.getElementById("app"));
