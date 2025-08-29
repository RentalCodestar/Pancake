const dialogueLines = [
    "Greetings, traveler, I am Edward, son of Eldor, a humble Dwarf of the Mires!",
    "What is thy name, brave adventurer?",
    "Ah, {name}! A noble name indeed!",
    "You are about to embark on an epic journey, my friend!",
    "Ready to begin your adventure?",
    "Click on 'Travel' to start your journey!"
  ];
  
  let index = 0;
  let playerName = "";
  
  const dialogue = document.getElementById("dialogue");
  const nextBtn = document.getElementById("nextBtn");
  const nameInput = document.getElementById("nameInput");
  const travelBtn = document.getElementById("travelBtn");
  
  nextBtn.addEventListener("click", () => {
    if (index === 1) {
      // Ask for name with fantasy dialogue
      dialogue.textContent = dialogueLines[index];
      nameInput.style.display = "block";
      nextBtn.textContent = "Save";
      index++;
    } else if (nextBtn.textContent === "Save") {
      const inputName = nameInput.value.trim();
      if (inputName) {
        playerName = inputName;
        const personalized = dialogueLines[2].replace("{name}", playerName);
        dialogue.textContent = personalized;
        nameInput.style.display = "none";
        nextBtn.textContent = "Next";
        index++; // move to next message
      } else {
        dialogue.textContent = "Please enter your name, noble traveler!";
      }
    } else if (index === 3) {
      // Confirm the journey with more fantasy dialogue
      dialogue.textContent = dialogueLines[3];
      nextBtn.style.display = "inline-block";
      index++;
    } else if (index === 4) {
      // Ask if the user is ready to travel
      dialogue.textContent = dialogueLines[4];
      nextBtn.textContent = "Yes, I am ready!";
      index++;
    } else if (index === 5) {
      // Show final message before traveling
      dialogue.textContent = dialogueLines[5];
      nextBtn.style.display = "none";
      travelBtn.style.display = "inline-block";
      index++;
    } else {
      dialogue.textContent = dialogueLines[index];
      index++;
    }
  });
  
  // Go to map page on click
  travelBtn.addEventListener("click", () => {
    window.location.href = "map.html"; // Redirect to the map page (map.html)
  });
  