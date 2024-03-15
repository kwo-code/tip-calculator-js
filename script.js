document.getElementById("button-accept").addEventListener("click", function() {
    var account = parseFloat(document.getElementById("account").value);
    var select_value = parseFloat(document.getElementById("select-input").value);

    var from_one = Math.round((account * select_value) / 100);

    var from_every = from_one * parseInt(document.getElementById("peoples").value);

    document.getElementById("from-one").textContent = "Чаевые: " + from_one + "₽";
    document.getElementById("from-every").textContent = "Всего: " + from_every + "₽";
});

document.getElementById("button-reload").addEventListener("click", function() {
    document.getElementById("from-one").textContent = "Чаевые: 150₽";
    document.getElementById("from-every").textContent = "Всего: 600₽";
    document.getElementById("account").value = "1000";
    document.getElementById("select-input").value = "15";
    document.getElementById("peoples").value = "4";
});
