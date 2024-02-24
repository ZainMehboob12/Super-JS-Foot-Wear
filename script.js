const stockTypeSelect = document.getElementById('stockType');
const stockItemsList = document.getElementById('stockItems');
const calculateButton = document.getElementById('calculateButton');
const totalStockDisplay = document.getElementById('totalStockDisplay');

let currentStockType = 'hand-made'; // Default stock type

calculateButton.addEventListener('click', function() {
    let totalStock = 0;

    for (const item of stockItemsList.children) {
        const stockInput = item.querySelector('input');
        const stockValue = parseInt(stockInput.value, 10) || 0;
        totalStock += stockValue;
    }

    totalStockDisplay.textContent = `Total Stock for ${currentStockType}: ${totalStock}`;
});

stockTypeSelect.addEventListener('change');
