var money_range = [1, 3]; // 设置价格区间（比如这里是1元到3元，直接修改数字就行）
var region_range = ["佛山区"]; // 设置过滤地区（如果不设置则不限地区）

//【下面的不要动】
var congrats = false;
var node_list = document.querySelector(".list-filter .filter-item .el-radio-group").children;
var start = function start(i) {
  if (congrats) return;
  if (region_range.indexOf(node_list[i].textContent.trim()) !== -1) {
    start(++i);
    return;
  }
  var node = node_list[i];
  node.click();
  var timer = setTimeout(function () {
    var _document$querySelect;
    var num = ((_document$querySelect = document.querySelector(".pay-wrap .pay-right .price .sum").children[1].getElementsByClassName("num")[0]) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.textContent) || -1;
    if (Number(num) >= money_range[0] && Number(num) <= money_range[1]) {
      document.querySelector(".operation .el-button--primary").click();
      congrats = true;
      console.log("恭喜！抢到了");
      return;
    }
    console.log(node.textContent + "暂时没有，下一个");
    if (i >= node_list.length - 1) {
      start(0);
    } else {
      start(++i);
    }
    clearTimeout(timer)
  }, 1000);
};
start(0);
