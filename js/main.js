(() => {
    async function getAirQuality() {
        const response = await fetch( `https://ecom.suttipongact.info/api/getProvince`);
        const { provinces } = await response.json();
        provinces.map(function(province) {
            let x = document.createElement("P");
            let t = document.createTextNode(province.province_name);
            x.appendChild(t);
            document.body.appendChild(x);
        });
    }
    async function run(){
        await getAirQuality();
        liff.ready.then(() => {
            document.getElementById("isLoggedIn").append(liff.isLoggedIn())
            if (liff.isLoggedIn()) {
            //   getEnvironment()
            //   getUserProfile()
            //   getContext()
            //   getFriendship()
            //   createUniversalLink()
            } else {
              liff.login()
            }
          })
          await liff.init({
            liffId: "1655804673-q9X5v3KA"
        });
        console.log("function run");
    }
    run();
  
})();
  