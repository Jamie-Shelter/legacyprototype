// todo 
// - Add meta
// - add prefill functionality
// - sort out the grid better
// - sort out the "What is the houseing emergency"
// - Add button to the find out more
// - make lookup button work - not just the enter key

function showAlert() {
  alert(`Thanks! - Your email won't be saved as this is just a prototype`)
}



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

function addCommasToNumber(number) {
  var parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}


document.getElementById('postalcode').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is the enter key code
    getRegionData();
  }
});


postcode = document.getElementById("postalcode");

async function getRegionData() {

    cleanpostcode = document.getElementById("postalcode").value.replaceAll(/\s/g,'');
    const response = await fetch(`https://api.postcodes.io/postcodes/${cleanpostcode}`);
    // waits until the request completes...
    const data = await response.json();
    console.log(data)
    //       console.log(region);
    let region = data.result.region;
    const authority = data.result.admin_district.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
        case 'Yorkshire and the Humber':
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
        break;
        default:
        break;
        }

    }


         console.log(anyGivenNight)
         console.log(homelessNum)
         console.log(rate)

    
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
        <h4>${addCommasToNumber(homelessNum)}</h4> 
          <p>${addCommasToNumber(homelessNum)} people in ${regionName} are recorded as homeless.</p>
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
          <h4>${addCommasToNumber(homelessChildren)}</h4>
          <p>In ${regionName}, there are ${addCommasToNumber(homelessChildren)} children in temporary accommodation, without somewhere permanent to call home</p>
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

}




document.getElementById("propertypicker").innerHTML = 
`

      <h2>Leaving a gift in your will to No More Homelessness can make a significant impact in helping to end homelessness. Your gift could provide much-needed support to those experiencing homelessness and help to fund vital services that could change lives. It's a way to ensure that future generations have access to safe and stable housing. Your generosity can make a lasting difference ending homelessness once and for all. </h2>
      <h3>If you'd like to find out more about the impact leaving your home to No More Homelessness could have, please select your address below</h3> 
      <select id="propertySelect">
      <option value=""></option>
      <option value="Fetching the properties in your area" selected>Loading...</option>
    </select>
    </div>
    

      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>      <div>&nbsp;</div>
      </div>`

      changePropertyPickerBackground() 



      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '98e82526femsh84566a852ce8a69p1cdb0fjsnd2bc2f633333',
          'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
        }
      };

      
      
      let selectedProperty = document.getElementById('propertySelect').value;
      fetch(`https://zoopla.p.rapidapi.com/house-prices/estimate?area=${cleanpostcode}&order_by=address&ordering=descending&page_number=1`, options)
            .then(response => response.json())
            .then(zooplaData => {
        console.log(zooplaData)
        let options = '';
        for (let i = 0; i < zooplaData.property.length; i++) {
          options += `<option value="${i}">${zooplaData.property[i].address}</option>`;
          document.getElementById('propertySelect').addEventListener('change', function() {
            let selectedProperty = this.value;
            let estimate_value_upper = zooplaData.property[selectedProperty].estimate_value_upper

            let phoneCalls
            let legalAidApps
            let adviceLegal
            if( estimate_value_upper === 0){
              let total = 0;
              for(let i = 0; i < zooplaData.property.length; i++) {
                total += zooplaData.property[i].estimate_value_upper;
              }
              estimate_value_upper = total / zooplaData.property.length;
              phoneCalls = Math.round(estimate_value_upper / 20)
              legalAidApps = Math.round(estimate_value_upper / 48)
              adviceLegal = Math.round(estimate_value_upper / 100)
              console.log(estimate_value_upper)
              

            } else {

            phoneCalls = Math.round(estimate_value_upper / 20)
            legalAidApps = Math.round(estimate_value_upper / 48)
            adviceLegal = Math.round(estimate_value_upper / 100)


            }



            let zooplaHouseValueHTML = `
            
            <h1>Your home could be worth £${addCommasToNumber(estimate_value_upper)}</h1>

            <p>(disclaimer: this estimate has been provided by Zoopla and is not a formal valuation. We recommend you to contact an estate agent for an accurate valuation. You can find an estate agent on Zoopla’s website <a href="https://www.zoopla.co.uk/find-agents/">here</a>)</p>
            <p>      
            To get this information sent to your inbox, please type your email address here: 
            <br><br>
            <input class="form-control" type="text" placeholder="Email Address">
            <button class="btnlookup" onclick="showAlert()">Submit</button>
                  </p>`
            
            
            let propertyHTML =

            `
            <div class="bulletpoints2">
            <div class="item2">
              <div class="text">
                <h4>It could pay for webchats with ${addCommasToNumber(legalAidApps)} people facing homelessness.</h4>
                <p>When people are facing homelessness and need advice, they can get in touch via our webchat service for immediate support.</p>
              </div>
            </div>
            <div class="item2">
              <div class="text">
                <h4>Or it could pay for ${addCommasToNumber(phoneCalls)} hours of research into the causes of homelessness </h4>
                <p>We need to understand the reasons and causes of homelessness to be able to campaign for the right changes. We explore and report on why homelessness happens and the impact it has on people.</p>
              </div>
            </div>
            <div class="item2">
              <div class="text">
                <h4>Or it could pay for ${addCommasToNumber(adviceLegal)} people to get help finding a new home</h4>
                <p>When someone is evicted or is facing having to sleep on the streets, we work to try and find them emergency accommodation and provide ongoing support to get them into secure, long-term housing.</p>
              </div>
            </div>
          </div>
        </div>`

            let what_is_the_housing_emergency = 

            `
            <div class="main-content">
            <h1>How No More Homelessness will support you</h1>
            <p>If you decide to leave your home to No More Homelessness, you will have a dedicated contact on hand to support you through each step of the process</p>
            <p>You will also have access to our ‘Homes for Everyone’ hub. Here you will find a step-by-step guide, including advice for how to write your will for free through No More Homelessness’s free wills service, advice for different ways to manage what happens to the contents in your home, how and where to keep your will safe, and what to do if you decide to change your will in the future. You can use the hub to track what you’ve done so far, and what you still need to do. Your No More Homelessness contact will help to guide you through each step too. </p>
            <br>
            <h1>What happens next?</h1>
            <p>If you have any questions about leaving a legacy to No More Homelessness, please contact John Smith in our gifts in wills team on 07 7777 7777 or email legacies@nomorehomelessness.com</p>
            <button class="btn" href="">Order your free guide</button>
    
              </div>`

        document.getElementById('hideShowDiv').innerHTML = zooplaHouseValueHTML;

            // document.getElementById('whatShelterDoes').innerHTML = bulletpoints;
            document.getElementById('propertyInfo').innerHTML = propertyHTML;
            document.getElementById('housingemergency').innerHTML = what_is_the_housing_emergency;

          })}})}