
    // async function fetchCountryData() {
    //     const name = document.getElementById('nameInput').value;
    //     const resultDiv = document.getElementById('result');

    //     try {
    //         const nameResponse = await fetch(`https://api.nationalize.io/?name=${name}`);
    //         const nameData = await nameResponse.json();

    //         if (!nameData || !nameData.country || nameData.country.length === 0) {
    //             resultDiv.innerText = 'No country data found for this name.';
    //             return;
    //         }

    //         resultDiv.innerHTML = '';

    //         for(let country of nameData.country) {
    //             const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${country.country_id}`);
    //             const countryData = await countryResponse.json();

    //             if (!countryData || countryData.length === 0) {
    //                 resultDiv.innerText = 'No data found for this country.';
    //                 return;
    //             }
                

    //             let probabilityInPercent = (country.probability * 100).toFixed(2);

    //             resultDiv.innerHTML += `
    //                 <div>
    //                     <h2>Country: ${countryData[0].name.common}</h2>
    //                     <p>Probability: ${probabilityInPercent}%</p>
    //                     <img src="${countryData[0].flags.png}" alt="${countryData[0].name.common} flag">
    //                 </div>
    //             `;
    //         }
    //     } catch (error) {
    //         console.error(`Error: ${error}`);
    //     }
    // }


    
    async function fetchCountryData() {
        const name = document.getElementById('nameInput').value;
        const resultDiv = document.getElementById('result');
    
        try {
            const nameResponse = await fetch(`https://api.nationalize.io/?name=${name}`);
            const nameData = await nameResponse.json();
    
            if (!nameData || !nameData.country || nameData.country.length === 0) {
                resultDiv.innerText = 'No country data found for this name.';
                return;
            }
    
            resultDiv.innerHTML = '';
    
            for(let country of nameData.country) {
                const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${country.country_id}`);
                const countryData = await countryResponse.json();
    
                if (!countryData || countryData.length === 0) {
                    resultDiv.innerText = 'No data found for this country.';
                    return;
                }
    
                let probabilityInPercent = (country.probability * 100).toFixed(2);
    
                resultDiv.innerHTML += `
                    <div class="country-container">
                        <h2>Country: ${countryData[0].name.common}</h2>
                        <p>Probability: ${probabilityInPercent}%</p>
                        <img src="${countryData[0].flags.png}" alt="${countryData[0].name.common} flag">
                    </div>
                `;
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }
    