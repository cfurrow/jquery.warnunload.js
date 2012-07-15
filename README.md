jquery.warnunload.js
===

jquery.warnunload.js is a jQuery plugin that allows you to simply insert warnings to the user if they made changes to a page's inputs and then browse away before clicking save or update. This is done via the "onbeforeunload" event.

## Usage

	$.warnUnload({
	      message:"Are you sure you want to leave this page without saving?", 
	      urls:["/Property/Edit","/Property/MoreInformation"],
	      ignore:["#Continue","#Done","#Cancel","#Delete"] 
	    });
	   

## Demo
You can check out the demo in the ./demo directory.


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
			<td>"Are you sure you want to leave this page?"</td>
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
			Array of urls to track input changes and warn user if unsaved 			changes will be lost. Only partial urls are needed as a check for 			location.href.indexOf(url) is done. If current url is not listed, plugin does not warn user if changes will be lost.
			</td>
		</tr>
		<tr>
			<td>ignore</td>
			<td>string</td>
			<td>".ignore-warn"</td>
			<td>
			Comma-seperated list of jQuery selector queries to ignore 
			warning the user. e.g. ".ignore, #save, input[type='submit']"
			</td>
		</tr>
	</tbody>
</table>


## Does it work in all browsers?

<table>
  <thead>
    <tr>
      <th>Browser</th>
      <th>Version(s)</th>
      <th>Tested?</th>
      <th>Issues</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Internet Explorer</td>
      <td>6</td>
      <td style="background-color:#ff7373; color:#ff0000;">Not tested</td>
      <td></td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>7</td>
      <td style="background-color:#ff7373; color:#ff0000;">Not tested</td>
      <td></td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>8</td>
      <td style="background-color:#65e080; color:#007d1c;">Tested</td>
      <td></td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>9</td>
      <td style="background-color:#65e080; color:#007d1c;">Tested</td>
      <td></td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>10</td>
      <td style="background-color:#ff7373; color:#ff0000;">Not tested</td>
      <td></td>
    </tr>
    <tr>
      <td>Firefox</td>
      <td>13.0.1</td>
      <td style="background-color:#65e080; color:#007d1c;">Tested</td>
      <td></td>
    </tr>
    <tr>
      <td>Chrome</td>
      <td>20+</td>
      <td style="background-color:#65e080; color:#007d1c;">Tested</td>
      <td></td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>11.61</td>
      <td style="background-color:#ff7373; color:#ff0000;">Failed</td>
      <td>Opera did not stop and warn user at all. Not supported as of yet.</td>
    </tr>
    <tr>
      <td>Safari</td>
      <td>5.1.7</td>
      <td style="background-color:#65e080; color:#007d1c;">Tested</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Depenencies?
Just jQuery, tested with jQuery 1.7.2.