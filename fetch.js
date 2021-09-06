class Fetch {
    async getCurrent(input) {
      const myKey = "4b1fffd86ac6dc19cd951ae7be8cfc18";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }