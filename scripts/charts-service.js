class ChartsService{
    constructor() {
        if(!ChartsService._instance) ChartsService._instance = this;
        return ChartsService._instance;
    }

    async getCharts (){
        if (!this.charts){
            this.charts = await( await fetch('../charts.json') ).json();
        }
        return this.charts;
    }
}
