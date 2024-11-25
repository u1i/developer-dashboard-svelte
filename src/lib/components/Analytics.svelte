<script>
import { onMount } from 'svelte';
import { Chart } from 'chart.js/auto';

let apiCallsChart;
let latencyChart;

// Mock data - replace with actual API calls
const mockApiData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    apiCalls: [150, 230, 180, 290, 200, 150, 320],
    latency: [45, 42, 50, 48, 40, 43, 38]
};

onMount(() => {
    // API Calls Chart
    const apiCallsCtx = document.getElementById('apiCallsChart');
    apiCallsChart = new Chart(apiCallsCtx, {
        type: 'line',
        data: {
            labels: mockApiData.labels,
            datasets: [{
                label: 'API Calls',
                data: mockApiData.apiCalls,
                borderColor: '#0d6efd',
                tension: 0.1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Daily API Calls'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Calls'
                    }
                }
            }
        }
    });

    // Latency Chart
    const latencyCtx = document.getElementById('latencyChart');
    latencyChart = new Chart(latencyCtx, {
        type: 'line',
        data: {
            labels: mockApiData.labels,
            datasets: [{
                label: 'Average Latency',
                data: mockApiData.latency,
                borderColor: '#6610f2',
                tension: 0.1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'API Latency'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Latency (ms)'
                    }
                }
            }
        }
    });
});
</script>

<div class="analytics-container">
    <div class="card">
        <h2>API Usage Analytics</h2>
        <div class="charts-grid">
            <div class="chart-container">
                <canvas id="apiCallsChart"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="latencyChart"></canvas>
            </div>
        </div>
        <div class="stats-grid">
            <div class="stat-card">
                <h3>Total Calls Today</h3>
                <p class="stat-value">320</p>
            </div>
            <div class="stat-card">
                <h3>Average Latency</h3>
                <p class="stat-value">43ms</p>
            </div>
            <div class="stat-card">
                <h3>Success Rate</h3>
                <p class="stat-value">99.8%</p>
            </div>
            <div class="stat-card">
                <h3>Error Rate</h3>
                <p class="stat-value">0.2%</p>
            </div>
        </div>
    </div>
</div>

<style>
.analytics-container {
    margin: 2rem 0;
}

.charts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 2rem 0;
}

.chart-container {
    background-color: var(--bg-primary);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 2rem;
}

.stat-card {
    background-color: var(--bg-primary);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    text-align: center;
}

.stat-card h3 {
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0 0 0.5rem 0;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: var(--accent-primary);
}

@media (max-width: 768px) {
    .charts-grid {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
