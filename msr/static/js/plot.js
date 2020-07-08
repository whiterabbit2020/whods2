
function drawPlots(selected) {
    plotData = [];
    for (i = 0; i < selected.length; i++){
        dates = [];
        deaths = [];
        countryData = data[selected[i]]["data"]
        for (j = 0; j < countryData.length; j++){
            dates.push(countryData[j]["date"]);
            deaths.push(countryData[j]["total_deaths_per_million"]);
        }
        var trace = {
            type: "scatter",
            mode: "lines",
            name: data[selected[i]]["location"],
            x: dates,
            y: deaths,
        };
        plotData.push(trace);
    }

    var layout = {
        title: 'Deaths Per Million By Country',
        xaxis: {
            autorange: true,
            type: "date"
        },
        yaxis: {
            autorange: true,
            type: "linear"
        },
        paper_bgcolor: '#ddd'
    };

    Plotly.newPlot("plot", plotData, layout);
}