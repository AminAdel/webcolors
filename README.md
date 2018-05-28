# webcolors
easy way to use material colors in web pages

---

we used google's material colors.
If you are not familiar with material colors please visit this page first :

[Google Material Colors](https://material.io/design/color/#tools-for-picking-colors)

---

## quick start
There is 2 files in the dist folder, insert them in your html code.

The js file is for gradinet colors only.
If you don't need it you won't have to insert that.
This file needs jquery, so insert jquery before it.

so we will have something this :

```html
<!-- jquery (I think any version would work) -->
<script type="text/javascript" src="jquery.min.js"></script>

<!-- webcolors : -->
<link rel="stylesheet" type="text/css" href="webcolors/dist/webcolors.min.css"/>
<script type="text/javascript" src="webcolors/dist/webcolors.min.js"></script>
```

---

## about colors
every color has a name and a level.

for example "blue" with level of "200".

the default level for each color is 500.

---

## text colors
To set a color to the text of an element use classes like these examples :
```html
<div class="blue_200">this is a light blue text</div>
<div class="blue">this is a blue text with default level of 500</div>
```

## background colors
To set background color to an element use classes like these examples :
```html
<div class="bg_orange_200">this element has a light orange background</div>
<div class="bg_orange">this element has an orange background with color level of 500</div>
```

## border colors
To set a border color to an element use classes like these example :
```html
<div class="bd_blue">border blue</div>
<div class="bdt_red">border top red</div>
<div class="bdr_orange_600">border right orange</div>
<div class="bdb_blue">border bottom blue</div>
<div class="bdl_blue">border left blue</div>
```

 ## outline colors
 To set outline color to an element use classes like this example :
```html
<div class="ot_red_400">border blue</div>
```

 ## gradient colors
gradient colors are a little different from other colors.
we need to do some extra things to do that.

If you want to learn how to set gradinet colors with css please visit this page :

[linear-gradinet](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)

### simple gradients
The css code to apply a simple gradient color is like this :
```css
div {
	background: linear-gradient(to bottom left, #3f87a6, #ebf8e1);
}
```
to add a simple gradient color with **webcolors** add "bg_gradient" class to the element
and add a data-gradient attribute with value of "everything between two parenthesis of above style".
but now the colors must be material colors. look this example :
```html
<div class="bg_gradient" data-gradient="to bottom left, blue_100, red_100"></div>
```

### advanced gradients
The css code to apply an advanced gradient color is like this :
```css
div {
	background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}
```
advanced gradient styles have more than one color.
so the data attribute should be an array of strings in json format.
and every string is like the simple gradient example.

so we will have something like this :
```html
<div class="bg_gradient" data-gradient='["to bottom left, blue_100, red_100", "to bottom left, orange_200, yellow_500"]'></div>
```


---

## grey colors
we added some extra grey levels to the material colors.
I personally use these colors big time!

the default levels was : 50, 100, 200, 300, ... , 900

we added these levels :
- 0 for #000
- 1 for #111
- 2 for #222
- 3 for #333
- 4 for #444
- 5 for #555
- 6 for #666
- 7 for #777
- 8 for #888
- 9 for #999
- a for #aaa
- b for #bbb
- c for #ccc
- d for #ddd
- e for #eee

- f0 for #f0f0f0 (soon ... updating)
- f1 for #f1f1f1
- f2 for #f2f2f2
- f3 for #f3f3f3
- f4 for #f4f4f4
- f5 for #f5f5f5
- f6 for #f6f6f6
- f7 for #f7f7f7
- f8 for #f8f8f8
- f9 for #f9f9f9
- fa for #fafafa
- fb for #fbfbfb
- fc for #fcfcfc
- fd for #fdfdfd
- fe for #fefefe

so the grey classes will be like these : "grey_5", "bg_grey_f5", "bd_grey_d", ...

