(function (d3) {
    var param;

    d3.imsHierarchy = function (p) {

        param = Object.assign({}, {
            blockId: 'imsHierarchy',
            data: [],
            vertical: true,
            width: d3.select('#' + (p.blockId ? p.blockId : 'imsHierarchy')).node().offsetWidth,
            height: 500,
            boxHeight: 40,
            boxWidth: 150,
            offsetX: 0,
            offsetY: 0,
            collapsed: false,
            toggleable: false,
            selectable: false,
            loaderHtml: 'Loading...',
            topicHierarchyId: '',
            endPoints: {
                create: '',
                delete: '',
                topic: ''
            },
            afterAddNewNode: function () {}

        }, p);

        d3.select('#' + param.blockId + ' svg')

        var $modal = d3.select('.modal');
        var $form = d3.select('#modal-form').node(),
            svg;

        if (d3.select('#' + param.blockId + ' svg').node()) {
            svg = d3.select('#' + param.blockId + ' svg')
        } else {
            svg = d3.select('#' + param.blockId)
                .append('svg')
        }

        svg.attr('width', param.width)
            .attr('height', param.height);

        var loading = d3.select('#' + param.blockId)
            .append('div')
            .attr('class', 'loading hidden')
            .html("<div class='loading-in'>" + param.loaderHtml + "</div>");

        var duration = param.width - (param.boxWidth + 20 + param.offsetX);
        var someId = 0,
            height,
            width,
            treemap,
            maxDepth = 0;

        if (param.vertical) {
            height = duration;
            width = param.height - (100 + param.offsetY);

            treemap = d3.tree().nodeSize([param.boxWidth * 1.2, param.boxHeight * 2]);

        } else {
            height = param.height - (100 + param.offsetY);
            width = duration;

            treemap = d3.tree().size([height, width]);
        }

        if (param.data.length) {
            var data = parseData(param.data);

            var root = d3.hierarchy(data, children);

            svg.append("defs")
                .append("marker")
                .attr("id", "arrow-end")
                .attr("viewBox", "0 -5 10 10")
                .attr("refX", 10)
                .attr("refY", 0)
                .attr("markerWidth", 10)
                .attr("markerHeight", 10)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M0,-5L10,0L0,5")
                .attr("class", "arrow-end");

            if (param.collapsed) {
                root.children.forEach(collapse);
            }

            update(root);
        } else {
            addCreateLink()
        }

        function addCreateLink() {
            svg.selectAll('g').remove();
            svg.append('g')
                .append('text')
                .text('Click here to add new Topic')
                .style('cursor', 'pointer')
                .style('text-decoration', 'underline')
                .attr('fill', 'blue')
                .attr('text-anchor', 'middle')
                .attr('x', function () {
                    return param.width/ 2
                })
                .attr('y', function () {
                    return 20
                })
                .on('click', createNode)
        }

        function children(d) {
            return d.children;
        }

        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null
            }
        }

        // $form.removeEventListener('submit', function () {});
        // $form.removeEventListener('reset', function () {});

        $form.addEventListener('submit', submitForm);
        $form.addEventListener('reset', resetForm);

        function submitForm (e) {
            e.preventDefault();

            var $input = this.querySelector('#label'),
                parentId = this.querySelector('#parentId').value,
                value = $input.value.trim(),
                $topic = document.getElementById('topic'),
                $topic2 = document.getElementById('topic2');

            if (value) {
                var topic = {
                    parentId : parentId,
                    name  : value,
                    description : '',
                    topicType : $topic.value,
                    brandId : $topic2.value,
                    heirarchyId: param.topicHierarchyId
                }, newSource;

                loading.classed('hidden', false);
                if (window.Visualforce) {
                    Visualforce.remoting.Manager.invokeAction(
                        param.endPoints.create,
                        topic,
                        function (result, event) {
                            if (event.status) {
                                topic.recordId = result;
                                console.log('call add')
                                add();
                            } else {
                                onError(result)
                            }
                        }
                    );
                } else {
                    someId++;
                    topic.recordId = someId;
                    add();
                }

                function add () {
                    loading.classed('hidden', true);
                    param.data.push(topic);
                    newSource = parseData(param.data);

                    console.log('add call update')
                    update(d3.hierarchy(newSource, children));
                }

                resetForm.call(this)
            } else {
                $input.focus();
            }

            return false;
        }

        function onError (error) {
            alert(error);
            loading.classed('hidden', true);
        }

        function resetForm () {
            this.querySelector('#label').value = '';
            this.querySelector('#parentId').value = '';

            $modal.classed('hidden', true);
        }

        function createNode (d) {
            if (d) {
                openModal(d.data.id);
            } else {
                openModal()
            }

            if (typeof param.afterAddNewNode === 'function') {
                param.afterAddNewNode(d)
            }
        }

        function parseData (input) {
            return d3.stratify().id(function (d) {return d.recordId;})
                .parentId(function (d) {return d.parentId;})(input)
        }

        function openModal (id) {
            var $topic = document.getElementById('topic');
            var $topic2 = document.getElementById('topic2');

            id = id || null;

            $modal.classed('hidden', false);
            $modal.select('#label').node().focus();
            $modal.select('#parentId').node().value = id;


            function updateTopic2 (val) {
                if (window.Visualforce) {
                    Visualforce.remoting.Manager.invokeAction(
                        param.endPoints.topic,
                        val,
                        function (result, event) {
                            if (event.status) {
                                $topic2.innerHTML = '';

                                for (var k in result) {
                                    if (result.hasOwnProperty(k)) {
                                        var opt = document.createElement('option');

                                        opt.innerHTML = result[k];
                                        opt.value = k;
                                        $topic2.appendChild(opt);
                                    }
                                }
                            } else {
                                alert(event.status)
                            }
                        }
                    );
                }
            }

            updateTopic2($topic.value);

            $topic.removeEventListener('change', function () {});
            $topic.addEventListener('change', function () {
                updateTopic2(this.value);
            })
        }

        function update(source) {
            svg.selectAll('g').remove();
            svg.selectAll('foreignObject').remove();
            console.log('update remove all g')

            if (param.vertical) {
                svg.attr('height', function () {
                    source.descendants().forEach(function (el) {
                        maxDepth = maxDepth < el.depth ? el.depth : maxDepth
                    });

                    return (maxDepth + 1) * param.boxHeight * 2
                })
            }

            treemap(source);

            var link = svg.append('g')
                .attr('class', 'links translate')
                .selectAll('line')
                .data(source.descendants().slice(1))
                .enter()
                .append('line')
                .attr('stroke-width', 1)
                .attr('marker-end', 'url(#arrow-end)')
                .attr('stroke', 'black')
                .attr('x1', function (d) {
                    var x = d.parent.y + param.boxWidth + param.offsetX;

                    if (param.vertical) {
                        x = d.parent.x + param.boxWidth / 2;
                    }

                    return x + param.offsetX;
                })
                .attr('y1', function (d) {
                    var y = d.parent.x;

                    if (param.vertical) {
                        y = d.parent.y + param.boxHeight / 2
                    }

                    return y + param.offsetY;
                })
                .attr('x2', function (d) {
                    var x = d.y + param.offsetX;

                    if (param.vertical) {
                        x = d.x + param.boxWidth / 2;
                    }

                    return x + param.offsetX
                })
                .attr('y2', function (d) {

                    var y = d.x;

                    if (param.vertical) {
                        y = d.y - param.boxHeight / 2;
                    }

                    return y + param.offsetY
                });
            console.log('update append link')

            var node = svg.append('g')
                .attr('class', 'nodes translate')
                .selectAll('g')
                .data(source.descendants())
                .enter()
                .append('g');

            node.append('title')
                .text(function (d) {
                    return d.data.data.name
                });

            node.append('rect')
                .attr('rx', 5)
                .attr('ry', 5)
                .attr('class', 'box')
                .attr('width', param.boxWidth)
                .attr('height', param.boxHeight)
                .attr("transform", function (d) {
                    var x = d.y, y = d.x;

                    if (param.vertical) {
                        x = d.x;
                        y = d.y;
                    }

                    return "translate(" + (x + param.offsetX) + "," + (y + param.offsetY - param.boxHeight / 2) + ")";
                })
                .on('click', function (d) {
                    if (param.selectable) {
                        if (d3.select(this).classed('selected')) {
                            node.classed("selected", function (p) {
                                return p.selected = false;
                            })
                        } else {
                            node.classed("selected", function (p) {
                                return p.selected = false;
                            });
                            d3.select(this).classed('selected', true);
                        }
                    }
                });
            console.log('update append node')

            if (param.toggleable) {
                var trigger = svg.append('g')
                    .attr('class', 'triggerButtons translate')
                    .selectAll('circle')
                    .data(source.descendants())
                    .enter()
                    .append('circle')
                    .attr('r', 7)
                    .attr('class', function (d) {
                        return 'trigger' + (d.children || d._children ? '' : ' hidden');
                    })
                    .attr('cx', function (d) {
                        var x = d.y + param.boxWidth;

                        if (param.vertical) {
                            x = d.x + param.boxWidth/ 2
                        }
                        return x + param.offsetX
                    })
                    .attr('cy', function (d) {
                        var y = d.x;

                        if (param.vertical) {
                            y = d.y + param.boxHeight/ 2;
                        }

                        return y + param.offsetY
                    })
                    .on('click', toggleChildren);
            }

            var addButton = svg.append('g')
                .attr('class', 'addButtons translate')
                .selectAll('circle')
                .data(source.descendants())
                .enter()
                .append('circle')
                .attr('r', 7)
                .attr('class', 'button')
                .attr('cx', function (d) {
                    var x = d.y + param.boxWidth;

                    if (param.vertical) {
                        x = d.x ;
                    }
                    return x + param.offsetX
                })
                .attr('cy', function (d) {
                    var y = d.x;

                    if (param.vertical) {
                        y = d.y - param.boxHeight / 2 + 12
                    }

                    return y + param.offsetY;
                })
                .on('click', createNode);

            addButton.append('title').text('Create new node');

            var removeButton = svg.append('g')
                .attr('class', 'removeButtons translate')
                .selectAll('circle')
                .data(source.descendants())
                .enter()
                .append('circle')
                .attr('r', 7)
                .attr('class', function (d) {
                    return 'remove-button' + (!d.children && !d._children ? '' : ' hidden');
                })
                .attr('cx', function (d) {
                    var x = d.y;

                    if (param.vertical) {
                        x = d.x ;
                    }
                    return x + param.offsetX + param.boxWidth
                })
                .attr('cy', function (d) {
                    var y = d.x;

                    if (param.vertical) {
                        y = d.y - param.boxHeight / 2 + 12
                    }

                    return y + param.offsetY;
                })
                .on('click', removeNode);

            removeButton.append('title').text('Remove node');

            var text = svg.append('g')
                .attr('class', 'text-box translate')
                .selectAll('text')
                .data(source.descendants())
                .enter()
                .append('text')
                .attr('class', 'text')
                .text(function (d) {
                    var name = d.data.data.name;

                    if (name.length > 12) {
                        name = name.substring(0, 9);
                        name += '...';
                    }

                    return name;
                })
                .attr('text-anchor', 'middle')
                .attr('x', function (d) {
                    var x = d.y;

                    if (param.vertical) {
                        x = d.x
                    }

                    return x + param.boxWidth / 2 + param.offsetX
                })
                .attr('y', function (d) {
                    var y = d.x;

                    if (param.vertical) {
                        y = d.y
                    }

                    return y + 5 + param.offsetY
                });


            if (param.vertical) {
                // svg.selectAll('body').style('transform','translate(' + param.width / 2 + 'px, 0)');
                svg.selectAll('.translate').attr('transform','translate(' + param.width / 2 + ', 0)');
            }


            function toggleChildren (d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    d.children = d._children;
                    d._children = null;
                }
                update(source);
            }

            function removeNode (d) {
                var newSource;

                if (confirm('Are you sure you want to remove this node?')) {
                    loading.classed('hidden', false);
                    if (window.Visualforce) {
                        Visualforce.remoting.Manager.invokeAction(
                            param.endPoints.delete,
                            {
                                recordId: d.data.data.recordId,
                                mcPublicationListId: d.data.data.mcPublicationListId
                            },
                            function (result, event) {
                                if (event.status) {
                                    remove()
                                } else {
                                    onError(result)
                                }
                            }
                        );
                    } else {
                        remove()
                    }
                }
                function remove () {
                    loading.classed('hidden', true);
                    param.data = param.data.filter(function (el) {
                        return el.recordId !== d.data.data.recordId
                    });

                    if (param.data.length) {
                        newSource = parseData(param.data);

                        update(d3.hierarchy(newSource, children));
                    } else {
                        addCreateLink()
                    }
                }
            }
        }
    }

})(d3);
