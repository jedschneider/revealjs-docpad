---
title: 'slide 5'
htmlId: 'slide5'
slideOrder: 5
tags: ['slide']
---

<section>
<t render="markdown">## Backbone</t>
<pre>
		<code class='javascript'>
// javascript
AbstractOrganization = Backbone.Model.extend({
  urlRoot: 'lalala',
  parent: function(){ return this.provider() }
});

var program = new AbstractOrganization({
  provider: someProviderInstance
});
program.parent(); // => someProviderInstance
		</code>
	</pre>	
</section>

<section>
<t render="markdown">
## CoffeeScript
</t>
<pre>
	<code class='coffeescript'>
user =
  name: "Jed"

message =
  """
    Hello, #{user?.name}. Welcome to CoffeeScript.
      Come for the syntax, stay for the fun.
  """
console?.log(message)
	</code>
</pre>

<pre>
	<code class='javascript'>
var message, user;

user = {
  name: "Jed"
};

message = "Hello, " + (user != null ? user.name : void 0) + ". Welcome to CoffeeScript.\n  Come for the syntax, stay for the fun.";

if (typeof console !== "undefined" && console !== null) {
  console.log(message);
}e.log(message);
}
	</code>
</pre>
</section>

<section>
<t render="markdown">
### editor all things
</t>
<pre>
	<code class='xml'>
<snippet>
	<content><![CDATA[
if (typeof ${1:object} !== "undefined" && ${1:object} !== null) {
  ${1:object}.${2}
}
]]></content>
	<tabTrigger>?</tabTrigger>
</snippet>
	</code>
</pre>
</section>

<section>
<t render="markdown">### abstract all things</t>
<pre>
	<code class='javascript'>
function existy(x) { return x != null }; // Fogus

existy(undefined); // false
existy(null); // false
existy({}.notHere()) // false (TypeError)

existy(myShoes.tie().doubleKnot()) // Type Error

// solutions? //

existy2(myShoes, "tie")

existy(existy(myShoes)).tie() // WUT?
	</code>
</pre>
</section>

<section>
<t render="markdown">### Improve the Language</t>
<pre>
	<code class='coffeescript'>
myShoes?.tie()?.doubleKnot()
	</code>
</pre>
</section>

<section>
<t render="markdown">## Backbone + CoffeeScript</t>
<pre>
	<code class='coffeescript'>
Program = AbstractOrganization.extend
  urlRoot: "programs"
  extensions: {cached: "Program"}

  parent: -> @provider()

program = new Program(provider: someProviderInstance)
program.parent() #=> someProviderInstance
	</code>
</pre>
</section>

<section>
<pre>
	<code class='coffeescript'>
AbstractTotalRow = Backbone.View.extend
  tagName   : 'tr'
  className : 'total-row colored'
  template  : Templates.visit_calendar.total_row

  initialize: ()->


GrandTotalDirectCostRowView = AbstractTotalRow.extend
  title : "Grand Total: Direct Costs"
	</code>
</pre>

</section>
