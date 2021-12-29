let imageDataURL;
function readURL(input) {
  let reader = new FileReader();
  reader.onload = function(e) {
    imageDataURL = e.target.result
    document.querySelector('#image1').src = e.target.result;
  }
  reader.readAsDataURL(input.files[0]);
}

function hideText() {
  document.querySelector('#image2').src = steg.encode(document.querySelector('#text').value, imageDataURL)
}
function decode(input) {
  let reader = new FileReader();
  reader.onload = function(e) {
    
    document.querySelector('#decoded').innerText =  steg.decode(e.target.result);

  }
  reader.readAsDataURL(input.files[0]);
}