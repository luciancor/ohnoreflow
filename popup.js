addEventListener("load", function() {
  document.getElementById("target").addEventListener("click", function() {
    browser.tabs.create({
      url: "/report.html",
    });
  })
});
