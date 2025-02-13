// Step 1: Create character variables
let characterName = "Steven Seagal"; // Definerer karakterens navn
let healthPoints = 100; // Setter helsepoeng
let staminaPoints = 100; // Setter utholdenhetspoeng
let level = 1; // Setter startnivået til 1
let hasAikidoTechniques = true; // Karakteren har Aikido-teknikker
let hasSuperAikidoTechniques = true; // Karakteren har Super-Aikido-teknikker
let badActionMovies = true; // Karakteren har laget dårlige actionfilmer
let straightToBoxOffice = true; // Karakteren sine filmer går rett til "box office" (dvs. dårlig kvalitet)
let running = false; // Karakteren kan løpe

// Step 2: Log initial stats
console.log("Initial character stats:"); // Skriver ut overskrift for startstatus
console.log("Name: " + characterName); // Skriver ut karakterens navn
console.log("Health: " + healthPoints); // Skriver ut helsepoeng
console.log("Level: " + level); // Skriver ut nivå
console.log("Has Aikido Techniques: " + hasAikidoTechniques); // Skriver ut om karakteren har Aikido-teknikker

// Step 3: Character levels up
level = 2; // Karakteren går opp til nivå 2
healthPoints = 90; // Reduserer helsepoeng ved nivåøkning
staminaPoints = 50; // Reduserer utholdenhetspoeng

// Step 4: Log updated stats
console.log("\Updated character stats:"); // Skriver ut oppdaterte status
console.log("Name: " + characterName); // Skriver ut karakterens navn
console.log("Health: " + healthPoints); // Skriver ut oppdaterte helsepoeng
console.log("Level: " + level); // Skriver ut oppdaterte nivå
console.log("Has Aikido Techniques: " + hasAikidoTechniques); // Skriver ut om karakteren fortsatt har Aikido-teknikker

level = 3; // Karakteren går opp til nivå 3
healthPoints = 50; // Reduserer helsepoeng ytterligere
staminaPoints = 25; // Reduserer utholdenhetspoeng ytterligere

console.log("Updated character stats:"); // Skriver ut de oppdaterte statsene for nivå 3
console.log("Name: " + characterName); // Skriver ut karakterens navn
console.log("Health: " + healthPoints); // Skriver ut helsepoeng for nivå 3
console.log("Level: " + level); // Skriver ut nivå
console.log("Has Super Aikido Techniques:" + hasSuperAikidoTechniques); // Skriver ut om karakteren har Super-Aikido-teknikker
console.log("Makes very bad action movies:" + badActionMovies); // Skriver ut om karakteren lager dårlige filmer

level = 4; // Karakteren går opp til nivå 4
healthPoints = 25; // Reduserer helsepoeng betydelig
staminaPoints = 0; // Setter utholdenhetspoeng til 0

console.log("Updated character stats:"); // Skriver ut de oppdaterte statsene for nivå 4
console.log("Name: " + characterName); // Skriver ut karakterens navn
console.log("Health: " + healthPoints); // Skriver ut helsepoeng
console.log("Level: " + level); // Skriver ut nivå
console.log("Has Super Aikido Techniques:" + hasSuperAikidoTechniques); // Skriver ut om karakteren fortsatt har Super-Aikido-teknikker
console.log("Makes very bad action movies:" + badActionMovies); // Skriver ut om karakteren lager dårlige filmer
console.log("His movies are now so bad, it goes straight to box office:" + straightToBoxOffice); // Skriver ut status om at filmene hans går rett til box office
console.log("Can't Run:" + running); // Skriver ut om karakteren kan løpe

// The Wizard's Apprentice Challenge (1)//

// Definerer variabler for trollmannen og hans egenskaper
let wizardName = "Magic Seagal"; // Navnet på trollmannen
let wizardAge = 100; // Alder på trollmannen
let isWizardPowerful = true; // Sjekker om trollmannen er kraftig
let apprenticeName = "You"; // Navnet på lærlingen
let numberOfSpells = 2; // Antall magiske spells lærlingen kan kaste
let canDoMagic = false; // Sjekker om lærlingen kan utføre magi
let challengeCompleted = true; // Magisk variabel for å sjekke om utfordringen er fullført

// Logg variablene og deres typer
console.log("The wizardName goes into the String Sack!"); // Logg at wizardName går i String Sack
console.log("The wizardName is of type: " + typeof wizardName); // Skriv ut typen til wizardName (string)

console.log("The wizardAge goes into the Number Chest!"); // Logg at wizardAge går i Number Chest
console.log("The wizardAge is of type: " + typeof wizardAge); // Skriv ut typen til wizardAge (number)

console.log("isWizardPowerful goes into the Boolean Box!"); // Logg at isWizardPowerful går i Boolean Box
console.log("The isWizardPowerful is of type: " + typeof isWizardPowerful); // Skriv ut typen til isWizardPowerful (boolean)

console.log("apprenticeName goes into the String Sack!"); // Logg at apprenticeName går i String Sack
console.log("The apprenticeName is of type: " + typeof apprenticeName); // Skriv ut typen til apprenticeName (string)

console.log("NumberOfSpells goes into the Number Chest!"); // Logg at numberOfSpells går i Number Chest
console.log("The numberOfSpells is of type: " + typeof numberOfSpells); // Skriv ut typen til numberOfSpells (number)

console.log("canDoMagic goes into the Boolean Box"); // Logg at canDoMagic går i Boolean Box
console.log("The canDoMagic is of type: " + typeof canDoMagic); // Skriv ut typen til canDoMagic (boolean)

// Logg status på om utfordringen er fullført eller ikke
console.log("Challenge completed: " + challengeCompleted); // Skriv ut om utfordringen er fullført eller ikke

// The Magical Door Challenge (2)//

// Heroens attributter
let magicPower = 7;  // Magisk kraft
let strength = 5;    // Styrke
let wisdom = 6;      // Visdom

// Låsene starter som lukket (false)
let lockMagicOpen = false;
let lockStrengthOpen = false;
let lockWisdomOpen = false;

// Vi antar at 'challengeCompleted' allerede er definert et annet sted i koden
// Hvis den ikke er definert et annet sted, kan vi sette den her: 
// let challengeCompleted = false;

// Sjekk om helten kan åpne Magic Lock
if (magicPower >= 5) {
    lockMagicOpen = true; // Helten har nok magisk kraft til å åpne låsen
    console.log("Magic Lock is open!");
} else if (magicPower === 4) {
    console.log("You're just 1 magic power away from opening the Magic Lock!"); // Hint hvis helten mangler 1 magisk kraft
} else {
    console.log("You don't have enough magic power to open the Magic Lock.");
}

// Sjekk om helten kan åpne Strength Lock
if (strength >= 4) {
    lockStrengthOpen = true; // Helten har nok styrke til å åpne låsen
    console.log("Strength Lock is open!");
} else if (strength === 3) {
    console.log("You're just 1 strength away from opening the Strength Lock!"); // Hint hvis helten mangler 1 styrke
} else {
    console.log("You don't have enough strength to open the Strength Lock.");
}

// Sjekk om helten kan åpne Wisdom Lock
if (wisdom >= 6) {
    lockWisdomOpen = true; // Helten har nok visdom til å åpne låsen
    console.log("Wisdom Lock is open!");
} else if (wisdom === 5) {
    console.log("You're just 1 wisdom away from opening the Wisdom Lock!"); // Hint hvis helten mangler 1 visdom
} else {
    console.log("You don't have enough wisdom to open the Wisdom Lock.");
}

// Sjekk om alle låsene er åpnet
if (lockMagicOpen && lockStrengthOpen && lockWisdomOpen) {
    challengeCompleted = true; // Hvis alle låsene er åpnet, er utfordringen fullført
    console.log("All locks are open! You enter the magical chamber.");
} else {
    console.log("You couldn't open all the locks. Keep trying!");
}

// Logg om utfordringen er fullført eller ikke
if (challengeCompleted) {
    console.log("Challenge complete! You have successfully entered the magical chamber.");
} else {
    console.log("Challenge not complete. You must open all the locks.");
}

// The Enchanted Training Grounds Challenge (3)//

// Variabler for prestasjon
let hitTargets = 8;     // Out of 10
let obstaclesCleared = 4; // Out of 5
let spellsCast = 2;     // Out of 3
let questionsAnswered = 7; // Out of 10

// Beregn prosent for hver kategori
let hitTargetsPercentage = (hitTargets / 10) * 100;
let obstaclesClearedPercentage = (obstaclesCleared / 5) * 100;
let spellsCastPercentage = (spellsCast / 3) * 100;
let questionsAnsweredPercentage = (questionsAnswered / 10) * 100;

// Beregn total score (gjennomsnitt av prosentene)
let totalScore = (hitTargetsPercentage + obstaclesClearedPercentage + spellsCastPercentage + questionsAnsweredPercentage) / 4;

// Vis resultatene
console.log("Performance:");
console.log("Targets Hit: " + hitTargets + "/10");
console.log("Obstacles Cleared: " + obstaclesCleared + "/5");
console.log("Spells Cast: " + spellsCast + "/3");
console.log("Questions Answered: " + questionsAnswered + "/10");

console.log("Total Score: " + totalScore.toFixed(2) + " out of 100"); // Rundt til 2 desimaler

// Tilbakemelding basert på score
if (totalScore >= 90) {
    console.log("Feedback: Outstanding performance!");
} else if (totalScore >= 70) {
    console.log("Feedback: Great job, you passed with flying colors!");
} else if (totalScore >= 50) {
    console.log("Feedback: Good effort, you passed the trials.");
} else {
    console.log("Feedback: More training required. Don't give up!");
}
// Logg om utfordringen er fullført eller ikke
if (challengeCompleted) {
    console.log("Challenge Completed! Well done, you have passed the trials and demonstrated great skills across all tasks.");
} else {
    console.log("Challenge Failed! More training required, but don't give up! Keep improving, and you'll succeed next time.");
}

// The Alchemist's Workshop Challenge (4)://

// Funksjon for å blande ingredienser
function mixIngredients(ingredient1, ingredient2) {
    console.log(`Mixing ${ingredient1} with ${ingredient2}...`);
    console.log("Ingredients mixed successfully!");
}

// Funksjon for å varme potion
function heatPotion(potionName, temperature) {
    console.log(`Heating ${potionName} to ${temperature} degrees...`);
    console.log("Potion heated successfully!");
}

// Bonusfunksjon for å brygge potion
function brewPotion(ingredient1, ingredient2, potionName, temperature) {
    mixIngredients(ingredient1, ingredient2); // Kall på mixIngredients
    heatPotion(potionName, temperature); // Kall på heatPotion
    // Etter at potionen er brygget, gi en beskjed om challenge status
    if (ingredient1 && ingredient2 && potionName && temperature) {
        console.log("Challenge Completed! Potion brewing was successful! You've mastered the art of alchemy.");
    } else {
        console.log("Challenge Failed! The potion brewing process was incomplete. Don't give up – practice makes perfect!");
    }
}

// Eksempel på bruk
brewPotion("Dragon Scale", "Phoenix Feather", "Flame Resistance Elixir", 150);

// #titanic    {
//     float:none;
// }