function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    let fahrenheit, celsius, kelvin;

    if (unit === 'celsius') {
      celsius = temperatureInput;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
    } else if (unit === 'fahrenheit') {
      fahrenheit = temperatureInput;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (unit === 'kelvin') {
      kelvin = temperatureInput;
      celsius = kelvin - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
    }

    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
      <p>Celsius: ${celsius.toFixed(2)}</p>
      <p>Fahrenheit: ${fahrenheit.toFixed(2)}</p>
      <p>Kelvin: ${kelvin.toFixed(2)}</p>
    `;
  }




