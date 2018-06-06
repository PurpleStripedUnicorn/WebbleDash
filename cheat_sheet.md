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

| ELEMENT             | DESCRIPTION                                                 | CAN BE USED ON                                                                                             |
| ------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| textbox             | styled input text                                           | <input type="text">, <input type="password">, <input type="search">, <input type="email">                  |
| large-quote         | styled large quote in the middle of the screen              | <div>, <span>                                                                                              |
| inline-quotes       | styled small inline quote                                   | <span>                                                                                                     |
| switch              | styled switch in stead of checkbox                          | <input type="checkbox">                                                                                    |
| checkbox            | styled checkbox in stead of browser default checkbox        | <input type="checkbox">                                                                                    |
| button              | styled button                                               | <input type="button">, <input type="submit">, <button>                                                     |
| transparent-button  | styled transparent button                                   | <input type="button", <input type="submit">, <button>                                                      |
| loading-circle      | simple loading indicator                                    | <div>                                                                                                      |

## Properties

| PROPERTY NAME       | DESCRIPTION                                                           | CAN BE USED ON (data-wdash=***)   |
| ------------------- | --------------------------------------------------------------------- | --------------------------------- |
| size                | used to change the Width+Height of certain webbledash objects         | checkbox, loading-circle          |
