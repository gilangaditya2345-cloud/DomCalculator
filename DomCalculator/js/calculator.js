function init() {
    comp("uin");
}

function comp(id) {
    var el = document.getElementById(id);
    var res = eval(el.value);
    document.getElementById("ans").innerHTML = res;
}
