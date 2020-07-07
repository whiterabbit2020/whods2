// d3.json("data/data.json").then((data) => {
//   //  Create the Traces
//   var trace1 = {
//     x: data.organ,
//     y: data.survival.map(val => Math.sqrt(val)),
//     type: "box",
//     name: "Cancer Survival",
//     boxpoints: "all"
//   };

//   // Create the data array for the plot
//   var data = [trace1];

//   // Define the plot layout
//   var layout = {
//     title: "Square Root of Cancer Survival by Organ",
//     xaxis: { title: "Organ" },
//     yaxis: { title: "Square Root of Survival" }
//   };

//   // Plot the chart to a div tag with id "plot"
//   Plotly.newPlot("plot", data, layout);
// });
// console.log(data[1]);
var tdms = [];

var dates = [];
var ndms = [] ; 
for (var i=0; i < data[0].AFG.data.length; i++){
 dates.push(data[0].AFG.data[i].date)
 tdms.push(data[0].AFG.data[i].total_deaths_per_million);
 ndms.push(data[0].AFG.data[i].new_deaths_per_million);


}
var trace1 = {
     x: dates,
     y: tdms,
     type: "bar",
     name: "x = " + data[0].AFG.location + " date v/s y = total deaths per million ",
     boxpoints: "all"
   };
   var trace2 = {
    x: dates,
    y: ndms,
    type: "bar",
    title : "x = " + data[0].AFG.location + " date v/s y = new deaths per million ",
    boxpoints: "all"
  };
var chart1 = [trace1];
var chart2 = [trace2] ;
var layout = {
  title: "Covid data for country " + data[0].AFG.location + " total deaths per million ",
  xaxis: { title: " Date " },
  yaxis: { title: " total deaths per million " },
  plot_bgcolor: "black",
  paper_bgcolor: "#FFF3"
  // color: { background: grey} 
};
var layout = {
  title: "Covid data for country " + data[0].AFG.location + " new deaths per million ",
  // xaxis: { title: " Date " },
  // yaxis: { title: " total deaths per million " },
  // color: { background: grey} 
  // {
  xaxis: {
       title: "Date",
       linecolor: 'black',
       linewidth: 2,
       mirror: true
      },
  yaxis: {
     title: " total deaths per million ",
     linecolor: 'black',
     linewidth: 2,
     mirror: true
     },
  plot_bgcolor: 'grey',
  paper_bgcolor: 'skyblue'
  //}
};
Plotly.newPlot("plot", chart1, layout);
Plotly.newPlot("plot1", chart2, layout);
// plot.show();
// plot.update_layout(
//     title="Plot Title",
//     xaxis_title="x Axis Title",
//     yaxis_title="y Axis Title",
//     font=dict(
//         family="Courier New, monospace",
//         size=18,
//         color="#7f7f7f"
//     )
//)