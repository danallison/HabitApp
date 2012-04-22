function graph(data){
  d3.select("#loadingimage").remove();
  
  var data = data;
  var nextDataPoint = data[data.length - 1] + 1;
  var w = 960;
  var h = 500;
  var margin = 20;
  var y = d3.scale.linear().domain([0, d3.max(data) + 1]).range([0 + margin, h - margin]);
  var x = d3.scale.linear().domain([0, data.length + 1]).range([0 + margin, w - margin]);
  
  var svg = d3.select("#graph")
      .append("svg:svg")
      .attr("width", w)
      .attr("height", h);
        
  var g = svg.append("svg:g")
      .attr("transform", "translate(0, 500)");
  
  var line = d3.svg.line()
      .x(function(d,i) { return x(i); })
      .y(function(d) { return -1 * y(d); });
      
  g.append("svg:path").attr("d", line(data))
      .transition()
      .duration(1000);
      
  var lastLine = g.append("svg:line")
      .attr("x1", x(data.length - 1))
      .attr("y1", -1 * y(data[data.length - 1]))
      .attr("x2", x(data.length))
      .attr("y2", -1 * y(nextDataPoint/5 * 2))
      .attr("id", "lastline");
  
  g.append("svg:line")
      .attr("x1", x(0))
      .attr("y1", -1 * y(0))
      .attr("x2", x(w))
      .attr("y2", -1 * y(0));

  g.append("svg:line")
      .attr("x1", x(0))
      .attr("y1", -1 * y(0))
      .attr("x2", x(0))
      .attr("y2", -1 * y(d3.max(data) + 1));
      
  g.selectAll("circle")
      .data(data)
    .enter().append("svg:circle")
      .attr("cx", function(d,i) { return x(i) })
      .attr("cy", function(d) {return -1 * y(d)})
      .attr("r", 10)
      .attr("id", function(d,i) { return "circle" + i });
            
  g.selectAll(".xLabel")
      .data(x.ticks(5))
    .enter().append("svg:text")
      .attr("class", "xLabel")
      .text(String)
      .attr("x", function(d) { return x(d) })
      .attr("y", 0)
      .attr("text-anchor", "middle");

  g.selectAll(".yLabel")
      .data(y.ticks(4))
    .enter().append("svg:text")
      .attr("class", "yLabel")
      .text(String)
      .attr("x", 0)
      .attr("y", function(d) { return -1 * y(d) })
      .attr("text-anchor", "right")
      .attr("dy", 4);
      
  g.selectAll(".xTicks")
      .data(x.ticks(data.length - 1))
    .enter().append("svg:line")
      .attr("class", "xTicks")
      .attr("x1", function(d) { return x(d); })
      .attr("y1", -1 * y(0))
      .attr("x2", function(d) { return x(d); })
      .attr("y2", -1 * y(-0.3));

  g.selectAll(".yTicks")
      .data(y.ticks(4))
    .enter().append("svg:line")
      .attr("class", "yTicks")
      .attr("y1", function(d) { return -1 * y(d); })
      .attr("x1", x(-0.3))
      .attr("y2", function(d) { return -1 * y(d); })
      .attr("x2", x(0));

      
  // var yellowCircle = g.append("svg:circle")
  //     .attr("cx", x(data.length))
  //     .attr("cy", -1 * y(nextDataPoint))
  //     .attr("r", 0)
  //     .attr("fill", "yellow")
  //     .attr("id", "yellowcircle");
      
  var lastCircle = g.append("svg:circle")
      .attr("cx", x(data.length))
      .attr("cy", -1 * y(nextDataPoint/5 * 2))
      .attr("r", 10)
      .attr("id", "lastcircle");
      
  var arrowUp = g.append("svg:path")
      .attr("width", 30)
      .attr("height", 30)
      .attr("d", "m0,30l15,-30l15,30l-30,0l0,0z")
      .attr("transform", "translate(" + (x(data.length) - 15) + "," + -1 * y((nextDataPoint/5) * 2.5) + ")")
      .attr("id", "arrowUp")
      .on("click", success);
      
  var arrowDown = g.append("svg:path")
      .attr("width", 30)
      .attr("height", 30)
      .attr("d", "m0,30l15,-30l15,30l-30,0l0,0z")
      .attr("transform", "translate(" + (x(data.length) + 15) + "," + -1 * y((nextDataPoint/5) * 1.5) + "), rotate(180)")
      .attr("id", "arrowDown")
      .on("click", fail);
  
  function success(){
    data.push(nextDataPoint);
    console.log(data);
    lastCircle.transition().duration(1000).attr("cy", -1 * y(nextDataPoint) );
    lastLine.transition().duration(1000).attr("y2", -1 * y(nextDataPoint) );
    arrowUp.remove();
    arrowDown.remove();
  };
  
  function fail(){
    data.push(0);
    console.log(data);
    lastCircle.transition().duration(1000).attr("cy", -1 * y(0) );
    lastLine.transition().duration(1000).attr("y2", -1 * y(0) ); 
    arrowUp.remove();
    arrowDown.remove();
  };
  
}//end graph()