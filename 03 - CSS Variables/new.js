const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // get the data size for the element or give it nothing if it doesn't exist
  const suffix = this.dataset.sizing || '';
  // update the variable by grab entire document (root) and setting either base, spacing, blur
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

// adds mousemove event listerner for when you're moving the slider
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// add change event listener for when you let go of the slider/select a point on the slider
inputs.forEach(input => input.addEventListener('change', handleUpdate));
