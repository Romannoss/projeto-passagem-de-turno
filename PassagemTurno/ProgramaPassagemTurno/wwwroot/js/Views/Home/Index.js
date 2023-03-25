$View = function () {
    var self = this;
}

$View.prototype = {
    init: function () {
        var self = this;
        $("#btn-doesnt-click").on("click", function () {
            self.makeWorkflowMessage();
        });
    },
    makeWorkflowMessage: function () {
        alert("clicou viado");
    }
}