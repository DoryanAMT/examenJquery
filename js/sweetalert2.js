Swal.fire({
    title: "Quieres eliminar el Hospital?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Confimar",
    denyButtonText: `Cancelar`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Eliminado!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Cancelar eliminar", "", "info");
    }
  });