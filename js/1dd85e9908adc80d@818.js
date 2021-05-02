import define1 from "/e93997d5089d7165@2303.js";

export default function define(runtime, observer) {
    const main = runtime.module();
    //main.variable(observer()).define(["md"], function(md) { return (md `# Historical Map V1.04`) });
    main.variable(observer("viewof sorting")).define("viewof sorting", ["select"], function(select) {
        return (select({ title: 'Sorted by', options: ["region", "time", "kings", "prophets"], value: "time" }))
    });
    main.variable(observer("sorting")).define("sorting", ["Generators", "viewof sorting"], (G, _) => G.input(_));
    main.variable(observer("chart")).define("chart", ["sorting", "dataByRegion", "data", "d3", "color", "DOM", "width", "height", "margin", "createTooltip", "y", "getRect", "getTooltipContent", "axisTop", "axisBottom"], function(sorting, dataByRegion, data, d3, color, DOM, width, height, margin, createTooltip, y, getRect, getTooltipContent, axisTop, axisBottom) {

        let filteredData;
        if (sorting !== "time") {
            filteredData = [].concat.apply([], dataByRegion.map(d => d.values));
        } else {
            filteredData = data.sort((a, b) => a.start - b.start);
        }

        filteredData.forEach(d => d.color = d3.color(color(d.region)))


        let parent = this;
        if (!parent) {
            parent = document.createElement("div");
            const svg = d3.select(DOM.svg(width, height));
            const g = svg.append("g").attr("transform", (d, i) => `translate(${margin.left} ${margin.top})`);
            const groups = g
                .selectAll("g")
                .data(filteredData)
                .enter()
                .append("g")
                .attr("class", "civ")
            const tooltip = d3.select(document.createElement("div")).call(createTooltip);
            const line = svg.append("line").attr("y1", margin.top - 10).attr("y2", height - margin.bottom).attr("stroke", "rgba(0,0,0,0.2)").style("pointer-events", "none");
            groups.attr("transform", (d, i) => `translate(0 ${y(i)})`)
            groups
                .each(getRect)
                .on("mouseover", function(d) {
                    d3.select(this).select("rect").attr("fill", d.color.darker())
                    tooltip
                        .style("opacity", 1)
                        .html(getTooltipContent(d))
                })
                .on("mouseleave", function(d) {
                    d3.select(this).select("rect").attr("fill", d.color)
                    tooltip.style("opacity", 0)
                })
            svg
                .append("g")
                .attr("transform", (d, i) => `translate(${margin.left} ${margin.top-10})`)
                .call(axisTop)
            svg
                .append("g")
                .attr("transform", (d, i) => `translate(${margin.left} ${height-margin.bottom})`)
                .call(axisBottom)
            svg.on("mousemove", function(d) {

                let [x, y] = d3.mouse(this);
                line.attr("transform", `translate(${x} 0)`);
                y += 20;
                if (x > width / 2) x -= 100;

                tooltip
                    .style("left", x + "px")
                    .style("top", y + "px")
            })

            parent.appendChild(svg.node());
            parent.appendChild(tooltip.node());
            parent.groups = groups;

        } else {

            const civs = d3.selectAll(".civ")
            civs.data(filteredData, d => d.civilization)
                .transition()
                .delay((d, i) => i * 10)
                .ease(d3.easeCubic)
                .attr("transform", (d, i) => `translate(0 ${y(i)})`)
        }
        return parent
    });
    main.define("getTooltipContent", ["formatDate"], function(formatDate) {
        return (function(d) {
            return `<b>${d.civilization}</b>
    <br/>
    <b style="color:${d.color.darker()}">${d.region}</b>
    <br/>
    ${formatDate(d.start)} - ${formatDate(d.end)}`
        })
    });
    main.define("height", function() {
        return (1000)
    });
    main.define("y", ["d3", "data", "height", "margin"], function(d3, data, height, margin) {
        return (
            d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, height - margin.bottom - margin.top])
            .padding(0.2)
        )
    });
    main.define("x", ["d3", "data", "width", "margin"], function(d3, data, width, margin) {
        return (
            d3.scaleLinear()
            .domain([d3.min(data, d => d.start), d3.max(data, d => d.end)])
            .range([0, width - margin.left - margin.right])
        )
    });
    main.define("margin", function() {
        return ({ top: 30, right: 30, bottom: 30, left: 30 })
    });
    main.define("createTooltip", function() {
        return (
            function(el) {
                el
                    .style("position", "absolute")
                    .style("pointer-events", "none")
                    .style("top", 0)
                    .style("opacity", 0)
                    .style("background", "white")
                    .style("border-radius", "5px")
                    .style("box-shadow", "0 0 10px rgba(0,0,0,.25)")
                    .style("padding", "10px")
                    .style("line-height", "1.3")
                    .style("font", "11px sans-serif")
            }
        )
    });
    main.define("getRect", ["d3", "x", "width", "y"], function(d3, x, width, y) {
        return (
            function(d) {
                const el = d3.select(this);
                const sx = x(d.start);
                const w = x(d.end) - x(d.start);
                const isLabelRight = (sx > width / 2 ? sx + w < width : sx - w > 0);

                el.style("cursor", "pointer")

                el
                    .append("rect")
                    .attr("x", sx)
                    .attr("height", y.bandwidth())
                    .attr("width", w)
                    .attr("fill", d.color);

                el
                    .append("text")
                    .text(d.civilization)
                    .attr("x", isLabelRight ? sx - 5 : sx + w + 5)
                    .attr("y", 2.5)
                    .attr("fill", "black")
                    .style("text-anchor", isLabelRight ? "end" : "start")
                    .style("dominant-baseline", "hanging");
            }
        )
    });
    main.define("dataByTimeline", ["d3", "data"], function(d3, data) {
        return (
            d3.nest().key(d => d.timeline).entries(data)
        )
    });
    main.define("dataByRegion", ["d3", "data"], function(d3, data) {
        return (
            d3.nest().key(d => d.region).entries(data)
        )
    });
    main.define("axisBottom", ["d3", "x", "formatDate"], function(d3, x, formatDate) {
        return (
            d3.axisBottom(x)
            .tickPadding(2)
            .tickFormat(formatDate)
        )
    });
    main.define("axisTop", ["d3", "x", "formatDate"], function(d3, x, formatDate) {
        return (
            d3.axisTop(x)
            .tickPadding(2)
            .tickFormat(formatDate)
        )
    });
    main.define("formatDate", function() {
        return (
            d => d < 0 ? `${-d}BC` : `${d}AD`
        )
    });
    main.define("d3", ["require"], function(require) {
        return (
            require("d3@5")
        )
    });
    main.define("csv", ["d3"], function(d3) {
        return (
            d3.csv("./data/time.csv")
            //d3.csv(read.csv("./data/time.csv"))
        )
    });
    main.define("data", ["csv"], function(csv) {
        return (
            csv.map(d => {
                return {
                    ...d,
                    start: +d.start,
                    end: +d.end
                }
            }).sort((a, b) => a.start - b.start)
        )
    });
    main.define("regions", ["d3", "data"], function(d3, data) {
        return (d3.nest().key(d => d.region).entries(data).map(d => d.key))
    });
    main.define("timelines", ["dataByTimeline"], function(dataByTimeline) {
        return (dataByTimeline.map(d => d.key))
    });
    main.define("color", ["d3", "regions"], function(d3, regions) {
        return (d3.scaleOrdinal(d3.schemeSet2).domain(regions))
    });
    const child1 = runtime.module(define1);
    main.import("checkbox", child1);
    main.import("select", child1);
    main.define(["html"], function(html) {
        return (html `CSS<style> svg{font: 11px sans-serif;}</style>`)
    });
    return main;
}