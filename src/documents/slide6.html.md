---
title: 'slide 6'
htmlId: 'slide6'
slideOrder: 6
tags: ['slide']
---

## Maybe Not Backbone

<section>
<pre>
	<code class='coffeescript'>
	AbstractOrganization = Backbone.Model.extend({})

	# or

	class AbstractOrganization extends Backbone.Model

	</code>
</pre>
</section>

<section>
<pre>
	<code class='coffeescript'>

MyModel = Backbone.Model.extend({})
myModel = new MyModel(foo: "foo")

# backbone views take a list of options
view = new Backbone.View(model: myModel)
view.model.foo # "foo"

# rework

class SomeView
  constructor: ({@model, @something_else})->
    super

view = new SomeView(model: myModel, something_else: "bar")
view.model.foo # "foo"
view.something_else # "bar"
	</code>
</pre>
</section>