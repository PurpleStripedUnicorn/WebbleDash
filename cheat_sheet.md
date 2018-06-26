# WebbleDash small cheat sheet

To use WebbleDash correctly:

```html
<html-tag data-wdash="ELEMENT">
```

To set a property op the object:

```html
<html-tag data-wdash-prop-PROPERTYNAME="PROPERTYVALUE">
```

_For examples see [the examples folder](../master/examples)_

## Elements

| ELEMENT             | DESCRIPTION                                                 | CAN BE USED ON                                                                                                          |
| ------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| textbox             | styled input text                                           | &lt;input type="text"&gt;, &lt;input type="password"&gt;, &lt;input type="search"&gt;, &lt;input type="email"&gt;, &lt;input type="number"&gt;  |
| large-quote         | styled large quote in the middle of the screen              | &lt;div&gt;, &lt;span&gt;                                                                                               |
| inline-quotes       | styled small inline quote                                   | &lt;span&gt;                                                                                                            |
| switch              | styled switch in stead of checkbox                          | &lt;input type="checkbox"&gt;                                                                                           |
| checkbox            | styled checkbox in stead of browser default checkbox        | &lt;input type="checkbox"&gt;                                                                                           |
| button              | styled button                                               | &lt;input type="button"&gt;, &lt;input type="submit"&gt;, &lt;button&gt;, &lt;a&gt;                                     |
| transparent-button  | styled transparent button                                   | &lt;input type="button"&gt;, &lt;input type="submit"&gt;, &lt;button&gt;, &lt;a&gt;                                     |
| confirm-button      | styled button that takes 2 clicks for action                | &lt;input type="button"&gt;, &lt;input type="submit"&gt;, &lt;button&gt;                                                |
| loading-circle      | simple loading indicator                                    | &lt;div&gt;                                                                                                             |
| title               | WebbleDash styled title                                     | &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;                                                  |
| text                | styled text                                                 | &lt;p&gt;                                                                                                               |
| profile-picture     | styled profile picture                                      | &lt;img&gt;                                                                                                             |
| panorama-title      | Large image with title in front of it                       | &lt;img&gt;                                                                                                             |

## Properties

| PROPERTY NAME       | DESCRIPTION                                                           | CAN BE USED ON (data-wdash=***)   |
| ------------------- | --------------------------------------------------------------------- | --------------------------------- |
| size                | used to change the Width+Height of certain webbledash objects         | checkbox, loading-circle, profile-picture |
| accent-border       | used to add a second border to element                                | textbox                           |
| confirm-message     | used to change the confirmation message of a button that needs confirmation | confirm-button              |
