document.addEventListener('DOMContentLoaded', () => {
    const scannerArea = document.getElementById('scannerArea');
    const scanMessage = document.getElementById('scanMessage');
    const scanButtons = document.querySelectorAll('.dynamic-button.scan-button');
    const resultDisplay = document.getElementById('resultDisplay');
    const productResult = document.getElementById('productResult');
    const locationResult = document.getElementById('locationResult');
    const noResultMessage = document.getElementById('noResultMessage');

    const productNameElem = document.getElementById('productName');
    const productCarbonFootprintElem = document.getElementById('productCarbonFootprint');
    const productCarbonBar = document.getElementById('productCarbonBar');
    const productImpactMessage = document.getElementById('productImpactMessage');

    const locationNameElem = document.getElementById('locationName');
    const locationCarbonFootprintElem = document.getElementById('locationCarbonFootprint');
    const locationCarbonBar = document.getElementById('locationCarbonBar');
    const locationImpactMessage = document.getElementById('locationImpactMessage');

    let currentScanType = ''; // 'product' or 'location'

    // Función para simular el escaneo
    const simulateScan = (type) => {
        return new Promise(resolve => {
            scannerArea.classList.add('scanning');
            scanMessage.textContent = `Escaneando ${type === 'product' ? 'producto' : 'lugar'}...`;
            noResultMessage.classList.add('hidden');
            productResult.classList.add('hidden');
            locationResult.classList.add('hidden');

            setTimeout(() => {
                scannerArea.classList.remove('scanning');
                scanMessage.textContent = '¡Toca para escanear!';
                resolve();
            }, 2000); // Simula 2 segundos de escaneo
        });
    };

    // Función para generar datos de huella de carbono simulados
    const generateCarbonFootprint = () => {
        const value = Math.floor(Math.random() * 100) + 1; // 1-100
        let category = '';
        let message = '';
        let barClass = '';

        if (value <= 30) {
            category = 'baja';
            message = '¡Excelente! Baja huella de carbono. Un gran paso para el planeta.';
            barClass = 'low';
        } else if (value <= 70) {
            category = 'media';
            message = 'Huella de carbono moderada. Pequeños cambios pueden hacer una gran diferencia.';
            barClass = 'medium';
        } else {
            category = 'alta';
            message = 'Alta huella de carbono. Considera opciones más sostenibles.';
            barClass = 'high';
        }
        return { value, category, message, barClass };
    };

    // Función para mostrar los resultados
    const displayResults = (type) => {
        const carbonData = generateCarbonFootprint();
        let resultCardToShow;

        if (type === 'product') {
            const products = ['Smartphone', 'Laptop', 'Zapatos deportivos', 'Botella de agua reutilizable', 'Camiseta de algodón'];
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            productNameElem.textContent = randomProduct;
            productCarbonFootprintElem.textContent = `${carbonData.value} kg CO2e`;
            productImpactMessage.textContent = carbonData.message;

            productCarbonBar.className = 'carbon-indicator-bar ' + carbonData.barClass;
            productCarbonBar.querySelector('.fill').style.width = `${carbonData.value}%`;

            productResult.classList.remove('hidden');
            locationResult.classList.add('hidden');
            resultCardToShow = productResult;
        } else { // type === 'location'
            const locations = ['Cafetería local', 'Centro comercial', 'Parque urbano', 'Supermercado', 'Edificio de oficinas'];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            locationNameElem.textContent = randomLocation;
            locationCarbonFootprintElem.textContent = `${carbonData.value * 10} kg CO2e/día`; // Escala para lugares
            locationImpactMessage.textContent = carbonData.message;

            locationCarbonBar.className = 'carbon-indicator-bar ' + carbonData.barClass;
            locationCarbonBar.querySelector('.fill').style.width = `${carbonData.value}%`;

            locationResult.classList.remove('hidden');
            productResult.classList.add('hidden');
            resultCardToShow = locationResult;
        }

        resultCardToShow.classList.add('fade-in'); // Activa la animación
        resultDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Event listeners para los botones de escaneo
    scanButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            const action = event.currentTarget.dataset.action;
            currentScanType = action;

            // Simular "modo AR" brevemente
            scannerArea.classList.add('ar-mode');
            setTimeout(() => {
                scannerArea.classList.remove('ar-mode');
            }, 1000); // 1 segundo en modo AR simulado

            await simulateScan(action);
            displayResults(action);
        });
    });

    // Event listener para el área de escaneo (simula "tocar para escanear")
    scannerArea.addEventListener('click', async () => {
        // Si no se ha seleccionado un tipo de escaneo, por defecto a producto o lo que sea
        if (!currentScanType) {
            currentScanType = 'product'; // Puedes cambiar esto por 'location' si prefieres
        }
        // Simular "modo AR" brevemente
        scannerArea.classList.add('ar-mode');
        setTimeout(() => {
            scannerArea.classList.remove('ar-mode');
        }, 1000); // 1 segundo en modo AR simulado

        await simulateScan(currentScanType);
        displayResults(currentScanType);
    });
});
