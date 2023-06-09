Template.prototype.graph3DTemplate = () => `
<div class="pep" align='left'>  
    <label>
        <input class="check" type="checkbox" id="isPoints"></input>
    points
    </label>
    <label>
        <input class="check" type="checkbox" id="isEdges"></input>
    edges
    </label>
    <label>
        <input class="check" type="checkbox" checked=true id="isPolygons"><label></input>
    polygons
    </label>
</div>
<div class="choose">
    <select id="selectFigure" class="figures">
        <option value="cube">Куб</option>
        <option value="sphera">Сфера</option>
        <option value="cone">Конус</option>
        <option value="cylinder">Цилиндр</option>
        <option value="ring">Тор</option>
        <option value="ellipsoid">Эллипсоид</option>
        <option value="ellipticalparaboloid">Эллиптический параболоид</option>
        <option value="ellipticalcylinder">Эллиптический цилиндр</option>
        <option value="paraboliccylinder">Параболический цилиндр</option>
        <option value="hyperbolicparaboloid">Гиперболический параболоид</option>
        <option value="hyperboliccylinder">Гиперболический цилиндр</option>
        <option value="onesheetedhyperboloid">Однополостной гиперболоид</option>
        <option value="twosheetedhyperboloid">Двуполостной гиперболоид</option>
    </select>
</div>
<div class='cl'>
    <input type="color" id="color" placeholder="color" class="color" value="#de3163">
    <input class="light" type="range" min="25000" max="50000" value="powerlight" id="powerlight">
</div>
<div align='left'>
    <canvas id='graphics'></canvas>
</div>
`;