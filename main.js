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
