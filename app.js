(function () {

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
		newData = {
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

	var Affiliation = function (params) {
		this.config = null;
		this.el = null;
		this.simulation = null;
		this.svg = null;
		this.defs = null;
		this.node = null;
		this.link = null;
		this.holdingShift = null;
		this.holdingCtrl = null;
		this.forceCollide = null;
		this.linksContainer = null;
		this.nodesContainer = null;
		this.selectedNode = null;

		this.setUpParams(params);
		this.init();
	};

	Affiliation.prototype.init = function () {
		var _this = this;

		this.el
			.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));

		this.svg = d3.select("svg")
			.attr("width", this.config.width)
			.attr("height", this.config.height);

		this.defs = this.svg.append('svg:defs');

		d3.select('#affiliation')
			.attr("tabindex", 1)
			.on("keydown.brush", keydown)
			.on("keyup.brush", keyup)
			.each(function() { this.focus(); });

		{

			var defaultUser = 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png',
				defaultHospital = 'https://cdn2.iconfinder.com/data/icons/medicine-9/512/hospital-512.png';
			//init images
			addImage('user', defaultUser);
			addImage('hospital', defaultHospital);
			this.defs
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

			this.defs
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

		this.simulation = d3.forceSimulation()
			.force("link", d3.forceLink().id(function(d) { return d.id; }))
			.force("charge", d3.forceManyBody())
			.force("center", d3.forceCenter(this.config.width / 2, this.config.height / 2))
			.stop();

		this.linksContainer = this.svg.append("g")
			.attr("class", "links");
		this.nodesContainer = this.svg.append("g")
			.attr("class", "nodes");

		this.simulation
			.nodes(_this.config.nodes)
			.on("tick", ticked);

		this.simulation.force("link")
			.distance(function () {
				return 100;
			})
			.links(_this.config.links);

		this.forceCollide = d3.forceCollide();
		this.forceCollide.radius(55)
			.strength(1)
			.iterations(1)
			.initialize(_this.config.nodes);

		d3.timeout(function () {
			for (var i = 0, n = Math.ceil(Math.log(_this.simulation.alphaMin()) / Math.log(1 - _this.simulation.alphaDecay())); i < n; ++i) {
				_this.simulation.tick();
				_this.forceCollide();
			}
			_.forEach(_this.simulation.nodes(), function (d) {
				d.fx = d.x;
				d.fy = d.y;
			});
			drawLinks();
			drawNodes();
		});

		function ticked() {
			_this.link
				.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });

			_this.node
				.attr("transform", function (d) {
					return 'translate(' + d.x + ',' + d.y + ')'
				});
		}

		function drawLinks() {
			_this.linksContainer
				.selectAll(".link-item")
				.data(_this.config.links)
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

					_this.node.classed("selected", function(p) { return p.selected = false; });
					_this.link.classed("selected", function(p) { return p.selected = false; });

					d.selected = !state;

					_this.config.onSelectLink(d.selected && d || null);

					d3.select(this).classed("selected", d.selected);
				});

			_this.link = _this.linksContainer.selectAll("line");
		}

		function drawNodes() {
			var item = _this.nodesContainer
				.selectAll(".node-item")
				.data(_this.config.nodes)
				.enter().append('g')
				.attr('class',function (d) {
					var classList = 'node-item';
					if (_this.selectedNode && _this.selectedNode.id == d.id) {
						classList += ' selected';
					}
					return classList;
				})
				.attr("transform", function (d) {
					return 'translate(' + d.x + ',' + d.y + ')'
				})
				.on('click', function (d) {
					if (d3.event.defaultPrevented) return;
					var state = d.selected;
					var _selected = [];
					if (!_this.holdingShift) {
						_this.node.classed("selected", function (p) {
							return p.selected = false;
						});
						_this.link.classed("selected", function (p) {
							return p.selected = false;
						});
					}

					d.selected = !state;
					_this.node.each(function (_d) {
						if (_d.selected) {
							_selected.push(_d);
						}
					});
					if (_selected.length === 1) {
						_this.selectedNode = _selected[0];
					} else {
						_this.selectedNode = null;
					}
					_this.config.onSelectNode(_this.selectedNode);
					d3.select(this).classed("selected", d.selected);
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

			_this.node = _this.nodesContainer.selectAll(".node-item")
		}

		function dragstarted(d) {
			if (!d3.event.active) _this.simulation.alphaTarget(0.1).restart();
			d.fx = d.x;
			d.fy = d.y;
		}

		function dragged(d) {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		}

		function dragended(d) {
			if (!d3.event.active) _this.simulation.alphaTarget(0);
		}

		function keydown() {
			_this.holdingShift = d3.event.shiftKey || d3.event.metaKey;
			_this.holdingCtrl = d3.event.ctrlKey;
		}

		function keyup() {
			_this.holdingShift = d3.event.shiftKey || d3.event.metaKey;
			_this.holdingCtrl = d3.event.ctrlKey;
		}

		function addImage(id,url) {
			_this.defs.append('svg:pattern')
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

	};

	Affiliation.prototype.setUpParams = function (params) {
		if (!params || !params.el) {
			throw new Error('Unexpected Data!');
		}

		this.el = (function getEl(_el) {
			if (typeof _el === "string") {
				return document.querySelector(_el);
			} else if (_el instanceof HTMLElement) {
				return _el
			} else if (_el.length) {
				return getEl(_el[0]);
			}
			return null;
		})(params.el);

		this.config = {
			el: this.el,
			nodes: JSON.parse(JSON.stringify(params.nodes)),
			links: JSON.parse(JSON.stringify(params.links)),
			width: params.width || this.el.clientWidth,
			height: params.height ||  this.el.clientHeight,
			onSelectNode: params.onSelectNode || function () {},
			onSelectLink: params.onSelectLink || function () {}
		};
	};

	Affiliation.prototype.reInit = function (params) {
		this.setUpParams(params);
		this.redraw();
	};

	Affiliation.prototype.redraw = function () {
		this.svg.remove();
		this.init();
	};

	Affiliation.prototype.destroy = function () {
		this.el.remove();
	};

	Affiliation.prototype.centerNode = function (id) {
		var node;
		this.node.each(function (_d) {
			if (_d.id === id) {
				node = _d;
			}
			delete _d.fx;
			delete _d.fy;
		});

		node.fx = this.config.width / 2;
		node.fy = this.config.height / 2;

		this.redraw();
	};

	Affiliation.prototype.changeData = function (data) {
		this.config.nodes = [].concat(this.config.nodes,data.nodes);
		this.config.links = [].concat(this.config.links,data.links);

		this.node.each(function (_d) {
			delete _d.fx;
			delete _d.fy;
		});

		this.redraw();
	};

	var affiliation = (function () {
		return function (params) {
			return new Affiliation(params);
		};
	})();

	var instance = affiliation({
		el: "#affiliation",
		nodes: graph.nodes,
		links: graph.links,
		onSelectNode: function (data) {
			showPopup(data, 'node');
		},
		onSelectLink: function (data) {
			showPopup(data, 'link');
		}
	});

	var showPopup = function (data, type) {
		var container = document.getElementById('container');
		var html = "";
		if (data) {
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
			html = _.template(tmpl.innerHTML)({data:data});
		}
		container.innerHTML = html;

		var centerEl = container.querySelector('[action="center"]');
		var loadChildren = container.querySelector('[action="loadChildren"]');
		if (centerEl) {
			centerEl.addEventListener('click', function (event) {
				instance.centerNode(data.id);
			}, false);
		}
		if (loadChildren) {
			loadChildren.addEventListener('click', function (event) {
				data.hasChildren = false;
				instance.changeData(newData);
			}, false);
		}
	};

})();