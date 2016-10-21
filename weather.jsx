import React from 'react';

class Weather extends React.Component {
  constructor(){
    super();
    this.state = { city: "Loading...", temp: 0 };
  }

  componentDidMount() {
    this.getLocation();
  }

  passLocation(coords){
    const that = this;
    $.ajax({
      type: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=bcb83c4b54aee8418983c2aff3073b3b`,
      success: function(data){
        that.setState({city: data.name, temp: that.k2f(data.main.temp)});
      }
    });
  }



  k2f(temp){
    return (temp * 9/5 - 459.67).toFixed(1);
  }

  render(){
    return(
      <div className="weather-section">
        <h1>Weather</h1>
        <div className="weather-content">
          <h2>{this.state.city} <span>{this.state.temp}°</span></h2>
        </div>
      </div>
    );
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition((pos) => {
      this.passLocation(pos.coords);
    });
  }
}

export default Weather;
