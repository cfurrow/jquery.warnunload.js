README
===

jquery.warnunload.js is a jQuery plugin that allows you to simply insert warnings to the user if they made changes to a page's inputs and then browse away before clicking save or update. This is done via the "onbeforeunload" event.

## Usage

	$.warnUnload({
	      message:"Are you sure you want to leave this page without saving?", 
	      urls:["/Property/Edit","/Property/MoreInformation"],
	      ignore:["#Continue","#Done","#Cancel","#Delete"] 
	    });


## Options

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>message</td>
			<td>string</td>
			<td>""</td>
			<td>
			Message to display in confirm window (not supported in all
			 browsers)
			</td>
		</tr>
		<tr>
			<td>urls</td>
			<td>array</td>
			<td>[]</td>
			<td>
			Array of urls to track input changes and warn user if unsaved 			changes will be lost. Only partial urls are needed as a check for 			location.href.indexOf(url) is done.
			</td>
		</tr>
		<tr>
			<td>ignore</td>
			<td>array</td>
			<td>[]</td>
			<td>
			Array of jQuery selector queries to ignore warning the user.
			</td>
		</tr>
	</tbody>
</table>