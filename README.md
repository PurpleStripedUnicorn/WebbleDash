# WebbleDash

WebbleDash is a small jQuery add-on to make the life of a web-developer easier.

Please include the WebbleDash folder in your project to use WebbleDash correctly. Please refer to the files inside the "main" directory ([webbledash.css](../master/main/webbledash.css) and [webbledash.js](../master/main/webbledash.js)) when you are using WebbleDash in a html file. Also make sure you include jQuery. See the example below:

```html
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="../main/webbledash.js"></script>
    <link rel="stylesheet" type="text/css" href="../main/webbledash.css" />
</head>
```

This is still an alpha version, please remember that this project may contain bugs.

## How to use WebbleDash

You can use WebbleDash by using the attribute data-wdash="**ELEMENT_NAME**" on one of the supported elements for that element.

_see [cheat_sheet.md](../master/cheat_sheet.md) for more info_

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
| inline-quote        | styled small inline quote                                |
| switch              | styled switch in stead of checkbox                       |
| checkbox            | styled checkbox in stead of browser default checkbox     |
| button              | styled button                                            |
| transparent-button  | styled transparent button                                |
| loading-circle      | simple loading indicator                                 |
| title               | WebbleDash styled title                                  |
| text                | styled text                                              |
| confirm-button      | styled button which performs action on second click      |
| profile-picture     | styled profile picture                                   |
| panorama-title      | large image with title in front of it                    |
