$(function () {
  //$("#sortable").sortable();

  $("#sortable").sortable({
    axis: "y",
    sort: function () {
      var $li = $("li.ui-sortable-placeholder");
      $li.val($li.index());
    },
    stop: function () {
      let orderTxt = [];
      $("#sortable li").each(function (idx, el) {
        orderTxt.push(el.id.replace("idol-sort-", ""));
      });
      $(".submit-hidden").val(orderTxt.join(","));
    },
  });

  $("#gform").on("submit", function (e) {
    $("#gform *").fadeOut(2000);
    $("#gform").prepend("La sélection a été envoyée...");
  });
});

function checkform() {
  var cansubmit = true;
  if (document.getElementsByClassName("submit-pseudo")[0].value.length == 0)
    cansubmit = false;
  document.getElementById("btn-submit").disabled = !cansubmit;
}
window.onload = checkform;
