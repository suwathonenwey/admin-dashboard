$(".counter-up").counterUp({
    time: 1000,
    delay: 10
})

let dateArr = ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11'];
let orderCountArr = [7, 5, 6, 4, 6, 4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16];

const ov = document.getElementById('ov').getContext('2d');
const ovChart = new Chart(ov, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
            label: 'Order Counts',
            fill: true,
            data: orderCountArr,
            backgroundColor: [
                '#FF7F3F20',
            ],
            borderColor: [
                '#FF7F3F',
            ],
            borderWidth: 1
        },
        {
            label: 'Viewer Counts',
            fill: true,
            data: viewerCountArr,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        scales: {
            y: {
                display: false,
                beginAtZero: true
            },
            x: {
                display: false,
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                }
            }
        }
    }
});

let orderFromPlace = [5,15,4,9,7];
let places = ["YGN","MDY","NPY","SHAN","MGW"];

const op = document.getElementById('op').getContext('2d');
op.canvas.width = 150;
op.canvas.height = 300;
const opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                display: false,
                beginAtZero: true
            },
            x: {
                display:false,
            }
        },
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true
                }
            }
        }
    }
});