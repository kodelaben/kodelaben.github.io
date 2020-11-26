---
layout: post
title:  "Merge"
mathjax: true
hidden: true
permalink: /animasjoner/merge/
---

*Merge sort* er en algoritme for å sortere mengder som går under [splitt og hersk algoritmer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm#:~:text=In%20computer%20science%2C%20divide%20and,enough%20to%20be%20solved%20directly.){:target="_blank"}. 

Hvis man har en liste på *n* elementer, så fungerer algoritmen på følgende måte. Del listen inn i *n* forskjellige lister.  Deretter slår en sammen to og to lister  systematisk sammen til en ny sortert liste. Sammenslåingen gjøres ved å sammenligne de første elementene i listene og velge ut den minste og sette den inn i den nye listen. Videoen under illusterer algoritmen.
<div class="centered-videoplayer">
<video width="720" height="480" controls autoplay="true" loop="true">
  <source src="/assets/sortering/merge_sort/merge_sort.mp4">
</video>
</div>

Under er en animasjon som viser hvordan algoritmen sorterer en tilfeldig liste av stolper i stigende rekkefølge.


<div style="text-align:center;">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <script src="/assets/sortering/merge_sort/sketch.es6"></script>
    <div id="canvasForHTML"></div>
</div>