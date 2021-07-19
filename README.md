<h1>Developer Challenge Task</h1>
<p>This integration lets a user send metrics to the Databox platform via <a href="https://developers.databox.com/send-data/">Databox Push Api</a>  where matrics are visualized and shown with the help of DataBoards</p>

<p>Upon opening http://localhost:3000/ user can begin by clicking button "Start" to start a reccuring "trigger" that is set to send Fetch requests to  2 diferent Api's  every 30  seconds and a loading animation is also activated. The fetch requests retrieve information for the current crypto market (prices, market cap,...). Then via Databox Push APi the data is sent and stored on the DataBox platform. Information about the fetch request ("succes", "time of sending" , "number of metrics send") is saved as an array of JSON objects in a local file. These objects can also be loaded and visualized with a table by clicking the button "Show services".
Users can stop the trigger by clicking  the button again.</p>


<p> Data is being fetched from  two different Api's:<p>
  <ul>
    <li>Coinbase Api: https://developers.coinbase.com/api/v2#get-currencies</li>
    <li>CoinMarketCap Pro Api, with APi key : https://pro.coinmarketcap.com/</li>  
</ul>

<h2>Technologies used:</h2>
<ul>
  <li><b>NodeJS</b> and <b>Express</b> -> handling requests, fetching data and serving webpages</li>
  <li><b>HTML/CSS</b> -> styling webpages </li>
  </ul>

  
  <h2>Running the project</h2>
  <p>Clone the project <code>$ git clone https://github.com/JanHuntersi/databoxIntegration.git</code>, run <code>node index.js</code>  in the terminal to start  and open browser to <code>http://localhost:3000/</code></p>
  
  <h2>Screenshots</h2>

  
  ![animation](https://user-images.githubusercontent.com/55513538/126101563-43d43a86-570e-4282-a931-860b7258f8d5.PNG)

  <p>Home page  with loading animation</p>
  
  
  ![services](https://user-images.githubusercontent.com/55513538/126101674-dff75520-4581-45b7-8826-17df35c39949.PNG)
  
   <p>Stored data visualized</p>

