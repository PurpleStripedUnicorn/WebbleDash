# WebbleDash

WebbleDash is a small jQuery add-on to make the life of a web-developer easier.

Please include both the "main/webbledash.js" and "main/webbledash.css" in your project to use WebbleDash correctly. Use the files inside the "main directory" when you are using WebbleDash for yourself.

This is still an alpha version, please remember that this project may contain bugs.

## How to use WebbleDash

You can use WebbleDash by using the attribute data-wdash="[element_name]" on one of the supported elements for that element - [see cheat_sheet.txt for more info](../master/cheat_sheet.txt).

## Examples

**Example:** This will create a switch element with different styling from the normal html checkboxes

```html
<input type="checkbox" checked data-wdash="switch" />
```

**Example:** This will create a large quote that aligns to the center of the page

```html
<span data-wdash="large-quote">
    I love cookies - PurpleStripedUnicorn
</span>
```

## List of features

| Element name        | Description                                              |
| ------------------- | -------------------------------------------------------- |
| textbox             | styled input text                                        |
| large-quote         | styled large quote in the middle of the screen           |
| inline-quotes       | styled small inline quote                                |
| switch              | styled switch in stead of checkbox                       |
| checkbox            | styled checkbox in stead of browser default checkbox     |
| button              | styled button                                            |
