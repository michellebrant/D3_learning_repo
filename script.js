console.log('locked n loaded')

function InitChart() {
d3.select("body").append("svg").attr("width", 50).attr("height", 50);

var cookies = [5, 10, 15, 20, 25]
var svg = d3.select('body')
.append('svg')
.attr('width', 300)
.attr('height', 300)

svg.selectAll('rect')
.data(cookies)
.enter()
.append('rect')
  .attr('x', function(d,i){
    return (i * (300/cookies.length))
  })
  .attr('y', function(d){
    return 100 - (d*4)
  })
    .attr('width', 300/cookies.length -2)
    .attr('height', function(d){
      return (d*4)
    })
}

InitChart();
