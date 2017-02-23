var table = [
    {"name": "Top Level",   "parent": ""},
    {"name": "Level 2: A",   "parent": "Top Level"},
    {"name": "Level 2: B",   "parent": "Top Level"},
    {"name": "Level 2: C",   "parent": "Top Level"},
    {"name": "Level 3: A",   "parent": "Level 2: A"},
    {"name": "Son of B",   "parent": "Level 2: B"},
    {"name": "Daughter of B",   "parent": "Level 2: B"},
    {"name": "Son of A",   "parent": "Level 2: A"},
    {"name": "Daughter of A",   "parent": "Level 2: A"},
    {"name": "Son of A",   "parent": "Level 3: A"},
    {"name": "Daughter of A",   "parent": "Level 3: A"}
];

var data = d3.stratify()
    .id(function(d) { return d.name; })
    .parentId(function(d) { return d.parent; })
    (table);

var width = document.body.clientWidth,
    height = 600,
    offsetX = 10,
    boxHeight = 40,
    boxWidth = 150,
    duration = width - 200;

var svg = d3.select('#hierarchy')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

var root = d3.hierarchy(data, children);
var treemap = d3.tree().size([height - 100, duration]);


svg.append("defs")
    .append("marker")
    .attr("id","arrow-end")
    .attr("viewBox","0 -5 10 10")
    .attr("refX", 10)
    .attr("refY",0)
    .attr("markerWidth", 10)
    .attr("markerHeight", 10)
    .attr("orient","auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr("class","arrow-end");

root.children.forEach(collapse);

update(root);

function children(d) {
    return d.children;
}

function collapse(d) {
    if(d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
    }
}

function update (source) {
    d3.selectAll('g').remove();

    var treeData = treemap(root);

    treemap(treeData);

    var link = svg.append('g')
        .selectAll('line')
        .data(root.descendants().slice(1))
        .enter()
        .append('line')
        .attr('stroke-width', 1)
        .attr('marker-end', 'url(#arrow-end)')
        .attr('stroke', 'black')
        .attr('x1', function (d) {return d.parent.y + boxWidth + offsetX})
        .attr('y1', function (d) {return d.parent.x})
        .attr('x2', function (d) {return d.y + offsetX})
        .attr('y2', function (d) {return d.x});

    var node = svg.append('g')
        .selectAll('rect')
        .data(root.descendants())
        .enter()
        .append('rect')
        .attr('rx', 10)
        .attr('ry', 10)
        .attr('class', 'box')
        .attr('width', boxWidth)
        .attr('height', boxHeight)
        .attr("transform", function(d) {
            return "translate(" + (d.y + offsetX) + "," + (d.x - boxHeight / 2) + ")";
        })
        .on('click', function (d) {
            if (d3.select(this).classed('selected')) {
                node.classed("selected", function(p) { return p.selected = false; })
            } else {
                node.classed("selected", function(p) { return p.selected = false; })
                d3.select(this).classed('selected', true);
            }
        });

    var trigger = svg.append('g')
        .selectAll('circle')
        .data(root.descendants())
        .enter()
        .append('circle')
        .attr('r', 7)
        .attr('class', function(d) { return 'trigger' +  (d.children || d._children ? '' : ' hidden'); })
        .attr('cx', function (d) {return d.y + offsetX + boxWidth})
        .attr('cy', function (d) {return d.x})
        .on('click', click);

    var text = svg.append('g')
        .selectAll('text')
        .data(root.descendants())
        .enter()
        .append('text')
        .attr('class', 'text')
        .text(function (d) {
            return d.data.id;
        })
        .attr('text-anchor', 'middle')
        .attr('x', function (d) {
            return d.y + boxWidth / 2 + offsetX
        })
        .attr('y', function (d) {
            return d.x + 5
        });

    function click(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
    }
}


