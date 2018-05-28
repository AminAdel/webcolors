# webcolors
easy way to use material colors in web pages

---

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
To set a color to the text of an element simply use classes like this examples :
```html
<div class="blue_200">this is a light blue text</div>
<div class="blue">this is a blue text with default level of 500</div>
 ```
 
## background colors
To set background color to an element simply use classes like this examples :
```html
<div class="bg_orange_200">this element has a light orange background</div>
<div class="bg_orange">this element has an orange background with color level of 500</div>
 ```
 
## border colors
To set a border color to an element you can use classes like this example :
```html
<div class="bd_blue">border blue</div>
<div class="bdt_red">border top red</div>
<div class="bdr_orange_600">border right orange</div>
<div class="bdb_blue">border bottom blue</div>
<div class="bdl_blue">border left blue</div>
 ```