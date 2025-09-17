// Sample static data
const salesData = {
    monthly: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000]
    },
    region: {
        labels: ['North', 'South', 'East', 'West'],
        data: [15000, 10000, 20000, 25000]
    }
};

// Calculate KPIs
const totalSales = salesData.monthly.data.reduce((sum, val) => sum + val, 0);
const revenueGrowth = ((salesData.monthly.data.slice(-1)[0] - salesData.monthly.data.slice(-2)[0]) / salesData.monthly.data.slice(-2)[0]) * 100;
const averageDealSize = (totalSales / salesData.monthly.data.length).toFixed(2);

// Display KPIs
document.getElementById('totalSales').innerText = `$${totalSales.toLocaleString()}`;
document.getElementById('revenueGrowth').innerText = `${revenueGrowth.toFixed(2)}%`;
document.getElementById('averageDealSize').innerText = `$${averageDealSize.toLocaleString()}`;

// Render Monthly Sales Chart
const monthlySalesCtx = document.getElementById('monthlySalesChart').getContext('2d');
new Chart(monthlySalesCtx, {
    type: 'line',
    data: {
        labels: salesData.monthly.labels,
        datasets: [{
            label: 'Monthly Sales',
            data: salesData.monthly.data,
            borderColor: '#007bff',
            tension: 0.1
        }]
    }
});

// Render Sales by Region Chart
const salesByRegionCtx = document.getElementById('salesByRegionChart').getContext('2d');
new Chart(salesByRegionCtx, {
    type: 'pie',
    data: {
        labels: salesData.region.labels,
        datasets: [{
            data: salesData.region.data,
            backgroundColor: [
                '#007bff',
                '#28a745',
                '#dc3545',
                '#ffc107'
            ]
        }]
    }
});
