---
layout: post
title:  "Depth first"
mathjax: true
hidden: true
permalink: /animasjoner/depth_first/
---


<!-- Recursive implementation
The depth-first search algorithm of maze generation is frequently implemented using backtracking. This can be described with a following recursive routine:

Given a current cell as a parameter,
Mark the current cell as visited
While the current cell has any unvisited neighbour cells
Choose one of the unvisited neighbours
Remove the wall between the current cell and the chosen cell
Invoke the routine recursively for a chosen cell
which is invoked once for any initial cell in the area. -->

<div style="text-align:center;">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <script src="/assets/maze/depth_first/sketch.js"></script>
    <div id="canvasForHTML"></div>
</div>

