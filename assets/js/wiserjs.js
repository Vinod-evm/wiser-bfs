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

// chart js



