var newData = {
	"nodes": [

		{
			"id": "Blacheville",
			"type": 0,
			"name": "User Blacheville",
			"age": "23",
			"phone": "(555)777-77-77",
			"email": "example@email.com",
			"avatar": ""
		},
		{
			"id": "Tholomyes",
			"type": 0,
			"name": "User Tholomyes",
			"age": "23",
			"phone": "(555)777-77-77",
			"email": "example@email.com",
			"avatar": ""
		},
		{
			"id": "Valjean",
			"type": 0,
			"name": "User Valjean",
			"age": "23",
			"phone": "(555)777-77-77",
			"email": "example@email.com",
			"avatar": ""
		},
		{
			"id": "Champtercier",
			"type": 1,
			"name": "Champtercier hospital",
			"age": "23",
			"phone": "(555)777-77-77",
			"email": "example@email.com",
			"avatar": ""
		},
		{
			"id": "Isabeau",
			"type": 0,
			"name": "User Isabeau",
			"age": "23",
			"phone": "(555)777-77-77",
			"email": "example@email.com",
			"avatar": ""
		},
		{
			"id": "Zephine",
			"type": 0,
			"name": "User Zephine",
			"age": "23",
			"phone": "(555)777-77-77",
			"email": "example@email.com",
			"avatar": ""
		},
		{
			"id": "OldMan",
			"type": 0,
			"name": "User OldMan",
			"age": "23",
			"phone": "(555)777-77-77",
			"email": "example@email.com",
			"avatar": ""
		},
		{
			"id": "Gervais",
			"type": 0,
			"name": "User Gervais",
			"age": "23",
			"phone": "(555)777-77-77",
			"email": "example@email.com",
			"avatar": ""
		}
	],
	"links": [
		{"source": "Champtercier", "target": "CountessdeLo"},
		{"source": "Isabeau", "target": "Champtercier"},
		{"source": "Zephine", "target": "Champtercier"},
		{"source": "OldMan", "target": "Champtercier"},
		{"source": "Gervais", "target": "Champtercier"},
		{"source": "Valjean", "target": "Champtercier"},
		{"source": "Tholomyes", "target": "Valjean"},
		{"source": "CountessdeLo", "target": "Blacheville"}
	]
};

var graph = {
		"nodes": [
			{
				"id": "Myriel",
				"type": 1,
				"name": "Myriel hospital",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Napoleon",
				"type": 1,
				"name": "Napoleon hospital",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Mlle.Baptistine",
				"type": 0,
				"name": "Mlle.User Baptistine",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Mme.Magloire",
				"type": 0,
				"name": "Mme.User Magloire",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "CountessdeLo",
				"type": 0,
				"name": "User CountessdeLo",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": "",
				"hasChildren": true
			},
			{
				"id": "Geborand",
				"type": 0,
				"name": "User Geborand",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Cravatte",
				"type": 0,
				"name": "User Cravatte",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Count",
				"type": 0,
				"name": "User Count",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Labarre",
				"type": 0,
				"name": "User Labarre",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Marguerite",
				"type": 0,
				"name": "User Marguerite",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Mme.deR",
				"type": 0,
				"name": "Mme.User deR",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Listolier",
				"type": 0,
				"name": "User Listolier",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Fameuil",
				"type": 0,
				"name": "User Fameuil",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Favourite",
				"type": 0,
				"name": "User Favourite",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			},
			{
				"id": "Dahlia",
				"type": 0,
				"name": "User Dahlia",
				"age": "23",
				"phone": "(555)777-77-77",
				"email": "example@email.com",
				"avatar": ""
			}
		],
		"links": [
			{"source": "Napoleon", "target": "Myriel", "direction": "bi", "type": "works_in"},
			{"source": "Mlle.Baptistine", "target": "Myriel", "direction": "to", "type": "works_in"},
			{"source": "Mme.Magloire", "target": "Myriel", "direction": "to", "type": "works_in"},
			{"source": "Mme.Magloire", "target": "Mlle.Baptistine", "direction": "none", "type": "friends_of"},
			{"source": "CountessdeLo", "target": "Myriel", "direction": "to", "type": "works_in"},
			{"source": "Geborand", "target": "Myriel", "direction": "to", "type": "works_in"},
			{"source": "Dahlia", "target": "Count", "direction": "none", "type": "friends_of"},
			{"source": "Count", "target": "Mme.deR", "direction": "none", "type": "friends_of"},
			{"source": "Cravatte", "target": "Mme.deR", "direction": "none", "type": "friends_of"},
			{"source": "Myriel", "target": "Mme.deR", "direction": "from", "type": "works_in"},
			{"source": "Napoleon", "target": "Listolier", "direction": "from", "type": "works_in"},
			{"source": "Napoleon", "target": "Marguerite", "direction": "from", "type": "works_in"},
			{"source": "Napoleon", "target": "Favourite", "direction": "from", "type": "works_in"},
			{"source": "Napoleon", "target": "Labarre", "direction": "from", "type": "works_in"},
			{"source": "Napoleon", "target": "Fameuil", "direction": "from", "type": "works_in"}
		]
	},
	defaultUser = 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png',
	defaultHospital = 'https://cdn2.iconfinder.com/data/icons/medicine-9/512/hospital-512.png',
	width = document.body.clientWidth,
	height = 800;

var shiftKey, ctrlKey, selected,
	svg = d3.select("svg")
		.attr("width", width)
		.attr("height", height);

var defs = svg.append('svg:defs');

d3.select('#affiliation')
	.attr("tabindex", 1)
	.on("keydown.brush", keydown)
	.on("keyup.brush", keyup)
	.each(function() { this.focus(); });

{
	//init images
	addImage('user', defaultUser);
	addImage('hospital', defaultHospital);
	defs
		.append("marker")
		.attr("id", "arrow-end")
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 27)
		.attr("refY", 0)
		.attr("markerWidth", 4)
		.attr("markerHeight", 4)
		.attr("orient", "auto")
		.append("path")
		.attr("d", "M0,-5L10,0L0,5") // x0 y-5, x10 y0, x0 y5
		.attr("class", "arrowFooter");

	defs
		.append("marker")
		.attr("id", "arrow-start")
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", -17)
		.attr("refY", 0)
		.attr("markerWidth", 4)
		.attr("markerHeight", 4)
		.attr("orient", "auto")
		.append("path")
		.attr("d", "M0,0L10,-5L10,5") // x0 y0, x10 y-5, x10 y5
		.attr("class", "arrowHead");
}

var simulation = d3.forceSimulation()
	.force("link", d3.forceLink().id(function(d) { return d.id; }))
	.force("charge", d3.forceManyBody())
	.force("center", d3.forceCenter(width / 2, height / 2))
	.stop();

var _f;

var linksContainer, link, nodesContainer, node;
linksContainer = svg.append("g")
	.attr("class", "links");
nodesContainer = svg.append("g")
	.attr("class", "nodes");
// drawLinks();
// drawNodes();

function drawLinks() {
	linksContainer
		.selectAll(".link-item")
		.data(graph.links)
		.enter()
		.append('g')
		.attr('class','link-item')
		.append("line")
		.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; })
		.attr("stroke-width", 3)
		.attr("class", function (d) {
			var classList = [];
			switch (d.direction) {
				case "from":
					classList.push("from");
					break;
				case "to":
					classList.push("to");
					break;
				case "bi":
					classList.push("bi");
					break;
				case "none":
					classList.push("none");
					break;
			}

			switch (d.type) {
				case "works_in":
					classList.push("works");
					break;
				case "friends_of":
					classList.push("friends");
					break;
			}

			return classList.join(" ");

		})
		.attr("marker-end", function (d) {
			return d.direction === "bi" || d.direction === "from" ? "url(#arrow-end)" : "";
		})
		.attr("marker-start", function (d) {
			return d.direction === "bi" || d.direction === "to" ? "url(#arrow-start)" : "";
		})
		.on("mouseover", function (e) {
			// console.log(e);
		})
		.on("mouseout", function (e) {
			// console.log(e);
		})
		.on("click", function (d) {
			var state = d.selected;

			node.classed("selected", function(p) { return p.selected = false; });
			link.classed("selected", function(p) { return p.selected = false; });

			d.selected = !state;

			selected = null;
			if (d.selected) {
				selected = d;
			}
			onChangeSelectedNode('link');

			d3.select(this).classed("selected", d.selected);
		});

	link = linksContainer.selectAll("line");
}

function drawNodes() {
	var item = nodesContainer
		.selectAll(".node-item")
		.data(graph.nodes)
		.enter().append('g')
		.attr('class','node-item')
		.attr("transform", function (d) {
			return 'translate(' + d.x + ',' + d.y + ')'
		})
		/*.on('mouseover', function () {
			event.currentTarget.parentElement.append(event.currentTarget)
		})*/
		.on('click', function (d) {
			if (d3.event.defaultPrevented) return;
			var state = d.selected;
			var _selected = [];
			// if (!shiftKey) {
				node.classed("selected", function(p) { return p.selected = false; });
				link.classed("selected", function(p) { return p.selected = false; });
			// }

			d.selected = !state;
			node.each(function (_d) {
				if (_d.selected) {
					_selected.push(_d);
				}
			});
			if (_selected.length === 1) {
				selected = _selected[0];
			} else {
				selected = null;
			}
			onChangeSelectedNode();
			d3.select(this).classed("selected", d.selected);
			/*if (d.selected) {
				node.each(function (_d) {
					delete _d.fx;
					delete _d.fy;
				});
				d.fx = width / 2;
				d.fy = height / 2;
				simulation.stop();
				for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
					simulation.tick();
					_f();
				}
				node.attr("transform", function (d) {
					return 'translate(' + d.x + ',' + d.y + ')'
				});
				link.attr("x1", function(d) { return d.source.x; })
					.attr("y1", function(d) { return d.source.y; })
					.attr("x2", function(d) { return d.target.x; })
					.attr("y2", function(d) { return d.target.y; });
				// simulation.restart();
			}*/
			/*if (d.hasChildren) {
				d.hasChildren = false;
				loadMore();
			}*/
		})
		.call(d3.drag()
			.on("start", dragstarted)
			.on("drag", dragged)
			.on("end", dragended));

	item.append("circle")
		.attr('class','wrapper')
		.attr("r", 20);

	item.append("circle")
		.attr('class','avatar')
		.attr("r", 18)
		.attr("fill", function (d) {
			var icon;
			if (d.avatar) {
				//add to svg
				addImage('user-'+d.id, d.avatar);
				icon = 'user-'+d.id;
			} else {
				switch (d.type) {
					case 0:
						icon = 'user';
						d.avatar = defaultUser;
						break;
					case 1:
						icon = 'hospital';
						d.avatar = defaultHospital;
						break;
					default:
						icon = 'user';
						d.avatar = defaultUser;

				}
			}


			return 'url(#'+icon+')';
		});

	item.append("text")
		.text(function(d) { return d.name; })
		.attr('text-anchor', 'middle')
		.attr('x', '0')
		.attr('y', '35');

	node = nodesContainer.selectAll(".node-item")
}

function dragstarted(d) {
	if (!d3.event.active) simulation.alphaTarget(0.1).restart();
	d.fx = d.x;
	d.fy = d.y;
}

function dragged(d) {
	d.fx = d3.event.x;
	d.fy = d3.event.y;
}

function dragended(d) {
	if (!d3.event.active) simulation.alphaTarget(0);
	// d.fx = null;
	// d.fy = null;
}
function loadMore() {
	var nodes = [].concat(graph.nodes,newData.nodes);
	var links = [].concat(graph.links,newData.links);
	simulation
		.nodes(nodes);
	graph.nodes = nodes;
	_f.initialize(graph.nodes);
	drawNodes();



	simulation.force("link").distance(100).links(links);
	graph.links = links;
	drawLinks();

	ticked();
	// simulation.restart();

}
simulation
	.nodes(graph.nodes)
	.on("tick", ticked);

simulation.force("link")
	.distance(function () {
		return 100;
	})
	.links(graph.links);

_f = d3.forceCollide();
_f.radius(55)
	.strength(1)
	.iterations(1)
	.initialize(graph.nodes);

function ticked() {
	link
		.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; });

	node
		.attr("transform", function (d) {
			return 'translate(' + d.x + ',' + d.y + ')'
		});
}

d3.timeout(function () {
	for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
		simulation.tick();
		_f();
	}
	_.forEach(simulation.nodes(), function (d) {
		d.fx = d.x;
		d.fy = d.y;
	});
	drawLinks();
	drawNodes();
});

function addImage(id,url) {
	defs.append('svg:pattern')
		.attr('id', id)
		.attr('x', '0%')
		.attr('y', '0%')
		.attr('width', '100%')
		.attr('height', '100%')
		.attr('viewBox', '0 0 32 32')
		.append('svg:image')
		.attr('xlink:href', url)
		.attr('x', '0%')
		.attr('y', '0%')
		.attr('width', 32)
		.attr('height', 32);
}

function keydown() {
	shiftKey = d3.event.shiftKey || d3.event.metaKey;
	ctrlKey = d3.event.ctrlKey;
}

function keyup() {
	shiftKey = d3.event.shiftKey || d3.event.metaKey;
	ctrlKey = d3.event.ctrlKey;
}

function onChangeSelectedNode(type) {
	var container = document.getElementById('container');
	var html = "";
	if (selected) {
		var tmpl;
		switch (type) {
			case "link":
				tmpl = document.getElementById('link');
				break;
			case "node":
				tmpl = document.getElementById('tmpl');
				break;
			default:
				tmpl = document.getElementById('tmpl');
				break;
		}
		html = _.template(tmpl.innerHTML)({data:selected});
	}
	container.innerHTML = html;
}