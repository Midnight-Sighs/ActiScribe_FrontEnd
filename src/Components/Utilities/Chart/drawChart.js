import * as d3 from "d3";

const drawChart = (element, data)=>{
    const colors = ["#05BBD2", "#2070C4", "#EB80F1", "#F5C842", "#37D400"]
    const boxSize = 500;

    d3.select(element).select("svg").remove();
    const svg = d3
        .select(element)
        .append("svg")
        .attr("preserveAspectRation", "xMidYMid meet")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
        .append("g")
        .attr("transform", `translate(${boxSize/2}, ${boxSize /2})`)

    const arcGenerator = d3.arc().cornerRadius(5).padAngle(0.01).innerRadius(100).outerRadius(250);

    const pieGenerator = d3.pie().value((d)=>d.value);

    const arcs = svg.selectAll().data(pieGenerator(data)).enter();
    arcs
        .append("path")
        .attr("d", arcGenerator)
        .style("fill", (d, i)=>colors[i % data.length])
        .transition()
        .duration(600)
        .attrTween("d", function (d){
            const i = d3.interpolate(d.startAngle, d.endAngle);
            return function(t){
                d.endAngle =i(t);
                return arcGenerator(d);
            };
        });

    arcs
        .append("text")
        .attr("text-anchor", "middle")
        .text((d)=>`${d.data.value}%`)
        .style("fill", "#fff")
        .style("font-size", "1rem")
        .attr("transform", (d)=>{
            const[x,y] = arcGenerator.centroid(d);
            return `translate(${x}, ${y})`;
        });
};

export default drawChart