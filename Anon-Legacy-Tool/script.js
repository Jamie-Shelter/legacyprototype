// todo 
// - Add meta
// - add prefill functionality
// - sort out the grid better
// - sort out the "What is the houseing emergency"
// - Add button to the find out more
// - make lookup button work - not just the enter key

let gifthtml = ``
let what_is_the_housing_emergency = 
`
<br><br>
<div class="main-content">
<h1>How Shelter will support you</h1>
<p>If you choose to leave a gift to Shelter, you will have a dedicated contact on hand to support you through each step of the process.</p>
<p>If you decide to leave your home to Shelter, you will also have access to our <strong>Homes for Shelter Hub</strong>. Here you will find a step-by-step guide, including advice for how to write your will for free through Shelter’s free wills service, advice for different ways to manage what happens to the contents in your home, how and where to keep your will safe, and what to do if you decide to change your will in the future. You can use the hub to track what you’ve done so far, and what you still need to do. Your Shelter contact will help to guide you through each step too.</p>
<br><br>
<h1 style="color: red">Thank you so much for your interest in leaving a gift in your will to Shelter.</h1>
<p>The postcode search bar and Homes for Shelter Hub are ideas we’re currently exploring and aren’t fully developed yet. We understand how important it is to use Shelter’s funds wisely, so we’re testing this idea and would love to hear what you think of it.  </p>
<p>If you can, please fill out a quick questionnaire to let us know what you think of the postcode search bar and Homes for Shelter Hub. </p>
<br><br>
  </div>`

  let bulletpoints = `    
  <br>
  <br>  
  <h1>Here's what else your gift could help us do</h1> 
  <h2>Our vision for change</h2>
  <div class="bulletpoints">
  <div class="item">
    <div class="image">
      <img src="img/House.svg" alt="image">
    </div>
    <div class="text">
      <h4>90,000 social homes a year</h4>
      <p>In the future, thanks in part to your gift, we could bring about a historic renewal of social housing. And we could make sure that, in the future, everyone has a place to call home.</p>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="img/Heart.svg" alt="image">
    </div>
    <div class="text">
      <h4>Fight for housing rights</h4>
      <p>Your gift could help our support services stand beside people as they fight for their housing rights, against injustices like unfair eviction.</p>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="img/Tick.svg" alt="image">
    </div>
    <div class="text">
      <h4>Force through new rent reform laws</h4>
      <p>Your gift could help campaign for renters’ rights, and protect people from exploitation and unsafe housing.</p>
    </div>
  </div>
  <div class="item">
    <div class="image">
      <img src="img/Megaphone.svg" alt="image">
    </div>
    <div class="text">
      <h4>Create a movement</h4>
      <p>Your gift could help create a movement that defines a new era – one where everyone has a safe place to live.</p>
    </div>
  </div>
</div>
</div>`

let zooplaData


function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("hideShowDiv");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";

  } else {
    text.style.display = "none";

  }
}

const worst_authorities =
[
  {
      "Nat. rank": "9",
      "authority": "Barking and Dagenham",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "4,411",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "0",
      "childreninTA": "2,408",
      "totalhomeless": "4,411",
      "1inX": "50"
  },
  {
      "Nat. rank": "7",
      "authority": "Basildon",
      "Reg.": "East",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "1,517",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "0",
      "childreninTA": "780",
      "totalhomeless": "1,517",
      "1inX": "124"
  },
  {
      "Nat. rank": "4",
      "authority": "Birmingham",
      "Reg.": "WM",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "14,236",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "31",
      "childreninTA": "8,312",
      "totalhomeless": "14,267",
      "1inX": "80"
  },
  {
      "Nat. rank": "3",
      "authority": "Brighton and Hove",
      "Reg.": "SE",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "3,536",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "37",
      "childreninTA": "1,360",
      "totalhomeless": "3,575",
      "1inX": "78"
  },
  {
      "Nat. rank": "10",
      "authority": "Ealing",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "6,852",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "35",
      "anygivennight": "23",
      "childreninTA": "3,441",
      "totalhomeless": "6,910",
      "1inX": "53"
  },
  {
      "Nat. rank": "8",
      "authority": "Epsom and Ewell",
      "Reg.": "SE",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "624",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "0",
      "childreninTA": "319",
      "totalhomeless": "624",
      "1inX": "130"
  },
  {
      "Nat. rank": "4",
      "authority": "Hackney",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "7,555",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "11",
      "childreninTA": "3,781",
      "totalhomeless": "7,566",
      "1inX": "34"
  },
  {
      "Nat. rank": "3",
      "authority": "Haringey",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "7,986",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "10",
      "childreninTA": "4,295",
      "totalhomeless": "7,996",
      "1inX": "33"
  },
  {
      "Nat. rank": "10",
      "authority": "Harlow",
      "Reg.": "East",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "615",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "0",
      "childreninTA": "328",
      "totalhomeless": "615",
      "1inX": "152"
  },
  {
      "Nat. rank": "5",
      "authority": "Hastings",
      "Reg.": "SE",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "830",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "23",
      "childreninTA": "314",
      "totalhomeless": "853",
      "1inX": "107"
  },
  {
      "Nat. rank": "6",
      "authority": "Lewisham",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "7,293",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "7",
      "childreninTA": "3,885",
      "totalhomeless": "7,300",
      "1inX": "41"
  },
  {
      "Nat. rank": "1",
      "authority": "Luton",
      "Reg.": "East",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "3,413",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "23",
      "anygivennight": "7",
      "childreninTA": "1,851",
      "totalhomeless": "3,443",
      "1inX": "65"
  },
  {
      "Nat. rank": "2",
      "authority": "Manchester",
      "Reg.": "NW",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "7,407",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "43",
      "childreninTA": "3,649",
      "totalhomeless": "7,450",
      "1inX": "74"
  },
  {
      "Nat. rank": "6",
      "authority": "Milton Keynes",
      "Reg.": "SE",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "2,336",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "18",
      "childreninTA": "1,182",
      "totalhomeless": "2,354",
      "1inX": "122"
  },
  {
      "Nat. rank": "1",
      "authority": "Newham",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "16,568",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "17",
      "childreninTA": "8,363",
      "totalhomeless": "16,585",
      "1inX": "21"
  },
  {
      "Nat. rank": "5",
      "authority": "Redbridge",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "8,096",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "15",
      "childreninTA": "4,117",
      "totalhomeless": "8,111",
      "1inX": "38"
  },
  {
      "Nat. rank": "9",
      "authority": "Slough",
      "Reg.": "SE",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "1,102",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "9",
      "anygivennight": "19",
      "childreninTA": "521",
      "totalhomeless": "1,130",
      "1inX": "140"
  },
  {
      "Nat. rank": "8",
      "authority": "Southwark",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "6,729",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "3",
      "anygivennight": "10",
      "childreninTA": "2,784",
      "totalhomeless": "6,742",
      "1inX": "46"
  },
  {
      "Nat. rank": "7",
      "authority": "Wandsworth",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "7,183",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "18",
      "childreninTA": "3,337",
      "totalhomeless": "7,201",
      "1inX": "45"
  },
  {
      "Nat. rank": "2",
      "authority": "Westminster",
      "Reg.": "Lon",
      "[1] Est. no. of people homeless and living in TA arranged by the council": "7,280",
      "[2] Est. no. of people homeless and living in TA arranged by them or homeless at home": "0",
      "anygivennight": "187",
      "childreninTA": "3,615",
      "totalhomeless": "7,467",
      "1inX": "27"
  } , 
]

let postcode
let regionName
let anyGivenNight 
let homelessNum
let rate
let cleanpostcode
let giftValue = 0;


document.getElementById('postalcode').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is the enter key code
    getRegionData();
  }
});


postcode = document.getElementById("postalcode");

async function getRegionData() {
  const errorDiv = document.getElementById("error");

    postcode = document.getElementById("postalcode");
    if (postcode) {
      let cleanpostcode = postcode.value.replace(/\s/g, '');
  
    cleanpostcode = document.getElementById("postalcode").value.replaceAll(/\s/g,'');
    const response = await fetch(`https://api.postcodes.io/postcodes/${cleanpostcode}`);
    // waits until the request completes...
    const data = await response.json();
    if (!response.ok) {
      errorDiv.innerText = `Sorry, it doesn't look like that's a valid postcode, please try again.`;
      return;
    }
    console.log(data)
    const authority = data.result.european_electoral_region
    ? data.result.european_electoral_region
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";

    //       console.log(region);
    let region = data.result.region;
    if (authority === 'Wales' || authority === 'Scotland') {
// Get a reference to the error div
// Get a reference to the "error" div element
const errorDiv = document.getElementById("error");

// Update the contents of the div
errorDiv.innerText = "This tool is in development and currently only works for postcodes in England";

      return;
    }    

    errorDiv.innerText = ``;

    

    console.log(authority)



    let found = false;
    for(let i = 0; i < worst_authorities.length; i++) {
      if(worst_authorities[i].authority === authority) {
        anyGivenNight = worst_authorities[i]["anygivennight"];
        homelessNum = worst_authorities[i]["totalhomeless"];
        rate = worst_authorities[i]["1inX"];
        homelessChildren = worst_authorities[i]["childreninTA"];
        regionName = authority;
        found = true;
        break;
      }
    }
    if(!found){
      switch (region) {
        case 'North East':
        anyGivenNight = 50;
        homelessNum = 1250;
        rate = 2118;
        homelessChildren = 360;
        regionName = "The North East";
        break;
        case 'North West':
        anyGivenNight = 200;
        homelessNum = 14619;
        rate = 507;
        homelessChildren = 6720;
        regionName = "The North West";
        break;
        case 'Yorkshire and The Humber':
        anyGivenNight = 170;
        homelessNum = 5079;
        rate = 1079;
        homelessChildren = 2020;
        regionName = region;
        break;
        case 'West Midlands':
        anyGivenNight = 190;
        homelessNum = 20402;
        rate = 292;
        homelessChildren = 10540;
        regionName = 'The West Midlands';
        break;
        case 'East Midlands':
        anyGivenNight = 180;
        homelessNum = 5933;
        rate = 822;
        homelessChildren = 2600;
        regionName = 'The East Midlands';
        break;
        case 'South West':
        anyGivenNight = 330;
        homelessNum = 10432;
        rate = 546;
        homelessChildren = 4350;
        regionName = 'The South West';
        break;
        case 'South East':
        anyGivenNight = 450;
        homelessNum = 26832;
        rate = 346;
        homelessChildren = 12030;
        regionName = 'The South East';
        break;
        case 'London':
        anyGivenNight = 640;
        homelessNum = 150742;
        rate = 58;
        homelessChildren = 73810;
        regionName = region;
        break;
        case 'East of England':
        anyGivenNight = 240;
        homelessNum = 17201;
        rate = 368;
        homelessChildren = 8280;
        regionName = 'The East Of England';
        break
        default:
        break;
        }

    }



         if(anyGivenNight == 0) {
          document.getElementById("cards").innerHTML += 
          `
          <article>
              <img src="https://picsum.photos/600/400?image=1083" alt="Sample photo">
              <div class="text">
                <h3> ${anyGivenNight} Rough Sleepers.</h3>
                <p> In ${regionName} there <strong>${anyGivenNight}</strong> sleeping rough on any given night.</p>
              </div>
            </article>
          `
      }


    document.getElementById("subtitle").innerHTML = ``
    document.getElementById("cards").innerHTML = 
    `
    <div class="main-content">
    <h1>The housing emergency in ${regionName}</h1>
    <div class="bulletpoints2">
      <div class="item2">
        <div class="text">
        <h4>${homelessNum.toLocaleString()}</h4> 
          <p>${homelessNum.toLocaleString()} people in ${regionName} are recorded as homeless.</p>
        </div>
      </div>
      <div class="item2">
        <div class="text">
          <h4>1 in ${rate}</h4> 
          <p>That means that 1 in ${rate} people are experiencing homelessness in ${regionName}</p>
        </div>
      </div>
      <div class="item2">
        <div class="text">
          <h4>${homelessChildren.toLocaleString()}</h4>
          <p>In ${regionName}, there are ${homelessChildren.toLocaleString()} children in temporary accommodation, without somewhere permanent to call home</p>
        </div>
      </div>
    </div>

      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
</div>
</div>
</div>
</main-content>
`


function changePropertyPickerBackground() {
  // rest of the function
  document.getElementById("propertypicker").style.backgroundColor = "black";
  document.getElementById("gift-info").style.backgroundColor = "black";

}




document.getElementById("gift-info").innerHTML = 
`
</div>
<h2>Leaving a gift in your will to Shelter can make a significant impact in helping to end the housing crisis. Your gift could provide much-needed support to those experiencing homelessness and help to fund vital services and campaigns that could change lives. It's a way to ensure that future generations have access to safe and stable housing. Your generosity can make a lasting difference in the fight for home. </h2>
<h3>If you'd like to find out more about the impact a legacy gift could be, please type the amount you’re considering leaving below </h3> 
<input class="form-control"type="number" id="giftInput" placeholder="Gift Amount">
<button class="btnred" id="calculateButton">Show Me</button>

`
document.getElementById("propertypicker").innerHTML = `

</div>
<div class="seperator">
<h3>Or if you'd like to find out more about the impact leaving your home to Shelter could have, please select your address below </h3> 
<select id="propertySelect">
<option value="Fetching the properties in your area" selected>Loading...</option>
</select>
<br>
<input type="checkbox" id="myCheck" onclick="myFunction()"><label for="myCheck">also show me what my home could be worth  

<div>&nbsp;</div>

<div>&nbsp;</div>      <div>&nbsp;</div>
</div>`



      changePropertyPickerBackground() 



// Get a reference to the Calculate button element
const calculateButton = document.getElementById('calculateButton');

// Add a click event listener to the Calculate button
calculateButton.addEventListener('click', calculateGiftValue);

// Define a function to calculate the gift value and log it to the console
function calculateGiftValue() {
  // Get the value entered in the Gift Input field
  document.getElementById('propertyInfo').innerHTML = ``;
  const giftValue = document.getElementById('giftInput').value;


  // Log the gift value to the console
  console.log(`Gift Value: ${giftValue}`);


const giftWebChats = Math.round(giftValue / 20);
const giftPhoneCalls = Math.round(giftValue / 48);
const giftAdviceLegal = Math.round(giftValue / 100);

let gifthtml;
 if (Number(giftValue) < 100) {  gifthtml = `
  <div class="bulletpoints2">
  <div class="item3">
    <div class="text">
      <h4>£20 could pay for a webchat for people facing homelessness.</h4>
      <p>When people are struggling and need advice, our webchat service is an easy way for them to get in touch with us. They’re often someone’s first step to finding a permanent home.</p>
    </div>
  </div>
  <div class="item3">
    <div class="text">
      <h4>£48 could pay for a phone call to our emergency helpline</h4>
      <p>Shelter’s emergency helpline is free, and it’s open 365 days a year to answer calls to people in urgent need of support with their housing. Each conversation could be the difference between someone losing or keeping their home. Every year, Shelter gives advice and support to thousands of households.</p>
    </div>
  </div>
  <div class="item3">
    <div class="text">
      <h4>£100 could pay for legal advice for people facing eviction</h4>
      <p>People need our help in lots of different ways – it might be an unfair eviction or an absent landlord who doesn’t keep a property in good repair. Problems like these lead to poor quality of life and homelessness. That’s why we’re always on hand to make sure people are treated fairly and know their rights.</p>
    </div>
  </div>
</div>
</div>`;
} else {
  gifthtml = `
  <h2>Here's what your gift could help us do </h2>
    <div class="bulletpoints2">
      <div class="item2">
        <div class="text">
          <h4>It could pay for webchats with ${giftWebChats.toLocaleString()} people facing homelessness.</h4>
          <p>When people are struggling and need advice, our webchat service is an easy way for them to get in touch with us. They’re often someone’s first step to finding a permanent home.</p>
        </div>
      </div>
      <div class="item2">
        <div class="text">
          <h4>Or it could pay for ${giftPhoneCalls.toLocaleString()} calls to our emergency helpline. </h4>
          <p>Shelter’s emergency helpline is free, and it’s open 365 days a year to answer calls to people in urgent need of support with their housing. Each conversation could be the difference between someone losing or keeping their home. Every year, Shelter gives advice and support to thousands of households.  </p>
        </div>
      </div>
      <div class="item2">
        <div class="text">
          <h4>Or it could pay for ${giftAdviceLegal.toLocaleString()} people facing eviction to receive legal advice </h4>
          <p>People need our help in lots of different ways – it might be an unfair eviction or and absent landlord who doesn’t keep a property in good repair. Problems like these lead to poor quality of life and homelessness. That’s why we’re always on hand to make sure people are treated fairly and know their rights. </p>
        </div>
      </div>
    </div>
    <br>
    <br>`;
}
document.getElementById('giftInfo').innerHTML = gifthtml;
document.getElementById('housingemergency').innerHTML = what_is_the_housing_emergency;
document.getElementById('whatShelterDoes').innerHTML = bulletpoints;

}



      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e914c34db7msh744228655c22706p1005d4jsnd0656b36e468',
          'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
        }
      };

      
      let selectedProperty = document.getElementById('propertySelect').value;
      fetch(`https://zoopla.p.rapidapi.com/house-prices/estimate?area=${cleanpostcode}&order_by=address&ordering=descending&page_number=1`, options)
      .then(response => response.json())
      .then(zooplaData1 => {
        fetch(`https://zoopla.p.rapidapi.com/house-prices/estimate?area=${cleanpostcode}&order_by=address&ordering=descending&page_number=2`, options)
          .then(response => response.json())
          .then(zooplaData2 => {
            const zooplaData = zooplaData1.property.concat(zooplaData2.property);
            console.log(zooplaData);
    
            let options = '';
            if (zooplaData.length === 0) {
              options += `<option value="">Please enter the postcode for a residential address</option>`;
              document.getElementById('propertySelect').innerHTML = options;
            } else {
              for (let i = 0; i < zooplaData.length; i++) {
                options += `<option value="${i}">${zooplaData[i].address}</option>`;
              }
              document.getElementById('propertySelect').innerHTML = options;

              
            

              document.getElementById('propertySelect').innerHTML = options;
              document.getElementById('propertySelect').addEventListener('change', function() {
                let selectedProperty = this.value;
                let estimate_value_upper = zooplaData[selectedProperty].estimate_value_upper;
              
                let phoneCalls;
                let webChats;
                let adviceLegal;
                if (estimate_value_upper === 0) {
                  let total = 0;
                  for (let i = 0; i < zooplaData.length; i++) {
                    total += zooplaData[i].estimate_value_upper;
                  }
                  estimate_value_upper = total / zooplaData.length;
                  phoneCalls = Math.round(estimate_value_upper / 20);
                  webChats = Math.round(estimate_value_upper / 48);
                  adviceLegal = Math.round(estimate_value_upper / 100);
                  console.log(estimate_value_upper);
                } else {
                  webChats = Math.round(estimate_value_upper / 15);
                  phoneCalls = Math.round(estimate_value_upper / 48);
                  adviceLegal = Math.round(estimate_value_upper / 100);
                }
              



let zooplaHouseValueHTML = `<h1>Your home could be worth £${estimate_value_upper.toLocaleString()}</h1>
<p>(disclaimer: this estimate has been provided by Zoopla and is not a formal valuation. We recommend you to contact an estate agent for an accurate valuation. You can find an estate agent on Zoopla’s website <a href="https://www.zoopla.co.uk/find-agents/">here.</a>) </p>`


let propertyHTML =

`
<h2>Here's what your home could help us do</h2> 
<div class="bulletpoints2">
<div class="item2">
  <div class="text">
    <h4>It could pay for webchats with ${webChats.toLocaleString()} people facing homelessness.</h4>
    <p>When people are struggling and need advice, our webchat service is an easy way for them to get in touch with us. They’re often someone’s first step to finding a permanent home.</p>
  </div>
</div>
<div class="item2">
  <div class="text">
    <h4>Or it could pay for ${phoneCalls.toLocaleString()} calls to our emergency helpline.  </h4>
    <p>Shelter’s emergency helpline is free, and it’s open 365 days a year to answer calls to people in urgent need of support with their housing. Each conversation could be the difference between someone losing or keeping their home. Every year, Shelter gives advice and support to thousands of households.</p>
  </div>
</div>
<div class="item2">
  <div class="text">
    <h4>Or it could pay for ${adviceLegal.toLocaleString()} people to get help finding a new home</h4>
    <p>People need our help in lots of different ways – it might be an unfair eviction or and absent landlord who doesn’t keep a property in good repair. Problems like these lead to poor quality of life and homelessness. That’s why we’re always on hand to make sure people are treated fairly and know their rights.</p>
  </div>
</div>
</div>
</div>
<br>
<br>  
`
document.getElementById('hideShowDiv').innerHTML = zooplaHouseValueHTML;
document.getElementById('propertyInfo').innerHTML = propertyHTML;
document.getElementById('giftInfo').innerHTML = gifthtml;
document.getElementById('housingemergency').innerHTML = what_is_the_housing_emergency;
document.getElementById('whatShelterDoes').innerHTML = bulletpoints;


});


// Get a reference to the Calculate button element
const calculateButton = document.getElementById('calculateButton');

// Add a click event listener to the Calculate button
calculateButton.addEventListener('click', calculateGiftValue);

// Define a function to calculate the gift value and log it to the console
function calculateGiftValue() {
  // Get the value entered in the Gift Input field
  document.getElementById('propertyInfo').innerHTML = ``;
  const giftValue = document.getElementById('giftInput').value;


  // Log the gift value to the console
  console.log(`Gift Value: ${giftValue}`);


const giftWebChats = Math.round(giftValue / 20);
const giftPhoneCalls = Math.round(giftValue / 48);
const giftAdviceLegal = Math.round(giftValue / 100);

let gifthtml;
 if (Number(giftValue) < 100) {  gifthtml = `
  <div class="bulletpoints2">
  <div class="item3">
    <div class="text">
      <h4>£20 could pay for a webchat for people facing homelessness.</h4>
      <p>When people are struggling and need advice, our webchat service is an easy way for them to get in touch with us. They’re often someone’s first step to finding a permanent home.</p>
    </div>
  </div>
  <div class="item3">
    <div class="text">
      <h4>£48 could pay for a phone call to our emergency helpline</h4>
      <p>Shelter’s emergency helpline is free, and it’s open 365 days a year to answer calls to people in urgent need of support with their housing. Each conversation could be the difference between someone losing or keeping their home. Every year, Shelter gives advice and support to thousands of households.</p>
    </div>
  </div>
  <div class="item3">
    <div class="text">
      <h4>£100 could pay for legal advice for people facing eviction</h4>
      <p>People need our help in lots of different ways – it might be an unfair eviction or an absent landlord who doesn’t keep a property in good repair. Problems like these lead to poor quality of life and homelessness. That’s why we’re always on hand to make sure people are treated fairly and know their rights.</p>
    </div>
  </div>
</div>
</div>`;
} else {
  gifthtml = `
  <h2>Here's what your gift could help us do </h2>
    <div class="bulletpoints2">
      <div class="item2">
        <div class="text">
          <h4>It could pay for webchats with ${giftWebChats.toLocaleString()} people facing homelessness.</h4>
          <p>When people are struggling and need advice, our webchat service is an easy way for them to get in touch with us. They’re often someone’s first step to finding a permanent home.</p>
        </div>
      </div>
      <div class="item2">
        <div class="text">
          <h4>Or it could pay for ${giftPhoneCalls.toLocaleString()} calls to our emergency helpline. </h4>
          <p>Shelter’s emergency helpline is free, and it’s open 365 days a year to answer calls to people in urgent need of support with their housing. Each conversation could be the difference between someone losing or keeping their home. Every year, Shelter gives advice and support to thousands of households.  </p>
        </div>
      </div>
      <div class="item2">
        <div class="text">
          <h4>Or it could pay for ${giftAdviceLegal.toLocaleString()} people facing eviction to receive legal advice </h4>
          <p>People need our help in lots of different ways – it might be an unfair eviction or and absent landlord who doesn’t keep a property in good repair. Problems like these lead to poor quality of life and homelessness. That’s why we’re always on hand to make sure people are treated fairly and know their rights. </p>
        </div>
      </div>
    </div>
    <br>
    <br>`;
}
if (giftValue > 0) {
  document.getElementById('hideShowDiv').innerHTML = zooplaHouseValueHTML;
  document.getElementById('propertyInfo').innerHTML = propertyHTML;
  document.getElementById('giftInfo').innerHTML = gifthtml;
  document.getElementById('housingemergency').innerHTML = what_is_the_housing_emergency;
  document.getElementById('whatShelterDoes').innerHTML = bulletpoints;
} else {
  document.getElementById('hideShowDiv').innerHTML = zooplaHouseValueHTML;
  document.getElementById('propertyInfo').innerHTML = propertyHTML;
  document.getElementById('giftInfo').innerHTML = gifthtml;
  document.getElementById('housingemergency').innerHTML = what_is_the_housing_emergency;
  document.getElementById('whatShelterDoes').innerHTML = bulletpoints;
}

}


}})})}}
