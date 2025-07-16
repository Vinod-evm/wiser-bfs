let completed = 0;
function toggleStep(stepId) {
  document.querySelectorAll('.ws_step').forEach(step => {
    step.classList.remove('active');
  });
  document.getElementById(stepId).classList.add('active');
}

function markStepComplete(step) {
  const circle = document.getElementById('circle' + step);
  if (!circle.classList.contains('checked')) {
    completed++;
    updateProgressBar();
    circle.classList.add('checked');
  }

  // Open next step if exists
  const nextStep = document.getElementById('step' + (step + 1));
  if (nextStep) {
    toggleStep('step' + (step + 1));
  }
}

function updateProgressBar() {
  const percentage = (completed / 3) * 100;
  document.getElementById('progressBar').style.width = percentage + '%';
  document.getElementById('completedText').innerText = `${completed}/3 Completed`;
}
// toggle js
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.ws_setup_togle');
  const stepsContainer = document.getElementById('ws_setupSteps');

  if (toggleBtn && stepsContainer) {
    toggleBtn.addEventListener('click', function () {
      stepsContainer.classList.toggle('step_hidden');
      toggleBtn.classList.toggle('active'); // 🔁 Apply active class to rotate
    });
  }
});


// toggle js start
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ws-switch-input').forEach(input => {
    input.addEventListener('change', function () {
      const settingKey = this.dataset.setting;
      console.log(`Toggle "${settingKey}" is now`, this.checked);
      // You can save to server/localStorage/etc. here
    });
  });
});


// hide show content on toggle
function setupToggleSwitch(inputEl) {
  const targetSelector = inputEl.getAttribute('data-target');
  const targetEl = document.querySelector(targetSelector);
  if (!targetEl) return;

  function updateVisibility() {
    targetEl.classList.toggle('show', inputEl.checked);
  }

  inputEl.addEventListener('change', updateVisibility);
  updateVisibility(); // Initial state
}
document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.ws-switch-input[data-target]');
  toggles.forEach(setupToggleSwitch);
});

// radio button checked to show hide fieled
document.addEventListener('DOMContentLoaded', function () {
  const radios = document.querySelectorAll('input[name="discountType"]');
  const percentageBlocks = document.querySelectorAll('.ws_percent_discount');
  const fixedBlocks = document.querySelectorAll('.ws_fixed_discount');

  function toggleDiscountBlock(value) {
    if (value === 'percentage') {
      percentageBlocks.forEach(el => el.classList.add('show'));
      fixedBlocks.forEach(el => el.classList.remove('show'));
    } else {
      fixedBlocks.forEach(el => el.classList.add('show'));
      percentageBlocks.forEach(el => el.classList.remove('show'));
    }
  }

  // Initial toggle based on default selected radio
  const checkedRadio = document.querySelector('input[name="discountType"]:checked');
  if (checkedRadio) {
    toggleDiscountBlock(checkedRadio.value);
  }

  // Toggle on change
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      toggleDiscountBlock(radio.value);
    });
  });
});








