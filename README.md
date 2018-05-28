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

```
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
To set a color to the text of an element simple add color class to the element like this :
```
<div class="blue_200">this is a light blue text</div>
<div class="blue">this is a blue text with default level of 500</div>
 ```
 
