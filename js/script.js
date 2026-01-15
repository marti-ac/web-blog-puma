$(function () {

   
    $(".thumb").on("click", function () {
      const full = $(this).data("full");
      if (!full) return;
  
      $("#mainImage").attr("src", full);
  
      $(".thumb").removeClass("is-active");
      $(this).addClass("is-active");
    });
  
    // --- TALLAS ---
    let selectedSize = null;
  
    $(".size-btn").on("click", function () {
      selectedSize = $(this).data("size");
  
      $(".size-btn").removeClass("is-selected");
      $(this).addClass("is-selected");
  
      $("#selectedSize").text(selectedSize);
  
      $("#addToCart").prop("disabled", false);
      $("#buyNow").prop("disabled", false);
    });

    $("#addToCart").on("click", function () {
      if (!selectedSize) return;
      alert("Añadido al carrito — Talla " + selectedSize);
    });
  
    $("#buyNow").on("click", function () {
      if (!selectedSize) return;
      alert("Comprar ahora — Talla " + selectedSize);
    });
  
  });
  