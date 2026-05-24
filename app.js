const dataManagerInstance = {
    version: "1.0.142",
    registry: [296, 524, 1100, 1069, 399, 1646, 1772, 522],
    init: function() {
        const nodes = this.registry.filter(x => x > 333);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataManagerInstance.init();
});