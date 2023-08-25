document.addEventListener("DOMContentLoaded", function () {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // toaster1
  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast');

  if (toastTrigger) {
    const toastBootstrap = new bootstrap.Toast(toastLiveExample);
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show();
    });
  }
//toaster2
  const toastTrigger2 = document.getElementById('liveToastBtn2');
  const toastLiveExample2 = document.getElementById('liveToast2');

  if (toastTrigger2) {
    const toastBootstrap2 = new bootstrap.Toast(toastLiveExample2);
    toastTrigger2.addEventListener('click', () => {
      toastBootstrap2.show();
    });
  }
// toaser3 energy toast
const energyToastElement = document.getElementById('energyToast');
const energyToast = new bootstrap.Toast(energyToastElement);

if (toastTrigger) {
  const toastBootstrap3 = new bootstrap.Toast(toastLiveExample3);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
  // Initialize modal
  // const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  // const myInput = document.getElementById('myInput');

  // myModal.addEventListener('shown.bs.modal', () => {
  //   myInput.focus();
  // });

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
});

// circuit code
var circuit = document.getElementById("circuit");
circuit.addEventListener('change', function(){
  if(this.checked){
    alert("You have Saved Energy");
  } else {
    alert("Please Switch off to Save Energy");
  }
});