# WebbleDash small cheat sheet

To use WebbleDash correctly:

```html
<html-tag data-wdash="ELEMENT">
```

To set a property op the object:

```html
<html-tag data-wdash-prop-PROPERTYNAME="PROPERTYVALUE">
```

## Elements

| ELEMENT             | DESCRIPTION                                                 | CAN BE USED ON                                                                                                          |
| ------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| textbox             | styled input text                                           | &lt;input type="text"&gt;, &lt;input type="password"&gt;, &lt;input type="search"&gt;, &lt;input type="email"&gt;       |
| large-quote         | styled large quote in the middle of the screen              | &lt;div&gt;, &lt;span&gt;                                                                                               |
| inline-quotes       | styled small inline quote                                   | &lt;span&gt;                                                                                                            |
| switch              | styled switch in stead of checkbox                          | &lt;input type="checkbox"&gt;                                                                                           |
| checkbox            | styled checkbox in stead of browser default checkbox        | &lt;input type="checkbox"&gt;                                                                                           |
| button              | styled button                                               | &lt;input type="button"&gt;, &lt;input type="submit"&gt;, &lt;button&gt;                                                |
| transparent-button  | styled transparent button                                   | &lt;input type="button"&gt;, &lt;input type="submit"&gt;, &lt;button&gt;                                                |
| loading-circle      | simple loading indicator                                    | &lt;div&gt;                                                                                                             |

## Properties

| PROPERTY NAME       | DESCRIPTION                                                           | CAN BE USED ON (data-wdash=***)   |
| ------------------- | --------------------------------------------------------------------- | --------------------------------- |
| size                | used to change the Width+Height of certain webbledash objects         | checkbox, loading-circle          |
