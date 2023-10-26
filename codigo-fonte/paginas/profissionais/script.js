
/**
 * Handle toast message on page.
 */
function handleToast() {
  const toastsTriggers = Array.from(document.querySelectorAll('#toast-btn'));
  console.log(toastsTriggers);
  const toast = document.getElementById('toast');

  if (toastsTriggers.length) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
    toastsTriggers.forEach((toastTrigger) => {
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    })
  }
}

handleToast()
