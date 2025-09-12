document.querySelectorAll(".more-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    const extra = this.closest(".pillars").querySelector(".pillar-extra");
    extra.style.display = extra.style.display === "flex" ? "none" : "flex";
  });
});