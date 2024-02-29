class ChartsList {
    constructor() {
        this.container = document.querySelector('.vertical-charts-container');
        this.chartsService = new ChartsService();
        this.renderCharts();
    }

    async renderCharts() {
        const charts = await this.chartsService.getCharts();
        charts.forEach((chart, index) => {
            const chartElement = this.createChartElement(chart);
            this.container.appendChild(chartElement);

            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.create({
                trigger: chartElement,
                start: "top 110%",
                end: "top 50%",
                onEnter: () => {
                    gsap.from(chartElement, {
                        opacity: 0,
                        y: 80,
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "power2.out",
                    });
                },
            });
        });
    }

    createChartElement(chart) {
        const chartElement = document.createElement('div');
        chartElement.classList.add('vertical-chart');

        const chartNumber = document.createElement('p');
        chartNumber.classList.add('vertical-chart-number');
        chartNumber.textContent = chart.additionalNumber;

        const chartItem = document.createElement('div');
        chartItem.style.height = `${chart.height}px`;
        chartItem.classList.add('vertical-chart-item');

        chartElement.appendChild(chartNumber);
        chartElement.appendChild(chartItem);

        return chartElement;
    }
}

new ChartsList();
