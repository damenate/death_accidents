<svg ="graph">

  <g transform="translate(100, 0 ) rotate(0)">
    <circle r=20 cx=50 y=100></circle>
    <rect witdh= x= y=></rect>
    <line x1= y1= x2= y2=></line>
  </g>


</svg>

Like JQuery:
can use d3.select("circle")
d3.seletAll
d3.select(this)
d3.select("svg").select("circle")

PART1:
var scale = d3.scale().linear()
scale(30)

scale.domain([2000, 2012])
scale.range([50, 950])
this will tell me to put 2000 on pixel 50 and 2012 on pixel 950.

DOMAIN & RANGE:
Domain is the data you are putting in
Range is what you are getting out

var scale = d3.scale.linear().domain([]).range([]);
var axis = d3.svg.axis().scale(scale).orient("bottom").ticks(3).tickFormat(d3.format("d"));
    -#last part gets rid of comma. Ticks tell you how many ticks on the line you want and d3 will intelligently spread them out.
var g = d3.select("g");

g.call(axis)
g.append("circle").attr("cx", scale(2005)).attr("r", 5)

PART2:
d3.csv("old_discoveries.csv", function(csv_data){
  g.selectAll("circle")
  .data(csv_data)
  .enter().append("circle")
    .attr("cx", function(point) {return x(point.year)})
    .attr("cy", function(point) {return y(point.important_discoveries)})
    .attr("r", 5);
)}
 d3.select("#update-data").on("click", function(){
  d3.csv("new_discoveries.csv", function(csv_data)
   g.selectAll("circle")
   .data(csv_data)

   .join.attr("cx", function(point) {return x(point.year)})
    .attr("cy", function(point) {return y(point.important_discoveries)})

   .enter().append("circle")
     .attr("cx", function(point) {return x(point.year)})
     .attr("cy", function(point) {return y(point.important_discoveries)})
     .attr("r", 5);

     join.exit().remove();
 )}
})


// data.forEach(function(point){
//     gappend("circle")
//     .attr("cx", x(point.year))
//     .attr("cy", y(point.important_discoveries))
//     .attr("r", 5);
// })


Data Joins
