import React, { Component } from 'react';
import './App.css';
import header from './imagenfondo.jpg';
//import axios from 'axios';
const axios = require('axios');


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
        done: false,

  }
  //this.handlerText = this.handlerText.bind(this);
  //this.handlerButton = this.handlerButton.bind(this);
}

  handlerText(event){
    
  var buscar = event.target.value;
  this.setState({value : buscar });
  }

  
  handlerButton(){

   var buscar=this.state.value;
    axios.get('https://restcountries.eu/rest/v2/name/'+buscar)
    .then(function(items){
    console.log(items.data);
    this.setState({response: items.data, done: true});
    }.bind(this))
    .catch(function(error) {
    console.log('error');
    })
  }

  render(){   
    if(this.state.done !== true){
      return (
        <div className="AppM">
          <div>
            <h1>Welcome to DataCountry</h1>
            <h2>Where you can find accurate information for any country</h2>
            <p>Very easy to use, just write down here the name of the country you want</p>
          <form>
            <label>
              Type here:
              <input type="text" name="name" onChange={this.handlerText.bind(this)}/>
            </label>
            <input type="button" value="Buscar" onClick={this.handlerButton.bind(this)}/>
          </form>
          </div>
          
        </div>
      );
    }else{
      return (
        
        <div className="AppM">
         
          <div>
          <form>
            <label>
            Ingrese el país que busca:
              <input type="text" name="name" onChange={this.handlerText.bind(this)}/>
            </label>
            <input type="button" value="Buscar" onClick={this.handlerButton.bind(this)}/>
          </form>
          </div>
          <div className="App-box">

            <p>Nombre: {this.state.response[0].name} </p>
            <p>Bandera:</p>
            <img src={this.state.response[0].flag} alt="bandera" class="bandera" width="400" height="250"/>
            <p>Otros nombres: {this.state.response[0].altSpellings.join(', ')} </p>
            <p>Capital: {this.state.response[0].capital} </p>
            <p>Idioma principal: {this.state.response[0].languages[0].nativeName}</p>
            <p>Moneda: {this.state.response[0].currencies[0].name}</p>
            <p>Población: {this.state.response[0].population} millones de habitantes</p>
            <p>Países limítrofes: {this.state.response[0].borders.join(', ')} </p>
            <p>Continente: {this.state.response[0].region} </p>

          </div>
        
        </div>
      );
    }
    }
}

export default App;
/*0:
alpha2Code: "PY"
alpha3Code: "PRY"
altSpellings: (4) ["PY", "Republic of Paraguay", "República del Paraguay", "Tetã Paraguái"]
area: 406752
borders: (3) ["ARG", "BOL", "BRA"]
callingCodes: ["595"]
capital: "Asunción"
cioc: "PAR"
currencies: [{…}]
demonym: "Paraguayan"
flag: "https://restcountries.eu/data/pry.svg"
gini: 52.4
languages: (2) [{…}, {…}]
latlng: (2) [-23, -58]
name: "Paraguay"
nativeName: "Paraguay"
numericCode: "600"
population: 6854536
region: "Americas"
regionalBlocs: [{…}]
subregion: "South America"
timezones: ["UTC-04:00"]
topLevelDomain: [".py"]


*/