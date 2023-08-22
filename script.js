function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput");
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const result = document.getElementById("result");
    
    if (temperatureInput.value === "") {
        result.innerText = "Please enter a temperature.";
        return;
    }
    
    const temperature = parseFloat(temperatureInput.value);
    let convertedTemperature;
    
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
        result.innerText = `${temperature.toFixed(2)}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
        result.innerText = `${temperature.toFixed(2)}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
    } else {
        result.innerText = "Invalid conversion.";
    }
}
