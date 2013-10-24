---
title: 'slide 4'
htmlId: 'slide4'
slideOrder: 4
tags: ['slide']
---	

## Spreadsheets

<section>
<pre>
	<code class='javascript'>
function updateOverhead(cost, visit){
  var checked_boxes = "#" + visit + " :checkbox[checked=true]";
  var costs = $.map( $(checked_boxes), function(box){ 
    if( $(box).siblings(".overhead_cost").length > 0 ){ 
    return $($(box).siblings()).val(); }
  });
  var newCost = 0.0;
  $(costs).each( function(a){
    newCost += parseFloat(costs[a]);
  }); 
  var percent_overhead = $("#percent_overhead").val() / 100.0;
  var overhead = (percent_overhead * newCost).toFixed(2);
  $(('#' + visit + ' .total_overhead')).html("$" + overhead);
  return overhead;
};
	</code>
</pre>
</section>