---
title: 'slide 7'
htmlId: 'slide7'
slideOrder: 7
tags: ['slide']
---	

## Organization before Dependencies

<section>
<pre>
	<code class='coffeescript'>
$ ->
  $('.btn').click (e)-> # DOM manipulation here
  
#- new school -#
class window.RowView
  constructor: (el)->
    @el = $(el)
    @registerEvents()

  registerEvents: ->
    @el.find('.btn').on 'click', @handleClick

  handleClick: (e)->
    # DOM manipulation here

$ ->
  new window.RowView($('#example_2'))

	</code>
</pre>
</section>
<section>
<pre>
	<code class='coffeescript'>
class window.RowViewWithBinding extends window.RowView
  registerEvents: ->
    @el.find('.btn').on 'click', (e)=> @handleClick(e)
	</code>
</pre>
</section>
<section>
<pre>
	<code class='coffeescript'>
class GrandTotal
  constructor: ({@subtotals})->
  
  total: ->
    @subtotals.reduce (prev, curr)-> prev + curr 

gt = new GrandTotal(subtotals: [1,2,3])
gt.total() #6
	</code>
</pre>
</section>