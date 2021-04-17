(() => {
    async function getAirQuality() {
        const response = await fetch( `https://ecom.suttipongact.info/api/getProvince`);
        const { provinces } = await response.json();
        provinces.map(function(province) {
            return console.log(province.province_name);
        });
    }
    async function run(){
        await getAirQuality();
        console.log("function run");
    }
    run();
  
})();
  