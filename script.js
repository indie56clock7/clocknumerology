let database = {}; // Keeps track of values and matching words
let currentCipher = 'cipher1';

// === DISPLAY NAMES FOR TITLES ===
const cipherDisplayNames = {
  cipher1: 'The "Clock Numerology" Cipher',
  cipher2: '2clock2',
  cipher3: '25th-Hour',
  cipher4: 'Fractured-Time',
  cipher5: '2FracTime2',
  cipher6: 'Tripartite-CN',
  cipher7: 'Last-Hour'
};

// === PDF FILE PATHS ===
const cipherPDFs = {
  cipher1: 'documents/clock-numerology-cipher-thesis.pdf',
  cipher2: 'documents/2clock2-cipher-thesis.pdf',
  cipher3: 'documents/25th-hour-cipher-thesis.pdf',
  cipher4: 'documents/fractured-time-cipher-thesis.pdf',
  cipher5: 'documents/2fractime2-cipher-thesis.pdf',
  cipher6: 'documents/tripartite-cn-cipher-thesis.pdf',
  cipher7: 'documents/last-hour-cipher-thesis.pdf',
  cipher8: 'documents/cipher8-cipher-thesis.pdf'
};

// === LOAD CIPHER ON TAB CLICK ===
function loadCipher(cipherName, btnElement) {
  currentCipher = cipherName;

  const displayName = cipherDisplayNames[cipherName] || cipherName;
  document.getElementById("cipher-title").textContent = `${displayName} Calculator`;

  // ✅ Update the PDF link
  const pdfLink = document.getElementById("pdfLink");
  pdfLink.href = cipherPDFs[cipherName] || '#';

  // Reset result and database view
  document.getElementById("resultDisplay").textContent = '';
  document.getElementById("valueBox").innerHTML = '';

  // Reset input
  document.getElementById("inputText").value = '';

  // Update active tab style
  const allButtons = document.querySelectorAll('.nav-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');
}

// === CIPHER MAPS ===
const cipherMaps = {
  cipher1: {
    A: 2, B: 3, C: 12, D: 11, E: 15,
    F: 17, G: 18, H: 13, I: 10, J: 7,
    K: 7, L: 10, M: 13, N: 13, O: 10,
    P: 7, Q: 7, R: 10, S: 13, T: 18,
    U: 17, V: 15, W: 11, X: 12, Y: 3, Z: 2
  },
  cipher2: {  
      A: 1, B: 13, C: 5, D: 1, E: 15, F: 2, G: 25, H: 3, I: 35,
      J: 4, K: 45, L: 5, M: 55, N: 55, O: 5, P: 45, Q: 4, R: 35,
      S: 3, T: 25, U: 2, V: 15, W: 1, X: 5, Y: 13, Z: 1
  },
  cipher3: {
      A: 1, B: 13, C: 4, D: 10, E: 7, F: 13, G: 1, H: 7, I: 13,
      J: 10, K: 16, L: 4, M: 10, N: 10, O: 4, P: 16, Q: 10, R: 13,
      S: 7, T: 1, U: 13, V: 7, W: 10, X: 4, Y: 13, Z: 1
  },
  cipher4: {
      A: 1, B: 13, C: 14, D: 25, E: 3, F: 4, G: 45, H: 5, I: 7,
      J: 4, K: 3, L: 25, M: 22, N: 22, O: 25, P: 3, Q: 4, R: 7,
      S: 5, T: 45, U: 4, V: 3, W: 25, X: 14, Y: 13, Z: 1
  },
  
  cipher5: {
     A: 1, B: 13, C: 14, D: 27, E: 8, F: 20, G: 12, H: 6, I: 12,
      J: 8, K: 8, L: 28, M: 20, N: 20, O: 28, P: 8, Q: 8, R: 12,
      S: 6, T: 12, U: 20, V: 8, W: 27, X: 14, Y: 13, Z: 1
  },
  
  cipher6: {
    A: 4, B: 29, C: 21, D: 22, E: 37, F: 32, G: 44, H: 23, I: 58,
    J: 21, K: 68, L: 19, M: 78, N: 78, O: 19, P: 68, Q: 21, R: 58,
    S: 23, T: 44, U: 32, V: 37, W: 22, X: 21, Y: 29, Z: 4
  },
  
  cipher7: {
      A: 1, B: 13, C: 10, D: 2, E: 10, F: 4, G: 20, H: 6, I: 30,
      J: 8, K: 40, L: 10, M: 50, N: 50, O: 10, P: 40, Q: 8, R: 30,
      S: 6, T: 20, U: 4, V: 10, W: 2, X: 10, Y: 13, Z: 1
  }
  // Add cipher4–8 as needed
};

// === STATIC, READ-ONLY DATABASE ===
const staticDatabase = {
  cipher1: {
	  2: [
    "(1st Prime #) A; Z",
  ],

  3: [
    "(2nd Prime #) B; Y",
  ],

  5: [
    "(3rd Prime #)",
  ],

  7: [
    "(4th Prime #)J; K; P; Q",
  ],

  10: [
    "(Sum of First 3 Primes) O; I; L; R [IVRIT] Abba",
  ],

  11: [
    "(5th Prime #) D; W",
  ],

  12: [
	"C; X",
  ],	

  13: [
    "(6th Prime #) M; S; H; N",
  ], 
  
  15: [
	"V; E",
  ],

  17: [
    "(7th Prime # & Sum of First 4 Primes) F; U [IVRIT] Av",
  ],

  18: [
    "G; T",
  ],

  19: [
    "(8th Prime #)",
  ],

  20: [
    "",
  ],

  21: [
    "",
  ],
  
  22: [
    "(22nd Prime # is 79) Ox",
  ],

  23: [
    "(9th Prime #) War",
  ],

  24: [
    "(24th Prime # is 89)",
  ],
  
  25: [
    "(25th Prime # is 97) I AM; [Hebrew] El; ANI",
  ],

  26: [
    "(26th Prime # is 101)",
  ],

  27: [
    "(27th Prime # is 103)",
  ],
  
  28: [
    "(Sum of First 5 Primes) Adam; Man; Lamb; Mary",
  ],

  29: [
    "(10th Prime #)",
  ],

  30: [
    "(30th Prime # is 113) Bear",
  ],

  31: [
    "(11th Prime #)",
  ],

  32: [
    "(32nd Prime # is 131)",
  ],

  33: [
    "(33rd Prime # is 137) Yasha; Jew; IRS; Gray; Ruby [IVRIT] Yasha",
  ],

  34: [
    "(34th Prime # is 139) Bird; Black",
  ],

  35: [
    "(35th Prime # is 149) Six",
  ],

  36: [
    "(36th Prime # is 151) Holy; Son; Red",
  ],

  37: [
    "(12th Prime #); Aaron; Zero",
  ],

  38: [
    "(38th Prime # is 163) Amos; One",
  ],
  
  39: [
    "(39th Prime # is 167 / Fourth Centered Triangular #) God; Dead; Fox; XY+XX; Two",
  ],

  40: [
    "(40th Prime # is 173 / Sum of Four Consecutive Primes / Fourth Tetralhedral Number) YHWH [IVRIT] YHWH",
  ],

  41: [
    "(13th Prime # & Sum of First 6 Primes); Lord; a god; Bread; Men [IVRIT] Beni",
  ],

  42: [
    "(42nd Prime # is 181) Word",
  ],

  43: [
    "(14th Prime #) INRI; City; Name; a lord; Ship; Lion",
  ],

  44: [
    "(44th Prime # is 193) YHVH; Babylon; Fear; [IVRIT] YHVH; Kallah",
  ],

  45: [
    "(45th Prime # is 197) Eve; Pains; Jonah; Blue",
  ],

  46: [
    "(46th Prime # is 199) Jews; Rabbit [IVRIT] HaBen",
  ],

  47: [
    "(15th Prime #) Brown",
  ],

  48: [
    "(48th Prime # is 223) King; Hell; Satan; Goat",
  ],

  49: [
    "(49th Prime # is 227) Woman; Bride; Gold",
  ],

  50: [
    "(50th Prime # is 229) Yashua; Isaiah; Judah; Love; Evil; Snake; A King [IVRIT] Yashua",
  ],

  51: [
    "(51st Prime # is 233) Peace; Nine",
  ],

  52: [
    "(52nd Prime # is 239) gods; Ocean",
  ],

  53: [
    "(16th Prime #) Hosea; Torah; Power; Fish; Wife",
  ],

  54: [
    "(54th Prime # is 251) Four",
  ],

  56: [
    "(56th Prime # is 263 / Sixth Tetrahredral # / Appears in Tetranacci Sequence / Semi-Perfect / Special Euler's Totient) a sabbath; Rest; Names; Time; Water [IVRIT] Kadosh; HMSPR",
  ],

  57: [
    "(57th Prime # is 269 / Leyland #) Yahweh; Elijah; Deity; My Lord; Five [IVRIT] Yahweh; Ani HaAv; Elijah",
  ],

  58: [
    "(Sum of First 7 Primes) Angel; Jewel; Human; Heart; Earth; Weapon; Forty",
  ],

  59: [
    "(17th Prime #) My Name; Yellow [IVRIT] Ehyeh",
  ],

  60: [
    "(60th Prime # is 281) Seraph; Israel; was 'jacob'; Savior; Fools; Abrahadabra",
  ],

  61: [
    "(18th Prime #) Daniel; Devil; A Whore",
  ],

  62: [
    "(62nd Prime # is 293) Malachi; Women; I AM CAIN; has a mark; Rachel",
  ],

  63: [
    "(63rd Prime # is 307 / Sixth Centered Octagonal #) Yeshua; Yahshua; Elisha; Great; Sheep; Warrior; Taberah; Fired [IVRIT] Yeshua; Yahshua; Ze HaBen; Elisha",
  ],

  64: [
    "(64th Prime # is 311) Moses",
  ],

  65: [
    "(65th Prime # is 313 / Octagonal # / Cullen # / Hypotenuse of Pythagorean Triangles / Padovan Sequence / Stirling # of 2nd Kind / Magic Constant) Jesus; Rules; a warrior; Our Rabbi; Worthy; Scroll; an alien; Joseph; a prison [IVRIT] ANI YHWH",
  ],

  66: [
    "(66th Prime # is 317) a witch; Wicked; Unholy; a people; Purple",
  ],

  67: [
    "(19th Prime #) Queen; Jezebel; White",
  ],

  68: [
    "(68th Prime # is 337) Spirit; Crystal; Leprosy; Samech; is a manna; of bread; Orange",
  ],

  69: [
    "(69th Prime # is 347) Jewish; The Law; Wealth; Light; a queen [IVRIT] HaShem",
  ],

  70: [
    "(70th Prime # is 349) Samuel; Helper; I AM EVE; I AM ABRAHAM; Famine; Diamond; Cherub",
  ],

  71: [
    "(20th Prime #) Elohim; Number; Green; Tiger; Three; Seven [IVRIT] Elohim",
  ],

  72: [
    "(72nd Prime # is 359) Ghost; Husband; Thirty",
  ],

  73: [
    "(21st Prime # / Sheldon Prime # / Emirp / Fourth Star Number); Yahoshua; Heaven; Priest; Silver; One, Six [IVRIT] Yahoshua",
  ],

  74: [
    "Ezekiel; The Man; The Lamb; a nazarene; Eight; a husband; 'Desire'; Mansion",
  ],

  75: [
    "(Pentagonal Pyramid # / Nonagonal # / Fourth Ordered Bell # / Lucky #) Father; I AM LOVE; Jehovah; Holy God; Issachar; MY DONKEY [IVRIT] Jehovah",
  ],

  76: [
    "Christ; Truth; Slain Lamb; I AM PEACE; I AM GLORY; Our God; Our Rock; Gravity; Emerald; Two, Zero; Achan who?; a sinner [IVRIT] HaMoshia",
  ],

  77: [
    "(Sum of First 8 Primes) Creator; Church; a father; A Holy God; Holy Bible; Sapphire; One, Two",
  ],

  78: [
    "God x 2; Temple [IVRIT] Mashiach",
  ],

  79: [
    "(22nd Prime # / Emirp / Circular Prime / Lucky Prime / Leyland Prime) Holy Name; Zechariah; Messiah; Blasphemy; Rapture; Mother; Disease [IVRIT] Ma Shemi?; Arba'ah v'Arba'ah"
  ],

  80: [
    "Prophet; Galilean; Nazirite; a temple; Marriage"
  ],

  81: [
    "at kadesh; I AM WATER"
  ],

  82: [
    "a prophet"
  ],

  83: [
    "(23rd Prime #) Country; Secret"
  ],

  84: [
    "Esther; A Woman Jew; illness"
  ],

  85: [
    "Jeremiah; Passover",
  ],

  86: [
    "(Padovan Sequence / Conjectured / Multiplicative Persistant) Yehoshua; Name x 2; Servant; I AM RISEN!; TRULY I SAY [IVRIT] Yehoshua; Moshiach; Ani Moshia"
  ],

  87: [
    "The Lord; Paschal Lamb; Gad's Name; like a lion"
  ],

  88: [
    "God's Son; The Word; I AM GOD'S BABY; I'M JESUS; The Word; Isaac's Son; a hunter [IVRIT] Ani Yeshua"
  ],

  89: [
    "(24th Prime #) The Name; Apparition; Holiest"
  ],

  90: [
    "(Twentieth Abundant # / Aliquot Sum / Euler Totient) Most Holy; He is God; Majestic; Lord of All; I AM JESUS; Divinity; I AM A WARRIOR; Companion; Two, Nine"
  ],

  91: [
    "Lucifer; Serpent; Crushed; Nephilim; Man of Sin; Selfish; not love; Unstable; Ba'al Worship; I AM WICKED; Who is Jacob?; in safety"
  ],

  92: [
    "Anointed; Justice; Six, Five; One, Four"
  ],

  93: [
    "Who is Holy?; Salvation; Believer; Elephant"
  ],

  94: [
    "The King; I AM JEWISH; Man of God; Lamb of God; A Lowly King; was mocked; Stigmata; Blameless; Perfect; God's Word; Precious; Adam's Wife; Woman Eve"
  ],

  95: [
    "My Holy Name; Forgive; God's Name; Who's King?; One, Five"
  ],

  96: [
    "(Euler's Totient) Who is God?; Lord of Man; A Man of God; Two, Five; Obeyed God; He is Abraham [IVRIT] Ani Elohim"
  ],

  97: [
    "(25th Prime #) Our Savior [IVRIT] Zeh Misparai; Mispar Asarah"
  ],

  98: [
    "Moses who?; Died in Moab"
  ],

  99: [
    "Adam and Eve; Who are One?"
  ],

  100: [
    "(Sum of First 9 Primes) My Numbers; Two and Six; Fifty-Six; Behemoth; What's 'Manna'?; melted away; I AM NAPHTALI; The Favor; The Lord's; I FAVOR HIM"
  ],

  101: [
    "(26th Prime # / Palindrome / Fifth Centered Decagonal #); Yasha Mashach; I AM THAT I AM; Christian; Rod of Iron; I AM A SINNER [IVRIT] Yasha Mashach; Mispar HaBen; Ani HaMoshia; Hu Elohim"
  ],

  102: [
    "WORSHIP ME; Two and Zero [IVRIT] Ben Elohim",
  ],

  103: [
    "(27th Prime #) One and Two; died on hor; name is 'aaron'; A Rahab Number; A Spared Name [IVRIT] Eloheinu; Ani Melech; Mispar Arboim"
  ],

  104: [
    "I AM MESSIAH; He's Great; Star of Jacob; Merciful; All-Knowing; Redeemer"
  ],

  105: [
    "(Fourteenth Triangular # / Dodecagonal # / Double Factorial / Psuedo-Prime) Six, Six, Six; Law and Order; What is a UPC?; The Enemy; Who is Satan?; Babylon's King; Ten Horns; I DRINK BLOOD; A Banking CEO; What's Hell?; An RFID Chip; What is CBDC?; Armageddon; Fifteen; He's Moses; I AM A HEBREW BABY"
  ],

  106: [
    "The Savior; Leviation",
  ],

  107: [
    "(28th Prime #) Holy Number; Who is Isaiah?; I AM A PROPHET [IVRIT] HaBen Sheli"
  ],

  108: [
    "(Tetranacci # / Polygonal #) God's Child; Holy, Holy, Holy!; MY WAYS ARE HOLY; I DO NOT SIN; Jewish God; He is Bezalel; What Moses?; I DIED IN MOAB"
  ],

  109: [
    "(29th Prime # / Super-Prime / Centered Triangular # / Full Reptend Prime) A Holy Number; One, Seven; Eight, Six; Beautiful; Ai's Numbers; what's a ruin? [IVRIT] Ze Ben Sheli"
  ],

  110: [
    "Who is Asher?; Delicacies; Thirty-One"
  ],

  111: [
    "Who Broke Jars?; Gideon Camp; Two, Zero, Six [IVRIT] Ani Yehoshua; Kadosh Mispar"
  ],

  112: [
    "I AM THE LORD; He is Risen!; A God Number; Gibeon City; The Treaty"
  ],

  113: [
    "(30th Prime # / Centered Square #) King and God; Passover Lamb; My Shepherd; Mary's Husband; Mary of Magdala; Sixty-Five; Two, Eight; Two, Two, Six; Sons of Aaron; are priests"
  ],

  114: [
    "Christians; Crucified; Father God; One, Two, Zero; One, One, One; Who is Bezalel?; Artist Name; A Gibeon City; what's a ruse?"
  ],

  115: [
    "I AM MOST HOLY; The Light; Bethlehem; Two, Two, Zero [IVRIT] Nolad HaRuach",
  ],

  116: [
    "Two and Nine; Israelites; God's People; WE ARE GREAT; A Lamp Tender; is aaron's name [IVRIT] HaMispar HaBen; Mispar Moshia"
  ],

  117: [
    "(Pentagonal #) The Number; Immortality; Our Lord God; Glory of God; Four and Zero; Twenty-Two; Quail Number; Not Spoiled; did not go bad; Rock of Horeb; Gush Water; Water Flows"
  ],

  118: [
    "Six and Five; One and Four",
  ],

  119: [
    "Antichrist; not a christ; A Peace Treaty; Mystery Babylon; An Abomination; God's Curse; diabolical god; An Imitation; Who is wrong?; God's Staff; had swallowed"
  ],

  120: [
    "(Triangular # / Hexagonal #)Holy Numbers; Lion of Judah; He's Messiah; He is Jerub-Baal; Gideon Name"
  ],

  121: [
    "(Brocard's Problem / Fermat's Conjecture / Star # / Centered Tetrahedral # / Centered Octagonal # / Smith # / Friedman #) The Father; MY NAME IS 'GOD'; A Name for God; He who is Holy; God's Light; I AM A JUST GOD; I'M THE ONLY WAY; Prophetess; She's Jezebel; She's Queen; Sarai's Number; Bride of Abraham; Who is Deborah?"
  ],

  122: [
    "The Christ; The Slain Lamb; Who is Worthy?; Who is Jesus?; Child of God; The Truth; Holy and True; Lord of Lords; Major Prophet; I'M A JEWISH MAN; Seven, Nine; Five and Two; She is Ruth; A Moabite Woman; Who is Joseph?; The Dreamer; She is Miriam; Skin Disease"
  ],

  123: [
    "(Mian-Chowla Sequence) God's Number; The Holy Bible; Melchizedek; The Church; FORGIVE ME; Thirty-Nine; He who is Noah; Built the Ark"
  ],

  124: [
    "A Major Prophet; King of Edom; YOU MAY NOT PASS; Number of Dan; Who's a Lion Cub? [IVRIT] Ze HaBen Sheli; Mi Hu Elohim?"
  ],

  125: [
    "(Perfect Cube / Close Triplet of Perfect Powers) The Messiah; From Nazareth; Blessed by God; Favored by God; King of Judah; He is a Nazarene; He is a Nazarite; He is the Lamb; Eyes of Fire; Two, Six, Nine; The Hornet; Moab's Numbers; WE ARE IN DREAD; What is Gigal?; A Camp of Joshua [IVRIT] Ben mi-Elohim"
  ],

  126: [
    "God of Israel; Ninety-Four; One, Nine, Zero; He is Naphtali; is set free; He is Abimelek; Cracked Skull; A Tower of Babel; plain in shinar [IVRIT] Mispar Elohim; Ma HaMispar Beni?; Yeshua x 2"
  ],

  127: [
    "(31st Prime #); Mary Magdalene; A Virgin Woman; Queen Israel; One, Nine, One; Jointed Leg; is a clean animal; Eldad and Medad; had not left"
  ],

  128: [
    "Two, Four, Six; He is Zebulun; I AM A SHIP HAVEN; He's King of Ai; Who was impaled?; Wet Fleece; He is Gideon"
  ],

  129: [
    "(Sum of First 10 Primes) Forty-Three; One, Four, Zero; Ninety-Five; City of Midian; Israel Burned"
  ],

  130: [
    "The Numbers; He is Messiah; Jesus x 2; One, Five, Six; Two, Zero, Four; One, Four, One; I AM SON OF KARMI; Sinner's Name; The Barley Bread; He is a 'Gideon' [IVRIT] HaShem Moshia; Echad, Shishah"
  ],

  131: [
    "(32nd Prime #); Six, Six, and Six; a proud sinner; God's Throne; Leaders of Moab; Who Trembles?; She is Jezebel; She is Queen; Has A Cold Heart; Lust for Sin; In Our Hearts; God's Holy Name; Jacob's Numbers; he wrestled; A City of Midian; Burning Camps; Naphtali's Name; He is Favored; The Name 'Achan'; beneath rocks [IVRIT] HaMispar Sheli"
  ],

  132: [
    "Antichrists; Foreign God; makes the laws; Satan's Number; Satan's Angels; Hell's Angels; Devil Number; Two, Four, Two; is a name 'Moses'; pleased in him"
  ],

  133: [
    "Who is Christ?; The Paschal Lamb; I AM GOD'S CHILD; Crucifixion; He who is King; Without Sin; Ark of the Lord; Electricity; He's Anointed; Two, Zero, Five; Number of My Jar; An Omer of Manna; One, One, Five; Abraham's Father; Father Terah; Balaam Son of Beor; beat his donkey; Joshua Number; I HELD A JAVELIN [IVRIT] Hu Eloheinu"
  ],

  134: [
    "Judah's Number; has my scepter; The Evil One; Three Sixes; Unfaithful; A Foreign God; Cain's Numbers; What is a QR Code?; Who hates God?; Demonic Soul; Who is on Hades?; Number of Sin; A Material World; 'Solve Coagula'; Israel Losing; Lowered Hands; A Number of Jael; Most Blessed; fleece was dry; Who is Gideon?"
  ],

  135: [
    "Judas Iscariot; Who is a Betrayer?; He who is Evil; I AM POSSESSED; Two, Two, Five; The Rephidim; It Has No Water; Gershonite; CARRY MY CURTAIN; tore lion apart; Samson Number"
  ],

  136: [
    "God's Numbers; Jesus' Number; Who is Messiah?; The Most Holy; He Forgives; He is the Rock; One, Six, and Zero; Two and Three; The Gold Calf; What is Burned?; A Number of a 'Jael'; Wife of Heber; I GAVE HIM MILK"
  ],

  137: [
    "(33rd Prime # / Multiple of 123456787654321); Number of God; One True God; Who's Most Holy?; Two, Zero, and Six; One, One, and Six; New Covenant; A Moses Number; met with god; is very humble"
  ],

  138: [
    "Who is Baphomet?; Male and Female; Transgender; An Unknown God; Mighty Warrior; Nimrod Number; Face Was Radiant; The Man Moses; YOU MAY EAT OF IT; Has A Split Hoof; Who Chews Cud?; The Name 'Amalek'; HE WAS MY FIRST; He is King of Ai; A Large Rock Pile; A Voice is Heard; Number of Ramah"
  ],

  139: [
    "(34th Prime #); A Number of God; Ancient of Days; God of Heaven; Two and Eight; Two, Zero, and Zero; Who dies on Hor?; Aaron dies here; Amorite Kings; Hung On Poles; in a makkedah cave [IVRIT] Yeshua HaMoshia; HaMispar mi-HaBen; Mi Hu Moshiach?; Misparim Sheli"
  ],

  140: [
    "Holy One of God; I AM THE LIGHT; The Lamb of God; Christian God; I AM A JEALOUS GOD; A 'Staff' Number; it became a snake; Budded Almonds; is aaron's staff [IVRIT] HaBen mi-Elohim; Nolad mi-Elohim"
  ],

  141: [
    "Jesus Christ; He is Most Holy; Glorious Name; Guardian Angel; Who's the King?; MY NAME IS ON HIM; Born of a Virgin; Heals the Sick; He is Lord of All; The End of Days; Secret Sect; The Ways of God; Number of Manna; is thin flakes; Man, God, and King; God's Message; He obeys the Law; Who is our Maker?; WORLD HATES ME; Most Hated Man; Lord of Heaven; A Sinless Life; Savior of Goyim; Two, Two, and Zero; Two, Nine, Nine; Who Relented?; People of Meroz; Bitter Curse [IVRIT] HaMispar Elohim; Zeh Kadosh Mispar"
  ],

  142: [
    "",
  ],

  143: [
    "Yashua HaMashiach; Seventy-Nine; Thirty-Seven; Ninety-Seven; Ninety-Three; Quail's Numbers; Has No Maggots; He who is Oholiab; Who is an Artist?"
  ],

  144: [
    "One, Six, Seven; Two, Nine, Four"
  ],

  145: [
    "Who is God's Son?; He is the King; He is Blameless; He is Perfect; A Merciful God; Crucified Goy; Two, Six, Seven; Eight, Seven; The Egyptians; Swept Into Sea; Desert of Sin; is elim and sinai"
  ],

  146: [
    "Dinah's Numbers; She who was raped; Rachel's Number; She died in Labor [IVRIT] Ma HaMispar Sheli; Mispar Meshiach [ARAMAYA] Eashoa M'Sheekha"
  ],

  147: [
    "God Most High; Sacred Numbers; He is in Heaven; A Holy Name of God; MY NAME IS JESUS; I'M GOD'S ONLY SON; The Rod of Iron; I AM HOLY AND TRUE; Who is Most Holy?; A Divine Number; He who is the Way; Judah's Numbers; Strikes Egypt; Place of Worship; Christ Number; I AM THE CHRIST; I AM THE SLAIN LAMB; Warrior's Number; A Crucified Goy; Christmas Star; Crucified Jew; Two, Four, Four; Three, One, One; Two, Zero, Seven; Two, Five, Nine; One, Eight, Six; One, One, Seven; The Man Jethro; was delighted; Jair of Gilead; had thirty sons; Magus Numbers; Overjoyed by a Star"
  ],

  148: [
    "The Son of God; Related to God; Number of a King; A Strong Tower; King of Heaven; Our Deliverer; He is our Savior; The Great God; Kingdom of God; Name of a Virgin; Three and Nine; Eighty-Seven; One, Two, Three; One, Seven, Two; Seven and Nine; Peoples of Canaan; Terror and Dread; Tends the Lamp; Numbers of Aaron; Levite Towns; City Refuges; A Father Number; Hardens Hearts; Made a Gold Ephod; Gideon Number; A Abimelek Number; woman killed him [IVRIT] Ze HaMispar Sheli; Mispar HaMashiach; IShVO HMShICh"
  ],

  149: [
    "(35th Prime #) Yeshua Moshiach; Forgiveness; Lord Most High; The Most Pure; Jesus' Numbers; Worthy of Praise; Supreme Being; Messianic King; A 'Christ' Number; He died at Calvary; He who's a Nazarene; All My Ways Are Just; He is from Sinai; One, Four, Five; One, Eight, Zero; Twenty-Seven; The Israelite; Carried By Eagles; What is Acacia Wood?; The Ark's Number; Behind a Curtain; The Bronze Snake; God's Antidote; The Name 'Israel'; Saved By the Lord [IVRIT] Yeshua Moshiach; Misparim Elohim"
  ],

  150: [
    "He who is Jesus; Our King and God; A Number of a King; Numbers of God; The Redeemer; The King's Name; Perfect Child; I AM FROM NAZARETH; I WAS CRUCIFIED; I AM THE MESSIAH; I WEAR THE CROWN; I AM THIS NUMBER; The Holy Spirit; He has Humility; My Holy Dwelling; The Virgin Mary; had seen gabriel; Highly Exalted; The Firstborn; The Redeemer; God's Covenant; Messiah Number; I CAME FROM SINAI; God's Identity; Two, Five, Four; Two, Eight, Zero; I COME AS A THIEF!; I GIVE YOU LIFE; I AM THE HORNET; He who is Joseph; Ruler of Egypt; Wears Gold Chain; I AM AN ATTENDANT; A Ring of Pharaoh's"
  ],

  151: [
    "(36th Prime #); Who is the King?; God our Father; One, Eight, Two; Eighty-Eight; Two, Six, and Nine"
  ],

  152: [
    "The Lord Jesus; Most Glorious; A Number of My Son; Beautiful Name; I AM MARY MAGDALENE; Bride of our God; Twenty-Eight; Two, Two, Eight; One, Nine, and Zero; One, Five, Five; A Number of an 'Aaron'; Sacred Garment"
  ],

  153: [
    "The Holy Number; Special Numbers; God of the Bible; Two, Zero, and Nine; One, Six, and Four; The Name 'Moses'; Faltering Lips; Timnath Heres; was joshua's burial; Numbers of Makir; They are Captains"
  ],

  154: [
    "The Word of God; Queen of Israel; The First Seal; The Holy Ghost; Immortal Spirit; A Perfect Human; He Does Not Sin; Who is our Savior?; He's My Shpeherd; My City's New Name; A City of Equality; A Beautiful City; Gorgeous City; Heaven on Earth; A Beautiful Name; A Bride of Christ; She is Most Holy; A Great Wedding; Wedding Feast; Angel in Heaven; Heavenly Spirit; Who is a Bride-To-Be?; MY FLESH AND BLOOD; Sign of Heaven; Secret Vision; for an eternity; The Most High; God's Pseudonym; Constellation; The Universe; Father of Us All; A Precious Metal; Two, Four, and Six; Four and Eight; Ephraim's Number; The Right Hand; Answered Moses; I SPOKE TO MOSES [IVRIT] HaMisparim Moshia"
  ],

  155: [
    "The Name of God; One, Four, and Zero",
  ],

  156: [
    "Yeshua HaMashiach; The God Number; Creator of Life; He hung on a Pole; Nazarite's Number; The Sabbath Rest; The Name Above All; God's Firstborn; I AM THE PASSOVER; I LIVE IN HEAVEN; What is the Name?; Mary Magdalene's Boy; I RESURRECTED; Heel Was Struck; Holy Conception; Child of Heaven; Who has Stigmata?; Divine Trinity; Accepts No Bribes; Husband's Number; The Bridegroom; Who walks on Water?; Water Into Wine; The Blood of God; I AM A MOST HOLY GOD; Goes Before Us; Sanctuary of God; Signs from God; The Fear of God; Altar of the Lord; Tribes of Israel; Mastered Death; God of Creation; Two, Zero, and Four; One, Five, and Six; The Shepherds; is joseph's family; My Name is 'Jealous'; Eleazar Son of Aaron; Remove Censer [IVRIT] Yeshua HaMashiach; Zeh HaKadosh Mispar; HaShem Malkeinu; Ze HaMispar mi-HaBen; HaMelech Yisrael; Mi Hu Eloheinu?; HMSPRIM IHShVH"
  ],

  157: [
    "(37th Prime #) Four, One, and Two; The Firmament; Heaven's Number"
  ],

  158: [
    "Two, Four, and Two; The Radiant Face; is moses' number; Negev Desert; Who are Powerful?; The Gibeon City; They Did Not Die [IVRIT] Mispar Eloheinu; Shesh ve'Tesha"
  ],

  159: [
    "The illuminati; who prints money?; Men of Lucifer; Who are the gods?; I AM THE EVIL ONE; I AM THREE SIXES; A Number of My Name; The Achan Number; I AM UNFAITHFUL"
  ],

  160: [
    "(Sum of First 11 Primes) Holiest Number; He who is Father; What is Salvation?; I WILL NOT ABHOR YOU; John the Baptist; One, Three, Nine; One, Two, and Five; Fled from Pharaoh; is a moses number; Husband of Zipporah; Poured oil on Aaron; Altar of Incense; is in front of ark; Day of Atonement; is deny yourself"
  ],

  161: [
    "Most Holy Number; Holy One of Israel; I AM THE MOST HOLY; Three Hundred; Two, Two, and Five; Two, Nine, Seven"
  ],

  162: [
    "Who is the Enemy?; Who is Six, Six, Six?; He is God's Enemy; Cursed Numbers; The Human Heart; Spirit of Jezebel; What's an RFID Chip?; I AM THE SERPENT; The Luciferian; serves baphomet; Anton Szandor LaVey; are under a curse; Mother in Israel; She who is Deborah"
  ],

  163: [
    "(38th Prime #) Number of Jesus; Messiah's Number; The Glory of God; The Lord our God; Most Holy Priest; A Most Holy Number; He Created Life; Anointed Number; One, Seven, Four; One Hundred Six; One, Nine, Eight; Three, Four, One; Number of Rebekah; Woman Had Two Sons; Grain Offering; Finest Flours; Meribah's Numbers; is water's number; Woman, Rahab's Number; I AM A PROSTITUTE; MY SON IS JEPHTHAH; I AM A PROSTITUTE"
  ],

  164: [
    "Yeshua HaMoshiach; Two Hundred Six; One, Zero, Nine, One; A Number of Moses; killed an egyptian [IVIRT] Yeshua HaMoshiach; Melech v'Elohim; IHShVH HMShICH; Hu Elohim Yisrael"
  ],

  165: [
    "The Antichrist; A Man who is Cursed; He is above the law; The King of Babylon; I AM AN ENEMY OF GOD; No regard for God; An illuminati C.E.O.; Who is confused?; As in the Day of Noah; I AM A MIGHTY WARRIOR; She who is Jezebel; She who is Queen; Number of Jezebel; Like Lightning; Whose world is it?; Who owns the Banks?; Has Keys To the Bank; Divided Kingdom; Worship Lucifer; Money is no object; A Number of Jesus; What's My Son's Name?; Three, Five, Zero; He is King Eglon; A Number of 'Stabbed'; How did Sisera Die?; The Tent Stake [IVRIT] Miriam HaMigdalit; Ani Nolad mi-Elohim"
  ],

  166: [
    "Yahoshua HaMashiach; The Holy Numbers; He is a Jealous God; One, Five, Three; One, Nine, and Nine; A Number of a Moses; Like God to Pharaoh; Manna From Heaven; Looked Like Resin; is the lord's manna; Along Jordan River; is canaanites' name; is canaanites' city; Gibeon's Numbers; Sun Stood Still; Talked in Riddles; A Number of a 'Samson' [IVRIT] Yahoshua HaMashiach; Nolad shel HaRuach"
  ],

  167: [
    "(39th Prime #); Jesus of Nazareth; Name of Mary's Child; He who is a Nazirite; Father of Jesus; Queen of Heaven; She's Mary of Magdala; Two Hundred One; Two, Five, Seven; Two, Eight, Four; Two, Five, Three; One Hundred Two; Two Hundred One; Who's Eating Blood?; What is Forbidden?; Korah, Dathan, and Abiram; A Number of 'Swallow'; is swallows by earth; A Archelaus Number"
  ],

  168: [
    "Manasseh's Number; is the left hand; ruler out of jacob; The 'Messiah' Name; Issachar's Princes; with son of abinoam"
  ],

  169: [
    "Yeshua HaMeshiach; The God Numbers; What're My Numbers?; He who's the King; He heals the Sick; Conquered Death; I AM GOD'S ANOINTED; The Godly Number; Important Person; One, Nine, and Four; One, Five, Eight; We are Israelites; is prone to evils; YOU WILL BE MY PEOPLE; Eglon King of Moab; The 'Very Fat' Name [IVRIT] Zeh HaMispar mi-HaBen; HaMisparim HaMoshia"
  ],

  170: [
    "The Father's Son; Christ the King; He who is our King; died for our sins; Clock Numerology; Oracle of Numbers; A Blessed Gematria; An Accurate Cipher; One, Six, and Seven; Five, Two, Eight; Two, Nine, and Four; Phinehas' Numbers; I SPEARED TO DEATH"
  ],

  171: [
    "What are My Numbers?; Eight and Seven; Two, Six, and Three; Midwife's Number; are full of vigor; I AM NOT ELOQUENT; is moses' numbers; Food Offerings; are pleasing to me; Burnt Offering"
  ],

  172: [
    "The God of Israel; Holiest of Names; THIS IS MY HOLY NAME; He is the Father; I AM GOD MOST HIGH; Important Number; One, Seven, and Zero; Important Number; Who is the Light?; Who is a Jealous God?; The Book of the Law; Number of Jealous; I OFFER SALVATION; He who is the Lord; Who is missing a rib?; The Number of Adam; They are Hebrew Boys; are into the nile"
  ],

  173: [
    "(40th Prime #); Holiest Numbers; The Golden Ratio; An Equation of God; Mary the Magdalene; A Mother of Jesus; Mary, Mother of God; She is Beautiful; He has Seven Eyes; Strong in Spirit; I WILL BE PROVED HOLY; Shows No Partiality; Who Worship Jesus?; Who're Christians?; Two, Zero, and Seven; Three, One, and One; One, Seven, and One; Two, Five, and Nine; One, Eight, and Six; A Midwife's Number; are shiphrah and puah; Who are Aaron and Sons?; did not drink wine; Washed With Water; Dies at Mount Hor; Number of a Priest; He who is Adoni Bezek; An 'Amputee' Number; Who is Son of Abinoam?; had taken captives [IVRIT] ANI IShVO HMShICh; Tishim ve'Shivah"
  ],

  174: [
    "Most Holy Numbers; A Messianic Number; Who was Crucified?; Who is our Lord God?; Two, Eight, and Six; One, Two, and Seven; Two, One, and Three",
  ],

  175: [
    "Lucifer's Number; Who is a Luciferian?; Antichrist's Name; Living Creature; The Number of Gad; will attack at a heel; is the merarites; carries the frame; The City of Midian; Had Burning Towns; City Caught Fire"
  ],

  176: [
    "The Morning Star; He who is Lucifer; Who is Anti-Christ?; The Whore of Babylon; A Number of a Sinner; Who are Politicians?; Son of Mary Magdala; Numbers of Jesus; He is the Messiah; Four, Three, Nine; dies on mount hor; Numbers of man 'Aaron'; Iron and Bronze Bolts; is a number of asher"
  ],

  177: [
    "He died for my sins; Who never sinned?; A Number of a Holy God; He who is Anointed; Number of Messiah; Scepter of Israel; was mary magdalene's baby; Three, Seven, Six; Immanuel's Number; He is Lord of Earth; My Manna and the Quail; Gather For Six Days; Numbers of a Moses; Took Joseph's Bones; Who are Israelites?; Made the Gold Calf; A Reuben District; Searching Hearts; Broke the Altar of Ba'al; A Number of Gideon [IVRIT] Hu Nolad mi-Betulah; Mispar shel Elohim [GREEK] Iesous Christos"
  ],

  178: [
    "Who is the Father?; Most Righteous; The Holiest Name; Numbers of a 'Jesus'; The King's Number; A Number of a Virgin; dressed in white; Conceived Jesus; Carried God's Child; Talked to the Lord; The Daughter Mary; One, Five, and Five"
  ],

  179: [
    "(41st Prime #); Yehoshua HaMashiach; The Lord's Messiah; What is a God Number?; The Most Holy Name; A Very Sacred Number; The Best Numbers; A Number of Messiah; Who Heals Diseases?; Who is the Christ?; MY NAME MEANS I AM GOD; Who has Seven Eyes?; He who is the King; He who is Blameless; He who is Perfect; The Son's Numbers; A Face like the Sun; The Tribe of Judah; The Ark of the Lord; The Ten Commands; Redeems Sinners; Salvation From Sin; He is the Trinity; He Overcame Death; I CONQUERED DEATH; Our faith is in Him; The God We Follow; Committed No Sin; Self-Righteous; He who talks to God; Three, Zero, Seven; Sons Caleb and Joshua; had torn garments; The Joshua Number; I WROTE ON STONES; Forty Years of Peace; A Number of a 'Gideon' [IVRIT] Yehoshua HaMashiach; Melech ve'Elohim; Hu Yeshua Moshiach"
  ],

  180: [
    "The Holy of Holies; Where is Salvation?; Two Hundred Nine; One, Three, Three; permitted to eat; Who has scale and fin?"
  ],

  181: [
    "(42nd Prime #) She's Mary Magdalene; Holy Mother of God; Strong Delusion; Number Thirty-One; Three, Seven, Two; The Moses Number; I AM RULER AND JUDGE; Top of Mount Sinai; The Name 'Amalekite'; is negev desert [IVRIT] ANI YESHUA HAMASHIACH"
  ],

  182: [
    "Lord Jesus Christ; The Jesus Number; Who is the Messiah?; The King of Kings; Son of Mary and Joseph; Who is from Nazareth?; A Number of a Nazirite; God's Anointed One; I'M THE MIGHTY ONE; THIS IS TO BE MY NAME; Who raises the Dead?; The God who lives; Our Heavenly Reward; Who is blessed by God?; The Sacrificial Lamb; Only Begotten Son; Salvation from God; Guilty of Blasphemy; I WAS RESURRECTED; in the beginning; Obedient to Death; Sent From Heaven; A Number of a Prophet; Who is King of Judah?; Kingdom of Heaven; Whose child is Mary's?; The Rock our Savior; The 'Official' King; He who is our Savior; He was made into Sin; I AM THE GREAT KING; Instructed By God; God of Great Power; A Beautiful Number; Passover's Numbers; Born Again Christian; The Six-Point Star; The Most Holy Place; has my Manna and the law; The Pillar of Cloud; The way it should be; MY WAYS ARE NOT YOUR WAYS; The Paradise of God; The Big Bang Theory; Great Mystery Babylon; Mother of Harlots; Number Thirty-Two; Three, Zero, Eight; Four, Nine, and Nine; An Unleavened Bread; He appeared in a Cloud; The Lord is my Banner; He Answered Moses; Who is the Hornet?; Israelites of God; Entrance's Number; Number of a Curtain; Who shone from Paran? [IVRIT] HaMispar shel Moshia"
  ],

  183: [
    "The Number of God; I DIED FOR YOUR SINS; The One True God; He loves Justice; Two Hundred Four; Number Eighty-Six; Number Nineteen; Numbers One and Six; One, Seven, Eight; Who belongs to God?; First Offspring; The Numbers of Dan; Provides Justice; Exceedingly Good; is negev's number; Gibeon City Number; Sent Deceptions; Gibeonite Number; Transported Water"
  ],

  184: [
    "My Favorite Number; The Letters G-O-D; This Number is Holy; The Queen Number; The Jezebel Number; Who is Mary Magdalene?; The Holiest Woman; Mother of a Slain Lamb; He is without Sin; Number Twenty-Six; One Hundred Sixty; Number Sixty-Five; Numbers Two and Six; Three, Eight, Two; Burnt Offerings; The Pleasing Aromas"
  ],

  185: [
    "The God of Heaven; gods of this world; Two Hundred Sixty; Unbelieving Jews; WE ARE ANTICHRISTS; WE ARE SATAN'S ANGELS; MY FRUITFUL VINE; is joseph's numbers; Succeeded Moses; is a number of joshua"
  ],

  186: [
    "Numbers Two and Zero; One, Three, and Nine",
  ],

  187: [
    "Jesus the Christ; A 'Crucified' Number; Who is our Salvation?; He who does not lie; I WAS MARY MAGDALENE'S BABY; Who's the Lamb of God?; A Number of the Lord; He lives in Heaven; An Important Number; I'M THE GOD OF GODS; Who is a Pillar of Fire?; A Christian's Number; Nine, Three, and Two; Two Hundred Forty; Two, Nine, and Seven"
  ],

  188: [
    "Lucifer's Numbers; Who is Six, Six, and Six?; Number Twenty-Two; Three, Zero, and Four; Festival of Weeks; A Full Seven Weeks; Like a Firstborn Bull; is a number of joseph"
  ],

  189: [
    "Numbers of Exodus; Bread Without Yeast; The Number Thirty; One, Seven, and Four; A Number of the Manna; Like Coriander Seed; Levites Killed Us; are the israelites; Number of Kenites; are taken as captives; I AM EHUD SON OF GERA; Left-Hand Dominant; A Silver Shekel Idol; Who's Micah's Mother? [IVRIT] Ani Melech v'Elohim"
  ],

  190: [
    "What is God's Number?; Who is without sin?; Numbers of Messiah; is a number of a 'Jesus'; Two, Seven, and Four; Two, Nine, and Eight; One, Zero, Nine, and One",
  ],

  191: [
    "(43rd Prime #); Who is the Evil One?; A Number of Lucifer; The Devil's Number; The Number of Esau; I AM THE LORD YOUR GOD; [IVRIT] HaShem shel Elohim"
  ], 

  192: [
    "Yehoshua HaMeshiach; He is Jesus Christ; Whose Mother is Mary?; What is the Holy Name?; The Name of our God; God's Name and Number; A Son of Mary Magdalene; He's Holy to the Lord; He who died on a Cross; Who was born in a Manger?; Number of Stigmata; Number of the King; The Nazirite of God; The Good Shepherd; Number of 'Perfect'; Number of 'Blameless'; Numbers of a Messiah; I AM JESUS OF NAZARETH; Unapproachable Light; The Prophet of God; The Sin Offering; Who has Seven Horns?; The Father Number; Writing on the Wall; A Number of 'Anointed'; One, Five, and Three; One, Seven, and Five; The 'Issachar' Number; They are with Deborah [IVRIT] Yehoshua HaMeshiach; HaMispar shel Elohim; Shem shel Malkeinu; HaMisparim mi-HaMoshia; Melech shel Yisrael; Hu Nolad mi-HaBetulah"
  ],

  193: [
    "(44th Prime #); The Most High God; A Name of the Father; Who is the Most Holy?; Beautiful Numbers; Number of My Holy Name; Number of God's Name; Who lives in Heaven?; The Savior of Israel; Who Cures Diseases?; The Beautiful One; Protected by Angels; The Spirits of God; Gospel of Salvation; People of Jerusalem; 'Stiff-Neck' Number; I AM GREAT AND AWESOME; I HAVE FORGIVEN YOU; He came from heaven; Ascended To Heaven; The Unspeakable Name; Tent of Meeting; I MAKE ALL THINGS NEW; wants us to repent; A Jubilee Year's Number; In the Image of God; Interprets Dreams; Fourth Dimension; One Hundred Fifty; Two, Four, and Eight; Two, Five, and Three; God who saved Moses; is a ruler out of jacob; The Benjamin Number; Beloved of the Lord [IVRIT] Zeh Qodesh HaQodashim; Mi Hu Nolad mi-Elohim?"
  ],

  194: [
    "The Numbers of Cain; Restless Wanderer; The Number of Evil; appointed officials; A Number of a Man, 'Moses'; Lord of All the Earth; Who's God Most High?; Number Thirty-Nine"
  ],

  195: [
    "A Number of My Holy Name; Jesus x 3; The Messianic King; He is God's Anointed; One, Five, and Eight; The Lord Most High; is the god of israel; I WILL GIVE YOU REST; He knows Moses by Name; Who is the man 'Moses'?; rescued the flock"
  ],

  196: [
    "The Numbers of God; Mary Magdalene's Child; The Messiah Number; Five, Two, and Eight; The Valley of Eshkol; The Number of 'Grape'",
  ],

  197: [
    "(45th Prime # & Sum of First 12 Primes) Who is Jesus' Father?; Mary of Magdala's Number; Gave Birth to Jesus; I AM THE GOD OF ISRAEL; Our God the Father; He who created Life; Number Ninety-Four"
  ],

  198: [
    "Who is Jesus Christ?; Who's Holy to the Lord?; Child of Bethlehem; Holiest of the Holy; God of the Heavens; Miraculous Numbers; MY ONLY BEGOTTEN SON; Suffered on a Cross; He is God Most High; Our Heavenly Father; He died for our sins; Death By Crucifixion; The Greatest Name; Carried His Own Cross; I AM THE HOLIEST ONE; Lord Over All Things; Swore on oath to Abraham; The Most Glorious; Numbers of the Lord; The Servant of God; He who works miracles; I AM A CONSUMING FIRE; A Treasure in Heaven; The Beautiful Name; Most Important Name; He was punished by God; He who is King and God; 'Crucified' Numbers; 'Christians' Numbers; I AM MARY, MOTHER OF GOD; Mary Magdalene Number; Number Sixty-Seven; My Covenant's Number; have the land of canaan; A Number of Son Joshua; I STOOD BEFORE ELEAZAR; A Gibeonite's Number; WE ARE WOODCUTTERS"
  ],

  199: [
    "(46th Prime #) The God of the Bible; He who is Crucified; They are Edom and Seir; The Conquered City"
  ],

  200: [
    "Holiest of Numbers; YHWH x 5; I AM x 8; The Queen of Israel; A Mary Magdalene Number; MY SON IS THE MESSIAH; Servant of the Lord; Glorifies the Lord; Two Hundred Seven; One Hundred Thirty; Number Ninety-Five; One Hundred Ninety; Two Hundred Three; Number Forty-Seven; Three Hundred Two; Israelites' Numbers; Struck with a Plague [IVRIT] YHWH x 5; HaMispar HaB'yoter Kadosh; Misparim shel Elohim; Mi Hu Nolad mi-Betulah?"
  ],

  201: [
    "These are My Numbers; He is our King and God; Who is God's Anointed?; Who was born of a Virgin?; Numbers Four and Zero; LET THERE BE LIGHT; The First Commands; rides on the clouds; is a jeshurun number; Who reigned in Judea?"
  ],

  202: [
    "MY BEAUTIFUL TENTS; is a number of a name 'jacob'; lapped water like dogs; A Number of the 'Saved'"
  ],

  203: [
    "What is Jesus' Number?; What is My Son's Number?; God Most High's Name; The Name of the Lord; The Number of My Name; Antichrist's Number; Number Forty-Eight; Three, Three, and Six; Number Twenty-Four; Three, Seven, and Six; Two Hundred Eight; Numbers Two and Four; YOU CAN NOT SEE MY FACE; Names are Jacob and Israel; SEE WHAT GOD HAS DONE; Number of Name 'Joshua'; A Spirit of Leadership"
  ],

  204: [
    "Who is God Most High?; The Greatest of All; Who is a Crucified Goy?; The Number of Israel; One, Four, Zero, One, Zero; The Negev Desert; Very Powerful People"
  ],

  205: [
    "What is a Jesus Number?; What're God's Numbers?; The Father's Number; He is the Most High; Who is a Strong Tower?; Our Shield and Helper; One Hundred Eighty; Number Eighty-Five; Three, Zero, and Seven; Number of Moses' Name; He who lived in Midian; A Number of Jeshurun; rides across heavens; The Sword of Gideon [IVRIT] Malkeinu v'Eloheinu"
  ],

  206: [
    "The Holiest Number; What is a Number of God?; He who is the Father; The Sovereign Lord; One, Three, and Three; Two Hundred Eighty; Numbers Five and Two; Three, Eight, and Six; AM I IN THE PLACE OF GOD?; What's Joseph's Number?; Numbers of God's Manna; is made with olive oil"
  ],

  207: [
    "What are God's Numbers?; Who is our King and God?; Great and Awesome God; What's the King's Name?; The Most Holy Number; Who is the Holy Spirit?; He who is the Christ; Who shows no partiality?; A Goy who was Crucifed; He who is Holy and True; The Holy One of Israel; Two, Three, and Seven; Three, Three, and Two; Two Hundred Twenty; Three Hundred Ten; I AM SHAMGAR SON OF ANATH; The Number of Oxgoad; Magi Outwitted Him; A Number of King Herod"
  ],

  208: [
    "Where is the Father?; Our Father in Heaven; I'M THE GOD OF HEAVEN; I AM THE ONE TRUE GOD; I DO NOT CHANGE MY MIND; His Works are Perfect; called from a mountain; He Dried Up the Jordan; The Numbers of Horeb; The Mountain of God; The Number of Moses; I AM A BRIDEGROOM OF BLOOD; DID NOT HONOR ME AS HOLY; The Number of a 'Joshua'; Moses laid hands on him"
  ],

  209: [
    "The Number of Jesus; The Most Beautiful; He who is a Child of God; He is the Son of David; The Numbers of My Son; Who offers Salvation?; The Most Holy Priest; Scepter of Justice; He Forgives our Sin; A Great and Awesome God; The Son Named 'Reuben'; What is a Firstborn Son?; One, Seven, and Eight; Two, Two, Zero, Zero, Five; One, Zero, Five, and Nine"
  ],

  210: [
    "Who's the Lord our God?; God of Abraham, Isaac, and Jacob; Number of our Father; I AM THE GOD OF HEAVEN; Who is Richard Bancroft?; 'King James Bible' Number"
  ],

  211: [
    "(47th Prime #) Who is the Most High?; A Scepter of Justice; Mary Magdalene's Number; She is Highly Favored; I AM THE LORD'S SERVANT; I PROCREATED WITH GOD; Who are Simeon and Levi?; The Number of 'Curse'; Number of 'Raised Hands'; is a number of winning"
  ],

  212: [
    "A Child of Mary Magdalene; The Name Above All Names; 'Jesus Christ' Number; Very Important Person; Crucified by the Jews; I WAS DEAD FOR THREE DAYS; He holds seven stars"
  ],

  213: [
    "This is Jesus' Number; The King of the Jews; The Name of our Savior; He's Dedicated to God; I'M THE FATHER'S CHILD; I AM THE CHRIST OF GOD; The Father of Jesus; Ark of the Covenant Law; The Number of a Hebrew; Knows the Mind of God; The Prophet of Israel; He's the God of Israel; This is a Great Number; Has the Keys to Heaven; Earth is My Footstool; Earth Swallows My Enemy; A Water of Bitterness; I AM IN THE TOWN OF MARAH; The 'Elim Oasis' Number; Springs and Palm Trees; The Levites' Number; THEY WATCH OVER MY WORD"
  ],

  214: [
    "He who defeated Satan; A 'Jesus Christ' Number; He died by Crucifixion; He Fulfilled the Law; MY THRONE IS IN HEAVEN",
  ],

  215: [
    "...",
  ],

  216: [
    "(6 x 6 x 6) Antichrist's Numbers; Six Hundred Sixty-Six; The Place of Torment; The Meaning of Death; I AM THE SPIRIT OF EVIL; Who alters our History?; Microchipping Humans; Who Profanes My Holy Name?; Upside-Down Pentagram; He is the Antichrist; The Power of Politics; The New Age Religion; Numbers of the Enemy; Holds Up Two Fingers; What's the illuminati?; Who is the illuminati?; Electronic Devices; A Theory of Evolution; A Number of Israelites; Marched Around Jericho; This is a Number of God; Three, Seven, Eight; Numbers Six and Seven"
  ],

  217: [
    "The Numbers of a Miriam; She was buried in Kadesh [IVRIT] Mi Hu Yeshua HaMoshiach?",
  ],

  219: [
    "He who is the Evil One; A Number of Antichrist; I'M LIKE THE MOST HIGH; A Number of Mystery Babylon; A Number of an Abomination; He who is 'Three Sixes'; Daughter of Jephthah; Who never got Married?"
  ],

  220: [
    "What are Jesus' Numbers?; The Most Holy Numbers; rules with a rod of iron; God of the Universe; Who is the Lord our God?; Who died by Crucifixion?; I AM THE LORD MOST HIGH; Who fulfilled the Law?; Who is the Glory of God?; The Number of our God; What is a 'Prophet' Number?; Numbers Two and Three; Number Twenty-Seven; One Hundred Seventy; THE LEVITES ARE MINE; Dedicated to the Lord; I AM THE BRIDE OF HEAVEN [IVRIT] Hu Nolad shel HaBetulah"
  ],

  221: [
    "A Number of the Father; The Number of a Holy God; Who is the God of Gods?; I AM MARY MAGDALENE'S CHILD; What is the Holy Ghost?; August Fifteenth; An ascension of a Virgin"
  ],

  222: [
    "Who is the Antichrist?; He who is the Serpent; He who will not repent; I AM AN ILLUMINATI MEMBER; The Head of World Order; The Upside-Down Cross; Practices Witchcraft; This is a Whore's Number; Number Eighty-Eight; The Numbers of Jesus; The Messiah's Numbers; The Son of Mary of Magdala; A Number of the Slain Lamb; Forgiveness for Sin; I'M THE GOD OF THE BIBLE; One, Three, Eight, Two; Two Hundred Forty-Six; One Hundred Sixty-One; Numbers One and Eight; What's a Number of the Ark?; YOU ARE NOT TO GO NEAR IT [IVRIT] Hu Yehoshua HaMeshiach"
  ],

  223: [
    "(48th Prime #) The Number of Messiah; What's the Son's Number?; This is My Anointed One; He is Dedicated to God; What is the God Number?; Who rides a White Horse?; Numbers Two, Zero, and Zero; One Hundred Sixty-Two; Two Hundred Sixty-One"
  ],

  224: [
    "Who is Jesus of Nazareth?; Who Shepherds My People?; He is the Promised One; I RULE OVER ALL CREATION; I AM THE GOD OF THE BIBLE; I WAS CRUCIFIED AT CALVARY; I LOVE THE FOREIGNER; He who is Ancient of Days; The Number Ninety-Six; One Hundred Forty-One; Numbers Two, Zero, and One; One Hundred Sixteen"
  ],

  225: [
    "Jesus Christ's Number; A Number of the Messiah; He is the Voice of God; Who is Great and Awesome?; A Most Important Person; Brought Lazarus to Life; He is without blemish; He is Upright and Just; sent manna from heaven; She who is Mary Magdalene; The Number of a Mother; Nine Hundred Twelve; Two Hundred Forty-One; Three, Seven, and Five; Three, Four, and Eight"
  ],

  226: [
    "The Greatest Number; He who is Jesus Christ; What is a Number of My Name?; A Number of God Almighty; He who is born of a Virgin; Sold for Thirty Silver; Most Important Number; CALL ON ME AND I WILL ANSWER; Two Hundred Forty-Two; NO ONE MAY SEE ME AND LIVE; The Number of Unclean"
  ],

  227: [
    "(49th Prime #) The Number that is Holy; I WAS CRUCIFIED ON CALVARY; A Number of Mary Magdalene; woman dressed in white; bride dressed in white; The Strong Delusion; What's Clock Numerology?; A Proven Gematria Cipher; Numbers of man, 'Jephthah'; could not say 'Shibboleth'"
  ],

  228: [
    "The Lord Jesus Christ; He was born in Bethlehem; Who is our Savior and King?; He is King of Jerusalem; Who forgives our Sins?; I WAS ARRESTED BY THE JEWS; This is a Name of Messiah; Who is our Heavenly King?; THIS IS MY NAME FOREVER; King of Twelve Tribes; Very Important Numbers; A Most Important Number; Opposes Payment To Caesar; He was betrayed with a kiss; He who died and rose again; He who has the D.N.A. of God; Crucified Christians; God's Favor Rests On Us; Who is the Eternal Word?; Lord of the Afterlife; High and Holy Place of God; He who is our Fortress; He is born of the Spirit; MY WORDS ARE IN HIS MOUTH; Who is the World's Savior?; Four Hundred Twelve; Three, Eight, and Five; One Hundred Fifty-Six; The Number Thirty-Two; Sent Quail from Heaven; He has come to test you; Turned from His Anger; A Fellowship Offering; The Male or Female Animal; Who are Korah, Dathan, and Abiram?; Who were Insolent Men?; DO NOT BE STIFF-NECKED; King Adoni-Zedek's Number; The Man Attacked Gibeon [IVRIT] Mi Hu Nolad shel Betulah?"
  ],

  229: [
    "(50th Prime #) The Land of Milk and Honey; THIS IS MY PROMISE TO YOU; Who are God's Israelites?; They have stiff necks; The Guilt Offering; is my rams from the flock; Number of a Name 'Phinehas'; HE IS ZEALOUS FOR MY HONOR"
  ],

  230: [
    "This is the Holy Number; What is a Most Holy Number?; Died From Crucifixion; The Son of the Father; Who is the Promised One?; He was dead for three days; Knew Moses Face to Face; What is Messiah's Number?; Who has a Robe dipped in Blood?; The Number Twenty-Six; The Number Sixty-Five; The Numbers Two and Six"
  ],

  231: [
    "God Most High's Number; 'The Crucified' Number; The Number of the Lord; Maker of Heaven and Earth; Spirit and Power of Elijah; MY GLORY FILLS THE EARTH; He is Mighty and Awesome; He made you and formed you; MY MOTHER IS MARY OF MAGDALA; The way it should be done; The Numbers One and Zero"
  ],

  232: [
    "What is a Number of Jesus?; The Number of God's Son; Messiah's Name and Number; Who's the God of Heaven?; He who is God Most High; The Bible's Main Character; Numbers of the Father; Numbers Three and Nine; Numbers Seven and Nine; Three Hundred Seven; Who divided the waters?; Gilead Head and Commander; The Number of Jephthah [IVRIT] Mi Hu Melech Melechim?; Ani HaMelech shel Yisrael"
  ],

  233: [
    "(51st Prime #) This is My Name and Number; He is Lord Jesus Christ; The Name of our Lord God; What is the Son's Number?; He who is the Son of God; One Hundred Fifteen; FAITHFUL IN ALL MY HOUSE; is the number of a moses; In charge of Offenses; is a number of priest aaron; The Number of the Sun; Stood Still Over Israel"
  ],

  234: [
    "She who is the Most Holy; The Virgin Mary's Number; She's pledged to Joseph; The Holy Spirit's Number"
  ],

  235: [
    "The Number of Lucifer; The Numbers Six, Six, Six; A Number of Judas Iscariot; The Name of Antichrist; The City of Mystery Babylon; The Name of an Abomination; One Hundred Thirty-Six; One Hundred Ninety-Six; A Permanent Heap of Ruins; is the number of ai's name; is the number of ai's city"
  ],

  236: [
    "The Son of Mary Magdalene; Numbers of the Messiah; This is a Number of My Name; He is the God of Heaven; The Name of the Holy One; THIS IS MY SON, WHOM I LOVE; Stands on Blue Pavement; Has glowing bronze feet; Who was dead for three days?; He is the Cornerstone; Innocent of all Charges; Numbers of King of Judah; Numbers One, Nine, and Zero; Two Hundred Sixty-Nine; Two Hundred Thirty-Six; Number of the man 'Moses'; saw the form of the lord; Set Up Twelve Stones"
  ],

  237: [
    "What are the Holy Numbers?; These are God's Numbers; The God of our Fathers; Who is at God's Right Hand?; MY FATHER IS THE CREATOR; Numbers One, Nine, and One; Numbers Two, Zero, and Nine; Numbers One, Six, and Four; One Hundred Forty-Nine; THE WHOLE EARTH IS MINE"
  ],

  238: [
    "(Sum of First 13 Primes) What're the God Numbers?; Jesus Christ's Numbers; He is Jesus the Christ; The Number of Stigmata; The Ten Commandments; The Number of the King; Number Two Hundred One; Five Hundred Sixty-Six; Numbers Two, Four, and Six; One Hundred Sixty-Four; One Hundred Ninety-One; Two Hundred Forty-Nine; The Book of the Law of God; The God of the Hebrews; IT IS I WHO LOVES MY PEOPLE"
  ],

  239: [
    "(52nd Prime #) Who is Lord Jesus Christ?; The Number of God's Name; Number of Jesus Christ; Who is God's Anointed One?; The Gospel of Salvation; He has been anointed by God; Who's the Sin Offering?; All PROPHECIES ARE ABOUT ME; Most Important Numbers; He who is the Word of God; Two Hundred Sixty-Four; Two Hundred Ninety-One; Two Hundred Thirty-One; Three Hundred Twenty; Voice of Rushing Water; I AM THE RULER OUT OF JACOB; He's Lord over all things"
  ],

  240: [
    "What are the God Numbers?; Who's The Most High God?; One Hundred Eighty-Six; The Number Thirty-Nine; What is a Burnt Offering?; Males Without A Defect; Pleasing Aroma To the Lord; A Consecration of Silver; She who is Micah's Mother"
  ],

  241: [
    "(53rd Prime #); The Name of the Messiah; A Number of Jesus Christ; Father, Son, and Holy Spirit; Two Hundred Eighty-Six; Numbers Two, Four, and One; Numbers Two, Five, and Six; Two Hundred Forty-Four; They are the Kohathites; care of most holy things"
  ],

  242: [
    "This is a Number of Jesus; The Number that is Mine; Death from Crucifixion; Whose Mother is a Virgin?; Who's the Messianic King?; The Anointed One of God; He who's Jesus of Nazareth; Who is the God of Heaven?; Who is the Ancient of Days?; The 'King of Judah' Number; Three, Three, and Eight; One, Two, Zero, Three, Five; Three, Seven, and Eight; A Festival of Tabernacles; is sacred assembly's number; Daughters of Zelophehad; is father's inheritance; Reubenites and Gadites; 'Brood of Sinners' Numbers"
  ],

  243: [
    "I AM IN LABOR WITH GOD'S CHILD; The 'Mary of Magdala' Numbers; She stayed with Elizabeth"
  ],

  244: [
    "God Most High's Numbers; The Holiest of the Holy; The Most Important Name; The Numbers of the Lord; A Number of a Crucified Man; A Death From Crucifixion; The Child of Bethlehem; One Hundred Eighty-Two; Numbers One, Two, and Five; One Hundred Fifty-Nine; Two Hundred Forty-Five; The Number Sixty-Seven; One, Four, Five, One, Five; One Hundred Twenty-One; Entered the East Gate; Blessed the Seventh Day; MY TREASURED POSSESSION; Camel Hair and a Leather Belt; John the Baptist's Number"
  ],

  245: [
    "What is the Holiest Name?; The Most Holy of the Holy; Number of God Most High; I AM GOD OF THE UNIVERSE; He is the King of Heaven; This is the Name of My Son; MY MOTHER IS MARY MAGDALENE; I AM DEDICATED TO THE LORD; What're Numbers of Jesus?; He who has the Name of God; A Jesus Christ of Nazareth; Two Hundred Fifty-Nine; One Hundred Eighteen; Two Hundred Eighty-Two; One Hundred Twenty-Two; Numbers Two, Two, and Five; Three Hundred Twelve; The Number Eighty-Nine; One Thousand Ninety-One; Who appeared on Mount Sinai?; Who Came From Mount Sinai?; The Ten Commands of God; Pharaoh's Officers' Number; They who had drowned in a Sea"
  ],

  246: [
    "The Holiest of Numbers; Desert Thorns and Briers; What is a Number of a 'Gideon'?"
  ],

  247: [
    "The Most Holy of Numbers; A Number of God Most High; The Most Sacred Numbers; What are Numbers of Jesus?; He is Mary Magdalene's Child; One Hundred Fifty-Four; The Harvester of Souls; I WILL LOOK ON YOU WITH FAVOR; He shone from Mount Paran"
  ],

  248: [
    "A Number of the Son of God; The Child of Mary and Joseph; He rules with a Rod of Iron; The Numbers Six and Five; Two Hundred Fifty-Four; The Numbers One and Four",
  ],

  249: [
    "The Antichrist's Number; Leader of the illuminati; Who is Johann Adam Weishaupt?; Who are the Non-Believers?; The Number of Amalek's Name; First Among the Nations"
  ],

  250: [
    "What is the Number of God?; A Number of our King and God; Who is the Most High God?; These are Jesus' Numbers; He is the God of the Bible; I AM A MOST IMPORTANT PERSON; The Number of All Numbers; AS SURELY AS I LIVE FOREVER; The 'Crucifixion' Number; Knight in Shinning Armor; I AM THE KING OF THE EARTH; A Number of the Holy Spirit; I DIED AND CAME TO LIFE AGAIN; A Number of the Virgin Mary; One Hundred Fifty-Five; heard the groans of israel; BE STRONG AND COURAGEOUS; I DRIED UP THE JORDAN RIVER [IVRIT] HaMispar Chamishim v'Shivah",
  ],

  251: [
    "(54th Prime #) saved us from midianites; What's the Gideon Number?"
  ],

  252: [
    "Numbers of Jesus Christ; Who is the Messianic King?; He speaks the Words of God; Who lives in the Heavens?; The Number of Jesus' Name; A Knight in Shinning Armor; I AM THE HOLY MOTHER OF GOD; The Mother, Mary Magdalene; She's blessed among women; BROUGHT YOU OUT OF EGYPT; Two Hundred Ninety-Nine; Two Hundred Thirty-Nine; Two, Two, Five, Four, and Zero"
  ],

  253: [
    "I AM THE LORD JESUS CHRIST; Who is Mary Magdalene's Child; King of Righteousness; He's a Child of Mary Magdalene",
  ],

  254: [
    "A Number of the Holy Ghost; Who rules with a Rod of Iron?; One Hundred Ninety-Four; I WILL GUARD YOU ALONG THE WAY; Number of Aaron the Priest; The Man ended the Plague"
  ],

  255: [
    "This is the Holiest Name; OUT OF EGYPT I CALLED MY SON; Two Hundred Thirty-Four; One Hundred Sixty-Three; One Hundred Sixty-Seven; Two Hundred Ninety-Four; Numbers Eight and Seven",
  ],

  256: [
    "The Child of Mary Magdalene; He who is our Savior and King; I AM THE SON OF THE VIRGIN; A Number of Mary Magdalene's Boy; What is the Name of our Son?; The God of Abraham, Isaac, and Jacob; This Number is Holy, Holy, Holy!; Number Two Hundred Sixty; Two Hundred Sixty-Three; Numbers Three, One, and Zero"
  ],

  257: [
    "(55th Prime #) He who is the God of Israel; THE HEAVENS BELONG TO ME; Gave Birth to the Messiah; The 'Mary Magdalene' Numbers; Numbers One, Seven, and One"
  ],

  258: [
    "Numbers of God Most High; Who is the Most Important?; Three Hundred Forty-Two; Two Hundred Ninety-Five; Numbers One, Two, and Three; One Hundred Seventy-One; Number Two Hundred Forty; He knew Moses face to face [IVRIT] Mi Hu Malkeinu v'Eloheinu?"
  ],

  259: [
    "What is God's Name and Number?; What is the Name of our God?; What is the Number of Laish?; A Number of 'Peace and Secure'; One Hundred Seventy-Two; Numbers Two, Two, and Three; Two Hundred Sixty-Eight",
  ],

  260: [
    "The Father of All Creation; Who's the Messiah's Father?; What's the Number of My Name?; Jesus x 4; It's Beyond Understanding; The Name of a Crucified Man; The Proof of Crucifixion; He who suffered on a Cross; He who carried his own Cross; The Presence of the Lord; What is a Number of Salvation?; The Name of God's Anointed; He is the Most Holy Priest; He brings the dead to life; Clock Numerology's Creator; The Number Ninety-Three; The Number Thirty-Seven; The Number Seventy-Nine; Two Hundred Eighty-Four; Six Hundred Twenty-Five; One Hundred Twenty-Four; One Hundred Forty-Eight; Numbers One, Eight, and One; Numbers Two, Eight, and Zero; Four Hundred Twenty-One; Two Hundred Seventy-Two [IVRIT] Mispar Me'ah Shishim Shishah"
  ],

  261: [
    "What is a Number of the King?; Numbers of our King and God; Two Hundred Seventeen; Numbers One, Eight, and Two",
  ],

  262: [
    "The Antichrist's Numbers; He who has Political Control"
  ],

  263: [
    "(56th Prime #) The Name of God Most High; What is the Messiah Number?; The 'Crucifixion' Numbers; The Numbers of this World; What's the Holiest Number?; He is a Child of Mary Magdalene; A Prophet of the Most High; One Hundred Twenty-Five; Two Hundred Eighty-Five; WORSHIP ME AND I WILL BLESS YOU; What are Ten Commandments?; The Twelve Loaves of Bread; Set Before God Most High; What is a Number of Levites?; TEACHES MY PRECEPTS TO JACOB"
  ],

  264: [
    "What's the Most Holy Number?; This is a Number of the Lord; The 'God Most High' Number; A Number of our Lord and Savior; THERE IS NO GOD BESIDES ME; The Spirit of the Church; Who died from Crucifixion?; Two Hundred Twenty-Five; The Numbers Nine and Five; The Numbers Three and Zero"
  ],

  265: [
    "A Number of the Antichrist; These are 'Sinful' Numbers; What is the Number of Hades?",
  ],

  266: [
    "What's the Number of Jesus?; What's the Messiah's Number?; Lord Jesus Christ's Number; Name of Mary Magdalene's Child; The Name of our King and God; His Kingdom will never end; He was crucifed by the Jews; Who is the Most Holy Priest?; This is a Number of the Name; The Name of the Holy Spirit; Three Hundred Fifteen; The Numbers Two and Three; Numbers Four, Nine, and Nine"
  ],

  267: [
    "The Name x 3; He who is Lord Jesus Christ; I'M THE HOLIEST OF THE HOLY; What are the Numbers of God?; One Hundred Fifty-Eight; The Numbers One, Six, and One; Four Hundred Ninety-Nine; MY PRESENCE WILL GO WITH YOU; MY NAME IS ON THE ISRAELITES; I WILL BLESS THE ISRAELITES; The Name 'Zebulun' and 'Issachar'; summon people to mountain"
  ],

  268: [
    "I WILL GRANT PEACE IN THE LAND"
  ],

  269: [
    "(57th Prime #) The Most Holy of all Numbers; Who is a Child of Mary Magdalene?; This is the Name of our God; He's the Lord Jesus Christ; The Number of the Messiah; I AM THE HOLIEST OF THE HOLY; The Numbers Two, Zero, and Zero; Five Hundred Fifty-Five; I WILL COME TO YOU AND BLESS YOU"
  ],

  270: [
    "Who is the Father of Jesus?; Who is the Messiah's Father?; The Numbers Two, Zero, and One; Numbers One, Three, and Nine",
  ],

  271: [
    "(58th Prime #) are numbers of crucifixion; Number One Hundred Ninety; Proclaimed His Name to Moses; had not left the entrance; Aaron, Eleazar, and Ithamar's Number; The Tribe of the Levites; Tabernacle of the Covenant; THE LORD BLESS YOU AND KEEP YOU; Korah, Dathan, and Abiram's Censers; made into sheets of overlay"
  ],

  272: [
    "The Name of Mary Magdalene's Boy; A Number of the God of Israel; I AM THE ONLY WAY TO THE FATHER; He who is Jesus the Christ; The Words of the Covenant; Two Hundred Thirty-Three; Two Hundred Ninety-Seven; Two Hundred Thirty-Seven; Three Hundred Thirty-Two; Two Hundred Seventy-Nine"
  ],

  273: [
    "God x 7; He is the Son of Mary of Magdala; What is the Holiest Number?; MY NAME IS WRITTEN IN HEAVEN; Seven Horns and Seven Eyes; I AM GOD AND THERE IS NO OTHER; Three Hundred Nineteen; Numbers One, Seven, and Four; Three Hundred Thirteen; Numbers Three, Four, and One; Number One Hundred Eight; Three Hundred Eighty-Six; I WILL CIRCUMCISE YOUR HEART; What is the Number of Joshua?; set stone under an oak tree"
  ],

  274: [
    "What is the Most Holy Number?; AN ANGEL APPEARED TO ME IN A DREAM; MY COUSIN IS JOHN THE BAPTIST; One Hundred Seventy-Four; Numbers One, Zero, Nine, and One; Numbers Two, Seven, and Four; Three Hundred Twenty-Six; Numbers Two, Nine, and Eight",
  ],

  275: [
    "Who is the God of this World?",
  ],

  276: [
    "What is the Number of Jesus?; What is the Messiah's Number?; ABCDEFGHIJKLMNOPQRSTUVWXYZ; What is the Meaning of Life?; The answer to all Questions; Numbers One, Four, and Eight; One Hundred Eighty-Three; Number One Hundred Eighty; Numbers One, Seven, and Five; Numbers One, Three, and Five; Who is a Blasphemer of the Name?; The Son of an Israelite Woman; What is a Number of a Name 'Moses'?; YOU SHALL NOT CROSS THE JORDAN"
  ],

  277: [
    "(59th Prime #) The Most High God's Number; These are Messiah's Numbers; What is the Name of the King?; He who is the Prophet of God; The Number of Crucifixion; Who is Dedicated to the Lord?; The Spirit and Power of Elijah; He will go on before the Lord; Two Hundred Eighty-Seven; Number Two Hundred Eighty; One Hundred Twenty-Three; One Hundred Twenty-Seven; Numbers Two, Five, and Three; Numbers Two, Eight, and Four; One Hundred Seventy-Five; I MIGHT DESTROY YOU ON THE WAY; Offering of Firstfruit; is the sheaf of first grain"
  ],

  278: [
    "The Numbers of the Father; A Number of Righteousness; The Numbers Three and Nine; The Numbers Seven and Nine; Three Hundred Eighteen; Number Two Hundred Twenty; Two Hundred Seventy-Five; Two Hundred Twenty-Three; Two, Four, Five, Three, Five; I WILL ENLARGE YOUR TERRITORY; King Herod wanted to Kill Him"
  ],

  279: [
    "The Name of the Lord our God; Lord Jesus Christ's Numbers; He who was nailed to a Crucifix; What is the Name Above All Names?; Who is the Savior of Humanity?; One Hundred Eighty-Eight; Numbers One, Five, and Eight"
  ],

  280: [
    "Seven Hundred Fifty-Four; I CAME WITH MYRIADS OF HOLY ONES; Number is of Israelites' Name; WE ARE HOLY TO THE LORD OUR GOD; All the Holy Ones are in His Hand"
  ],

  281: [
    "(60th Prime # & Sum of First 14 Primes) The Number that is Most Holy; The Number Two Hundred Six; Two Hundred Twenty-Eight; The Numbers Two, Six, and Nine; Who wants to Kill the Messiah?; gave orders to kill all the boys; What's the 'King Herod' Number?"
  ],

  282: [
    "The Numbers of the Messiah; The Numbers One, Nine, and Zero; Number One Hundred Eleven",
  ],

  283: [
    "(61st Prime #) Who will go on before the Lord?; One, Four, Five, Three, and Zero; The Numbers Two, Zero, and Nine; The Numbers One, Six, and Four; The Numbers of the Name 'Aksah'; was given negev and springs [IVRIT] Mi Hu Melech shel Melechim?"
  ],

  284: [
    "This is the Most Holy Number; The Festival of Trumpets; are numbers of a trumpet blast; lived in the town of nazareth"
  ],

  285: [
    "The Number of Jesus Christ; Who is the Lord Jesus Christ?; Who's from the Womb of a Virgin; He's the Holiest of the Holy; The Mighty One, God the Lord; Two Thousand Twenty-Seven; What's the Year of the Rapture?; The Year of Lord Jesus Christ; The Most Important Numbers"
  ], 
  
  286: [
	"This is the Messiah's Number",
  ],

  287: [
    "What is the Number of Benjamin?; RESTS BETWEEN MY SHOULDERS; Who took Jesus and Mary to Egypt?; This is a Number of a Name 'Joseph'"
  ],

  288: [
    "..."
  ],

  289: [
    "The Numbers One, One, and Five; Number Three Hundred Five",
  ],

  290: [
    "The Most High God's Numbers; Who wrote Ten Commandments?; Three Hundred Twenty-Nine; Five Hundred Thirty-Seven; He Descended On Sinai in Fire; He Gave Moses Stone Tablets; I WILL WALK AMONG YOU AND BE YOUR GOD; WITH MOSES I SPEAK FACE TO FACE"
  ],

  291: [
    "The Number of God Most High; He who came down on Mount Sinai; One Hundred Seventy-Three; Numbers Three, Seven, and Two"
  ],

  292: [
    "Two Hundred Seventy-Three; The Number Two Hundred Ten; Two Hundred Seventy-Seven; Numbers Three, Eight, and Zero"
  ],

  293: [
    "(62nd Prime #) What are the Numbers of Jesus?"
  ],

  294: [
    "The Number of the King's Name; The Number of our King and God; Tabernacle of the Covenant Law; is the tribe of the levites; What are the Numbers of a 'Deborah'?; with princes and volunteers"
  ],

  295: [
    "Two Hundred Seventy-Eight",
  ],

  297: [
    "These are the Numbers of God; The Number Two Hundred Nine; Number Two Hundred Forty-Two; Number Eleven Thousand Ten",
  ],

  298: [
    "...",
  ],

  299: [
    "Who is the Most High God's Son?; What is the Number of God's Son?; The 'Lord Jesus Christ' Number; Who is the Anointed One of God?; The King of Righteousness; The Number of the Name of God; Born in the Town of Bethlehem; By His Hand He Defends His Cause; A Land Flowing With Milk and Honey; Five Hundred Twenty-Eight; Number One Hundred Fifty-Six"
  ],

  300: [
    "I AM THE KING OF THE UNIVERSE; The Numbers Two, Nine, and Four; will crush the forehead of moab; Who is in charge of Offerings?; The Number of Aaron the Priest"
  ],

  302: [
    "The Son of the Most High God; Who sits on the Throne of God?; The Number Two Hundred Sixty; The Numbers Three, One, and Zero",
  ],

  303: [
    "The Number of Israelites' Name; WE ARE EXCEEDINGLY FRUITFUL; They have a Beautiful Dwelling; MAY ALL WHO LOVE YOU BE LIKE THE SUN; Number Three Hundred Three; The Numbers One, Seven, and One"
  ],

  304: [
    "What are the Numbers of our God?; The Numbers of God Most High; What is the Name of the Father?; The Numbers One, Two, and Three; Three Hundred Seventy-Nine; The Number Two Hundred Forty; Number Two Hundred Fifty-Two; I HOLD THE KEYS OF HADES AND DEATH; Who came with myriads of Holy Ones?"
  ],

  305: [
    "What are the Numbers of a Holy God?; These are King Herod's Numbers; What is a Number of a 'Disturbed Man'?",
  ],

  306: [
    "...",
  ],

  307: [
    "(63rd Prime #) The Numbers of our King and God; The Number of the Lord our God; The Numbers of the Virgin Mary; What're Numbers of Mary Magdalene?; He who called the Magi secretly; The Number of King Herod's Name; Three Hundred Ninety-Eight; Number Two Hundred Sixty-Nine; The Numbers One, Eight, and Two; Four Hundred Seventy-Seven"
  ],

  308: [
    "The Number of the God of Gods; What is the Name of the Messiah?; The Number of a Crucified King; The Numbers Two, Eight, and Two; Number One Hundred Forty-Nine [IVRIT] Misparim shel Yehoshua HaMashiach",
  ],

  309: [
    "What are Jesus Christ's Numbers?; The Name of the Most High God; What's the Number of Jesus' Name?; The Name that is Above Every Name; Numbers Three, Four, and Eight; I PUT TO DEATH AND I BRING TO LIFE"
  ],

  310: [
    "This is a Number of 'Crucifixion'",
  ],

  311: [
    "(64th Prime #) Who remembers His Holy Covenant?; The Lord our God, the Lord is One; HIGHEST HEAVENS BELONG TO ME"
  ],

  312: [
    "The Number of the Child of God; The Name of Mary Magdalene's Child; Number Two Hundred Forty-Four",
  ],

  313: [
    "(65th Prime #) What's the Most Holy Number of All?; He who is the Lord Jesus Christ; What is the Holiest of Numbers?; Number Two Hundred Twenty-Six; The Number Three Hundred Six; A Faithful God Who Does No Wrong; I WILL BE WITH YOU WHEREVER YOU GO"
  ],

  315: [
    "What is a Number of the Son of God?; Eight Hundred Eighty-Eight",
  ], 
  
  316: [
	"This is a Number of God's Name",
  ],

  317: [
    "(66th Prime #)"
  ],

  318: [
    "What are the Most Holy of Numbers?; The Numbers Three, Zero, and Four; Who shows Mercy to our Ancestors?",
  ],

  320: [
    "The Numbers of the Lord our God; Whose cousin is John the Baptist?; The Numbers One, Zero, Nine, and One",
  ],

  321: [
    "These are the Most Holy Numbers; will crush the skulls of sheth"
  ], 
  
  322: [
	"He is the Lord of Heaven and Earth",
  ],

  323: [
    "These are the Messiah's Numbers; What's the Name of our King and God?; What is the Most Holy Number of All?; Whose Father is the Lord our God?; Who is the God of the Universe?; A Number of the King of Jerusalem; The Numbers Two, Eight, and Four; The Numbers Two, Five, and Three"
  ],

  324: [
    "(18 x 18); This is a Number of God Most High; He will bless the crops of your land; The Number Two Hundred Twenty"
  ],

  326: [
    "The Lord our God x 2; The Number of Lord Jesus Christ; What's the Number of the Messiah?; He is the King of the Universe; He is filled with the Holy Spirit; Number One Hundred Sixty-Three; Number Two Hundred Thirty-Four; Number One Hundred Sixty-Seven; Number Two Hundred Ninety-Four; Numbers Three, Seven, and Eight"
  ],

  328: [
    "(Sum of First 15 Primes)",
  ],

  329: [
    "The Name of the Messiah's Father; The Number of the God of Heaven",
  ],

  331: [
    "(67th Prime #) What is the Name of the Son of God?; Number Two Hundred Eighty-Four"
  ],

  332: [
    "Who is filled with the Holy Spirit?; The Number Four Hundred Seven",
  ],

  333: [
    "What is Lord Jesus Christ's Number?; What is the Name of our King and God?; I AM THE WAY, THE TRUTH, AND THE LIFE; The Numbers Three, Three, and Six; Number One Hundred Eighty-Five; Numbers Four, One, Zero, Zero, and Five; descended on mount sinai in fire",
  ],

  334: [
    "What are the 'Crucifixion' Numbers?; Number One Hundred Twenty-Five; He will clear His Threshing Floor",
  ],

  336: [
    "The Numbers of the Most Holy Name; What is the Number of the Messiah?; He has the Power of the Most High; Number Two Hundred Fifty-Three; Number Two Hundred Fifty-Seven; Numbers Two, Two, Five, Four, and Zero; The Numbers One, Three, and Three",
  ],

  337: [
    "(68th Prime #) The Number of the Most High God; I COVERED THE TENT OF MEETING; The Numbers Three, Seven, and Two; The Number Two Hundred Sixty-Six"
  ],

  338: [
    "The Name and Number of the Messiah; The Numbers of the Name of Jesus; The Number Two Hundred Seventy; The Numbers Three, Zero, and Eight; Number One Hundred Fifty-Eight; Number Four Hundred Ninety-Nine",
  ],

  339: [
    "What is the Name of Mary Magdalene's Boy?; What is the Most Important Number?; EARTH IS MINE AND EVERYTHING IN IT; The Lord Reigns Forever and Ever; I WILL PUT MY DWELLING PLACE AMONG YOU; The Number Two Hundred Forty-Six"
  ],

  340: [
    "This is the Name of God Most High; Who will clear His Threshing Floor?; The Numbers Two, Seven, and Eight",
  ],

  341: [
    "The Number of Jesus Christ's Name; This is a Number of a Crucified King; The Number One Hundred Forty-One",
  ], 
  
  342: [
	"What's the Number of Jesus Christ?; Number Three Hundred Thirty-One; The Numbers One, Four, Five, and Zero",
  ], 
  
  343: [
	"(343 = 7 x 7 x 7) This is the Name of our King and God; I WILL NEVER LEAVE YOU NOR FORSAKE YOU",
  ],

  345: [
    "These are Numbers of 'Crucifixion'; What is the Messiah's Name and Number?; He fulfilled all Righteousness; He put Moses' spirit on the Elders; He will Bless the Fruit of your Womb; Pregnant through the Holy Spirit; The Number One Hundred Fifty-Six; Number One Hundred Ninety-Eight; Number One Hundred Seventy-Four [IVRIT] HaMispar Sheva Me'ot Chamishim ve'Arba'ah"
  ],

  346: [
    "What's the Number of Pharaoh of Egypt?; WHO IS THE LORD THAT I SHOULD OBEY HIM?"
  ],

  347: [
    "(69th Prime #)"
  ],

  348: [
    "Number One Hundred Twenty-Three",
  ],

  349: [
    "(70th Prime #)"
  ],

  350: [
    "The Numbers of the Most High God; Baptizes with Fire and the Holy Spirit",
  ],

  352: [
    "What is the Number of Jesus Christ?; These are the Numbers of the King; The Number of our Father in Heaven; shines on those living in darkness; The Number Three Hundred Eight; The Number One Hundred Thirty-Six; The Number One Hundred Ninety-Six; Number Two Hundred Twenty-Eight",
  ], 
  
  353: [
	"These are the Numbers of God's Name",
  ],

  354: [
    "What is the Meaning of Everything?; has all authority on Earth and in Heaven; He will rule over Jacob's Descendants"
  ], 
  
  356: [
	"He who is the Lord of Heaven and Earth",
  ],

  358: [
    "The Numbers Three, Five, and Eight; The Number Two Hundred Thirteen; The Number Two Hundred Eighty-Six",
  ],

  360: [
    "What is a Number of the Most High God?; The Numbers One, Four, Zero, One and Zero; Who will rule over Jacob's Descendants?",
  ],

  361: [
    "What is the Number of the Holy Spirit?; The Numbers of the Name of God's Son; What is the Number of our King and God?; Number Three Hundred Forty-Three; The Number One Hundred Eighty-Two"
  ],

  366: [
    "What is the Number of the Name of God?; These are the Numbers of Jesus' Name; I WILL TAKE VENGEANCE ON MY ADVERSARIES"
  ],

  372: [
    "The Number of the Lord Jesus Christ; The Name of the Child of Mary Magdalene; The Numbers Three, Eight, and Seven; The Number Three Hundred Sixty-One; The Number Two Hundred Ninety-Four",
  ], 
  
  374: [
	"What is the Number of the Lord our God?",
  ],

  375: [
    "The Number Two Hundred Ninety-Five",
  ],

  376: [
    "These are Numbers of a Crucified King; I AM MORE POWERFUL THAN JOHN THE BAPTIST",
  ],

  378: [
    "What are the Numbers of our King and God?; What are the Numbers of the Holy Spirit?; The Number Two Hundred Twenty-Four",
  ],

  379: [
    "These are the Numbers of the Father; The Numbers Four, One, Zero, Zero, and Five; THE WORLD IS MINE AND EVERYTHING IN IT"
  ],

  380: [
    "The Number One Hundred Twenty-Five",
  ],

  381: [
    "(Sum of First 16 Primes) The Number Two Hundred Twenty-Five; Two Thousand Two Hundred Fifty-Nine",
  ],

  382: [
    "What are the Numbers of the Holy Ghost?; He will take vengeance on his enemies; The Number Two Hundred Fifty-Three"
  ], 
  
  383: [
	"These are the Numbers of the Messiah",
  ],

  385: [
    "The Numbers of the Lord Jesus Christ; This is the Number of a Crucified King; The Number Two Hundred Fifty-Eight; The Number Three Hundred Thirty-Six; Number One Thousand One Hundred Nine",
  ], 
  
  389: [
	"What're the Numbers of the Lord our God?",
  ],

  390: [
    "What is the Number of the Most Holy Name?; The Number Three Hundred Eighty-Six; The Numbers Six, Three, Three, and Five"
  ], 
  
  391: [
	"What are the Numbers of the Lord our God?",
  ],

  395: [
    "walks among the seven golden lampstands"
  ], 
  
  396: [
	"What is the Name of the Messiah's Father?",
  ],

  399: [
    "defends the cause of the fatherless; He will avenge the Blood of His Servants; Eleven Thousand Five Hundred Thirty"
  ],

  400: [
    "What are the Numbers of the God of Israel?; I WILL MAKE ATONEMENT FOR MY LAND AND MY PEOPLE; Number of those who live in Hill Country; Who is Hittites, Jebusites, and Amorites?"
  ], 

  401: [
    "Guides our feet into the Path of Peace",
  ],

  405: [
    "These are the Numbers of God Most High",
  ],

  407: [
    "What is the Most Holy Number of all Numbers?",
  ],
  
  408: [
	"These are the Numbers of our King and God",
  ],

  411: [
    "The Number One Hundred Seventy-Eight",
  ],

  412: [
    "A Light for Revelation to the Gentiles",
  ], 
  
  415: [
	"This is the Name and Number of the Messiah",
  ], 
  
  419: [
	"What're the Numbers of the Most High God?",
  ],

  421: [
    "What are the Numbers of the Most High God?; These are the Numbers of the Lord our God",
  ],

  422: [
    "Six Thousand Three Hundred Thirty-Five",
  ],

  423: [
    "He walks among the Seven Golden Lampstands"
  ],

  439: [
    "What is the Number of the Lord Jesus Christ?",
  ],

  440: [
    "(Sum of First 17 Primes)",
  ], 
  
  477: [
	"What is the Number of the Name of our King and God?",
  ],

  499: [
    "He will love you and bless you and increase your numbers; YOU ARE A PRIEST FOREVER IN THE ORDER OF MELCHIZEDEK"
  ],

  501: [
    "(Sum of First 18 Primes)",
  ],

  537: [
    "IN THE BEGINNING I CREATED THE HEAVENS AND THE EARTH", 
	],
  },
  cipher2: {
	1: [
		"A; D; W; Z",
	],

    2: [
    "(1st Prime #) F; U",
    ],

    3: [
      "(2nd Prime #) H; S",
    ],
	
	4: [
		"J; Q",
	],

    5: [
      "(3rd Prime #) C; L; O; X",
    ],

    7: [
      "(4th Prime #)",
    ],

    11: [
      "(5th Prime #)",
    ],

    13: [
      "(6th Prime #) B; Y",
    ], 
	
	15: [
		"E; V",
	],

    17: [
      "(7th Prime #) Yah"
    ],

    19: [
      "(8th Prime #)",
    ],

    20: [
      "[IVRIT] YHWH; HaAv",
    ],

    21: [
      "Yasha",
    ],

    23: [
      "(9th Prime #) Yahuah; Yashua",
    ],
	
	25: [
		"G; T",
	],

    26: [
      "Holy",
    ],

    27: [
      "Jesus",
    ],

    29: [
      "(10th Prime #)",
    ],

    31: [
      "(11th Prime #); God; Yahoshua; Two [IVRIT] Yahoshua",
    ],

    34: [
      "[IVRIT] YHVH",
    ], 
	
	35: [
		"I; R",
	],

    36: [
      "Yahweh",
    ],

    37: [
      "(12th Prime #) Yeshua",
    ],

    40: [
      "Love",
    ],

    41: [
      "(13th Prime #)",
    ],

    43: [
      "(14th Prime #) Who's God?; Six",
    ],

    44: [
      "Four",
    ],

    45: [
      "K; P; Yehoshua",
    ],

    46: [
      "Jehovah",
    ],

    47: [
      "(15th Prime #)",
    ],

    48: [
      "",
    ],

    53: [
      "(16th Prime #)",
    ], 
	
	55: [
		"M; N",
	],

    56: [
      "Zero [IVRIT] IHVH",
    ],

    57: [
      "...",
    ], 

    58: [
      "(Sum of First 7 Primes)",
    ],

    59: [
      "(17th Prime #)",
    ],

    61: [
      "(18th Prime #)",
    ],

    62: [
      "...",
    ],

    66: [
      "..."
    ],

    67: [
      "(19th Prime #) Five",
    ],

    71: [
      "(20th Prime #)",
    ],

    73: [
      "(21st Prime #) Lord Jesus; Our God; Who is Holy?",
    ],

    74: [
      "Who is Jesus?; Two, Six",
    ],

    75: [
      "One; Two, Four",
    ],

    78: [
      "Who is God?; Holy, Holy, Holy!",
    ],

    79: [
      "(22nd Prime #)",
    ],

    80: [
      "Forty [IVRIT] HaShem",
    ],

    81: [
      "Father; Who is Just?",
    ],

    83: [
      "(23rd Prime #) He is Jesus; A Hebrew; God's Child",
    ],

    85: [
      "...",
    ],

    89: [
      "(24th Prime #)",
    ],

    91: [
      "I AM; Holiest",
    ],

    92: [
      "Yasha Mashach [IVRIT] Yasha Mashach; Ze Shem",
    ],

    93: [
      "Light; Follow Me; Three; Two, Two, Two",
    ], 
	
	96: [
		"[IVRIT] Ze HaShem",
	],

    97: [
      "(25th Prime #) God's Son; He who has God's Blood",
    ], 

    98: [
      "[IVRIT] Adonai",
    ],

    100: [
      "Beautiful",
    ],

    101: [
      "(26th Prime #) Son of God",
    ],

    103: [
      "(27th Prime #) Eight; Seven [IVRIT] Bni",
    ],

    106: [
      "Christ; One, Two; Four, Two, Two [IVRIT] Eli Avi",
    ],

    107: [
      "(28th Prime #)",
    ],

    109: [
      "(29th Prime #)",
    ],

    111: [
      "Four, Five; Forty-Two [IVRIT] Shemi; Ani HaAv",
    ],

    113: [
      "(30th Prime #)",
    ],

    114: [
      "Most Holy",
    ],

    115: [
      "Messiah; The God of Gods; Blameless; Tasted Death [IVRIT] ",
    ],

    117: [
      "I AM HOLY",
    ],

    118: [
      "Elohim; I AM JESUS; Two, Zero, Two; One, Six [IVRIT] Elohim",
    ],

    119: [
      "Our Lord God; Sinless; Grace of God; One, Four; Two, Four, Four",
    ],

    120: [
      "Who is our God?; Our Husband; Eleven",
    ],

    122: [
      "I AM GOD; Heavenly; Whose ways are Holy?",
    ],

    123: [
      "The Word of God; Our Father; Mercy [IVRIT] Hu Elohim; Hu Beni",
    ],

    124: [
      "The Father; Holiness; Crucifix; Sixty-Six; Three, Two",
    ],

    125: [
      "...",
    ],

    126: [
      "Name; Who's Most Holy?; The Words of God",
    ],

    127: [
      "(31st Prime #) Who's Messiah?; He who's God's Son; He who is God's Flesh; Holy Grail",
    ],

    129: [
      "...",
    ],

    130: [
      "The Holy Ghost; Root of David; The Child of God; He who is Judge of All",
    ],

    131: [
      "(32nd Prime #) My Son; Favored by God; Two and Six; Four, Zero, Two",
    ],

    132: [
      "Forgive; Two and Four",
    ],

    133: [
      "Jesus Christ; The Truth; Very Blessed; He Tasted Death; Key of David [IVRIT] ",
    ],

    134: [
      "Two, Seven; Twenty; Two, Eight",
    ],

    135: [
      "Crucified",
    ],

    136: [
      "Our Savior; He's Messiah; Gospel of God; The Light; Who is the Lord?; Nazareth; The Holy Blood of God; Cures Diseases; He's the God of Gods; He who's the Son; He's Blameless; Who is called by God?; Paradise; Thirty; Three, Six",
    ],

    137: [
      "(33rd Prime #) Yahoshua Mashiach; The Savior [IVRIT] Yahoshua Mashiach; Ani Jehovah; Zeh Beni",
    ],

    139: [
      "(34th Prime #) Holy One of God",
    ],

    141: [
      "Yahoshua HaMashiach; Two, Five, Six [IVRIT] Yahoshua HaMashiach; HaShem Sheli",
    ],

    142: [
      "The Holy of Holies; God of Heaven; Double-Edge Sword",
    ],

    144: [
      "The Son of God; He who has the Blood of God; The Holy One; Who is God's Son?; Two and Zero; Four and Six",
    ],

    145: [
      "Salvation; Holy to the Lord",
    ],

    146: [
      "...",
    ],

    147: [
      "Yeshua HaMashiach; Four, Seven; Four, Eight [IVRIT] Yeshua HaMashiach; ANI IHVH; Echad, Shmona",
    ],

    148: [
      "Most Sacred [IVRIT] HaBen Sheli",
    ],

    149: [
      "(35th Prime #) Who was Crucified?; Two, One, Six [IVRIT] Ani Kadosh; HaBen shel Yahweh",
    ],

    150: [
      "Faithful One; The Holy Bible; The Heavens; Two, Two, and Two; Two, Four, One; One, One",
    ],

    151: [
      "(36th Prime #)",
    ],

    153: [
      "Five, Six, Six",
    ],

    154: [
      "Three Sixes; Fourteen",
    ],

    155: [
      "Yehoshua HaMashiach; The Lamb of God; Who is Jesus' Father?; God the Father; Two and Five; Forty-One [IVRIT] Yehoshua HaMashiach; Ehyeh Asher Ehyeh",
    ],

    156: [
      "Sixty-One",
    ],

    157: [
      "(37th Prime #) Lord of Heaven; The Most Holy; Who's Holy to the Lord?; He's the Light; Fed Four Thousand; Four and Zero [IVRIT] Ze HaShem Sheli; Shmona, Efes",
    ],

    158: [
      "The Father of Jesus; The Messiah; Heals the Sick; He was Crucified; Whose words are Flawless?; A Scarlet Robe; Our Majesty; Related to God",
    ],

    159: [
      "O Most High",
    ],

    160: [
      "(Sum of First 11 Primes) God's Name; Holy and True; King; INRI; Fulfilled the Law of God; Nine",
    ],

    161: [
      "Yeshua HaMeshiach; Who is Most Holy?",
    ],

    162: [
      "The Lord our God; Two, Two, and Six; One, Two, Zero",
    ],

    163: [
      "(38th Prime #)",
    ],

    165: [
      "Yehoshua Meshiach; Two, Eight, Two; Two, Two, Seven",
    ],

    166: [
      "...",
    ],

    167: [
      "(39th Prime #) Holiest of the Holy; Five, Four, Zero; Two, Three, Six",
    ],

    168: [
      "Four and Five",
    ],

    169: [
      "Yehoshua HaMeshiach; The Name; Who fulfilled the Law of God?; Who defeated Satan?; I AM HOLY, HOLY, HOLY!; He who is our Shield [IVRIT] Yehoshua HaMeshiach; Kadoshi Shem; IHShVH HMShICh; Emi Betulah; HaKadosh Yisrael",
    ],

    170: [
      "Jesus of Nazareth; Five, Eight",
    ],

    172: [
      "...",
    ],

    173: [
      "(40th Prime #) City of Tyre; Gateway to the Sea",
    ],

    174: [
      "Son of Mary; I AM A HEBREW; Two Hundred Two; One, Six, Zero; Two, Six, and Six"
    ],

    175: [
      "I WAS CRUCIFIED",
    ],

    176: [
      "Jesus the Christ; The Father's Child; One and Four",
    ],

    177: [
      "Twenty-Six [GREEK] Iesous Christos",
    ],

    178: [
      "Two, Four, Seven; Twenty-Four",
    ],

    179: [
      "(41st Prime #) Lord Jesus Christ; He's the Messiah; He who is Most Holy; The Gospel of God; A King of Judah; He is Head of the Church; He's related to God; Sun and Shield; A Rod of Iron; A Seed on Good Soil; Thirty-Six; Five, Zero, Zero; Five Hundred; Six, Three, Six",
    ],

    180: [
      "Who is Jesus Christ?; Who Healed the Sick?; Three, Zero, Two; Three, Four, Six; Fifty-Eight; Thirty-Four",
    ],

    181: [
      "(42nd Prime #)",
    ],

    185: [
      "God Most High; Most Holy Place; Who is Mary's Boy?; The God of Heaven; Creator of Life; Jesus the Messiah; He who heals the Sick; I RAISE THE DEAD; Mary's Husband; Merciful God; Most Pure; He's the Glory of God; The Double-Edge Sword; One, Five, Six; Seventy-Four; Four, Six, Two, Five; Two, Zero, Five, Two",
    ],

    186: [
      "Two Hundred Six; One, Four, Five; Two, Five, and Two",
    ],

    187: [
      "(187th Prime # is 1117) Four Hundred Two [IVRIT] Mi Hu Yasha Mashach?; Shmona ve'Efes",
    ],

    188: [
      "Two, Zero, and Four; Eighteen",
    ],

    190: [
      "Our Heavenly Father; Glorious One",
    ],

    191: [
      "(43rd Prime #) I AM WHO I AM; Who is the Son of God?; He's Mary's Son; Two and Eight; Two and Seven; Nine, Two; Three, Two, Five",
    ],

    193: [
      "(44th Prime #) God Almighty; Our Maker; One, Two, Six, Four [IVRIT] Mi hu Adonai?",
    ],

    194: [
      "One, Four, One; Two, Two, and One; Three and Four",
    ], 

    195: [
      "...",
    ],

    196: [
      "Seven, Three; Eight, Three",
    ],

    197: [
      "(45th Prime # & Sum of First 12 Primes) The Most High; Lord and Savior [IVRIT] Zeh HaMispar",
    ], 

    198: [
      "[IVRIT] HaShem Elohim",
    ],

    199: [
      "(46th Prime #) Four Hundred Six",
    ],

    200: [
      "Mary of Magdala; Virgin",
    ],

    201: [
      "Holy Number; Supreme God; Living God; He had Twelve Apostles; Who walks on Water?; Five, Two, Eight; Twenty-Five",
    ],

    202: [
      "Jesus' Number; Our King; Unblemished; Who is the Lamb of God?; The New Song",
    ],

    203: [
      "The King; The Child of Mary; Four, Zero, Eight; Three, Five, Six",
    ],

    204: [
      "Holy Spirit; Who is the Most Holy?; Holy Number; Four, Nine; Four and Eight",
    ],

    205: [
      "Jesus' Numbers; Who is the Messiah?; A Slaughtered Lamb; He Never Died; The Greatest of All; The God of the Bible; I AM MOST HOLY; Three Hundred; Two, Two, Zero, Two, Zero",
    ],

    206: [
      "God Number; Superior God; New Jerusalem; Died on the Cross; The Holy Bride of God; Virginal; The Altar of the Lord; Number Two; Eight, Eight; One, Two, and Six; Three and Zero; Seven, Eight",
    ],

    207: [
      "A God Number; The Name of God; The God of our Fathers; He who is Perfect; Who led a Sinless Life?; He has the Power of God; He who fed Five Thousand; Who is our Helper?; He is Eternal; He is Highly Exalted; THE WORLD HATES ME; One, Four, and Two; One and One",
    ],

    208: [
      "Forgiveness [IVRIT] mi-Elohim",
    ],

    209: [
      "God's Number; The God of the Hebrews; He overcame death; He who conquered Death; Who is the Lord our God?; The Shield Around Us; Two, One, Eight; One, Five, Five; Twenty-One; Eighty-Three; Two, One, Seven [IVRIT] HaMelech Yisrael; Ani Elohim",
    ],

    210: [
      "The Holiest of the Holy; A Number of Jesus; Mediator of God; Who's from Galilee?; Two Hundred Five",
    ],

    211: [
      "(47th Prime #) Thirty-One; Who is the Creator?; He is Lord of the Sabbath; Prophet of God; Who is the Glory of God?; He holds the Key of David; He is the Lamb of God; I WAS DEAD FOR THREE DAYS; Three, One, Six; Two, Zero, and Five [IVRIT] Shmonim",
    ],

    212: [
      "God's Numbers; Numbers of Jesus; Faithful Witness; A Prophet of God; Three, Two, and Two; Three, Four, One; Four, Four, and Five",
    ],

    213: [
      "Bethlehem Star; Number of God; Our Deliverer; Seventeen [IVRIT] Mi hu Elohim?"
    ],

    214: [
      "A Number of God; Divinity; He is the Messiah; Seven, Five, Four; Four, Eight, Five",
    ],

    216: [
      "Numbers of God; He who has the Power of God; Rose from the Dead; Who offers Salvation?; Spirit of God; The Slain Lamb; He led a Sinless Life; Who's our Stronghold; He who is Eternal; He is our Helper; The Prophet; One, Five, Six, Two; Three, Zero, Five",
    ],

    217: [
      "One, One, Five; Two, One, Seven",
    ],

    218: [
      "The Number; Eternity; The Universe; He is the Lord our God; He who is the Ruler of Judah; MY WILL BE DONE [IVRIT] Hu Malkeinu",
    ],

    219: [
      "Two Hundred Twelve; One, Two, and Zero; Number Four",
    ],

    220: [
      "My Holy Name; Exalted Above Heaven; He who holds the Key of David; Rightful Heir; He is the Glory of God",
    ],

    221: [
      "The Numbers; Our Lord Jesus Christ; Shepherd of Israel; The Lord our Rock; The King of Judah; The Nazarene; The Ruler of Earth; Right Hand of God; Six, Eight, One; One, Seven, Six",
    ],

    222: [
      "The Lord Jesus Christ; Arrested by the Jews; He who lives Forever; Who was led to the Slaughter?; A Shepherd of Israel; Who is slow to anger?; He is the Head of the Church; Consecrated by God; Who is Superior?; He who is the Most Holy; He is the Son of David; HAVE MERCY ON US!; Who is the God of Israel?; Antichrist; Two, Two, and Eight; One, Four, Seven; Eight, Four, One; Two, Nine, Two; Two, Two, and Seven; Four, Eight, One",
    ],

    223: [
      "(48th Prime #) Two Hundred Forty",
    ],

    224: [
      "Three, Zero, One",
    ],

    225: [
      "The Eternal God; God of all Creation; He Delights in Us; Who is the Author of Life?; A High Priest; Without Blemish; Hates Wickedness; I HOLD THE KEY OF DAVID; He who is our Helper; Three and One; One, One, Two, and Two; Three, Four, and Two; One, Four, Two, One",
    ],

    226: [
      "The Salvation of God; The One True God; He is Mary's Son; He who was nailed to a Cross; He's the God of the Bible; I'M THE LIGHT; Presence of God; Face like the Sun",
    ],

    227: [
      "(49th Prime #) What's My Name?; A Beautiful Name; This is the Word of God; God's Promise; Holiest of Names; What's the Holy Number?; Twenty-Three; A Presence of God; The House of My Father; The Mind of God; A Face like the Sun; I AM THE LIGHT; Two, Eight, Three; Two, Three, Seven; Five and Eight",
    ],

    228: [
      "The Most High God; What's the Holy Name?; He's the God of our Fathers; Name of a Savior; What is God's Name?; Our Strength; God's Pseudonym; Who descended from Judah?; The Most Holy Place; The Creator of Life; Forgives Sin [IVRIT] Ani Yahoshua Mashiach",
    ],

    229: [
      "(50th Prime #) Died for Our Sin; Who's the Son of Mary?; He who is the Glory of God; Baptized by John; Ninety-Two; Three, Three, Six",
    ],

    230: [
      "Holds the Seven Stars; Blessed Number; Most Perfect; The World Hates Him; Sinless Man; One, Four, Four, Five [IVRIT] Shnayim ve'Efes",
    ],

    231: [
      "One, Six, and Zero",
    ], 
	
	232: [
		"Who is God Most High?",
	],

    233: [
      "(51st Prime #)",
    ],

    235: [
      "What's a Holy Number?; Holiest Name of All; Special Name; THIS IS MY SON; I AM THE SON OF GOD; The Son's Name; Scared Number; A Crown of Thorns; Has Many Crowns; The Blessing of God; Who is a Servant of God?; He watches over Israel; Eight and One; One and Seven; One, Nine; Two, Four, Nine; Four, Five, and Five; One, Five, Three; Two, Four, and Seven",
    ],

    236: [
      "I AM THAT I AM; A Sacred Number; Who's the Son of Man?; Most Righteous; Sacrificial Lamb; Who is without Sin?; Descendant of David; I AM THE LORD OF LORDS; The Eternal Word; I AM HOLY TO THE LORD; Three Hundred Two; Four Hundred Forty",
    ],

    237: [
      "What is the Name?; The Son of the Father; A Sacrificial Lamb; Died on a Crucifix; Twenty-Seven; Four Hundred Sixty; Three, Four, and Six; Two, Eight, Seven; Two, Zero, and Three; Five, Seven, Five",
    ],

    238: [
      "(Sum of First 13 Primes) Holiest of all Names; Two Hundred Ten [IVRIT] Ani Yeshua HaMashiach",
    ],

    239: [
      "(52nd Prime #) Our Lord and Savior; Lord God Almighty",
    ],

    240: [
      "The Mystery of God; Three, Seven, Four",
    ],

    241: [
      "(53rd Prime #)",
    ],

    242: [
      "What's God's Number?; Four, Six, Two, and Five; Two, Zero, Five, and Two",
    ],

    243: [
      "My Number; What's a Number of Jesus?; One, Five, and Four; Two, Two, Three, and Two",
    ],

    244: [
      "Who is the Most High; The Holy Number; Most Divine; Revelation of God; Messiah's Name; The Living God; The Supreme God; Does the will of the Father; Seventy-Eight; One, Zero, and Zero"
    ],

    245: [
      "The Jesus Number; Living One; Our Heavenly Father; The Holy One of Israel; One, Five, Eight; One, Five, Seven",
    ],

    246: [
      "Two Hundred Seven; Two Hundred Eight [IVRIT] Ani Yehoshua HaMashiach; Melech ve'Elohim",
    ],

    247: [
      "The Holy Numbers; The Holy Spirit; Four, Six, Nine; Two, Nine, Zero; Two, Zero, and Seven; Four, Eight, and Six",
    ],

    248: [
      "King and God; Nine and Two; Three Hundred Six; Two, Three, and Five",
    ],

    249: [
      "The God Number; He Never Sins; Who is our King?; Who raises the Dead to Life?; Holy Trinity; I AM THE MESSIAH; Who is Unblemished?; Who's a descendant of David?; Who fathers the Drops of Dew?; Enlightened; Anointed by God; Who raises the Dead to Life?; Miraculous Power; I GUIDE THE HUMBLE; Six, Three, and Zero",
    ],

    250: [
      "He who is God Most High; King of Glory; Four, Seven, Eight; One, Two, Six, and Four; Four, Eight, Eight; One, Six, and One",
    ],

    251: [
      "(54th Prime #) The Lord Almighty; Two Hundred Fifty-Two; One, One, and Four",
    ],

    252: [
      "The God Numbers; The Number of Jesus; He died on Passover; A Wonderful Counselor; Who is the God of the Bible?; Who revealed His Word to Jacob?; He who hates Wickedness; Three, Zero, Seven; Three, Eight, Zero",
    ],

    253: [
      "The Bride of Heaven; The Keys to Heaven; Awesome and Great; Three and Seven; Eight and Three; Three, Five, Three; Three, Nine",
    ], 
	
	255: [
		"The Numbers of Jesus; One, Zero, Three, Two",
	],

    256: [
      "The Number of God; God of the Universe; Be Still Before Me; One, Two, and Three",
    ],

    257: [
      "(55th Prime #)",
    ],

    258: [
      "He is our King; Seven Hundred Six; One Hundred Forty-Seven; Eight, Five, and Two [IVRIT] HaMispar HaShem",
    ],

    259: [
      "The Numbers of God; MY NAME IS JESUS; Who shows the dawn its place?; The Spirit of God; Four Hundred Seven; Five Hundred Forty [IVRIT] HaBeyoter Kadosh Shem; Ani HaB'yoter Kadosh; Ani HaRuach Elohim; HaMispar Ruachi",
    ],

    260: [
      "He's our Lord and Savior; Everlasting God; The Holiest Name; I FORGIVE SIN; He who knows the Father; Heavenly Throne; Three, Six, and Five",
    ],

    262: [
      "What is My Name?; The Crucifixion; I HOLD THE SEVEN STARS; I DESIRE MERCY; Divination; One Hundred One; Thirty-Two Thousand; Two, One, Zero, Four, Zero",
    ],

    263: [
      "(56th Prime #) God is My Name; I FORGIVE SINS; One, Zero, and One; Three, Seven, Five",
    ],

    265: [
      "Earth is My Footstool"
    ],

    266: [
      "The Trinity; Holiest Number; I AM THE LORD YOUR GOD; The Righteous One; I AM SLOW TO ANGER; Spirit of Grace; I AM SUPERIOR; I AM THE MOST HOLY OF ALL; Exalted above the Heavens; Refined Silver; He who forgives all Sin; Dawning Light; I AM THE SON OF GOD'S HOUSE; Two, One, and Eight; One, Two, Nine; One, Five, and Five; Two Hundred Forty-Six; One, Two, and Seven [IVRIT] Mispar Yasha Mashach",
    ],

    267: [
      "Son of the Most High; Two Hundred Sixty-Six",
    ],

    268: [
      "One Hundred Sixty",
    ],

    269: [
      "(57th Prime #) Who is the Lord Jesus Christ?; Promised One; Three, Four, and One",
    ],

    270: [
      "What is Jesus' Number?; Christianity; Forgives our Sin; I SPEAK THE WORDS OF GOD; What is a Holy Number?; The Godly Numbers; I AM LORD JESUS CHRIST; The Holiest of Names; Let Us Worship Him; Nineteen; Six, Five, and Seven [IVRIT] Ani Beyoter Kadosh; HaKadosh mi-Elohim",
    ],

    271: [
      "(58th Prime #) King of Heaven; Eight, Three, One; Three, One, Seven; Two, Three, Four, Eight",
    ],

    272: [
      "I DIED ON A CRUCIFIX; A Son of a Virgin; Savior's Number; Most Holy Priest; Who is without blemish?; My Holy Numbers; Rides the White Horse; He Created all Things; Four Hundred Eighty; Three Hundred Five",
    ],

    273: [
      "...",
    ],

    275: [
      "Who is the Most High God?; What is the Name of God?",
    ],

    276: [
      "Holiest of Numbers; The King of the Jews; Who lives in Heaven?",
    ],

    277: [
      "(59th Prime #) What is God's Number?; Mary Magdalene; Eternal Name; Name of the Son of God; God of Abraham, Isaac, and Jacob; The Crown of Thorns; What's Messiah's Name?; He's God of the Universe; The First and the Last; Who holds the keys of Death and Hades?; Two Hundred Twenty",
    ],

    278: [
      "He is the Lord Jesus Christ; Prince of Peace; Number Seven; Two, Two, Five, Three, Zero",
    ],

    279: [
      "Number of God's Son; Four Hundred Forty-Six; One, Nine, Four; Three, Three, Three; One, Four, and Eight; One, Four, Three, Five",
    ],

    280: [
      "A Number of God's Son; Three Hundred One",
    ],

    281: [
      "(60th Prime #)",
    ],

    282: [
      "What is a Number of God?; One, One, and One",
    ],

    283: [
      "(61st Prime #) The Most Holy Name; Who Bears the Name of God?; The Temple of our God",
    ],

    285: [
      "He Lives in Heaven; Subdues peoples under us; Meditates on the Law; I'M AN ANGEL OF GOD; I HAVE COME TO FULFILL THE LAW",
    ], 
	
	286: [
		"What are Jesus' Numbers?; Three Hundred Sixty; Number Forty-Two",
	],

    287: [
      "Holiest of all Numbers; Two Hundred Fifty-Five",
    ],

    288: [
      "The Living One; He Forgives our Sin",
    ],

    289: [
      "Most Holy Number; The Salvation of Israel; The Crucified Man; King's Name; Who carried his own Cross?; He is from Nazareth; A Number of the Son; The King of Salem; MY WORD RUNS SWIFTLY; We Trust in Him; He who is the Son of Man; I ANSWER PRAYER; Three, Three, Eight [IVRIT] HaMispar Shemi"
    ],

    290: [
      "A Most Holy Number; Our King and God; He was Nailed to a Crucifix; Death by Crucifixion; He is the Savior of the World; Savior of Humanity; The New Covenant; A King's Name; At the Right Hand of God; Who will not be Shaken?; Delights in the Law of God; He Hears My Prayers; I AM THE GOOD SHEPHERD; One Hundred Eight; Two Hundred Eighty-Two; Two Hundred Forty-Five",
    ],

    291: [
      "Name of the Messiah; He Forgives our Sins; Ninety-Three",
    ],

    292: [
      "The Sovereign Lord; What're God's Numbers?; Forever Living; The Throne of Heaven; He is Most Righteous; He Bears the Name of God",
    ],

    293: [
      "(62nd Prime #) What are God's Numbers?; What's the Holiest Name?; The King of Glory; Who's a priest forever?; Messiah's Number; A Child of Mary and Joseph; One, One, Zero, Two, Zero",
    ],

    294: [
      "Two, Eight, Nine",
    ], 

    295: [
      "Crucified King",
    ], 
	
	296: [
	  "Number Fifty-Four",
	],

    297: [
      "",
    ],

    298: [
      "This is My Name; A Number of Messiah; He carried his own Cross; A Carpenter's Son; The Number Forty; Three Hundred Three; One Hundred Forty-Two; Two Hundred Forty-One"
    ],

    299: [
      "What is a Blessed Number?; I LIVE IN HEAVEN; Sent from Heaven; The God of the Universe; Creator's Number; He who is the Savior of the World; Never Sinned; Worthy to take the Scroll; Who reigns forever?; MY WORD IS ETERNAL; I LOVE RIGHTEOUSNESS; Five Hundred Fifty-Six; Three, Three, and Zero; One Hundred Sixty-Two [IVRIT] Ani mi-Elohim; Ben Miriam",
    ],

    301: [
      "The Numbers of our God; I AM THE HOLIEST OF THE HOLY; He bestows Favor and Honor; Genesis One-One; Ninety-Seven",
    ],

    302: [
      "What are the Numbers?; One, Nine, Five [GREEK] Kurios Iesous Christos",
    ], 

    303: [
      "[IVRIT] Mi Hu mi-Elohim?",
    ],

    305: [
      "He loosens Orion's Belt; He dwells in the House of the Lord; Twelve Thousand Twenty",
    ],

    306: [
      "This is Jesus' Number; The King of Zion; Son of Mary and Joseph; Who lived in Nazareth?; Who is the Spirit of God?; The Lord Jesus Christ's Father; Who is an anchor for our Soul?; Two Thousand Fifty-Eight",
    ],

    307: [
      "(63rd Prime #) A Number of Holiness; He carries God's Name; A Son of Mary and Joseph; I WAS NAILED TO A CRUCIFIX; He's Humanity's Savior; Ark of the Covenant; Four, Eight, and Eight; One Hundred Eleven",
    ],

    308: [
      "Forgiveness of Sin; Two Hundred Twenty-Two; Three Hundred Eight; Three Hundred Seven",
    ],

    309: [
      "The Holiest Number; The Numbers of Father; Three, Zero, Nine; Three, Zero, and Eight; Eight, Eight, Eight",
    ],

    310: [
      "Son of the Most High; The Father of Lord Jesus Christ; The Anointed One; The Offspring of David; Whose Father is the Creator?; A Spirit of Holiness; Who is King of Zion?; Majesty in Heaven; She who's Mary Magdalene; I AM THE MOTHER OF GOD; One Hundred Forty-Six; Three and Nine; One, Nine, One; One, One, and Seven; Eleven Thousand Ten; One, One, Five, Three; One, Seven, Two, and Four; Numbers Two and Four; One, One, and Eight",
    ],

    311: [
      "(64th Prime #) What is My Number?; This is the Name of God; Jesus Christ's Number; Mary Magdalene's Boy; He who died and rose again; He's our King and God; I'M THE KING OF JUDAH; The Stronghold of our Life; My Promise to You; Virgin Birth; She who is the Virgin; One Hundred Forty-Four; The Number Three; One Hundred Sixty-Six; Three, One, Zero, Two, Zero",
    ],

    312: [
      "The Holiest Numbers; What is the Holy Number?",
    ],

    313: [
      "(65th Prime #) This is God's Number; He is the Father of Rain",
    ],

    314: [
      "This is a Number of Jesus; The Son of a Virgin; The King of Heaven; One, Three, Six, Seven",
    ],

    316: [
      "A Number of Jesus Christ; The Major Prophet; What's the Most Holy Name?; Three Hundred Forty-Two; Four Hundred Nine; Three, Four, Five, Zero, Zero [IVRIT] Mi Hu Nolad mi-Betulah?",
    ],

    317: [
      "(66th Prime #) These are Jesus' Numbers; He Never Sinned; Our Father in Heaven; The God of Everything; Three Hundred Sixty-Two",
    ],

    318: [
      "This is a Number of God; One, Three, and Three; One, One, Four, and Five [IVRIT] Mispar shel Elohim",
    ],

    319: [
      "The Holiest of Numbers; Greatest Number",
    ],

    320: [
      "The Name of the Son of God; What is the Number of Jesus?; Ascended into Heaven; Who's coming with the Clouds?; Nine and Seven; Six Hundred Twenty-Two; Three, Five, Nine; Five, Three, and Eight; Two Hundred Twenty-Six [IVRIT] Mi Hu Nolad mi-HaBetulah?",
    ],

    321: [
      "One Hundred Twenty; Two Hundred Twenty-Four; Four Hundred Twenty-Two",
    ],

    322: [
      "The Number of God's Son; Seven Spirits of God",
    ],

    323: [
      "My Unfailing Love",
    ],

    324: [
      "These are God's Numbers; What is the Number of God?; Enlightened One; Unapproachable Light; MY WORDS ARE HOLY AND TRUE; He is led by the Spirit; I SPEAK ON THE BEHALF OF GOD; The Spirit of the Church; Who is Mary Magdalene?",
    ],

    325: [
      "The Numbers of God's Son; Three Hundred Fifty-Six; One, One, One, and Six",
    ],

    328: [
      "What is the Holiest Name?; Numbers Two, Two, and Two; Four Hundred Seventy-Two; Two, Three, Four, and Eight",
    ],

    329: [
      "Mary Magdalene's Child; God Established His Throne [IVRIT] HaMisparim Sheli; HaBen shel Miriam",
    ],

    330: [
      "The Holiest of all Numbers; A Robe Dipped in Blood; Three Hundred Sixty-Four; The Number Sixty-Two",
    ],

    331: [
      "(67th Prime #) The Greatest Name of All; The Mighty God of Israel; Divine Number; Who brought us up out of Egypt?; ALL PROPHECY IS ABOUT ME; Who is not a Sinner?; He who was sent from Heaven; Who wears the Victor's Crown?; I AM A SCEPTER OF JUSTICE; Two Hundred Eighteen; Number Sixty-One; One Hundred Fifty-Five; Five Hundred Fifty-One",
    ],

    332: [
      "The Most Holy Number; A Divine Number; The Eternal Throne; Kingdom of Heaven; Our King and our God; He leads out the Bear with its Cubs",
    ],

    333: [
      "The Savior of Humanity; Child of Mary Magdalene; I AM THE MESSIAH'S FATHER; Eleventh Prime; The Savior of Humanity; Worthy to open the Scroll; Numbers Two and Five; Five, Seven, One, and Two; Four Hundred Twenty-Six",
    ],

    334: [
      "The Name of the Messiah; The Lion of the Tribe of Judah; One Hundred Forty-Five",
    ],

    335: [
      "The Most Holy Numbers; This is a Blessed Number; Who Looks Down from Heaven?; The Horn of our Salvation; Who was tempted by the Devil?; Angels attended Him; Numbers Four and Zero; Nine, Six, and One; Six Hundred Fifty-Seven; Six Hundred Thirty-Four [IVRIT] Ze HaMispar HaShem Sheli",
    ],

    336: [
      "The Messiah's Number; What are the Numbers of Jesus?; A Number of Jesus' Name; The Lord of Heaven and Earth; Who commands the Angels?; Whose dwelling place is lovely?; The Order of Melchizedek; Who is the King of Salem?; A Number of a Holy Name; I AM THE HOLY ONE OF ISRAEL; Knows the Mind of God; She is Mary Magdalene; She who's the Mother of Messiah; Four Hundred Fifty-Seven; One, Nine, and Four; One Hundred Fifteen; Three, Three, and Three; Seven Hundred Fifty-Four; Four, Zero, Five, Zero, and Zero",
    ],

    337: [
      "(68th Prime #) Who is our King and God?; The Name of a King; I'm the Holy Spirit; He is a Priest Forever; He was visited by the Magi; I AM KING OF SALEM; I HAVE NO PLACE TO LAY MY HEAD; Two Thousand Thirty-One",
    ],

    338: [
      "The Name of the Lord our God; What is the Holiest of Names?; He ascended into Heaven; The Crucified King; Virgin Mother; One, Three, Eight, Five; One, Seven, Nine; One, Seven, and Eight; The Number Eleven; The Number Fifty-Six [IVRIT] Zeh HaMispar HaShem Sheli; HaMispar Shloshim Shisha",
    ], 
	
	339: [
		"What're the Numbers of God?; Three Hundred Twenty; Four Hundred Forty-Seven",
	],

    340: [
      "What's the Name of My Son?; What are the Numbers of God?; This is a Sacred Number; A Number of the Most Holy; He is not a Sinner; MY BLESSING IS ON YOU; Four Hundred Sixty-Seven; Five, Nine, and Zero",
    ],

    341: [
      "What is the Name of God's Son?; A Number of the Messiah; Two, Four, Five, One, and Five; Two Hundred Ninety; Three Hundred Thirty; Numbers Two and One; One, One, Two, and Seven; One, Eight, One, and Two",
    ],

    342: [
      "[IVRIT] HaB'yoter Kadosh Mispar; HaMelech v'Elohim Yisrael",
    ],

    344: [
      "The Superior Name; The Number of our Lord God; Resurrected from the Dead; I AM AWESOME AND GREAT [IVRIT] Ma HaShem mi-Elohim?",
    ],

    345: [
      "A Number of the Lord our God; Numbers Six and Five",
    ],

    346: [
      "A Supreme Number; He is our King and God; Two Hundred Thirty-Five; Three, Eight, and Three; Two, Three, Five, Two, and Five; One, Three, Five, Four, Five",
    ],

    347: [
      "(69th Prime #)",
    ], 

    348: [
      "MARY IS MY MOTHER",
    ],

    349: [
      "(70th Prime #) What's a Number of Jesus Christ?; The Son of Mary and Joseph; Performs Miracles; Three, Two, Zero, Zero, and Zero; Eleven Thousand Twenty; Number Two Hundred Two",
    ],

    350: [
      "The Ark of the Covenant; Innocent of Sin; He who is and who was and who is to come",
    ],

    351: [
      "The Righteous King; A Supernatural Name; Two Hundred Thirteen; Two Hundred Seventy-Five; Two, Nine, and Eight",
    ],

    352: [
      "A Number of the Name; Our Majesty in Heaven; The Numbers of Holiness; I SPEAK IN PARABLES; Two Hundred Eighty Three; Numbers Two, Six, and Six; One Hundred Twenty-Two; Two Hundred Twenty-One [IVRIT] Ma HaMispar Elohim?; Ma HaMispar shel Yasha Mashach?",
    ],

    353: [
      "(71st Prime #) A Number of Mary's Son; This is the Name of our God; His Name alone is Exalted; Numbers Two, Two, and Zero; The Numbers Two and Four",
    ],

    354: [
      "I AM GOOD AND UPRIGHT",
    ],

    355: [
      "Innocent of All Charges; Who has seen the Storehouses of the Hail?; Number Thirty-Four",
    ],

    356: [
      "The Number of My Son; This is the Number of Jesus; THIS IS TO BE MY NAME; Three, Eight, and Seven",
    ],

    357: [
      "Lord Jesus Christ's Number",
    ], 

    358: [
      "What is a Most Holy Number?; The Number of Jesus Christ; Who Performs Miracles?; Five, Three, Zero, One, Five; Three Hundred Sixteen; Number Forty-Eight [IVRIT] HaMisparim Echad, Echad, v'Echad; Ze HaB'yoter Kadosh Mispar",
    ],

    359: [
      "(72nd Prime) The Numbers of My Son; Two Hundred Seventy-One; Three Hundred Fourteen; Number Sixty-Seven; Number Sixty-Eight; One, One, Five, One, Five",
    ],

    360: [
      "This is the Number of God; Lord Jesus Christ's Numbers; He is the Great King; I CARRY THE SINS OF THE WORLD; His years will never End; Number Seventy-Four; Two, Zero, Five, Three, and Zero; Three Hundred Forty-One",
    ],

    361: [
      "The Name of God Most High; The Numbers of Jesus Christ; The Number of our Savior; Strong and Mighty; Who was born in Bethlehem?; I WAS TEMPTED BY THE DEVIL; On the Seventh Day He Rested [IVRIT] Zeh HaB'yoter Kadosh Mispar",
    ],

    362: [
      "The Greatest Number; Who laid the Earth's Foundation?; Two Hundred Eighty-Seven",
    ],

    363: [
      "Who restored the Fortunes of Jacob? [IVRIT] Malkeinu v'Eloheinu; Ben Betulah Miriam",
    ],

    364: [
      "These are the God Numbers; THIS IS MY SON'S NAME; Numbers Two, Five, and Two; One Hundred Twenty-Six",
    ],

    365: [
      "The Greatest Numbers; Three Hundred Eighty-Four",
    ],

    366: [
      "God Most High's Numbers; What is the Number of our God?; Most Beautiful Numbers; My Name is the Holiest; What is a Number of Messiah?; I'm the King of the Jews; The Most Sacred Number; Firstborn from the Dead; I AM WHO IS, WHO WAS, AND WHO IS TO COME; Salvation Belongs to Me; Number Eighty-One; Numbers Two, Zero, and Four; One, Two, Nine, and Six; Eight, Eight, and Eight; One Hundred Thirty-Six; Three, Zero, and Nine; The Number Sixty-Five",
    ],

    367: [
      "(73rd Prime #) These are the Numbers of Jesus; What's the Name of the Messiah?; Anointed Number; Messianic King; Number of God Most High; The Unapproachable Light; God of the Heavens and the Earth; One Hundred Fifty-Eight; The Number Fifteen; Numbers Four, Four, and Four; One, Nine, and One; One, One, Five, and Three; One Hundred Fifty-Seven; One Hundred Thirty-Four",
    ],

    368: [
      "I HAVE NEVER SINNED; Greater than Solomon; I KNOW THE MIND OF GOD [IVRIT] Hu Malkeinu v'Eloheinu",
    ],

    370: [
      "He was born in Bethlehem; The Eternal Covenant; The Consuming Fire; Baptized in the Jordan; One Hundred Forty-Eight; One Hundred Forty-Seven; One Hundred Eighty-Five; Eight Hundred Forty-One; Two Hundred Twenty-Three [IVRIT] Mispar Elohei Elohim",
    ],

    371: [
      "These are the Numbers of God; What's the Name of the Lord our God?; The Numbers Two, Two, and Two; Numbers Six and Three; One Hundred Sixty-Eight",
    ],

    373: [
      "(74th Prime #) The King of Kings; I AM THE LORD GOD ALMIGHTY; I AM THE SCEPTER OF JUSTICE; He who is Coming with the Clouds; He's Superior to the Angels",
    ],

    375: [
      "What is a Number of Holiness?; The Kingdom of Heaven; Examines the Righteous; I AM NOT A SINNER; Who will not forget our Work?; Four Hundred Eighty-Seven; Number Four Hundred Four; Four Hundred Eighty-Eight; One Hundred Eighteen",
    ],

    376: [
      "My Favorite Number; Jesus the Son of Mary and Joseph; Number Twenty-Five; Numbers Two, Five, and Six",
    ],

    377: [
      "A Number of My Name; Who died from Crucifixion?; The Divine Numbers; What is the Holiest Number?; Prophet of the Most High; I SIT ON THE THRONE OF GOD; Numbers Two, Four, and Five; Numbers Six, Zero, and Six; Three, Five, and Nine; Numbers One and Five",
    ],

    378: [
      "The Number of Jesus' Name; Numbers Four, Six, and Zero; The Numbers Four and Zero",
    ],

    379: [
      "(75th Prime #) My Favorite Numbers; From whose womb comes the ice?; Who's God of the Heavens and the Earth?",
    ],

    380: [
      "Eight Hundred Twenty-Two; Two Hundred Fifty-Nine; Two Hundred Twenty-Eight",
    ],

    381: [
      "MY FATHER IS IN HEAVEN",
    ],

    382: [
      "An Eternal Number; Messianic Number; Numbers Four and Eight; Six Hundred Twenty-Three; One, Eight, Four, Nine; Two Hundred Thirty-Seven [IVRIT] Misparim Elohim; Mispar mi-Beni",
    ],

    383: [
      "(76th Prime #) The Number of the Messiah; The Number Twenty-Two; Four Hundred Twenty-Three",
    ], 
	
	384: [
		"What is a Number of Jesus Christ?; Three Hundred Thirty-Six; Three, One, Five, Three, Zero; Numbers Three and Zero; Twenty-One Thousand Forty; Number Twenty-One; One, Nine, Zero, Three",
	],

    385: [
      "Who is the Crucified King?; He is Mary Magdalene's Child; Born in a Manger; A Number of our King; One Hundred Ninety; Three Hundred Fifty-Seven; Number Two Hundred Five; Three Hundred Thirty-Four; Two Hundred Ninety-Four",
    ],

    386: [
      "The Numbers of the Messiah; He died from Crucifixion; Number Thirty-One; Forty-One Thousand Thirty [IVRIT] HaMisparim Elohim; HaMispar mi-Beni",
    ],

    387: [
      "What is the Holiest of Numbers?; The Number of the Lord our God; My Only Begotten Son; Five Hundred Thirteen",
    ],

    388: [
      "What is the Name of the Son of God?; Lord, Savior, King and God; The Numbers Five and Six; Three Hundred Eighty-Five; Number Seventeen",
    ],

    389: [
      "(77th Prime #) He's Greater than Solomon; He is Worthy to open the Scroll; Salvation Belongs to Him; The Numbers Four and Five; Three Hundred Sixty-Eight",
    ], 
	
	390: [
		"The Numbers of the Lord our God; Two, One, Five, Three, and Five; Five Hundred Thirty-One",
	],

    391: [
      "[IVRIT] HaMispar Malkeinu",
    ],

    392: [
      "God's Name and Number; The Number Two Hundred Two; Three, Four, Zero, One and Five; Eight Hundred Twenty-Six",
    ],

    393: [
      "What are the Holiest Numbers?",
    ],

    394: [
      "What's the Name of God Most High?; I AM YOUR KING AND GOD; Sacrifice of Atonement; Twenty-Two Thousand Twenty [IVRIT] Ani HaBen Miriam",
    ], 
	
	396: [
		"Who is the Son of Mary and Joseph?",
	],

    397: [
      "(78th Prime #) What is the Number of Heaven?; Whose Throne is in Heaven?",
    ], 
	
	400: [
		"The Lord Jesus Christ's Number",
	],

    401: [
      "(79th Prime #) The Number Forty-Eight; What is the 'Messiah' Number?; The Number Eighty-Five",
    ],

    402: [
      "Main Character of the Bible",
    ], 

    403: [
      "The Lord Jesus Christ's Numbers; The Number Seventy-Four; Numbers Three and One; Three Hundred Ninety; Three, Three, and Nine; One, Nine, Four, and Five",
    ],

    404: [
      "(404th Prime # is 2777) The Number of Lord Jesus Christ; What is the Messiah's Number?; The Name of the Most High God; Whose Mother is a Virgin?; I'M THE SON OF A VIRGIN; Five, Three, Zero, One, and Zero",
    ],

    405: [
      "Made a promise to Abraham; The Number Two Hundred Four; One, Seven, Five, and Seven",
    ],

    406: [
      "What is the Name of the Lord our God?; Number of Righteousness; He is Innocent of Sin; Has Authoirty to Forgive Sin; He who watches over the way of the righteous; One Hundred Eighty-Eight; Three Hundred Twenty-Five"
    ],

    408: [
      "He was born in a Manger; What is the Number of Messiah?; He is our Majesty in Heaven; MY THRONE WILL LAST FOREVER; Number Four Hundred Fifty",
    ],

    409: [
      "(80th Prime #) What is a Number of the Messiah?; MY WAYS ARE LOVING AND FAITHFUL; Number Two Thousand Fifty-Two; One Thousand Thirty-Eight [IVRIT] HaMisparim HaShem Sheli; Misparim Echad v'Chamish",
    ],

    410: [
      "The Number of God Most High; The Messianic King; He who lends without interest",
    ],

    411: [
      "This is a Number of Holiness; This is the Name of My Son; Number Four Hundred Forty",
    ],

    413: [
      "This is My Son's Number; The Numbers of God Most High; Number Two Hundred Ten",
    ],

    416: [
      "What are the Most Holy Numbers?; What's the Number of the Messiah?; He is a Man, King, and God; What is the Meaning of Life?; Three, One, Two, and Nine; Two Hundred Ninety-One; The Number Six Hundred Six; Five Hundred Twenty-Eight; One Hundred Thirty-Three; Numbers Three, Four, and Four; One, One, Five, One, and Five",
    ],

    417: [
      "I DELIGHT IN THOSE WHO FEAR ME",
    ],

    418: [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ; His Mother is a Virgin; He does not change his mind; Who has Authorithy to Forgive Sins?; Three Hundred Seventeen",
    ],

    419: [
      "(81st Prime #) The Number of My Name; Number Seventy-Eight; Two Hundred Eighty-Nine",
    ], 
	
	420: [
		"What's the Number of the Lord our God?",
	],

    421: [
      "(82nd Prime #) Gracious and Compassionate; Walked in the recesses of the Deep",
    ],

    422: [
      "The Numbers of My Name; He freed us from our Sins by His Blood",
    ],

    425: [
      "The Holy Spirit's Number; The Numbers of the Most High; He who interprets dreams; The Numbers Four and Eight; Nine Hundred Sixteen; Numbers Eight, Four, and Six; Numbers Two, Zero, and Seven; One, Seven, Zero, Two, Nine; The Numbers Four and Eight",
    ],

    426: [
      "My Name and Number; What is the Number of Jesus Christ?; I AM THE CHILD OF MARY AND JOSEPH; This is the Number of God's Son; Number Four Hundred Ten; Numbers Four, Four, and Seven",
    ],

    428: [
      "An Eternal Kingdom; One Hundred Sixty-Nine; Nine Hundred Sixty-One; The Number Two Hundred Five",
    ],

    429: [
      "What is the Name of God Most High?; Number of the Holy Spirit; He is the King of Kings; I AM THE CRUCIFIED KING; MY GLORY IS IN THE HEAVENS; Who laid the Earth's Cornerstone?; Number Two Hundred Forty-Two; One Hundred Ninety-Four; The Number Thirty-One",
    ],

    431: [
      "(83rd Prime #) One Hundred Seventy-Seven",
    ],

    432: [
      "I DO NOT SLUMBER NOR SLEEP",
    ], 
	
	433: [
		"I'M MARY MAGDALENE'S SON",
	],

    434: [
      "Two Hundred Ninety-Three; Eight Hundred Eighty-Eight; Three Hundred Ninety-Two",
    ], 
	
	436: [
		"This is the Most Holy Number",
	],

    439: [
      "The Name and Number of God; I AM THE WAY, THE TRUTH, AND THE LIFE",
    ],

    440: [
      "(Sum of First 17 Primes) This is the Messiah's Number; I AM THE LORD YOUR GOD WHO MAKES YOU HOLY; He binds the Chains of the Pleiades; The Numbers One, Four, and Six; The Numbers One, Two, and Zero",
    ],

    441: [
      "One, Nine, Seven, Eight",
    ],

    443: [
      "(86th Prime #) What's the Number of God Most High?; Gates of Death have been shown to Him; The Numbers Two, Five, and Five; Number One Hundred Sixty; Number Two Hundred Sixty-Four [IVRIT] Beyoter Kadosh Misparim",
    ],

    444: [
      "He created the Heavens and the Earth; I DO NOT CHANGE MY MIND; The Number of 'Crucifixion'; Two Hundred Ninety-Eight; Numbers One, Two, and Seven",
    ],

    445: [
      "What is a Number of My Name?; This is a Number of the Messiah; The Numbers Three, Six, and Two; Number Nineteen; The Numbers Five, Four, and Zero; Three Hundred Forty-Nine",
    ],

    446: [
      "This is God's Favorite Number; He is the Son of Mary Magdalene; Whose Mother is the Virgin?; The Numbers of Eternity; The Number of the King of Judah; MY SERVANTS ARE FLAMES OF FIRE; The Numbers Three and One; Numbers Three, One, and Six; Three Hundred Ninety-Six",
    ],

    447: [
      "These are the Most Holy Numbers; The Number of the Lord Jesus Christ; FROM ME COMES DELIVERANCE; Three Hundred Ninety-Four; Numbers Three, One, and Four; Number Three Hundred Five",
    ],

    449: [
      "(87th Prime #) The Most High God's Number; This is a Number of the Lord our God; Three Hundred Seventy-Seven; Five Hundred Nineteen; Numbers Seven, Five, and Four",
    ],

    450: [
      "The Numbers of the Lord Jesus Christ; The King of Heaven and Earth; He entered the Storehouses of the Snow; His Mother's Name is Mary; Never committed a Sin; I AM THE KING ON ZION; Four Hundred Twenty-Nine",
    ],

    451: [
      "What is the Number of the Messiah?: These are the Messiah's Numbers; The Numbers One, Five, and Two",
    ], 
	
	453: [
		"The Number of the Most High God",
	],

    455: [
      "What is the Number of the Lord our God?; Number Four Hundred Sixty-Six; The Number Twenty-Eight; The Number Twenty-Seven; The Numbers Two, Six, and Eight; The Numbers Two, Seven, and Six",
    ],  
	
	456: [
		"The Numbers of God Most High",
	],

    457: [
      "This is a Number of Mary's Son; Numbers One, Four, and Eight",
    ], 
	
	459: [
		"What's My Name and Number?",
	],
	
	460: [
		"This is the Number of My Son",
	],

    465: [
      "This is the Name of God Most High; Number Two Hundred Forty-Five",
    ],

    466: [
      "What're the Numbers of the Messiah?; The Name of our King and God; Number Six Hundred Thirty; Number Five Hundred Sixty-Two",
    ], 
	
	467: [
		"(91st Prime #) What are the Numbers of the Messiah?",
	],

    468: [
      "...",
    ],

    469: [
      "The Number of Messiah's Name; Numbers Two, Six, and Nine; Numbers One, Seven, and Zero",
    ],

    470: [
      "(470th Prime # is 3331) What're the Numbers of the Lord our God?; The Numbers Three, Zero, and Six; Numbers Two, Four, and Nine",
    ],

    471: [
      "These are the Numbers of My Son; The Numbers Four, Zero, and Three",
    ],

    472: [
      "The Name of a Crucified King; He cuts a path for the Thunderstorm",
    ], 
	
	473: [
		"What is a Number of the Lord Jesus Christ?; These are the Numbers of Jesus Christ",
	],

    474: [
      "A Permanent Priesthood; He has raised up for His People a Horn; Number Five Hundred Fifty-Six; Numbers Three, Seven, and Six; Number One Hundred Sixty-Two; The Numbers Three and Seven; The Numbers Three and Eight",
    ],

    477: [
      "These are the Greatest Numbers; The Ruler of the Kings of the Earth",
    ],

    478: [
      "What is the Number of God Most High?; One Hundred Ninety-Three; Number One Hundred Eighty; Thirty-Four Thousand Thirty-Five; Number Two Hundred Nine; Number Five Hundred Sixty-Six",
    ],

    480: [
      "What's the Number of the Lord Jesus Christ?; This is My Favorite Number; The Most Holy Number of All Time; Numbers One, Eight, and Five; The Number Thirty-Two Thousand; The Numbers Seven, Zero, and Six",
    ],

    481: [
      "This is a Number of My Name; The Numbers Four, Seven, and Zero",
    ],

    484: [
      "What are the Lord Jesus Christ's Numbers?; One, Seven, Six, Eight, Nine; Numbers Six, Seven, and Eight; The Numbers Two, Four, One, and Zero",
    ],

    485: [
      "Main Character in the Bible; The Number Two Hundred Sixty-Six; Numbers Four, Seven, and Eight",
    ],

    487: [
      "(93rd Prime #) What is the Number of My Name?; The Numbers One, Five, and Five",
    ],

    488: [
      "Journeyed to the Springs of the Sea; One Hundred Seventy-Nine; One, Nine, Three, Nine; Numbers Three, Five, and Three; One Hundred Ninety-Seven; Number Two Hundred Fifty-Three; Numbers Three and Nine",
    ],

    490: [
      "What are the Most Beautiful Numbers?; Number Five Hundred Thirty",
    ], 
	
	493: [
		"These are the Numbers of Jesus' Name; What're the Numbers of God Most High?",
	],

    494: [
      "What is My Name and Number?; What are the Numbers of God Most High?; The one who delivers His Servant David; The Numbers Five, Three, and Zero [IVRIT] Misparim Shnayim ve'Efes",
    ],

    495: [
      "The Numbers One, One, and Five; Four Thousand Six Hundred Twenty-Five",
    ], 
	
	498: [
		"These are the Numbers of the Messiah",
	],

    499: [
      "(95th Prime #) The Numbers Six, Eight, and One",
    ],

    500: [
      "These are the Numbers of God's Name; The Number Five Hundred Eight; The Numbers Two, Nine, and Two",
    ], 
	
	502: [
		"These are the Numbers of the Lord our God",
	],

    508: [
      "This is the Name of the Most High God; I WILL NEVER LEAVE YOU NOR FORSAKE YOU",
    ],

    509: [
      "(97th Prime #) The Number Five Hundred Sixty-Two; The Number Ninety-Three",
    ],

    512: [
      "The Number of the Messiah's Name; He presides in the Great Assembly; The Number Twenty-Nine; The Numbers One, Eight, and Zero; The Numbers Two, Six, and Nine",
    ],

    513: [
      "Who gives birth to the Frost of the Heavens?",
    ],

    515: [
      "What is the Number of the Lord Jesus Christ?; The Number of our King and God; Number Six Hundred Seventy-Four; Number Four Hundred Sixty-Seven; The Numbers Five, Seven, and Five",
    ],

    516: [
      "Number One Hundred Fourteen; Number Two Hundred Ninety; The Number Two Hundred Forty-One",
    ],

    517: [
      "He offers Eternal Redemption; The Number One Hundred Sixty-Two",
    ], 

    518: [
      "The Numbers of our King and God; The Numbers Four, Two, Five, Two, and Five; The Numbers One, Two, Two, and Seven",
    ], 
	
	521: [
		"What is the Number of the Most High God?",
	],

    525: [
      "I AM THE KING OF RIGHTEOUSNESS; The Numbers Two, Zero, and Nine",
    ],

    528: [
      "A Pioneer and Perfecter of Faith; The Numbers Four, Seven, and Eight; Number Three Hundred Sixty-Five; The Number Eleven Thousand Ten",
    ],

    529: [
      "Numbers Two, Nine, and Eight",
    ], 
	
	530: [
		"This is My Name and Number; What're the Numbers of the Lord Jesus Christ?; The Numbers Seven, Zero, and Three",
	], 
	
	531: [
		"What are the Numbers of the Lord Jesus Christ?; Numbers Three, Nine, and Six",
	],

    535: [
      "The Number Three Hundred Sixty-Two; Four Thousand Six Hundred Sixty-Nine",
    ],

    538: [
      "...",
    ], 

    540: [
      "Number Three Hundred Nine",
    ],

    543: [
      "The Number Three Hundred Eleven; Number Eight Hundred Sixteen; Eleven Thousand Five Hundred Fifteen",
    ],

    546: [
      "The one who gives victory to Kings",
    ],

    551: [
      "The Number Four Hundred Twenty-Six",
    ],

    555: [
      "Number Two Hundred Twenty-Eight; Number Two Hundred Fifty-Nine",
    ],

    556: [
      "The Numbers Nine, Six, and One [IVRIT] HaMispar Malkeinu ve'Eloheinu",
    ],

    557: [
      "(102nd Prime #) I GIVE ORDERS TO THE MORNING; The Numbers One, Nine, and Four; Numbers One, Four, Nine, and Six; Number Two Hundred Thirty-Seven",
    ],

    559: [
      "The Number of the Name of the Messiah; The Number Two Hundred Ninety; The Number One Hundred Fourteen; Numbers One, Seven, Eight, and Six",
    ],

    560: [
      "Son of a Carpenter and a Virgin; YOU ARE MY SON, TODAY I HAVE BECOME YOUR FATHER; He's the Guarantor of a Better Covenant",
    ], 
	
	562: [
		"These are the Numbers of the Lord Jesus Christ; The Numbers of the Name of the Messiah; Number Five Hundred Seventy-Five; The Numbers Three, Nine, and Two; The Numbers Two, Four, Five, One, and Five; Numbers One, Zero, Three, and Eight",
	], 
	
	563: [
		"The Number of the Name of the Lord our God",
	],

    566: [
      "The Numbers of the Name of the Lord our God; The Name and Number of the Messiah",
    ],

    567: [
      "The Numbers Three, Three, and Eight; The Number Eleven Thousand Twenty",
    ],

    570: [
      "The Number and Name of the Lord our God; Number One Hundred Seventy-Five",
    ],

    575: [
      "The King of Kings and the Lord of Lords; Messiah x 5; Number Four Hundred Seventy-Eight; The Numbers Four, Nine, and Three",
    ],

    577: [
      "He renders judgment among the 'gods'; The Numbers Three, Eight, and Eight; The Numbers Three, Eight, and Seven",
    ],

    582: [
      "The Number One Hundred Twenty-Six",
    ],

    583: [
      "The Number Four Hundred Twenty-One",
    ], 
	
	587: [
		"What is the Messiah's Name and Number?; The Number Seven Hundred Fourteen",
	],

    590: [
      "The Numbers One, Seven, Two, and Eight",
    ],  
	
	593: [
		"The Name and Number of God Most High",
	],
	
	599: [
		"What are the Numbers of our King and God?",
	], 
	
	601: [
		"The Number Four Hundred Twenty-Three",
	],

    606: [
      "The Numbers Three, One, and Nine; The Number Three Hundred Eighty-Five",
    ],

    612: [
      "I AM THE LORD YOUR GOD WHO BROUGHT YOU UP OUT OF EGYPT; At the Right Hand of the Majesty in Heaven; I AM THE ONE ENTHRONED IN HEAVEN",
    ],

    616: [
      "The Number Four Hundred Ninety-Four; One Thousand Three Hundred Sixty-Nine; The Number Five Hundred Eighty Seven; The Numbers Two, Four, Eight, and Nine; The Numbers One, Seven, and Nine",
    ],

    618: [
      "He who cuts a channel for the torrents of rain",
    ],

    623: [
      "The Number of the Name of the Lord Jesus Christ",
    ],

    625: [
      "One Thousand Eight Hundred Forty-Nine",
    ],  
	
	627: [
		"What is the Number of the Name of the Messiah?",
	],
	
	630: [
		"These are the Numbers of our King and God",
	],

    635: [
      "All Peoples on Earth will mourn because of Him",
    ],

    636: [
      "The Name and Number of the Most High God; The Number Five Hundred Thirty-Eight",
    ],

    638: [
      "He sits enthroned between the Cherubim",
    ],

    644: [
      "The Number Four Hundred Nineteen",
    ],

    648: [
      "Worthy to receive Glory and Honor and Power; MY SPLENDOR IS ABOVE THE HEAVENS AND THE EARTH",
    ],

    651: [
      "To Him be Glory and Power for ever and ever!",
    ],  
	
	652: [
		"The Number Three Hundred Thirty-Three",
	],
	
	657: [
		"The Number Two Hundred Thirty-Nine",
	],

    663: [
      "Who's a High Priest in the Order of Melchizedek?",
    ],

    666: [
      "The Number of the Name of the Antichrist",
    ],

    668: [
      "The Number Four Hundred Twenty-Nine",
    ], 

    674: [
      "These are the Numbers of the Name of the Messiah; This is the Name and Number of the Lord our God",
    ],

    675: [
      "The Number One Hundred Nineteen",
    ],

    676: [
      "Number Two Hundred Ninety-Nine",
    ], 
	
	678: [
		"These are the Numbers of the Name of the Lord our God",
	],

    693: [
      "The Number Three Hundred Nineteen",
    ],

    706: [
      "The Number One Hundred Seventy-Nine",
    ],

    719: [
      "The Number Two Hundred Ninety-Nine",
    ],

    720: [
      "EARTH IS MINE AND EVERYTHING IN IT",
    ],

    727: [
      "The Number Eight Hundred Twenty-Nine",
    ],

    729: [
      "Number One Thousand Two Hundred Ninety-Six",
    ], 

    791: [
      "(Sum of First 22 Primes)",
    ],

    841: [
      "I BRING FORTH THE CONSTELLATIONS IN THEIR SEASONS",
    ],
  },
  
  cipher3: {
	1: [
		"A; G; T; Z",
	], 
	
	4: [
		"C; L; O; X",
	],
	
	7: [
		"E; H; S; V",
	],
	
	10: [
		"D; J; M; N; Q; W",
	],
	
	13: [
		"B; F; I; R; U; Y",
	],

  15: [
    "God; Two",
  ],
  
  16: [
	"K; P",
  ],

  17: [
    "(7th Prime #)",
  ],

  19: [
    "(8th Prime #)",
  ],

  21: [
    "One [IVRIT] Avi",
  ],

  23: [
    "(9th Prime #)",
  ],

  24: [
    "I AM; Six",
  ],

  28: [
    "Holy; Amen",
  ],

  29: [
    "(10th Prime #) Eight",
  ],

  31: [
    "(11th Prime #)",
  ], 

  34: [
    "[IVRIT] YHVH",
  ], 

  35: [
    "[IVRIT] ALHIM",
  ],

  37: [
    "(12th Prime #) YHWH [IVRIT] YHWH; Mashach",
  ],

  38: [
    "Sixty",
  ],

  39: [
    "I AM GOD [IVRIT] HaShem; ZH HShM; Adonai; Shem Av",
  ],

  40: [
    "Nine",
  ],

  41: [
    "(13th Prime #)",
  ],

  42: [
    "Father; Yashua; Eleven; Eighty",
  ],

  43: [
    "(14th Prime #) God's Son; The Name; Holiest; Four",
  ],

  44: [
    "Jesus; My Son; A Holy God; Eight, Two; Forty [IVRIT] Shemi",
  ],

  45: [
    "Yahweh; Elohim; Christ; Savior; One, Six [IVRIT] Yahweh; Kadosh",
  ],

  46: [
    "The Lion",
  ],

  47: [
    "(15th Prime)",
  ],

  48: [
    "Yeshua; Salvation; Holy Ghost; Six, Six [IVRIT] Yeshua; MShICh; IHShVH",
  ],

  49: [
    "Yahshua; Great Light [IVRIT] Yahshua; Ze Yaldi",
  ],

  50: [
    "God's Name; Most Holy; Eight, One [IVRIT] Ma HaShem?",
  ], 

  51: [
    "My Name",
  ],

  52: [
    "Messiah; The Word [IVRIT] Shem Avi",
  ],

  53: [
    "(16th Prime #) Son of God; Two, Seven; Eighteen [IVRIT] Yahoshua; HaKadosh",
  ],

  55: [
    "Sinless; The King; Two, Five",
  ],

  56: [
    "Who is God?; Holy Name; Follow Me; The God of All; One, Three [IVRIT] Zeh Yaldi",
  ],

  57: [
    "The Father; He is Great; God's Glory; Priest; A Holy Name; Eighty-Two; One and Two; One, One, Two",
  ],

  58: [
    "The Creator; I AM THAT I AM; The Holy God; The Holiest; Two, Four [IVRIT] Yisrael",
  ],

  59: [
    "(17th Prime #) God's Word; One, Seven [IVRIT] ShM ALHIM; Mi Hu HaAv?; Hu Adonai",
  ],

  60: [
    "Mighty God",
  ],

  61: [
    "(18th Prime #) One, Five; Nine, One; One, Two, Zero",
  ],

  63: [
    "Eighty-One; The Holy Ghost",
  ],

  64: [
    "The Holy One; He has Stigmata; Fifteen; One, Four; Six, Five",
  ],

  65: [
    "God Most High; My Father; The Most Holy; God Almighty; He is Lord; Our Glory; Mary's Son; The Most High; My Father; I ALONE AM GOD; The Almighty; PRAY TO ME; Two, Zero, Zero; Five, Zero; Nineteen; One, Two, Eight; Two and Eight",
  ],

  66: [
    "Yasha Mashach; Mount Zion; Righteous; Eighty-Six; One and Six [IVRIT] Yasha Mashach; HShM ALHIM; Avi Elohim",
  ],

  67: [
    "(19th Prime #) The Messiah; I AM GOD'S SON; My Covenant; Glory of God; Our Rock; Sixty-Eight; Seven, Eight; One and Zero; One, One, Zero; Seventy-Two"
  ],

  68: [
    "The Son of God; The Man of God; I AM JESUS; Immanuel; My Temple; God's Servant; Paradise; A White Stone; Sought After; So shall it be!; Fifty-Two; Forty-Six; Fourteen; Two, Seven, Two",
  ],

  69: [
    "The God of Gods; Living One; Christian; Who is Holy?; Holiest of All; Nine, Eight; Six and Six; One, Six, Six [IVRIT] Ani Yahweh",
  ],

  70: [
    "Antichrist; An Evil Name; I'M NOT OF GOD; I AM THE LORD",
  ],

  71: [
    "(20th Prime #) Holiest Name; Eighty-Eight; Twenty-Eight",
  ],

  72: [
    "The Virgin; God the Father; Our Father; God of all time; Mighty to Save; has god's blood; A Heavenly God; Eight, Four; One, Two, and Two",
  ],

  73: [
    "(21st Prime #) Crucify; Seven, Three [IVRIT] Hu HaKadosh",
  ],

  74: [
    "The Son of Man; God's Only Son; I AM MOST HOLY; Fifty-One; One, Two, Seven; Two and Seven",
  ],

  75: [
    "The Name of God; The Lamb of God; Ninety-One [IVRIT] Bereshith",
  ],

  76: [
    "Our Lord God; Christians; Seventy-Six; Two and Five; One, Nine, Two; Sixty-Seven; One, Five, Two",
  ],

  77: [
    "God of Israel",
  ],

  78: [
    "God's Anointed; Most Holy Name; Our Shield; Our Salvation; Holy Bible; Sixty-Five; Seven, Nine; Sixty-Nine; Four, Three; Five, Seven; One, One, and Two",
  ],

  79: [
    "(22nd Prime #) My Holy Name; A Most Holy Name; Without Sin; Holy to the Lord; My Anointed; Son of David; My Son's Name; I AM BLESSED; Where is God?; Our Majesty; A Servant of God; He is our God; The God of Jacob; Four and Two; Eight and Eight; Forty-Three; Six, Nine, Two; Two, One, Four; Six, Two, Five [IVRIT] ShM HMShICh; Tish'ah ve'Echad; Yeled Sheli; ANI HMShICh"
  ],

  80: [
    "The Most High God; I'M THE FATHER; Salvation of God; Glorious One; The Most Holy God; Divinity; Savior's Name; Twenty-Seven; Six and Three; Five, Five; One, One, Seven; Three and Six; Nine, Nine; Nine, Five; One and Seven; Two, Zero, Nine; One, Three, Six; Eighty-Seven",
  ],

  81: [
    "Lord Most High; The Number; Righteous God; Daughter Zion; Seventy-Eight; One, Six, and Two; Four, Seven; One, Zero, Three [IVRIT] MSPR ALHIM; Ze Mispari; Shem Mashiach; Me'ah ve'Shisha",
  ],

  82: [
    "Mary of Magdala; A God Number; Most Holy Place; Heaven on Earth; Highest Heaven; A Righteous God; What is the Name?; The Glory of God; The Blood of God; The Judge of All; One and Five; One, Two, and Zero; One and Nine; Twenty-Five; Eighty-Nine; Twenty-Nine; Eighty-Five; Two, Four, Six; One, One, Nine; Forty-Seven",
  ],

  83: [
    "(23rd Prime #) Eternal King",
  ],

  84: [
    "The Word of God; A Gift from God; Great Wedding; Angelic Being; God's Blessing; Who is God's Son?; He is Most Holy; Holy, Holy, Holy!; I AM THE CHRIST; I AM DIVINE; The Holiest of All; He who loves us; He is a Great Light; Never Died; The Holy Judge; Our Refuge; Virginity; The Living One; Forty-Five; One, One, and One; Five, Two, Eight; One, Zero, Seven [IVRIT] HaShem Elohim; HaKadosh Shem; Shisha, Shisha; Shem Moshiach; Emi HaBetulah; Mi Hu Yaldi?",
  ],

  85: [
    "Who is Jesus?; The Father's Son; King of Zion; The One True God; The Sacred Name; The House of God; Two, Three, Three; Eighty-Four; One, Three, Eight; One and Four; Five and Six; One, Five, Six; Two Hundred; Twenty-Four; Three and Eight",
  ],

  86: [
    "The Holiest Name; I AM IN HEAVEN; Who is our God?; I'M THE HOLY GHOST; The God of Heaven; The New Covenant; Better Covenant; King of Salem; Who is Mighty?; One, Zero, Nine; One, Zero, Five; Four, Four; Five and Zero [IVRIT] Hu Yasha Mashach; Yeled Yahweh"
  ],

  87: [
    "Glorious Name; Holy of Holies; Messiah's Name; Who is the Lord?; What is Salvation?; Lord of Heaven; God our Father; I HEAL THE SICK; A Better Covenant; Forty-Four; One, One, and Six; Seventy-Three; Number One",
  ],

  88: [
    "The Numbers; God's Number; I AM THE HOLY ONE; Light of Israel; He is God of Gods; Most Righteous; Mary Magdalene; I AM GOD'S MOTHER; Three, Eight, Six; Four, Six, One; Fifty-Three; Thirty-Nine; Eight and Seven; One, Zero, and One",
  ],

  89: [
    "(24th Prime #) Jesus Christ; I AM GOD MOST HIGH; What is God's Name?; Name of My Son; He is the King; He's the Son of God; Son of Joseph; I AM MARY'S SON; Lion of Judah; I AM GOD ALMIGHTY; Powers of God; The Glorious God; The Throne of God; Forgiveness; Hidden Manna; I AM FAITHFUL; EARTH IS MINE; Ninety-Three; One, Zero, Four; Seven, Two, and Two [IVRIT] HaShem Mashiach; IShVH MShICh; Arba'ah ve'Shmona; Mi Hu Ben HaAv?",
  ],

  90: [
    "What is My Name?; The Lord Jesus; Crucified; The King's Name; God our Savior; Who's slow to anger?; The Mind of God; One, Six, and Six; Five and Eight; One, Five, Eight; Eight and Nine; One, Eight, Nine",
  ],

  91: [
    "He is the Father; The Lord our God; Who is Most Holy?; Who's the Holy Ghost?; I AM THE MESSIAH; I DID NOT SIN; He is God's Glory; Fifty-Seven [IVRIT] Mi Hu Yeshua?; Melech v'Elohim",
  ],

  93: [
    "The Most Holy Name; Who is Messiah?; Who's God Most High?; The Servant of God; Everlasting Love; God's Presence; I AM THE GOD OF GODS; Who's Mary's Son?; The Holy Bible; I AM HOLIEST OF ALL; Who has God's Blood?; Fifty-Five; Eight and Four; Fifty-Nine; Two, Five, Seven; One, Four, Eight",
  ],

  95: [
    "God's Numbers; A Holy Number; Who's the Messiah?; He is Perfect; Eleven Thousand; Two, Two, Zero, Two, Zero; Number Eight; One, Two, and Seven; Seventy-Four; Two, Five, Five; One, Six, and Eight",
  ],

  96: [
    "What is a Holy Name?; One, Nine, Six",
  ],

  97: [
    "(25th Prime #) The Most Holy Place; The Highest Heaven; The Power of God; A Prophet of God; Creator of Life; Name of Messiah; Who is the God of All?; Anointed by God; To us he was born; To us he is given; The Most Divine; One, Two, and Five [IVRIT] Melech Yisrael",
  ],

  98: [
    "Number of God; Who is the Father?; This is God's Name; One, One, and Three; Four, Two, Five",
  ],

  99: [
    "A Number of God; This is My Name; My Name is Holy; A Crucified Man; He who is Jesus; THE FATHER SENT ME; Revelation of God; One, Five, Seven; Four and Three; Five and Seven; One, Three, Four; The Number Ten; Eight, Zero, and Six; Seven and Nine [IVRIT] Mispar Melech",
  ],

  100: [
    "God Most High's Name; The King of Zion; MY FATHER IS GOD; Unfailing Love",
  ],

  101: [
    "(26th Prime #) Holy Numbers; Yeshua Moshiach; What's the Name of God?; He is the Messiah; The King of Earth; God of this World; The Faithful One; A Divine King; MY NAME MEANS 'GOD'; I FORGIVE SIN; I FORGIVE YOU; Never Sinned; I AM MOST DIVINE; Who is Blameless?; Who is Divine?; Who created Life?; House of the Lord; Exalted in the Earth; I'M THE LIVING GOD; Five and Five; One, One, and Seven; One, Five, Nine; Nine and Nine; Nine and Five; Two, Zero, and Nine; One, Three, and Six [IVRIT] Yeshua Moshiach; Yeled Miriam",
  ],

  102: [
    "Jesus of Nazareth; He is the Son of God; The Holy of Holies; One, Three, One, Zero; Four and Seven; One, Seven, Four [IVRIT] Zeh HaYeled Sheli",
  ],

  103: [
    "(27th Prime #) Father of Jesus; Mary the Magdalene; Mother of Jesus; Holiest of the Holy; The Most Righteous",
  ],

  104: [
    "Jesus the Christ; The Name of My Son; Who is the Holy Ghost?; Four, Two, and Zero [IVRIT] Mispar Shemi; HaB'yoter Kadosh",
  ],

  105: [
    "Numbers of God; He created all things; Two, Nine, and Eight; Nine, Zero, Five; Three Hundred; Five, Two, and Eight",
  ],

  106: [
    "Yeshua HaMashiach; Son of Humanity; The Name of the Lord; Innocent of Sin; Beautiful Name; The Holy Spirit; Righteous King; Who is the Most Holy?; Who is God Most High?; Our King and God; Who is Mary's Son?; Born in a Manger; Ark of the Covenant; The Dwelling of God; Who died at Calvary?; Who is My Father?; The Mediator of God; HE BEARS MY NAME; MY WAYS ARE JUST; Club of My Wrath; Sits on God's Throne; He who is with us; One, One, and Four; One, Six, and Five; Nine, One, and Six; Two Hundred One; One, Three, and Eight; Three, Zero, and Zero; One Hundred Two; Two, Three, and Three [IVRIT] Yeshua HaMashiach; Nolad mi-HaBetulah; Ruach mi-Elohim",
  ],

  107: [
    "(28th Prime #) I AM HOLY AND TRUE [IVRIT] HaMispar Melech",
  ],

  108: [
    "Who is the Messiah?; I'M THE FATHER'S SON; He is the Son of Man; What's a God Number?; I AM HOLY, HOLY, HOLY!; was crucified; I AM THE LIVING ONE; He's at God's Right Hand; Number Eighty; One, One, Six, and One",
  ],

  109: [
    "Holiest Number; The Holy Number; The Blessing of God; He is our Savior; Who's from Nazareth?; I AM THE ONE TRUE GOD; Three, Eight, and Six; One Hundred Ten; Number Four; One, Eight, and Seven [IVRIT] Mi Hu Yasha Mashach?; HaYeled Miriam",
  ],

  110: [
    "Jesus' Number; Son of the Virgin; Who's the Glory of God?; I AM JESUS' FATHER; Face like the Sun",
  ],

  111: [
    "The Lord God Almighty; The King of Heaven; God of our Fathers; Whose Name is Holy?; Who is our King?; Crucified Man; The Only Begotten Son; The Son of a Virgin; The Mystery of God; A Face like the Sun; He is our Maker; Majesty in Heaven; Holy One of Israel; The House of David; The House of Judah; He is God of Israel; Branch of the Lord; I'M MOST RIGHTEOUS; The Prophet of God; He died on Calvary; He is our Strength; One, Zero, Zero, Nine",
  ],

  112: [
    "Yeshua HaMeshiach; What's the Holiest Name?; Whose Father is God?; The God of the Bible; Maker of all Things; One Hundred One; One, Two, Five, and Two [IVRIT] Yeshua HaMeshiach; HaMispar Shemi",
  ],

  113: [
    "The Number of God; I AM JESUS CHRIST; He who is the Holiest; The Throne of Heaven; The Testimony of God; One, Six, Four, Zero; Four, Three, Three; Three, Seven, Five; One, Zero, One, and Zero; Four, Two, Two, Five [IVRIT] Miriam Migdalit; Mi Hi HaEm Elohim?",
  ],

  114: [
    "What is the Name of God?; A Stumbling Block; EARTH IS MY FOOTSTOOL; Who is the Eternal God?; VENGEANCE IS MINE",
  ],

  115: [
    "The Sovereign Lord; Prince of Peace; He remains the same; A Righteous Branch; He Never Sinned [IVRIT] Qodesh HaQodashim; HaMispar HaMelech",
  ],

  116: [
    "In the Beginning; Who is our Savior?; Who is the Lamb of God?",
  ],

  117: [
    "Yehoshua HaMashiach; Who's Jesus Christ?; My Holy Number; A Most Holy Number; Jesus' Numbers; He's the Holy One of God; Who is our Lord God?; The Virgin's Child; The Sacred Name of God; The Major Prophet; He's Blessed by God; Who vindicated us?; My Flesh and Blood; Who Cures Disease?; He is Holy and True; The Jesus of Nazareth; He tasted Death for us; One, Three, and Five; The Number Twelve; One, Nine, and Three; Two, Four, and Seven; Eight Hundred Ten; One, One, Zero, Zero, Zero [IVRIT] Ehyeh Asher Ehyeh; HaYeled mi-Elohim",
  ],

  118: [
    "Nine, Four, Three; Four, Three, Five",
  ],

  119: [
    "A Messiah Number; The King of Kings; The Holiest of All Names; The Name Above All Names; The Father of Israel; He offers Salvation; Who is the Great King?; The Great and Mighty God; My Only Begotten Son; He is the One True God; He hates all who do Wrong; I COMMAND THE CLOUDS; Loosens Orion's Belt; What's the Most Holy Name?; Number Fifty; The Number Sixty; Two, Four, and Five; Three, Zero, and Seven; Eight, Three, Two, Five",
  ],

  120: [
    "Lord Jesus Christ; Who is without Sin?; He forgave our Sin; He who is God Most High; Kingdom of Heaven; I AM THE LORD ALMIGHTY; The Numbers of God; The Godly Numbers; The Throne of the Lord; Bears My Holy Name; He sits on God's Throne; MY HEEL WAS STRUCK; City of Jerusalem; A Shield Around Us; One Hundred Eight; One, Three, and Four; Two Hundred Three; One, Nine, and Seven; Two, Two, Zero, Zero, Five; One, Seven, and Five; One, Nine, Three, Six; Nine, Nine, Nine",
  ],

  121: [
    "What is a God Number?; Who is the Most High God?; The King of the Jews; The Son of Humanity; I WAS CRUCIFIED; He is God our Father; Lifts our Head High; Seven, Five, Four; The Ark of the Covenant; One, Three, Five, Zero; Two Hundred Twelve [IVRIT] Ani Melech Yisrael",
  ],

  122: [
    "Dwells on Mount Zion",
  ],

  123: [
    "Most Holy Numbers; Who lives forever?; My Unfailing Love; Who's our Fortress?; YOU HAVE FORGOTTEN ME; Who is Mary of Magdala?; Virgin Number; Number Eighty-Two; The Number Eleven; The Number Eighty; One, Four, and Seven; Three, Eight, and Seven; Eight Hundred Six; One, One, Seven, Four; Two Hundred Seven",
  ],

  124: [
    "The Holiest Number; The Anointed One of God; God of the Universe; Who's the Holy One of God?; Punished By God; MY NAME IS MAJESTIC; HEAVEN IS MY THRONE; The Number Four; Seven, Five, and Zero; One, Four, Zero, Three",
  ],

  125: [
    "The Salvation of Israel; Who committed no Sin?; Who is the Holiest of All?; The Name of God Most High; He is the Lord our God; Forgives our Sin; Messiah's Number; He has hair like Wool; The Son of God the Father; He fulfilled the Law; The Portion of Jacob; FOR I HAVE SPOKEN; Everlasting Renown; He's our Redeemer; Number Forty-Two; One, Four, and Nine; Two Hundred Five; Six, Five, and Nine; Two Hundred Nine",
  ],

  126: [
    "The Branch of the Lord; The Holy One of Israel; Who is the One True God; The God of our Fathers; Kingdom of Israel; He showed us Mercy",
  ],

  127: [
    "(31st Prime #) What is God's Number?; A Divine Number; The Messianic King; Two Hundred Eighty; Two Hundred Eleven",
  ],

  128: [
    "What is My Number?; Mighty One of Israel; I DWELL ON MOUNT ZION; I AM THE LORD YOUR GOD; One, Two, Zero, One, and Zero",
  ],

  129: [
    "Worthy to take the Scroll; Number Seventeen",
  ],

  130: [
    "This is a God Number; Who is Jesus Christ?; Crucified King; Died for our Sin; Savior of Humanity; Coming with the Clouds; One, Eight, Six, and Three; One, Three, Two, and Seven; The Number Sixteen",
  ],

  131: [
    "(32nd Prime #) The Most Holy Number; He who is our Lord God; Enthroned in Heaven; He's King of all the Earth; One Hundred Nine; One Hundred Five",
  ],

  132: [
    "Who is the King and God?; Messiah's Numbers; Who has hair like Wool?; Who is the Lord our God?; He who is our Maker; He is Omni-Present; He died and rose again; One, Zero, Zero, and Nine",
  ],

  133: [
    "The Son of the Most High God; Mary Magdalene's Child; Divine Numbers; Holiest of Numbers; Number of God's Name; Who is the God of Israel?; A Righteous Number; He's at the Right Hand of God; Number Seventy-Two; Twelve Thousand Forty; One Hundred Twenty; One Hundred Eleven; Eight, Four, and Five",
  ],

  134: [
    "What is a Holy Number?; Our Father in Heaven; He is a Sun and Shield; He who is Without Sin; The Number of the Son; The Number Fifty; One Hundred Four; Numbers Two and Zero; Four, Two, Two, and Five",
  ],

  135: [
    "The Lord Jesus Christ; This is Messiah's Name; A Number of My Name; What is the God Number?; What are God's Numbers?; I AM THE SON OF A VIRGIN; Who rose from the Dead?; His Name alone is Exalted; I'M THE GOD OF THE BIBLE; Greater Honor than Moses; I HEAR WHEN YOU CALL ME; Two, Two, Five, Zero, Five; Seven, Nine, Two, and One; Eight Hundred Twelve; One Hundred Forty",
  ],

  136: [
    "This is God's Number; What's Jesus' Number?; The God of Heaven and Earth; One, Zero, Five, Zero, Zero; Two, Three, Five, One, Zero",
  ],

  137: [
    "(33rd Prime #)",
  ],

  138: [
    "God Most High's Number; Jesus Christ's Father; The Most Holy Numbers; My Name and Number; He will deliver Jacob; The Number Twenty-Two; Numbers Two and Eight",
  ],

  139: [
    "(34th Prime #) What is God Most High's Name?; What's the Number of God?; Who's the King of Heaven?; Who's the Mystery of God?; Number Sixty-Three; Two Hundred Ninety; Four, Three, and Five",
  ],

  140: [
    "The Messiah's Number; The Name of the Most High God; He is our King and God; LET HIM BE GLORIFIED",
  ],

  141: [
    "What is the Messiah's Name?; The Spirit of the Lord; Forgives all our Sins; Robed in Splendor",
  ],

  142: [
    "The Number of Jesus; The Mighty One, God, the Lord; Two Hundred Twenty-Two; One, Three, Five, One, Zero; Numbers Six and Six; Seven, Five, and Four; Two, Seven, Zero, and Four; Nine, Seven, and Four",
  ],

  143: [
    "Number Thirty-Eight",
  ],

  144: [
    "The Number of the Lord; I AM LORD JESUS CHRIST; The Numbers of Heaven; The King of Jerusalem; Highest of the Mountains; Most Worthy of Praise; He who is Jesus Christ; Number Sixty-Five; One Hundred Sixty-Two; Five, Zero, Six, Two, Five; One, One, Seven, and Four; Numbers One and Eight; The Number Eighty-One; One Hundred Fifty; Number Ninety-Six; The Number Thirty-Two",
  ],

  145: [
    "These are God's Numbers; The Most Sacred Number; The Crucified King; The Savior of Humanity; He is the Ruler of Earth; He sat down with the Father; Six, Three, Zero, One, Five; The Number Fifteen; Number Forty-Three; One Hundred Ninety; One, Four, Zero, and Three",
  ],

  147: [
    "The Messiah's Numbers; Who is our King and God?; Suffered on the Cross; Carried His own Cross; Son of Mary and Joseph; Who is the Holy Spirit?; He is the Son of God's House; From the Line of David; He's the God of Everything; MY FATHER IS IN HEAVEN; I AM THE GREAT HIGH PRIEST; Numbers Six and Eight; One, Zero, Nine, and Five; Number Seventy-Eight; Numbers Two and Seven",
  ],

  148: [
    "My Favorite Number; The Numbers of the Name; The Holiest of Numbers; What is the Holy Number?; He's our Lord and Savior; Who rides a White Horse?; Number Eighty-Nine; Number Eighty-Five; Two Hundred Seventeen; One Hundred Eighty-Two; Number Twenty-Nine",
  ],

  149: [
    "(35th Prime #) What is Jesus' Number?; The Presence of the Lord; The Number of My Name; Numbers Five and Two; The Number Fifty-Two; Number Ninety-Eight; One, Four, Eight, and Three; Two Hundred Fifteen; One, Four, Zero, Three, Zero [IVRIT] Ma HaMispar shel Elohim?; Mi Hu Yeshua HaMashiach?",
  ],

  150: [
    "Antichrist's Numbers; The Upside-Down Cross; I AM THE HOLY ONE OF ISRAEL; Wonderful Counselor; Who will reign wisely?; The Number of Messiah; Our Lord Jesus Christ; I AM THE ONE YOU ARE TO FEAR; One, Four, Zero, and Five; One Hundred Forty-Two; One Hundred Thirteen",
  ],

  151: [
    "(36th Prime #) This is the Name of God's Son; A man who was Crucified; The Name of the Lord our God; The Numbers of the Lord; I TAKE MY PLACE IN COURT; Number Eighty-Four; Number Two Hundred; Number Twenty-Four; Numbers One, One, and Two",
  ],

  152: [
    "What is the Number of God?; The Most Sacred Numbers; The Lord of Heaven and Earth; Creator of the Universe; Who is the Ruler of Earth?; He made us to be a Kingdom; Five Hundred Eighty; Two Hundred Seventy-Two; The Number Twenty-Eight; The Number Eighty-Eight",
  ],

  153: [
    "The Most High God's Number; Who is the God of the Bible?; Where's the Holy of Holies?; A Year of the Tribulation; Number Forty-Four; Numbers Six and Three; Two Thousand Twenty-Four; The Numbers Two and Eight",
  ],

  154: [
    "I PUT MY TRUST IN HIM",
  ],

  155: [
    "My Favorite Numbers; The Most Holy of Numbers; The Number of the Father; Sits on the Throne of Heaven; He is exalted among the Nations; One Hundred Fifteen; Four Hundred Twenty",
  ],

  156: [
    "What is a Most Holy Number?; The Numbers of My Name; Who wore a Crown of Thorns?; Death by Crucifixion; I DIED FOR YOUR SIN; Every eye will see Him; Who is the Sovereign Lord?; Who enters into Judgment?; One, Three, Five, Three, Zero; Numbers Six and Seven; Six Hundred Sixty-Six; The Number Ninety-One; One Thousand Twenty-Nine",
  ],

  157: [
    "The Holiest of all Numbers; Spring of Living Water; I AM THE ONE YOU ARE TO DREAD; He will be a Trap and a Snare; One Hundred Eighty-Six",
  ],

  158: [
    "Beautiful and Glorious",
  ],

  159: [
    "The Glory of the God of Israel; BE STILL AND KNOW THAT I AM GOD",
  ], 

  160: [
    "What are the Numbers of God?",
  ],

  161: [
    "I SIT ON THE THRONE OF HEAVEN; Who examines the righteous?; Makes us dwell in Safety; Number Seventy-Four",
  ],

  162: [
    "Jesus Christ's Number; The Name and Number of God; The Great King over all the Earth; The Numbers Two and Seven; Two Hundred Twenty-Three; One Hundred Twenty-Eight; The Number Seventy-Eight",
  ],

  163: [
    "(38th Prime #) Who's the Lord Jesus Christ?; A Name that No One knows but God; One, One, Five, Three, and Zero; The Number Eighty-Nine; The Numbers Eight and Zero",
  ],

  164: [
    "He is Coming with the Clouds",
  ],

  165: [
    "The Antichrist's Numbers; The Number of the Messiah; Glory and Honor and Power; He died and came to life again; We put our Trust in Him; A Rock that makes People fall; I AM THE SPIRIT OF THE LORD; One, Two, Zero, Four, and Five; Seven Hundred Twenty-Two; One, Four, Five, One, Five; Numbers One, Three, and Two; Numbers One, Eight, and One"
  ],

  166: [
    "The Name of our King and God; What's the Name of the Most High God?; What is the Name of the Messiah?; MY YEARS WILL NEVER END; The Number Two Hundred; The Number Eighty-Four; The Number Twenty-Four",
  ],

  167: [
    "(39th Prime #) What is a Number of Jesus?; These are Jesus' Numbers; Which Number is Mine?; THE LORD ALMIGHTY IS MY NAME; Two Hundred Twenty-Five; One Hundred Sixty-Seven; The Numbers Two and Four",
  ],

  168: [
    "What's the Number of Jesus?; Numbers One, Six, and Eight; One, Zero, Five, One, and Five",
  ],

  169: [
    "He is the Lord Jesus Christ; What is the Name of our King?; The King of Righteousness; I AM THE SAVIOR OF HUMANITY; Whose Mother is the Virgin?; The White Stone with a New Name; I MADE EARTH BY MY POWER; He is a Scepter of Justice; THE WORDS OF THE LORD COME TO ME; Numbers One, Eight, and Zero; One Hundred Sixty-Five",
  ],

  170: [
    "What is the Most Holy Number?; These are the Numbers of God; The Number of Jesus' Name; The Numbers of God Most High; Firstborn from the Dead; One, Four, Zero, Three, and Zero",
  ],

  171: [
    "The Numbers Six and Seven; Numbers Two, Seven, and Six; One Hundred Eighty-Seven",
  ], 
  
  172: [
	"This is the Holiest Number; One Hundred Seventy-Eight",
  ], 
  
  173: [
	"The Number of the Name of God",
  ],

  174: [
    "What's the Number of God's Name?; What is a Number of My Name?; What's the Holiest of Numbers?; He who is the King of Kings; What is the Name of our Savior?; Holds the Scepter of Justice; Number of the Lord our God; The Number Fifty-Five; The Numbers Five and Zero; One Hundred Thirty-Three; Numbers Two, Zero, and Nine; Two Hundred Ninety-Three; The Numbers Eight, One, and Two; Numbers One, Three, and Six",
  ],

  175: [
    "Which Name belongs to Me?; He builds up Jerusalem",
  ],

  176: [
    "Who is the Lord Jesus Christ?; A Guarantor of a Better Covenant",
  ],

  177: [
    "What's the Name of the Lord our God?; Who gathers the exiles of Israel?",
  ],

  179: [
    "(41st Prime #) What is the Name of the Most High God?; This Number is the Most Holy; Takes delight in His People; Numbers Two, Three, and Three; The Numbers Two, Two, and Five; One Hundred Thirty-Five; The Numbers One, Six, and Zero",
  ], 
  
  181: [
	"What is the Number of Jesus?",
  ],

  182: [
    "Among the Seven Golden Lampstands",
  ],

  183: [
    "The Lion of the Tribe of Judah; Who knows the Laws of the Heavens?; Who rises to Judge the People?; From whose womb comes the ice?; One Hundred Seventy-Nine; The Numbers Two, One, and Seven",
  ],

  185: [
    "This is God's Name and Number; The Numbers of the Most High God; Three Hundred Eighty-Seven",
  ],

  186: [
    "What're the Messiah's Numbers?; This is My Name and Number; One, Four, Five, One, and Five; Number One Hundred Eight; Six Hundred Seventy-Five; One Hundred Seventy-Four",
  ],

  187: [
    "What are the Messiah's Numbers?; The Lord our Righteous Savior",
  ], 

  189: [
    "The Number of the Lord our God; What are the Numbers of Jesus?; The Numbers Two, Nine, and Zero; The Numbers Two, Zero, and Five",
  ],

  190: [
    "He who is the Lord Jesus Christ; A Number of our King and God; Ruler of the Kings of the Earth; His Praise is on our Mouths; Numbers One, Three, Two, and Zero; Numbers Two, Four, and Seven; Numbers One, Nine, and Three; The Numbers Four and Seven",
  ],

  191: [
    "(43rd Prime #) The Number of the Most Holy Name; The Numbers One, Nine, and One",
  ],

  192: [
    "I HOLD THE KEYS OF DEATH AND HADES",
  ],

  193: [
    "(44th Prime #) Lord Jesus Christ's Number; A Stone that causes People to Stumble; One, Four, Zero, Four, and Five; Five Hundred Thirty-Three; Numbers One, Three, and Four; The Numbers One, Seven, and Zero; Number One Hundred Twelve; The Number One Hundred One",
  ],

  197: [
    "(Sum of first 12 Primes & 45th Prime #) I AM THE ONE YOU ARE TO REGARD AS HOLY; The Numbers One, Eight, and Seven; Number One Hundred Nine; The Numbers Three, Eight, and Six",
  ],

  199: [
    "These are the Numbers of Jesus; This is the Name of the Lord our God; Who is Beautiful and Glorious?; Numbers One, Three, Six, and Zero",
  ],

  200: [
    "Lord Jesus Christ's Numbers; The Number of the Holy of Holies",
  ],

  201: [
    "In His right hand are Seven Stars; Whose Name is Mighty in Power?",
  ],

  203: [
    "We praise Him with all our Heart; Crowns the Humble with Victory",
  ], 

  204: [
    "Nine Hundred Ninety-Nine; The Number Eight Hundred Six",
  ],

  205: [
    "The Ruler of the Kings of the Earth; Who sends lightning with the Rain?; I WILL CARRY OUT MY PURPOSE",
  ], 
  
  206: [
	"The Numbers One, Seven, and Seven",
  ],

  207: [
    "His feet are like Glowing Bronze",
  ], 

  208: [
    "MY KINGDOM IS NOT OF THIS WORLD",
  ],  
  
  209: [
	"What are Jesus Christ's Numbers?; The Numbers Five, Three, and Zero",
  ],
  
  210: [
	"What are the Numbers of God Most High?",
  ],

  211: [
    "Who laid the Foundations of the Earth?; His eyes are blazing like fire",
  ],

  212: [
    "What is a Number of Jesus Christ?; What are the Numbers of the Messiah?; The Number One Hundred Five",
  ],

  214: [
    "I ANSWER FROM MY HOLY MOUNTAIN",
  ],

  215: [
    "Who has a voice like rushing waters?",
  ],

  216: [
    "The Numbers Nine, Six, and Four",
  ],

  217: [
    "What is the Number of the Most High God?; I AM WHO IS AND WHO WAS AND WHO IS TO COME",
  ],

  218: [
    "The Government is on His Shoulders",
  ],

  220: [
    "Who leads out the Bear with its Cubs?; Numbers One, Zero, Nine, and Five",
  ],

  222: [
    "These are the Numbers of the Messiah; Number Two Hundred Twenty-Eight; The Number Eight Hundred Twenty; Number One Hundred Nineteen; The Numbers Three, Seven, and Five; Numbers One, Four, Eight, and Three; The Numbers Four, Two, Two, and Five",
  ],

  224: [
    "Who presides in the Great Assembly?; Who crowned us with Glory and Honor?",
  ],

  225: [
    "What are the Numbers of the Most High God?; Who will reign on the Throne of David?; The Number One Hundred Eighteen; The Number One Hundred Sixty-Two",
  ],

  228: [
    "What is the Messiah's Name and Number?; What is the Number of the Lord our God?; We will glorify His Name forever",
  ], 
  
  229: [
	"What is a Number of our King and God?",
  ],

  230: [
    "What is the Number of the Most Holy Name?; The Numbers of the Name of God Most High; The Numbers Seven, Five, and Four; Number One Hundred Forty-Eight; Number One Hundred Sixty-Three",
  ], 
  
  233: [
	"The Number of the Lord Jesus Christ; The Number Seven Hundred Forty",
  ],

  235: [
    "DO NOT BE AFRAID, I AM THE FIRST AND THE LAST; The Number One Hundred Thirty-Two",
  ],

  236: [
    "I WILL FORGIVE YOUR WICKEDNESS; The Number Four Hundred Twenty",
  ], 

  238: [
    "The Number One Hundred Eighty-Six",
  ],

  240: [
    "The Numbers of the Lord Jesus Christ; Whose Throne will last for ever and ever?; Number Seven Hundred Twenty-Six; The Numbers One, Three, Zero, Zero, and Zero; The Number One Hundred Fourteen; The Number One Hundred Fifty-Two",
  ],  
  
  241: [
	"The King of Kings and the Lord of Lords",
  ],

  242: [
    "I HAVE SWORN AND WILL NOT CHANGE MY MIND",
  ],  
  
  244: [
	"These are the Numbers of Jesus Christ; Number One Hundred Seventy-Three; The Number One Hundred Thirty-Six",
  ],

  245: [
    "Who is with us like a Mighty Warrior?",
  ], 
  
  251: [
	"What are the Numbers of our King and God?; The Numbers One, One, Five, Three, and Zero",
  ],

  255: [
    "Dressed with a Golden Sash around His waist; He has raised up for His People a Horn",
  ],

  257: [
    "What is the Number of Lord Jesus Christ?; The Number Two Hundred Fifty-Seven; The Number Six Hundred Twenty-Five",
  ],

  260: [
    "The Number One Hundred Thirty-Five; Twenty-Two Thousand Five Hundred Five; The Numbers One, Three, Five, Two, and Five; One Thousand One Hundred Seventy-Four",
  ], 
  
  261: [
	"These are the Numbers of our King and God; Number One Thousand Two Hundred Twelve",
  ],

  263: [
    "(56th Prime #) The Number One Hundred Thirty-Four",
  ], 
  
  266: [
	"What is the Name and Number of the Most High God?; The Numbers One, One, Five, Three, and Five",
  ],

  271: [
    "Who has the appearance of Jasper and Ruby?",
  ],

  272: [
    "What is the Number of the Lord Jesus Christ?; Dressed in a robe reaching down to His Feet",
  ],

  276: [
    "Worthy to receive Glory and Honor and Power; His Splendor is above the Heavens and the Earth",
  ],

  279: [
    "I BRING OUT THE WIND FROM MY STOREHOUSES",
  ], 
  
  280: [
	"What are the Numbers of the Lord Jesus Christ?",
  ],

  289: [
    "YOU ARE MY SON, TODAY I HAVE BECOME YOUR FATHER",
  ], 
  
  290: [
	"These are the Numbers of the Lord Jesus Christ",
  ],

  293: [
    "The Number of the Name of the Lord Jesus Christ; All Peoples on Earth will mourn because of Him; Twenty Thousand Five Hundred Thirty-Five; Eleven Thousand Five Hundred Thirty-Five",
  ],

  300: [
    "In the Beginning God created the Heavens and the Earth; I BRING FORTH THE CONSTELLATIONS IN THEIR SEASONS; The Number Two Thousand Seven Hundred Four",
  ],

  307: [
    "I WAS DEAD, AND NOW LOOK, I AM ALIVE FOR EVER AND EVER!;",
  ],

  318: [
    "BEFORE I FORMED YOU IN THE WOMB I KNEW YOU",
  ],

  333: [
    "I AM THE LORD YOUR GOD WHO BROUGHT YOU UP OUT OF EGYPT",
  ],

  334: [
    "Coming out of His mouth is a sharp, double-edged sword; The Number One Thousand Seven Hundred Twenty-Eight",
  ],

  361: [
    "YOU ARE A PRIEST FOREVER IN THE ORDER OF MELCHIZEDEK",
  ],

  690: [
    "The people walking in darkness have seen a great light, on those living in the land of deep darkness, a light has dawned",
  ],
 },
 
 cipher4: {
	 	1: [
		"A; Z",
	],
	
	3: [
		"E; K; P; V",
	],
	
	4: [
		"F; J; Q; U",
	],
	
	5: [
		"H; S",
	],
	
	7: [
		"I; R",
	],
 
	13: [
		"B; Y",
	],
	
	14: [
		"C; X",
	],
 
  21: [
    "Jesus",
  ],
  
  22: [
	"M; N",
  ],
  
  25: [
	"D; L; O; W",
  ],

  26: [
    "Six [IVRIT] YHVH",
  ],

  29: [
    "(10th Prime #) Yashua",
  ],

  30: [
    "I AM [IVRIT] IHShVH; ANI",
  ],

  31: [
    "(11th Prime #) Yeshua [IVRIT] Yeshua; Pesach",
  ],

  39: [
    "[IVRIT] ShMI",
  ],

  41: [
    "(13th Prime #) Rabbi; He is Jesus",
  ], 

  42: [
    "[IVRIT] Shemi; IHWH",
  ],
  
  45: [
	"G; T",
  ],

  48: [
    "YHWH; Name; Messiah; Savior; Israel [IVRIT] YHWH",
  ], 
  
  50: [
	"[IVRIT] IHShVO; Zeh HaShem",
  ],
  
  51: [
	"I AM JESUS [IVRIT] Zeh Shemi",
  ],

  52: [
    "Yahweh; Son; Passover [IVRIT] Yahweh; Mispari",
  ], 
  
  53: [
	"[IVRIT] Misparai",
  ],

  56: [
    "[IVRIT] ANI YHVH; Ze Mispari",
  ], 
  
  59: [
	"Yahoshua",
  ],

  61: [
    "Yehoshua [IVRIT] Yehoshua; Zeh Mispari; Ani Pesach; Hu Yahweh",
  ], 
  
  62: [
	"Faith",
  ],

  63: [
    "Three",
  ], 

  64: [
    "[IVRIT] Ma HaShem?",
  ],

  68: [
    "Holy",
  ], 

  75: [
    "[IVRIT] Ma Mispari?",
  ],

  77: [
    "King",
  ],

  79: [
    "(22nd Prime #) [IVRIT] Ehyeh Asher Ehyeh; Tzaluv",
  ],

  80: [
    "Three, Five",
  ], 

  81: [
    "[IVRIT] HMSPR ShMI; Zeh Mishkani",
  ],

  82: [
    "Ani Yahweh",
  ],

  85: [
    "Crucified",
  ],

  86: [
    "One, Seven; One, Zero [IVRIT] Mispar HaShem; HaShem Sheli",
  ],
  
  87: [
    "My Son [IVRIT] Elohim; ShMI YHWH",
  ],

  88: [
    "Who is Jesus?; Our Son",
  ],

  89: [
    "[IVRIT] HaBen Sheli",
  ],

  92: [
    "Jesus' Number; A Prophet; Four, Six, Six [IVRIT] HaMispar HaShem; Esrim Echad",
  ],

  95: [
    "God; Yashua HaMashiach; Two [IVRIT] Yashua HaMashiach; Zeh HaShem Beni; BN ALHIM; Esrim v'Echad",
  ],

  97: [
    "(25th Prime #) Yeshua HaMashiach; Jesus' Numbers; I'M HOLY; I AM DIVINE [IVRIT] Yeshua HaMashiach; Mispar Yahweh; MSPR ALHIM",
  ],

  99: [
    "Yeshua HaMeshiach; Sixteen; Three, Zero; Three, Seven [IVRIT] Yeshua HaMeshiach; Kadosh Shem",
  ],

  100: [
    "Mary's Son",
  ],

  101: [
    "(26th Prime #) The Name; The Messiah; Messiah's Name; Sixty-Five [IVRIT] Zeh HaMispar HaShem; HMSPRIM IHShVH",
  ],

  102: [
    "",
  ],

  103: [
    "(27th Prime #) One, Five, Seven",
  ],

  104: [
    "Jesus Christ; He is our Messiah; A Sacred Name; One, Nine",
  ],

  105: [
    "The Son; The Passover; Eight; Five and Four [IVRIT] Emi Miriam",
  ], 

  106: [
    "My Number [IVRIT] Kadoshi Shem",
  ],

  109: [
    "(29th Prime #) Superior Name; Seventeen",
  ], 
  
  110: [
	"Sixty-Six"
  ],

  113: [
    "(30th Prime #) One, Three",
  ],

  115: [
    "Who is Messiah?; Paschal Lamb; Holiest; One and Five [IVRIT] HaKadosh Mispar; Zeh Kadoshi Shem",
  ],

  116: [
    "I AM JESUS' FATHER; MY NAME IS JESUS",
  ],

  117: [
    "[IVRIT] Ani Elohim",
  ],

  118: [
    "The Father; Messiah's Father",
  ],

  120: [
    "A Messiah Number; Seven and Seven",
  ],

  121: [
    "Heaven is His Home; Heals the Sick; One, Nine, Five",
  ],

  122: [
    "A Number of Jesus; Never Sinned; Thirty; One, Zero, Zero; Eight, Five",
  ],

  123: [
    "I WAS CRUCIFIED; Fifty-One",
  ],

  124: [
    "The Number; He is Jesus Christ; Messiah's Number; He was Crucified; Son of Mary; Mary's Child; Mary's Numbers; I AM FROM HEAVEN; One and Six; Sixty-Four; Seven and Four",
  ],

  125: [
    "Yahoshua HaMashiach; Name of Messiah; Three, Zero, Six [IVRIT] Yahoshua HaMashiach; Ben Elohim; MSPR MShICh IHShVH; Mi Hu Malkeinu?; HaBen mi-Yahweh; Echad, Echad, v'Shivah",
  ],

  126: [
    "A Crucifixion; One, Zero, Four",
  ],

  127: [
    "(31st Prime #) Yehoshua HaMashiach; A Son of Joseph; House of Aaron; Infinity; Nineteen",
  ], 
  
  128: [
	"[IVRIT] HaShem Elohim",
  ],

  129: [
    "The Numbers; Forgiveness; Divinity; He heals the Sick; Messiah's Numbers; Ninety-Five",
  ],

  130: [
    "The King; I'M THE MESSIAH; I AM MARY'S SON; He Never Sinned; Four, Four, One; Nine, Seven, Four; One, Three, Five; Forty-Seven; Three, One, Five; Number Eleven; One, Six, Nine; Seventy-Seven",
  ], 

  131: [
    "(32nd Prime #) Our God; He Paid the Price; Two, Zero; Eight, Six",
  ],

  132: [
    "Very Beautiful [IVRIT] Mispar Elohim",
  ], 
  
  134: [
	"Salvation",
  ],

  135: [
    "Jesus of Nazareth; Who is Holy?; The Lord; Two, Four; Three, Zero, Seven [IVRIT] HaElohei Yisrael",
  ],

  136: [
    "The Sabbath; The Christ; He's a Priest Forever; One, Seven, One; One, Zero, One",
  ],

  139: [
    "(34th Prime #) Holy Number; HEAVEN IS MY HOME; Three, Zero, Four; One, Three, Six",
  ],

  140: [
    "A Holy Number; My Son's Name; One, Four, One; One, Seven, Nine; Four, Six, and Six",
  ],

  141: [
    "Eight, Seven",
  ], 
  
  144: [
	"Holy Numbers",
  ],

  145: [
    "The Jesus Number; King of Judah; Heaven on Earth; City of Heaven; Two, One; Four, Eight",
  ],

  148: [
    "God's Name; I AM THE FATHER; Number of Messiah; Ninety-Seven; Thirty-Six; Two, Seven, Five",
  ],

  149: [
    "(35th Prime #) A Number of Messiah; One, Seven, Three; Nine, Two; One, Three, Zero",
  ],

  151: [
    "(36th Prime #) My Holy Name [IVRIT] Shem El Elyon; Tzaluv Melech; Shem mi-Elohim; Shaloshim v'Echad",
  ],

  152: [
    "God's Son; Most Sacred; Highest Heaven; One and Nine; Two, Five, Four",
  ],

  154: [
    "The Messiah's Name; Follow Me; Eighty-Seven",
  ], 

  155: [
    "[IVRIT] Elohei Elohim",
  ],

  156: [
    "I AM THAT I AM; The Lord Jesus",
  ],

  157: [
    "(37th Prime #) This is My Name; Three, Four, Nine",
  ], 

  158: [
    "[IVRIT] HaMishkan Elohim",
  ],

  160: [
    "One, Six, and Zero",
  ],

  161: [
    "God of Heaven; This is My Son [IVRIT] HaElohei Elohim; Mispar mi-Elohim; Mispar shel Yasha Mashach",
  ],

  162: [
    "Who is God?; The Prince of Peace; One, Five, Two; Four, Five, Eight",
  ],

  165: [
    "I AM JESUS OF NAZARETH; Most Holy; He overcame Death; Three and Nine",
  ],

  166: [
    "This is Jesus' Number; The Passover Lamb; Died for our Sin; I AM THE SABBATH; I COME FROM HEAVEN; Ninety-Nine; Nine, Two, Five",
  ],

  167: [
    "(39th Prime #) Holy of Holies; Three, One, Nine; Two, Seven, Zero [IVRIT] HaMispar mi-Elohim",
  ],

  168: [
    "Virgin Birth; Who is the Messiah?; The Father of Jesus; Three, Eight",
  ],

  169: [
    "These are Jesus' Numbers; The Holy Name; Forgives our Sin; One, Nine, and Five; Two and Six",
  ], 
  
  170: [
	"[IVRIT] Mispar shel Elohim",
  ],
  
  171: [
    "God's Number; The Messiah's Father; Who is Jesus Christ?; Who was Crucified?; Died on Calvary; Died for our Sins; The Holy One; One, Six, Two; Two, Zero, Four; Four, Eight, Six; Two, Seven, Four; Three Hundred Five",
  ],

  172: [
    "Name of God; God of Israel; One, Eight, Five; Thirty-One",
  ],

  173: [
    "What's Jesus' Number?; Son of a Virgin; A Name of God; A Messiah of God; Three, Six, and Zero",
  ],

  174: [
    "The Number of Jesus; The Slain Lamb; We extol Him; One, Zero, and Four; One, Seven, and Four",
  ],

  175: [
    "Every eye will see Him",
  ],

  176: [
    "Our Heavenly Father; God's Numbers; Son of God; God's Child; Who heals the Sick?; Most Blessed; Numbers Six and Six; Thirty-Nine; Three, Three, One; Number Eight [IVRIT] HaMispar shel Elohim",
  ],

  177: [
    "",
  ],

  179: [
    "(41st Prime #) The Numbers of Jesus; He who was Crucified; The Son of Man; He is not a Sinner; He died for our Sins; Freed us from our Sin; Twenty-Six; Two and Zero; Eight and Six; Number Five Hundred",
  ],

  180: [
    "This is My Number; What is Jesus' Number?; Who is our King?; The House of Aaron; Three Hundred Six; Number Seventeen; One, Zero, Four, Nine",
  ],

  181: [
    "One Hundred Four; One, Eight, Six; Eight, Four, Zero; Number Sixty-Six; Two, One, Seven",
  ], 
  
  182: [
	"What's the Name?",
  ],

  183: [
    "These are My Numbers; What're Jesus' Numbers?; did not sin; Four, One, Five, Four, Zero; Three, Zero, and Seven; Two and Four; Three, Seven, and Seven; One, Three, Five, Zero, Five",
  ],

  184: [
    "What are Jesus' Numbers?; I OFFER SALVATION; A Number of My Name; Number Fourteen; Three, Two, Six; One, Seven, and One",
  ],

  185: [
    "Jesus Christ's Numbers; Lamb of God; Who is our Lord?; Four Hundred Nine; Three, Five, Eight; One, Two, Four; Four, Eight, Four"
  ],

  186: [
    "Lord Jesus Christ; Holiest Number; I DIED ON A CRUCIFIX; He is the Passover Lamb; A Lamb of God; Conquered Death; Two Hundred; Numbers Six and Zero; Two, Six, and Five [IVRIT] Misparim Shmona ve'Shivah",
  ], 

  187: [
    "(187th Prime # is 1117) [IVRIT] Malkeinu ve'Eloheinu",
  ],

  188: [
    "A Number of My Son; King of Kings; Born of a Virgin; One, Nine, and Seven; One, Zero, and Nine",
  ], 

  189: [
    "What is the Name?; One, Four, Zero, Three",
  ],

  190: [
    "Mary Magdalene; Faithful Woman; I AM MESSIAH'S MOTHER; Three, Zero, Seven",
  ],

  191: [
    "Holiest Numbers; He did not sin; One, Eight, Zero; One Hundred One; Numbers Five and One; One, One, Five, and Six",
  ],

  192: [
    "The Holy Number; One, Nine, and Four",
  ], 
  
  193: [
	"Which Number is Mine?; Two and One",
  ],

  194: [
    "The Father's Number; He Conquered Death; Three Hundred Four",
  ],

  195: [
    "Number of God; The Holy Spirit; Our Majesty in Heaven; I AM MOST HOLY; Who's the Lord?; Numbers Nine and Five; One, Four, Eight; Two, Six, and Six; One, One, Two",
  ],

  196: [
    "A Number of God; This is a Number of Jesus; King of the Jews; He who Forgives Sin; He is Most Blessed; Savior of Humanity; The King of Heaven; Numbers Seven and Seven; Two, Zero, and Five; Four, Nine, and Nine"
  ],

  197: [
    "(Sum of First 12 Primes) The Holy Numbers; Holiest of Names; Who is the King?; He is the Son of Mary; dead for three days; Born in a Manger; Two and Nine; One, Seven, and Three; One, Three, and Zero",
  ],

  198: [
    "Who is our God?; Who freed us from Sin?; Number Nineteen; Two, Three, Four",
  ],

  199: [
    "Son of the Father; The Father's Child; One, Two, Nine; Forty-Eight [IVRIT] Mi Hu HaElohei Elohim?",
  ],

  200: [
    "Numbers of God; MY SON IS THE MESSIAH; Child of God; Anointed One; The Lion of Judah; Son of Humanity; Number Ninety-Five; Three, Three, and Six; Two, Eight",
  ],

  201: [
    "My Favorite Number; The Number of Messiah; These are Messiah's Numbers; Who is Unblemished?; The Virgin's Son; He who Forgives Sins; He has Miraculous Powers; Three, Nine, and Seven; One, Three, and Four; Number Seventy-Seven",
  ], 

  202: [
    "My Name and Number; These Numbers are Mine; A Number of the Messiah; Two, One, Five, Four; One, Three, Six, Three",
  ],

  203: [
    "The Major Prophet; Who is the Christ?; He's without Sin; An Eternal Spirit; Twenty-One; One and Eight; One, Four, One, Three",
  ],

  205: [
    "The Highest Heaven; Spirit of the Church; Rose from the dead; Two, Zero, and Six",
  ],

  206: [
    "My Favorite Numbers; One, Three, Zero, Four, Five",
  ], 
  
  207: [
	"Twenty-Nine",
  ],

  210: [
    "Who is from Nazareth?; The Messianic Number; One, Five, and Two; Numbers One and Seven; Number Thirty-Five; Three, Three, and Seven",
  ],

  211: [
    "Died by Crucifixion; Maker of Heaven and Earth; Mother is a Virgin; Star of Bethlehem; One, Three, and One [IVRIT] Mispar Chamishim v'Shnayim",
  ],

  212: [
    "The Most High; Name of the Lord; God's Sanctuary; The Living One; Two, Three, Nine; One, One, Five, Two"
  ],

  213: [
    "Our Lord God; He rose from the Dead [Greek] Kurios Iesous Christos",
  ],

  214: [
    "The God of Heaven; Died of Crucifixion; Who died on Passover?; Our Lord and Savior; Two, Five, and Nine; One, Six, Zero, and Nine; One, Seven, Six, and Nine; Numbers One and Four",
  ], 
  
  215: [
	"The Crucified King; The Messianic Numbers",
  ],

  216: [
    "The Holiest Name; A Prophet of God; Two, Six, Two; Twenty-Three",
  ],

  217: [
    "The Name of My Son; Son of Mary and Joseph; Five, Two, Eight; Numbers Seven, Five, and Four",
  ],

  218: [
    "The Most Holy; A Son of Mary and Joseph; He who raised the Dead; He is the King of Judah; Star out of Jacob; Three, One, Eight; The Number Forty",
  ], 
  
  219: [
	"Two, One, Five, Four, Five",
  ],

  220: [
    "The Holy of Holies; Holiest of Numbers; Born in Bethlehem; King and God; One, Eight, and Five",
  ],

  221: [
    "The Sacrifice for our Sin; Anointed Number; The Virgin Birth; Three, Two, Three",
  ],

  222: [
    "Our Lord Jesus Christ; The Number of Jesus' Name; This is God's Name; He died of Crucifixion; My Mother is Holy; He who has God's Name; One Thousand Four; Three, Nine, Eight",
  ],

  223: [
    "(48th Prime #) Most Sacred Number; Eighty-Eight; Two, Five, and Three; The Number Sixteen; Numbers Three and Seven; Two, Six, and Nine",
  ],

  224: [
    "A Most Sacred Number; God of Gods; Died and rose again; Three, Three, and One",
  ],

  225: [
    "The Name of God; The God of Israel; Number Eighty-Seven; One, Four, Zero, Three, Zero",
  ], 

  226: [
    "Salvation from Sin; Two, Zero, Two",
  ], 

  228: [
    "This is the Messiah's Name; Who has the Superior Name?; By His Own Blood; Four, Two, Five, Four, Zero",
  ],

  229: [
    "What's God's Name?; Most High Priest; The Good Shepherd; The Son of God; Child of Bethlehem; Name of God's Son; The Most Blessed; One Hundred Fifteen; One, Eight, and Six; One, Three, Five, Three, Zero; One, Seven, and Two; Number Thirty-Seven; One, Two, and Zero",
  ],

  230: [
    "The Lord God; Two, Four, Two",
  ], 

  231: [
    "The Name of the Messiah",
  ],

  232: [
    "A Number of our God; Two, Six, and Three",
  ],

  234: [
    "The God of Jacob; The Number Sixty-Six",
  ],

  236: [
    "Most Holy Number; A Consecrated Number; What is God's Name?; A Number of the Lord; Numbers One, Seven, and Six; One Hundred Two; Numbers One, Six, and Zero; Two, Eight, Zero",
  ],

  238: [
    "The Lamb of God",
  ],

  239: [
    "The Lord Jesus Christ; The Holiest Number; Glory of God; Who freed us from our Sins?; What's the Son's Name?; Seven Spirits of God; Antichrist's Numbers; Number Fifty-Two; Seven, One, and Eight",
  ],

  240: [
    "Consecrated Numbers; The Power of God; Two, Four, Eight; Seven Hundred Fifty-Four",
  ],

  241: [
    "Lord Most High; Most Holy Numbers; Numbers Three and Nine",
  ],

  242: [
    "Who is the Father's Son?; What is the Messiah's Name?; Three Hundred Fifteen; One Hundred Sixty-Five; The Number Eighty; Two, Zero, and Three",
  ], 
  
  244: [
	"The Holiest Numbers; One, Three, Six, Eight; The Numbers Five and One",
  ],

  245: [
    "Lord Almighty; The Numbers of My Son; The appearance of Jasper and Ruby",
  ],

  246: [
    "What is the Son's Name?",
  ],

  248: [
    "The Number of God; A Most Blessed Number; Two and Eight; The Numbers Five and Nine; Three, Four, Five, Nine, and Six",
  ],

  250: [
    "The Holiest of Names; The Name Above all Names; I DIED FROM CRUCIFIXION; Nine, Zero, Two, and Five; Two, One, Eight; One Hundred Fifty-Seven; Numbers One, Zero, and Four",
  ],

  253: [
    "The Numbers of God; Who is Lord Jesus Christ?; A Number of God's Son; He bore our Sins in His Body; A Sign of the Virgin; The Son of Humanity; The Child of God; Three Hundred Fifty-Six; Two, Two, Three; One, One, and Eight; The Number Ninety-Five; The Numbers Four and Seven; Three Hundred Sixteen",
  ],

  254: [
    "God Most High; The Number of the Messiah; These are the Messiah's Numbers; I HAD TWELVE APOSTLES; One Hundred Fifty-Four; Two, Eight, Nine; Numbers One, Three, and Five; Numbers Four, Four, and One; The Number Seventy-Seven; Numbers One, Nine, and Six; One, Three, Zero, Four, and Five",
  ],

  256: [
    "Our King and God; Who was sent from Heaven?; One, Three, and Two; Number Thirty-Three; Eight, Four, and Three",
  ],

  257: [
    "The Number of Jesus Christ; Who is Without Sin?; Most Sacred of Numbers; Most Innocent; Purification for our Sins; The Numbers Three and Five",
  ],

  259: [
    "What is God's Number?; The Numbers of the Messiah; He is the Lord Jesus Christ; The House of the Lord; What is our Lord's Name?; The Numbers of the Name; The Word of God; I AM THE SON OF GOD; Mediator of God; One Hundred Eighty; Numbers Two and Four; Numbers Three, Zero, and Seven; Numbers Three, Seven, and Seven",
  ],

  260: [
    "The Faithful Witness; Number Sixty-Eight; Two, Three, and Nine; Numbers One, Zero, and One; Seven Hundred Eighteen; The Number Fifty-Three",
  ],

  262: [
    "What're God's Numbers?; Lord Jesus Christ's Number; Death from Crucifixion; Who rose after three days?; Who is our Majesty in Heaven?; The Number Ninety-Six; Number One Hundred One",
  ],

  263: [
    "(56th Prime #) What are God's Numbers?; A Death from Crucifixion; Who is the King of Heaven?; He's God's Anointed; Numbers One, Three, and Six; Four, Four, Zero, Three and Zero; Two, Eight, Three; Numbers Three, Four, and Zero; The Numbers One and Seven",
  ],

  265: [
    "What is the Messiah's Number?; Holiest of the Holy; The Name of the Lord; The Consecrated Name; Five, Two, and Eight; Number Three Hundred Four",
  ],

  266: [
    "God's Favorite Number; What are the Numbers of Jesus?; The Lord our God; The Number of our King; Who died by Crucifixion?; The Most Holy Name; Conceived from a Virgin; The King of the Universe; He is the Holy Ghost; Builder of Everything; Mary Magdalene's Number; The Numbers of the Bride; The Numbers Three and Six; The Numbers Five, Zero, and Seven",
  ],

  267: [
    "God's Name and Number; Lord Jesus Christ's Numbers; I AM GOD'S ONLY SON; Who is Blessed by God?; Numbers Three, Three, and Five; Numbers Four, Three, and Four; The Numbers One and Four; Three Hundred Fifty-Four; Two, One, Five, Four, and Five; Numbers One, One, Five, and Six; Numbers Three, Nine, and Six",
  ],

  269: [
    "(57th Prime #) He's our King and God; I AM THE LORD JESUS CHRIST; The Numbers Four, Six, and Six; Three, Two, and Three; Numbers Two and One",
  ],

  270: [
    "Most Holy of Numbers; This is a Number of God; One, One, Zero, One, and Zero; Two, Three, Five, Two; The Numbers Seven, Five, and Four",
  ],

  271: [
    "(58th Prime #) What're Jesus Christ's Numbers?; Holiest of All Numbers; The Number of the Father; God's Favorite Numbers; Numbers Two, Six, and Six",
  ],

  274: [
    "Who was Born of a Virgin?; Who is the King of Israel?; He is God Most High; rules with a rod of iron; Who's our Lord and Savior?; An Unblemished Offering; Two Hundred Fifteen; Number Twenty-One; Two, Three, Zero, Three, Five; Two, Two, and Zero",
  ],

  275: [
    "Four Hundred Forty-One; One Hundred Sixty-One; Number One Hundred Three; Four Hundred Eighty-Six",
  ], 
  
  276: [
	"This is a Number of the Messiah; He is our King and God; One Hundred Eighty-Five; Four, Two, Five, Four, and Zero; Seven, Two, One, Two",
  ],

  277: [
    "The God of Gods; Numbers Three, Zero, and Nine",
  ],

  280: [
    "The Number of All Numbers",
  ],

  283: [
    "The Greatest Numbers",
  ], 
  
  284: [
	"[IVRIT] Mi hi Miriam Migdalit?",
  ],

  285: [
    "Who is the Most Holy?; Superior to the Angels; Who shared in our Humanity?; One Hundred Eighty-Six; One Hundred Seventy-One; Two Hundred Fifty-Six; Numbers Two, Four, and Six; Numbers One, Four, Five, and Nine; Two Hundred Sixteen; One Hundred Forty-One",
  ],

  288: [
    "The Number of the Lord; One, Two, and Two; Three Hundred Sixty-One; Two, Four, and Eight",
  ],

  289: [
    "The Most Holy Number; In the Order of Melchizedek; One Hundred Seventy-Nine; One Hundred Thirty-Six; Three Hundred Eighty-Five; Seven Hundred Thirty-Four; The Numbers Four, Zero, and Seven",
  ], 

  290: [
    "What is a Number of the Messiah?; What is My Name and Number?; Eight Hundred Forty; One, Two, Two, One",
  ],

  291: [
    "The God of the Hebrews",
  ],

  292: [
    "Who is the God of Israel?; Two, Nine, and Two",
  ], 
  
  294: [
	"The Most Holy Numbers",
  ],

  298: [
    "The First and the Last",
  ],

  299: [
    "Who's the Lord Jesus Christ?; Who was raised from the Dead?; Higher than the Angels; Two Hundred Fifty-Four; Numbers Two, Four, and Four; Numbers Three, Zero, Zero, and Four; Number Five Hundred One; Numbers Two, Five, and Three; Two Hundred Fourteen; The Numbers One, Zero, and Zero; Numbers Two, Six, and Nine",
  ],

  300: [
    "The Lord of the Sabbath",
  ], 

  303: [
    "What's the Number of Jesus' Name?; Number Four Hundred Sixty-Five; The Numbers One, Four, and Zero",
  ],

  304: [
    "The Number of the Name of Jesus; The Number Three Hundred Six; Two Hundred Eighty",
  ],

  306: [
    "Who is the Lord Jesus Christ?; Name of the Son of God; What's the Name of God?; I AM THE SON OF GOD'S HOUSE; Two Hundred Forty-Six; The Numbers Three, Four, and Six",
  ],

  307: [
    "The Most High God; Father, Son, and Holy Spirit; The Numbers Three, One, and Five; The Numbers One, Six, and Nine",
  ],

  309: [
    "I AM THE LORD YOUR GOD; Four Hundred Fifty-Eight; Two Hundred Fifty-One",
  ],

  310: [
    "What is the Number of Jesus' Name?; This is the Number of My Name; The Lord of Heaven and Earth",
  ],

  313: [
    "(65th Prime #) What is the Name of God?; A Number of the Most High; Two Hundred Nineteen; The Number Sixty-Eight; Numbers Three, Three, and Three; Two Hundred Fifty-Nine; Numbers One, Four, Three, and Zero; Number Three Hundred Fifteen",
  ], 

  314: [
    "",
  ],

  315: [
    "The Lord Jesus Christ's Number; Who is the Father of the Messiah?; The Number One Hundred One; Numbers One, Eight, and Zero; Nine Hundred Twenty-Five; Number Three Hundred Fifty-Five",
  ], 
  
  316: [
	"These are the Holiest Numbers; The Numbers One, Three, and Six",
  ],
  
  318: [
    "The Holiest of the Holy; Numbers Two, Zero, and Three; The Number Three Hundred Four",
  ],

  319: [
    "To His Name be the Glory",
  ],

  320: [
    "One Hundred Sixty-Two; The Numbers Three, Four, and Four; Two Hundred Forty-Four",
  ],

  322: [
    "This is the Number of God; Who is the Image of God?; Two Hundred Fifty-Three; Two, Three, Zero, Three, and Five; Three Hundred Eighty-One; Number One Hundred Sixty-Six; Numbers Three, Two, and Four; One Hundred Eighty-Three; The Numbers Two and One",
  ],

  323: [
    "The Most Holy of Numbers; Who is our King and God?; Number One Hundred Forty-Five; The Number Forty-Eight; Numbers Nine, Eight, and Four; Two Hundred Thirteen; Numbers Nine, Two, and One",
  ],

  324: [
    "What is the Number of My Name?; The Son of Mary Magdalene; Radiance of God's Glory; Anointed One of God; The Holiest of all Numbers; Two Hundred Sixty-Nine; Numbers Three, Four, Five, Nine, and Six",
  ],  
  
  325: [
	"These are the Numbers of God; I AM THE HOLY ONE OF GOD",
  ],

  328: [
    "Greater Honor than Moses",
  ],

  330: [
    "God Most High's Number; What're the Holiest Numbers?; The Numbers Three, Nine, and Seven; Two Hundred Seventy-One; Two Hundred Forty-One; One Hundred Sixty-Eight; Number One Hundred Eighty; The Numbers One, Three, and Four",
  ],

  331: [
    "(67th Prime #) What are the Holiest Numbers?; Name of God Most High; The Number Ninety-Two",
  ],

  333: [
    "Who is the Lord our God?; Numbers Eight, One, and Nine; Three Hundred Sixty-Two",
  ],

  334: [
    "Two Hundred Thirty-Six; The Numbers Two, Six, and Seven; One Hundred Twenty-Four; The Numbers Two, Zero, and Six",
  ],

  335: [
    "God Most High's Numbers; This is the Name of our God",
  ],

  336: [
    "What is the Number of God?; Whose words are Holy and True?; Numbers Two, Three, and Nine; The Number Two Hundred Six; Number Six Hundred Forty-Nine",
  ], 
  
  337: [
	"What is a Number of God's Name?; Number Five Hundred Thirty-Seven",
  ],

  339: [
    "He raises the poor from the dust",
  ],

  340: [
    "What are the Numbers of God?; This is the Most Holy Name; Has a Greater Honor than Moses; The King of Righteousness; One Hundred Forty-Eight; One Hundred Seventy-Eight; The Number Twenty-Three; The Numbers One, Three, and One; One, One, Five, Four, Zero, Three, and Zero",
  ], 
  
  342: [
	"What is the Number of the Messiah?",
  ],

  344: [
    "The Number and Name of God; Two Hundred Eighty-Four",
  ], 

  345: [
    "A Number Holy to the Lord; I WILL PUT MY TRUST IN HIM",
  ],

  346: [
    "What are the Numbers of the Messiah?; The Son of the Most High; I CALLED HIM OUT OF EGYPT; Number One Hundred Forty-Four",
  ],

  349: [
    "The Holiest Name of All Names; Numbers One, Four, Zero, Three, and Zero; Number Five Hundred Twenty-Five",
  ],

  352: [
    "The Numbers Two, Five, and Three; Number Two Hundred Two; Number Three Hundred Nineteen; The Numbers Two, Four, and Four; The Numbers Two, Six, and Nine",
  ],

  354: [
    "Number of God Most High; What is the Most Holy Name?; Numbers Two, Four, and Two",
  ],

  355: [
    "A Number of God Most High; Number Nine Hundred Thirty-Five; Number Three Hundred Seventy-Seven",
  ], 

  358: [
    "What are the Numbers of our King?; Who is the God of the Hebrews?; Four Hundred Thirty-Eight; The Numbers One, Eight, and Six; Two Hundred Eighty-Nine; Number Two Hundred Sixty-Five",
  ],

  360: [
    "These are the Numbers of the King; Number One Hundred Seventy-Nine",
  ],

  361: [
    "The Numbers Two, Three, and Six; Three Hundred Ninety-Two",
  ], 
  
  362: [
	"Two Hundred Thirty-Nine; The Numbers Four, Eight, and Four",
  ],

  366: [
    "What is the Greatest Number?; Number Two Hundred Fifty-Seven; The Number Three Hundred Fifteen; Five Hundred Twenty-Eight",
  ],  
  
  367: [
	"A Number of the Lord our God; Fourteen Thousand Thirty",
  ],

  372: [
    "What is the Number of our God?; Brought us up out of Egypt",
  ],

  374: [
    "Who is the Most High God?",
  ],

  377: [
    "What is the Most Holy Number?; The Number Three Hundred Sixteen",
  ],

  381: [
    "What are the Most Holy Numbers?",
  ], 
  
  382: [
	"The Number of the Son of God; The Number Four Hundred Nineteen",
  ],

  383: [
    "The Most High God's Number; The Number One Hundred Eighty; The Numbers One, Three, Zero, Four, and Five",
  ], 
  
  384: [
	"The Name of God Most High; The Numbers Five, Two, and Two; Number Two Hundred Nineteen",
  ],

  386: [
    "The Name of our King and God; The Altar of the God of Israel; Who is the Builder of Everything?; Two, Two, Five, Two, and Zero",
  ], 
  
  388: [
	"He is Coming with the Clouds",
  ],

  389: [
    "The Numbers Two, Three, and Nine",
  ],

  391: [
    "The Son of the Living God; Number Two Hundred Forty-Four; Number Four Hundred Seventy-Two",
  ],

  392: [
    "The Number of the Lord Jesus Christ; The Numbers Three, Zero, Five, Three, and Zero; The Numbers Four, Four, Zero, Three and Zero",
  ], 
  
  397: [
	"The Numbers of the Lord Jesus Christ",
  ],

  398: [
    "The Number One Hundred Eighteen",
  ],

  401: [
    "(79th Prime #) What is a Number of the Most High?; Who lifts up the needy from the ash heap?; He sits on the Throne of God; Number One Hundred Sixty-Eight",
  ],

  405: [
    "Number Two Hundred Thirty-Six; The Number Two Hundred Two",
  ],
  
  407: [
	"What are the Lord Jesus Christ's Numbers?",
  ],

  409: [
    "(80th Prime #) The Number of our King and God; Number Four Hundred Twenty-Nine; Number Two Hundred Ninety-Four; The Number One Hundred Eighty-Six; The Number Two Hundred Sixteen; The Number One Hundred Seventy-One",
  ],

  410: [
    "Number Two Hundred Twenty; Number Three Hundred Thirty-Three",
  ], 
  
  414: [
	"This is a Number of the Lord Jesus Christ; The Numbers of our King and God; The Number Eight Hundred Forty; Number Three Hundred Forty-Two",
  ],
  
  419: [
	"The Number of the Lord our God; The Number Two Hundred Fifty-Seven",
  ],

  424: [
    "The Numbers of the Lord our God",
  ],

  429: [
    "This is a Number of God Most High; Number Two Hundred Thirty-One",
  ], 

  431: [
    "What is the Name of the Lord our God?",
  ],

  434: [
    "King of Kings and Lord of Lords; The Number Four Hundred Sixty-Two",
  ],

  435: [
    "Who is coming with the Clouds?",
  ], 

  437: [
    "The Name of the Most High God",
  ], 
  
  438: [
	"What is the Name and Number of the Messiah?",
  ],
  
  440: [
	"What's the Name of the Son of God?",
  ],

  441: [
    "This is a Number of the Lord our God; A Number Consecrated to the Lord; Number Three Hundred Twenty-Three",
  ], 

  443: [
    "(86th Prime #) The Number Two Hundred Eighteen",
  ],

  448: [
    "Who sits on the Throne of God?",
  ],

  450: [
    "The Number Three Hundred Thirty-One",
  ], 
  
  458: [
	"This is the Name of God Most High; Seven Thousand Two Hundred Twelve",
  ],

  462: [
    "Only Begotten Son of God; To Him be Glory and Power for ever and ever",
  ],
  
  465: [
	"The Numbers of the Most High God",
  ],

  466: [
    "This is the Number of the Lord Jesus Christ; What is the Number of the Name of God?",
  ],  
  
  469: [
	"These are the Numbers of the Lord Jesus Christ",
  ],
  
  472: [
	"What is the Name of God Most High?",
  ],

  474: [
    "What is the Name of our King and God?; Number Two Hundred Ninety-Eight; Number Two Hundred Thirty-Two",
  ], 
  
  480: [
	"What is the Number of the Lord Jesus Christ?; One Thousand Three Hundred Eighty-Six; The Number Five Hundred Twenty-Two",
  ],
  
  484: [
    "What are the Numbers of the Lord Jesus Christ?; These are the Numbers of God Most High; What is the Name of the Lord our God?",
  ],

  486: [
    "These are the Numbers of our King and God; The One who sits enthroned on High; The Number Two Hundred Thirty-Nine",
  ], 

  494: [
    "All peoples on earth will mourn because of Him; Who laid the Foundations of the Earth?",
  ],

  495: [
    "What is the Number of God Most High?",
  ],

  497: [
    "What is the Number of our King and God?",
  ],

  499: [
    "What are the Numbers of God Most High?",
  ], 
  
  500: [
	"What're the Numbers of our King and God?",
  ],
  
  501: [
	"What are the Numbers of our King and God?",
  ],
  
  503: [
	"The Name and Number of God Most High",
  ], 
  
  507: [
	"What is the Number of the Lord our God?",
  ],
  
  511: [
	"This is the Name of the Most High God",
  ], 
  
  515: [
	"The Name and Number of the Lord our God",
  ],

  517: [
    "The Number Two Hundred Twenty-Nine",
  ], 

  518: [
    "What's the Name of the Most High God?",
  ], 
  
  522: [
	"The Number of the Name of the Lord Jesus Christ",
  ], 
  
  525: [
	"What is the Name of the Most High God?",
  ],

  540: [
    "The King of Kings and the Lord of Lords; Thirty-Four Thousand Five Hundred Ninety-Six",
  ],  
  
  548: [
	"What is the Number of the Most High God?",
  ],
  
  552: [
	"This is the Name and Number of the Son of God",
  ],

  570: [
    "Out of His Mouth Comes a sharp, Double-Edge Sword; Two Thousand Three Hundred Sixty-Eight",
  ], 
  
  571: [
	"One Thousand Two Hundred Twenty-One",
  ],

  638: [
    "One Thousand Seven Hundred Twenty-Eight",
  ],

  718: [
    "In the Beginning God created the Heavens and the Earth",
  ],
 },
 
 cipher5: {
	 	1: [
		"A; Z",
	],
	
	6: [
		"H; S",
	],
	
	8: [
		"E; V; J; K; P; Q",
	],
	
	12: [
		"G; I; R; T",
	],
	
	13: [
		"B; Y",
	],
	
	14: [
		"C; X",
	],

  16: [
    "(Ninth Composite #) [IVRIT] HaAv",
  ], 
  
  20: [
	"F; U; M; N",
  ],
  
  22: [
	"[ARAMAYA] Ana",
  ],
  
  27: [
	"D; W",
  ],
  
  28: [
	"L; O",
  ],

  33: [
    "I AM [IVRIT] YHVH; ANI",
  ], 
  
  37: [
	"[ARAMAYA] Alaha",
  ],

  38: [
    "(Non-Totient # / Magic Constant) [IVRIT] HShM",
  ],

  48: [
    "(Highly Totient # /  Order of Full Octahedral Symmetry) Jesus",
  ], 
  
  54: [
	"Yeshua [IVRIT] Yeshua [ARAMAYA] Maran",
  ],
  
  56: [
	"[IVRIT] Ze HaShem; Echad",
  ],

  59: [
    "(Super Prime # /  Rosary Beads) Yahshuah; Messiah [IVRIT] Yahshuah; Torah",
  ],

  61: [
    "(Keith #) Yahweh [IVRIT] Yahweh; Ze Shemi",
  ], 
  
  65: [
	"[ARAMAYA] Meshisha; Ma Shmi?",
  ],

  67: [
    "God; Savior; Two [IVRIT] ALHIM; Zeh Shemi",
  ], 

  73: [
    "[IVRIT] Meshiach",
  ],

  75: [
    "The Name; Holy [IVRIT] Ze HaMispar",
  ],

  78: [
    "The King; Three, Six",
  ], 
  
  81: [
	"(Buddhist Beads) [IVRIT] Yasha Mashach; Shmona",
  ],

  82: [
    "My Name; Six, Seven",
  ],

  85: [
    "(Fifth Decagonal # / Seventh Centered Square /  Eighth Centered Triangular # / Octahedral #) The Messiah; The Father [IVRIT] ANI YHWH",
  ],

  86: [
    "I AM A KING; Eighteen [IVRIT] Zeh Mispari",
  ],

  88: [
    "(Morse Code for 'Love & Kisses') Yehoshua; One, Six [IVRIT] Yehoshua",
  ], 
  
  94: [
	"[IVRIT] Ani Yahweh",
  ],

  97: [
    "I AM THAT I AM",
  ],

  98: [
    "Eight, Five",
  ], 

  100: [
    "I AM GOD",
  ], 
  
  104: [
	"[IVRIT] HMSPR YHWH [ARAMAYA] Man hu Alaha?; Shem d'Alaha",
  ],

  107: [
    "(28th Prime #) Jesus' Father; Messiah Jesus; Sixty-Seven; Sixty-Eight",
  ],

  110: [
    "Jesus Christ; He is the King [IVRIT] Hu Melech; MSPRIM IHVH",
  ], 
  
  113: [
	"[ARAMAYA] Yeshua Meshiha",
  ],

  115: [
    "[IVRIT] Ehyeh Asher Ehyeh; Chamish ve'Arba'ah",
  ],

  117: [
    "Sacred Name; Eight, Two; Thirty-Eight",
  ],

  120: [
    "Yeshua Mashiach; One, Six, Six [IVRIT] Mispar Yahweh",
  ],

  122: [
    "God's Name",
  ],

  126: [
    "My Number; Six, Three, Five; Three and Six",
  ],

  127: [
    "(31st Prime #) Yeshua HaMashiach; Our God; God's Son; Who is Jesus?; Our Savior; Two, Nine; Three, Zero, Six [IVRIT] Yeshua HaMashiach; Ze HaMispar Shemi",
  ],

  130: [
    "He's Jesus Christ; Four, Eight; Six and Seven; Eight and Six; Eighty-Two [IVRIT] MSPRIM YHWH; HaMispar shel HaAv",
  ],

  132: [
    "My Numbers; A Virgin Birth",
  ],

  134: [
    "Yeshua HaMeshiach; Most Sacred [IVRIT] Shmona ve'Shisha",
  ],

  135: [
    "Forty-Eight; Forty-Seven; Ninety-Seven; Ninety-Eight [IVRIT] Ani Elohim; Kadosh Mispar [ARAMAYA] Ana Ithai d'Ithai",
  ],

  136: [
    "This is My Name; One, Four; One and Six [IVRIT] HMSPRIM YHWH",
  ],

  137: [
    "Holy Spirit; Fifty-Nine",
  ],

  139: [
    "(34th Prime #) What is the Name?; Crucified [ARAMAYA] Tlatin Washba",
  ], 
  
  140: [
	"The Messiah's Name",
  ],

  141: [
    "Jesus' Number; Most Holy; This is My Son; From Nazareth",
  ], 

  146: [
    "Who is God?; What is My Name?; Eight and Five",
  ],

  147: [
    "Jesus' Numbers; He's God's Son; Yeshua Moshiach; Two and Six; Two, Four; Two, Five, Six [IVRIT] Yeshua Moshiach; Mi hu Adonai?; HaMispar Shlosha",
  ],

  148: [
    "He is Salvation; Three, Three, One; Twenty-One",
  ], 
  
  149: [
	"[IVRIT] Shmonim Shisha [ARAMAYA] Hu Malka Wa'Alaha?",
  ],

  150: [
    "The Messiah's Father; One and Three",
  ], 
  
  151: [
	"[ARAMAYA] Minyana d'Alaha",
  ],

  155: [
    "One, Zero, Seven [ARAMAYA] Shittin wa'Hamesh",
  ], 

  156: [
    "Name of Messiah; Three, Nine, Eight",
  ], 
  
  157: [
	"My Holy Name",
  ],

  161: [
    "Yehoshua HaMashiach; A God Number; Prince of Peace; Who is Perfect?; Three and Two; One, One, Zero; Two, Three, Five [IVRIT] Mispar Elohim; Mispar shel Yeshua",
  ],

  164: [
    "Name of God; Who is the Messiah?; Who is the Father?; Two and Zero; One, Nine, Five; Two, Zero, Five",
  ],

  165: [
    "He is the Antichrist; Two and Seven; Two and Eight; One, Nine, Zero; Two, Eight, Five; The Number Three",
  ],

  166: [
    "God's Number; God of Heaven; New Jerusalem; City of God; Three O' Clock; Three Hundred; Two, Zero, Eight; Two, Seven, Zero",
  ],

  168: [
    "Yehoshua HaMeshiach; Holy Number; One, Six, and Six; One, Six, Four [IVRIT] HaMispar Elohim; Mispar shel Yahweh; HaMispar shel Yeshua",
  ],

  169: [
    "A Holy Number; God Most High; Son of God; I'M A VIRGIN'S SON; The Star of Jacob; The Number Eight; One, Three, Two",
  ],

  171: [
    "Mary Magdalene; One and Two",
  ],  
  
  172: [
	"God's Numbers",
  ],
  
  173: [
	"[ARAMAYA] Maran Yeshua Meshisha",
  ],

  174: [
    "Messiah of God; Six, Three, and Five",
  ], 

  176: [
    "This is God's Name; Three, Eight, and Six; Four and Five",
  ],

  177: [
    "Spirit of God",
  ],

  180: [
    "This is My Number; Four, Eight, Seven",
  ], 

  182: [
    "The Name of Messiah; Two, Two, Five",
  ],

  184: [
    "The Messiah's Number; Number Twelve; One and Four; Four, One, Five",
  ],

  186: [
    "The God Number; Who is Jesus' Father?; The Number Two; One, Eight, and Six; One, Four, Eight",
  ],

  187: [
    "In the Beginning",
  ], 

  189: [
    "Who is Jesus Christ?; Four, Zero, Nine",
  ],

  190: [
    "Most Holy Name; The Name of God; What is My Number?; The Messiah's Numbers; Seven, Four, Nine; Three, Three, and Eight; One, Two, Two; Three, Three, and Seven",
  ],

  192: [
    "What's the Messiah's Name?; The God of Heaven; Which Name is Mine?; Eight, Three, and Five",
  ],

  193: [
    "(44th Prime #) Holiest Number; What's Jesus' Number?; A Messianic Number; The King of Israel; Three, Zero, and Seven; Two, Three, Four; Two, Three, and Six [IVRIT] Shloshim Shlosha",
  ], 

  195: [
    "The Most High God; This is Jesus' Number; The Son of God; Two and Four; Two, Four, Five",
  ],

  197: [
    "(Sum of first 12 Primes & 45th Prime #) She's Mary Magdalene; The Bride of Heaven; Two, Four, Eight",
  ],

  199: [
    "Holiest Numbers; One, Three, and Zero",
  ], 

  202: [
    "I AM GOD MOST HIGH; One, Five, and Eight",
  ],

  203: [
    "The Spirit of God",
  ], 
  
  204: [
	"What is the Messiah's Name?; Three, Nine, and Eight",
  ],

  205: [
    "Lord Jesus Christ; Who is Jesus' Number?; Who Forgives Sin?; Who is the Holiest?; Holiest of All; The Number Eighteen [IVRIT] HaMispar shel HaMelech; Misparim Echad ve'Efes; HaMisparim Chamish v'Arba'ah",
  ], 

  206: [
    "Who is God's Son?; Three Hundred Ten [IVRIT] HaMispar Chamishim ve'Arba",
  ], 
  
  208: [
	"The Name of the Messiah",
  ],

  209: [
    "A Number of God; Jesus Christ's Number; The Flesh of God; The Number Thirteen; Two, Three, and Five; One, One, and Zero; Four, Zero, Four",
  ],

  211: [
    "Holy of Holies; This is My Holy Name; Numbers Two, Five, and Five",
  ], 
  
  214: [
	"What are Jesus' Numbers?",
  ],

  215: [
    "The Number of Jesus; He's the Son of God; Two, Eight, and Seven; Two, Eight, and Eight",
  ],

  216: [
    "The Most Holy Name; Number of the Name; He is the King of Kings; I OFFER SALVATION; Created Humankind; Three Hundred Seven; One Hundred Ten; One, Four, and Six; Number Seventy-Five; Number Thirty-One [IVRIT] HaMispar shel Elohim",
  ], 
  
  217: [
	"The Crucified King",
  ], 
  
  218: [
	"What's God's Number?; One, One, One, Seven",
  ],

  220: [
    "This is God's Number; Who is Most Holy?; One, Two, and Zero; Two, One, Five, Zero",
  ], 
  
  221: [
	"One, Seven, and Two",
  ],

  222: [
    "Our Lord God; The Scepter of Justice; Three Hundred One",
  ],

  223: [
    "(48th Prime #) My Name and Number; Three, Zero, and Four",
  ],

  224: [
    "Name of God's Son; The Lion of Judah; Who is the Father's Son?; Five, Four, and Five; Two, Zero, and Nine",
  ], 
  
  225: [
	"What is a God Number?; Two, Nine, and Eight; Five Hundred Sixty",
  ],

  226: [
    "The Most Holy Place; One Hundred Seven; One Hundred Eight; The Number Sixty-Seven",
  ],

  227: [
    "My Favorite Number; I'M THE SON OF GOD; A Number of the Messiah; Our King and God; He is the Son of God; Number Thirty-Two; The Number Nineteen; Two, One, and One; Seven, Four, and Zero; Two, Six, and Four",
  ], 

  228: [
    "I AM THE MOST HIGH GOD",
  ], 
  
  229: [
	"Numbers Six and Seven [ARAMAYA] Minyana Shittin wa'Had",
  ],

  230: [
    "What is God's Number?; Son of the Most High; The Number Eighty-Five",
  ],

  231: [
    "The Lord Jesus Christ; The Holiest of All; I AM BORN OF A VIRGIN; Mary Magdalene's Son; Two, Two, and Zero; One, Nine, and Two; Number Twenty-Three; One, Two, Five, Nine [IVRIT] HaMisparim El Elyon; HaShem shel Adoneinu",
  ],

  234: [
    "Most Holy Number; The Number of God; Who was Crucified?; Who is without sin?; One, Four, and Seven; The Number Thirty-Five",
  ],

  235: [
    "A Most Holy Number; This is a Divine Number; Who is a Carpenter's Son?; The Word of God; Most Holy Word; I AM THE GOOD SHEPHERD; Two Hundred Five; Number Twenty-Seven; Numbers Six and One; Number Twenty-Eight; Two, Nine, and Nine [IVRIT] Ani Melech ve'Elohim; HaMisparim Sheva, Chamish, ve'Arba",
  ],

  236: [
    "What's the Messiah's Number?; Holy to the Lord; Which Number is Mine?; The Number Thirty-Eight",
  ],

  238: [
    "I AM LORD JESUS CHRIST; Two, One, and Two; Number Forty-Nine",
  ],

  240: [
    "The Numbers of God; One, Four, and One",
  ], 

  241: [
    "The God of the Bible",
  ], 
  
  243: [
	"One Hundred Thirty",
  ],

  244: [
    "This is a Number of Jesus; Who's the Messianic King?; Four, Two, Five, Zero; Two Hundred Sixty; The Number Seventy-Eight; Two, Four, and Zero",
  ], 

  247: [
    "The God of the Hebrews; The Number Fourteen",
  ],

  248: [
    "The Lord our God; What is the Messiah's Number?; Who is God Most High?; One, Three, Zero, Zero, Five",
  ],

  252: [
    "A Number of Jesus Christ; The Number of the Messiah; Three Hundred Eighteen; Numbers One and Zero; The Number Forty-Five",
  ],

  254: [
    "What is the Name of God?; What is a Number of Jesus?; Four, Three, and Four; Two Hundred Thirty; The Number Forty-Eight; Two Hundred Two",
  ], 
  
  255: [
	"The Numbers Six and Seven; One, Three, Five, One, Zero",
  ],

  256: [
    "Whose Mother is a Virgin?",
  ],

  257: [
    "What are the Messiah's Numbers?; I AM THE SON OF A CARPENTER; The Number Twenty-Three; Three Hundred Twelve; Four, Zero, and Four",
  ], 
  
  258: [
	"The Numbers of the Messiah; Thirteen Thousand Five; Two, Zero, Three, and Five",
  ],
  
  259: [
	"[IVRIT] HaMispar Shmonim Shmona",
  ],

  260: [
    "The Most Holy Number; Who is the Father of Jesus?; Son of Mary and Joseph; One, One, Eight, and Seven; Four Hundred Nine",
  ],

  261: [
    "One Hundred Ninety; The Number Twenty-Seven",
  ],

  263: [
    "(56th Prime #) God's Name and Number; Savior of the World; Two, Zero, Six, Two, Five; Numbers Two and Zero [IVRIT] HaMisparim Echad, Shisha, ve'Echad; Malkeinu ve'Eloheinu",
  ],

  264: [
    "The Number of Jesus' Name; Who has the Name of God?; I AM THE LORD JESUS CHRIST; Three Hundred Seventeen; Numbers Two and Seven; The Number Forty-Nine",
  ],

  266: [
    "The Most Holy Numbers; One, Two, Zero, Three, Five [IVRIT] HaMispar Me'ah Shishim ve'Shmona",
  ], 
  
  267: [
	"What's the Number of Jesus?; One, Three, Zero, Two, Zero",
  ],
  
  268: [
	"God Most High's Number",
  ],

  269: [
    "(57th Prime #) The Numbers Three and Seven; Number One Hundred [IVRIT] Misparim Shlosha ve Shlosha",
  ],

  270: [
    "The Numbers of Jesus' Name; Numbers Two and One; Three, Three, Zero, Four, Zero",
  ], 

  271: [
    "(59th Prime #) The Numbers Eight and Five",
  ],

  272: [
    "What is the Name of the Messiah?; The Numbers Two and Six",
  ],

  273: [
    "What is a Number of God?; Son of Mary Magdalene; Numbers Six, Three, and Five",
  ], 
  
  274: [
	"Who is the Son of God?; Who is the Most High God?",
  ],  
  
  279: [
	"What is the Number of Jesus?; The Numbers One and Eight; One, Three, Zero, Four, Five",
  ],
  
  282: [
	"These are the Numbers of Jesus; What are Jesus Christ's Numbers?; Four, One, Zero, Zero, Five",
  ],

  283: [
    "What is the Holiest Number?; One Hundred Sixty-Eight; Numbers One and Four; Three Hundred Thirty-Seven; Three Hundred Thirty-Eight",
  ],

  285: [
    "Two Hundred Forty; Four Hundred Forty; Numbers One, Six, and Eight; Three, Three, Five, Zero, and Five",
  ], 
  
  288: [
	"What are the Numbers of Jesus?; The Numbers Two and Five",
  ],

  289: [
    "This is a Most Holy Number; The Numbers of Salvation; One Hundred Sixty-One; The Numbers Two and Zero; Three Hundred Fifty-Three",
  ], 
  
  290: [
	"[ARAMAYA] Minyane Chadh, Telath, WaHamesh ",
  ],

  291: [
    "What is a Number of the Messiah?; Who's the Lion of Judah?; Forty-Three Thousand Ten; Numbers Eight, Three, and Five; One Hundred Thirty-Five; The Number Twenty-Four",
  ],

  292: [
    "The Name of God Most High; Two, Zero, Four, and Five; Numbers Two, Three, and Six",
  ],

  299: [
    "What is a Most Holy Number?; The Son of Mary Magdalene; The Numbers Six, Three, and Five; One Hundred Eighty-Nine; Numbers One, Three, and Eight",
  ],

  300: [
    "Two Hundred Eighty-Eight; One Hundred Twenty-Six; Two Hundred Sixty-One; Four Hundred Fifteen",
  ], 
  
  301: [
	"These are the Numbers of God; Five Hundred Forty-Five; The Numbers Four and Five; Three Hundred Ninety-Seven; Two, Four, Zero, One, Zero; Four, Three, Two, Nine; One, Two, Four, and Eight; The Numbers Three, Eight, and Six; Three Hundred Ninety-Eight",
  ], 
  
  303: [
	"Numbers Three, Nine, and Seven; The Numbers Four and Eight; One, Three, Five, One, and Zero; The Numbers Four and Seven",
  ],

  304: [
    "Lord Jesus Christ's Number; What's the Number of the Messiah?; Holiest of all Numbers; The Number of a Virgin's Son; Two, Three, Zero, Three, and Five; One Hundred Fourteen; Two Hundred Thirty-Eight; Six Hundred Ninety-Two",
  ],  
  
  306: [
	"This is the Number of the Messiah",
  ],
  
  307: [
	"What are the Numbers of God?; Numbers Four, Six, and Five; The Numbers Three, One, and Six",
  ], 
  
  310: [
	"Lord Jesus Christ's Numbers; Who is the Lord Jesus Christ?; Seven Hundred Twenty-Five; Numbers Three, Eight, and Two",
  ],

  311: [
    "One Hundred Forty-Seven",
  ], 

  312: [
    "The Number of the Father's Son; Numbers One, Nine, and Zero",
  ], 

  314: [
    "This is the Most Holy Number; The Numbers Three, Zero, and Three; One, Two, Zero, Three, and Five",
  ], 
  
  316: [
	"What is the Number of the Messiah?; What is a Number of Jesus Christ?; These are the Numbers of My Name; The Numbers Three, Zero, and Five; Two, One, Five, Zero, and Five",
  ],

  317: [
    "This is God's Name and Number",
  ],  
  
  318: [
	"The Name of the Son of God; Numbers Two, One, and Five",
  ],
  
  324: [
	"What is the Most Holy Number?; What're the Numbers of the Messiah?; Numbers Two, Seven, and Nine; Four, Four, Zero, Two, Five; Two Hundred Sixty-Four; Four Hundred Twenty-Six",
  ], 
  
  325: [
	"What are the Numbers of the Messiah?; Numbers Four, Eight, and Five; Forty-Four Thousand Ten; The Number Three Hundred Ten",
  ],

  327: [
    "Who is the Lord our God?; Seven Hundred Fifty-Four; Two Hundred Twenty-Five; The Numbers One, Five, and Seven",
  ],

  328: [
    "Number Two Hundred Five; Three, Four, Zero, One, and Zero; One Thousand Six Hundred; Two Hundred Forty-One; One Hundred Ninety-Two; The Numbers One, Eight, and Zero",
  ],

  331: [
    "(67th Prime #) The Number and Name of God; He is the Son of Mary Magdalene; Four Hundred Seventy-One; Numbers Two, Two, and Eight; Two Hundred Fifty-Two; Three Hundred Ninety-Four; The Numbers Four, Three, and Six; One Hundred Seventy-Four; Three Hundred Forty-Four; Numbers Two, Two, and Seven",
  ],

  332: [
    "The Numbers Three, Three, and Two",
  ],

  334: [
    "Two Hundred Thirty-Four; The Numbers Two, Three, and Five; The Numbers One, One, and Zero",
  ],

  336: [
    "The Lord Jesus Christ's Numbers; The Number of God Most High; Numbers Four, Zero, and Nine; Number One Hundred Thirty; The Numbers Two, Three, and Eight; Number One Hundred Two",
  ],

  337: [
    "The Numbers and Name of God; Numbers Two, One, and Two; One, One, One, Two, Three, One",
  ],

  338: [
    "The Number of the Name of Jesus; The Numbers Two, Five, and Eight; Three, Four, Five, Two, and Zero; The Numbers Two, Five, and Seven; The Numbers One, Nine, and Zero; The Number Two Hundred Six",
  ],

  340: [
    "Numbers Two, Three, and Four; Number Two Hundred Nine; The Numbers Two, Seven, and Seven",
  ],

  342: [
    "The Numbers of God Most High; The Numbers Two, Three, and One; Numbers Two, Five, and Four; Four, Zero, Zero, Two, and Zero",
  ],

  344: [
    "The Numbers of the Name of Jesus; I DIED FROM CRUCIFIXION; What is the Number of the Creator?; The Number Five Hundred Sixty; Two Hundred Fifty-Four; Numbers Two, Eight, and Four; The Numbers Five, Two, and One; Numbers Two, Seven, and Four",
  ], 
  
  345: [
	"What is the Messiah's Name and Number?; Number Three Hundred Eighteen",
  ],
  
  349: [
	"The Name and Number of the Messiah; The Numbers Five, Fou, and Five",
  ],

  352: [
    "The Number Two Hundred Three; The Numbers Seven, Four, and Zero; Two Hundred Forty-Four",
  ],

  353: [
    "What is the Number of God's Name",
  ],  
  
  356: [
	"What is the Name of God Most High?",
  ],
  
  357: [
	"The Number of the Name of God",
  ], 
  
  358: [
	"This is the Name of a Crucified Man; What is the Number of God's Son?; Number One Hundred Sixty-Six",
  ],

  361: [
    "Number One Hundred Twenty",
  ], 
  
  362: [
	"The Number of the Most High God; The Number of the Son of God; The Numbers Four, Zero, and Nine",
  ], 
  
  363: [
	"The Numbers Seven, Four, and Nine",
  ], 
  
  368: [
	"The Numbers of the Most High God",
  ],

  371: [
    "The Name of the Lord our God; Number Two Hundred Twelve",
  ],  
  
  373: [
	"A Number of the Lord Jesus Christ; Number Four Hundred Four; Twenty-Three Thousand Thirty-Five",
  ],
  
  382: [
	"He who is the Savior of the World; Number One Hundred Eighty-Seven; One Thousand Three Hundred Ten",
  ],
  
  384: [
	"The Number One Hundred Sixty-Six; The Number Three Hundred Thirty-Six",
  ],

  386: [
    "The Number Six Hundred Thirty-Five; The Number Four Hundred Thirty; The Number Two Hundred Sixteen; Number Three Hundred Fifty-Seven; Number One Hundred Forty-Six; Number One Hundred Sixty-Nine; Four, Four, Zero, Four, and Zero; The Number Two Hundred Eleven",
  ], 
  
  389: [
	"The Number of our Lord God",
  ],

  391: [
    "The Number Two Hundred Forty; Forty-Three Thousand Twenty-Five; Numbers Two, Zero, Four, and Five",
  ],

  394: [
    "What is the Lord Jesus Christ's Number?; The Number of our King and God; The Number Four Hundred Seventy; The Number One Hundred Thirty-Six; Number Three Hundred Ninety-Eight; Number Five Hundred Forty-Five",
  ],  
  
  397: [
	"These are the Lord Jesus Christ's Numbers",
  ],
  
  398: [
	"The Number of the Lord Jesus Christ; Number Four Hundred Sixty-Five; Numbers Four, One, Five, and Two",
  ], 
  
  400: [
	"What is the Number of God Most High",
  ],

  401: [
    "(79th Prime #) Number Two Hundred Seventy-Three; Number Three Hundred Twenty-Seven",
  ], 

  403: [
    "What are the Lord Jesus Christ's Numbers?; These are the Numbers of God Most High; Number Eight Hundred Twenty-Five",
  ],
  
  404: [
	"The Numbers of the Lord Jesus Christ; The Number Four Hundred Forty; The Numbers One, Two, Five, and Nine; Numbers Five, One, Five, One, and Zero",
  ],

  408: [
    "What're the Numbers of God Most High?; Number Two Hundred Fourteen; Number Four Hundred Thirty-Five; The Number One Hundred Eighty-Seven; Number Seven Hundred Forty-Nine; One Thousand Four Hundred Six",
  ],  
  
  409: [
	"What are the Numbers of God Most High?",
  ],
  
  415: [
	"The Number of the Lord our God; Number Two Hundred Seventy-Nine; The Number Three Hundred Eighty-Two",
  ], 
  
  416: [
	"This is the Number of the Most High God",
  ],

  421: [
    "The Numbers of the Lord our God; The Number Two Thousand Thirty-Five; The Number Five Hundred Thirty-Two",
  ], 
  
  425: [
	"This is the Name of the Lord our God; Number Two Hundred Forty-Nine",
  ],

  429: [
    "These are the Numbers of the Most High God; The Number Two Hundred Thirty-One; Numbers Four, One, Zero, Zero, and Five",
  ],

  435: [
    "What is the Name of the Lord our God?; What are the Numbers of the Most High God?; What are the the Numbers of the Son of God?; The Numbers Eight, Five, Two, Zero, and Five",
  ],

  436: [
    "What is the Number of Lord Jesus Christ?; The Number One Hundred Forty-One; Number Twenty-Three Thousand Forty",
  ], 
  
  440: [
	"The Numbers One, Three, Zero, Two, and Zero",
  ],

  443: [
    "(86th Prime #) The Number Two Hundred Sixty-Four",
  ],

  448: [
    "The Number Two Hundred Twenty-Seven; The Number Two Hundred Seventy-Two; Numbers One, Four, Zero, Two, and Zero",
  ],  
  
  450: [
	"The Number Four Hundred Seventy-One; One Thousand One Hundred Eleven",
  ],

  455: [
    "The Numbers Four, One, Zero, Zero, and One",
  ],   
  
  458: [
	"What is the Number of our King and God?",
  ],
  
  462: [
	"What is the Number of the Lord Jesus Christ?",
  ],
  
  465: [
	"The Numbers of the Name of God Most High; These are the Numbers of the Lord Jesus Christ; The Numbers Four, Zero, Five, Two, and Five",
  ],
  
  470: [
	"What're the Numbers of the Lord Jesus Christ?",
  ],
  
  471: [
	"What are the Numbers of the Lord Jesus Christ?; Numbers Four, Two, Five, Four, and Zero",
  ],  
  
  482: [
	"These are the Numbers of the Lord our God",
  ],
  
  485: [
	"The Number of the Name of the Son of God",
  ],
  
  488: [
	"What are the Numbers of the Lord our God?",
  ],
  
  502: [
	"The King of Kings and the Lord of Lords; The Number Thirty One Thousand Twenty-Five",
  ],

  512: [
    "The Name and Number of the Lord our God",
  ], 
  
  528: [
	"Twenty-One Thousand Five Hundred Twenty",
  ],

  532: [
    "In the Beginning God created the Heavens and the Earth",
  ], 
  
  667: [
	"The Number Four Thousand One Hundred Twenty-Four",
  ],

 },
 
 cipher6: {
	 	4: [
		"A; Z",
	],
	
	19: [
		"L; O",
	],
	
	21: [
		"C; J; X; Q", 
	],
	
	22: [
		"D; W",
	],
	
	23: [
		"H; S",
	],
	
	29: [
		"B; Y",
	],
	
	32: [
		"F; U",
	],
	
	37: [
		"E; V",
	],
	
	44: [
		"G; T",
	],
	
	58: [
		"I; R",
	],

  66: [
    "[IVRIT] Abba",
  ],
  
  68: [
	"K; P",
  ],
  
  78: [
	"M; N",
  ],

  83: [
    "[IVRIT] Yasha",
  ],

  85: [
    "God; Two"
  ],

  90: [
    "Holy",
  ],

  97: [
    "YHWH",
  ], 

  112: [
    "[IVRIT] YHVH",
  ],

  136: [
    "Jesus",
  ],

  140: [
    "I AM",
  ],

  148: [
    "Yeshua",
  ], 

  149: [
    "[IVRIT] Ehyeh",
  ], 
  
  153: [
	"[IVRIT] Yahveh",
  ],

  165: [
    "Sacred",
  ],

  175: [
    "Holy God; Sixty",
  ],

  188: [
    "[IVRIT] HaShem",
  ], 

  190: [
    "Yehoshua [IVRIT] Yehoshua",
  ],

  206: [
    "[IVRIT] IHShVOH",
  ],

  212: [
    "Seven",
  ],

  222: [
    "The Lord",
  ],

  223: [
    "(48th Prime #) Holiest",
  ],

  225: [
    "I AM GOD",
  ],

  226: [
    "I'M HOLY; Four, Two [IVRIT] MShICH",
  ],

  227: [
    "My Son",
  ],

  228: [
    "God's Son [IVRIT] Yisrael",
  ], 

  229: [
    "[IVRIT] Ze HaShem",
  ],

  230: [
    "Who is God?; I AM HOLY",
  ], 

  232: [
    "[IVRIT] HaMoshia",
  ],

  234: [
    "Elohim",
  ],

  235: [
    "Who is Holy?",
  ],

  246: [
    "Messiah",
  ], 

  252: [
    "[IVRIT] Zeh HaShem; ANI YHVH",
  ],

  259: [
    "[IVRIT] Yasha Mashach; Mi Hu HaAv?",
  ],

  260: [
    "The Sabbath [IVRIT] Ze Shemi; M ShMI; Zeh Ruachi",
  ],

  266: [
    "Who's a Holy God?",
  ],

  270: [
    "Holy, Holy, Holy! [IVRIT] Ma HaShem?",
  ],

  277: [
    "He is Jesus",
  ],

  281: [
    "(60th Prime #) Who is Jesus?; Who's our God?",
  ],

  289: [
    "Two, Six, Two [IVRIT] Hu Elohim; Hu Mashiach",
  ], 

  297: [
    "Two, Seven",
  ],

  301: [
    "The Name; Three, Six [IVRIT] Ma Shemi?",
  ],

  302: [
    "The Father",
  ],

  304: [
    "My Name; Two, One, Two",
  ],

  305: [
    "God's Name; Four, Five",
  ], 
  
  308: [
	"Our Savior",
  ],

  312: [
    "Our Lord God; Mary's Son",
  ],

  316: [
    "[IVRIT] HaMispar",
  ], 

  324: [
    "Ninety",
  ], 

  325: [
    "[IVRIT] Ani Adnoai",
  ],

  327: [
    "The Holiest [IVRIT] ANI IHShVH",
  ], 

  328: [
    "The Holy One",
  ],

  333: [
    "Name of God; Who's Messiah?; Virgin",
  ],

  334: [
    "Jesus' Father; Two, Two, Five",
  ], 
  
  337: [
	"Eighty-Six",
  ],

  339: [
    "Who is our God?; Crucified",
  ],

  340: [
    "Son of Mary; Eight, One",
  ], 
  
  341: [
	"He who is Jesus",
  ],

  344: [
    "A Son of Mary; Four, Two, Zero",
  ],

  345: [
    "The Creator",
  ], 
  
  348: [
	"The God of Gods",
  ],

  350: [
    "The Messiah",
  ], 
  
  351: [
	"[IVRIT] Misparai",
  ],

  352: [
    "The King; God of Heaven",
  ], 
  
  360: [
	"The Son of God",
  ],

  363: [
    "Jesus Christ; Child of Mary; Deliverer; Five, Three",
  ],

  358: [
    "The Most Holy; Eighteen [IVRIT] Hu Eloheinu",
  ],

  370: [
    "The Lamb of God",
  ], 
  
  373: [
	"Who is God's Son?; Two, Two, Two, Zero",
  ],

  374: [
    "[IVRIT] Ani Elohim; Malkeinu",
  ],

  375: [
    "Holy to the Lord [IVRIT] B'yoter Kadosh",
  ], 

  382: [
    "Messiah of God [IVRIT] Ani HaMelech; Yeshua Mashiach",
  ], 
  
  383: [
	"The Child of God",
  ],

  384: [
    "God Almighty [IVRIT] HaMispar HaAv",
  ], 

  386: [
    "Four and Four; Six, Two, Three; Five and Zero",
  ], 

  389: [
    "[IVRIT] Ze HaShem Sheli",
  ],

  391: [
    "Who is Messiah?; The Holy Name; I AM GOD'S CHILD [IVRIT] HMSPR IHVH",
  ],

  394: [
    "I AM MOST HOLY; My Holy Name",
  ],

  397: [
    "(78th Prime #) God Most High; Number Two",
  ],

  399: [
    "Who is Most Holy?; Passover Lamb; Holy Spirit; Eighty-Five; Seven, Two, Six [IVRIT] ANI YASHA MASHACH; Arba, Efes, Tish'ah",
  ],

  401: [
    "(79th Prime #) Without Sin; Two and Seven",
  ],

  409: [
    "Yeshua HaMashiach; The Glory of God; He has Stigmata; Eight, Two, Zero; Four and Five; Ninety-Two [IVRIT] Yeshua HaMashiach; MSPR ALHIM",
  ],

  415: [
    "Seven, Two, Zero; Nine, Five; Four, Two, and Two",
  ],

  416: [
    "The Number; The Most High; The Lord our God",
  ],

  419: [
    "(81st Prime #) My Number; Three, Six, Zero",
  ],

  420: [
    "God's Number; Holiest Name",
  ],

  421: [
    "What's God's Name?",
  ],

  422: [
    "Who is Eternal? [IVRIT] HaShem Elohim; HaShem Mashiach",
  ],

  424: [
    "The Holy of Holies",
  ], 

  425: [
    "[IVRIT] Mi Hu Elohim?",
  ],

  434: [
    "Eighty-Three",
  ],

  437: [
    "The Name of God; Who's the Messiah?; King and God; The Virgin [IVRIT] Mispar Yeshua",
  ],

  439: [
    "(85th Prime #) Four, Five, One; One, Six, Two, Zero",
  ],

  442: [
    "Yeshua HaMeshiach; I AM THE FATHER [IVRIT] Yeshua HaMeshiach; Zeh Kadoshi Shem; Mispar Yahveh",
  ],

  443: [
    "(86th Prime #) God's Numbers [IVRIT] Ehyeh Asher Ehyeh; Melech Yisrael; Nolad mi-HaRuach",
  ],

  444: [
    "The Bride of God; The Son of Mary; The Son's Name; One and Eight; Three and Four",
  ],

  445: [
    "The Father's Son; Spirit of God; One, Two, Four, Two",
  ],

  448: [
    "Jesus' Number; He was Crucified; God's Anointed; Six, One, Seven; Four, Two, and Zero; Two, Three, Five; Seven, Zero, Zero",
  ],

  451: [
    "Yehoshua HaMashiach; Most Holy Name; Three, Zero, One; Four and Eight",
  ],

  452: [
    "A Number of God; Who was Crucified?; I AM MARY'S SON",
  ], 
  
  454: [
	"A Gift from God [IVRIT] HaMispar Yahweh; HaElohei Elohim",
  ], 
  
  455: [
	"A Most Holy Name; God of Creation",
  ],

  457: [
    "Who is our Lord God?",
  ],

  466: [
    "Messiah's Name; Twenty-Seven",
  ],

  468: [
    "Holiest of the Holy; One, Two, Five, Two",
  ], 

  469: [
    "The Son of our God",
  ],

  471: [
    "Jesus' Numbers; Numbers of God; My Father is God; Dead for three days; Who's God Almighty?; Two, Zero, and Five; Nine, Zero, Six",
  ],

  472: [
    "Who is the Holiest?; One, One, Six, Six; Six, Eight, Five",
  ],

  474: [
    "I AM JESUS' FATHER; Where is Heaven?; Anointed One; Holy One of Israel; Five and Eight; Three, Four, One; Six, One, and One [IVRIT] Mispar Adonai; Mispar shel Yasha; MSPR ShL ALHIM",
  ],

  475: [
    "What is the Name?",
  ],

  478: [
    "What is My Name?; Eight Hundred",
  ],

  479: [
    "(92nd Prime #) What is God's Name",
  ], 

  480: [
    "I'M A SON OF MARY; Two, Two, and Eight",
  ],

  481: [
    "Lord Jesus Christ; A Sacred Number; A Name of our Son; Four, Four, Three; Three, Five, Zero; Four, Eight, One; Four, One, and Six"
  ], 
  
  484: [
	"I'M THE GOD OF GODS; Who's God Most High?; Seven Hundred [IVRIT] Yehoshua HaMeshiach",
  ],

  486: [
    "The Messiah of God; I'M THE MESSIAH",
  ],

  487: [
    "Number Sixty; One, Four, Seven",
  ],

  488: [
    "Whose Father is God?; Five, Eight, Zero",
  ],  
  
  489: [
	"The Father of Jesus; Nine and One",
  ],

  490: [
    "I AM THE MESSIAH; Eight, Three, Two",
  ],

  492: [
    "Mary Magdalene; A Beautiful Woman; Whose Name is Holy?",
  ], 

  494: [
    "Five, Four, and Two [IVRIT] Mi Hu Eloheinu?",
  ],

  495: [
    "Who is the Messiah?",
  ], 

  499: [
    "Number of Jesus' Name; He's the Lord our God; He is the Most Holy",
  ], 
  
  500: [
	"I AM THE SON OF GOD",
  ],

  501: [
    "The Most High God; The God Number; He is the Son of God; The Number Two; One, Zero, Five, Two",
  ],

  503: [
    "A Number of Jesus; Who is the Most Holy?; The Holy Spirit; The Passover Lamb; A Crucified Man; Nine, One, Zero; Seven, Two, and Six; Eight, Seven, Two",
  ],

  505: [
    "Who is the Son of God?; The King of Judah",
  ], 

  506: [
    "King of the Jews [IVRIT] HaMispar Yehoshua; HaB'yoter Yafe Shem",
  ],

  507: [
    "The Most Holy Place [IVRIT] HaBen shel Elohim",
  ], 

  514: [
    "[IVRIT] Hu Nolad shel HaBetulah",
  ],

  515: [
    "The Antichrist [IVRIT] Ani B'yoter Kadosh",
  ],

  517: [
    "Son of Humanity; Sin Offering; Seven, Five, Four; Five, Five, and Two; Six, Nine, Five",
  ], 

  518: [
    "[IVRIT] HaMispar Beni",
  ], 

  524: [
    "[IVRIT] HaShem shel Elohim",
  ],

  528: [
    "Who is the Child of God?; The God of this World [IVRIT] MSPRIM BNI",
  ], 
  
  530: [
	"Our Lord and Savior",
  ],

  533: [
    "THIS IS MY NAME; The Lord of the Sabbath; Five, Zero, Nine",
  ],

  535: [
    "Holiest Number; What's My Number?; Seven, One, and Two",
  ],

  536: [
    "What's God's Number?; Seven, Zero, Eight; Seven, Zero, and Six",
  ],

  538: [
    "He is God Most High; One Thousand Ten",
  ],

  542: [
    "Who is God Most High?; The Creator of Life; Four, Seven, and Two",
  ],

  543: [
    "Four, Five, and One; One, One, Four, One [IVRIT] HaBeyoter Yafe Shem",
  ], 

  545: [
    "[IVRIT] Melech shel Yisrael",
  ],

  546: [
    "The Name of our God; Our King and God; Who is without Sin?; Eight, One, Eight; Eight, One, and Six; Three, Eight, Four; Eight, Zero, and Zero; Seven, Two, Two, Five",
  ], 

  548: [
    "Offspring of God [IVRIT] Hu Nolad mi-HaBetulah",
  ], 

  549: [
    "One, Two, Four, and Two [IVRIT] Ani Yeshua HaMashiach",
  ],

  551: [
    "Who has the Name of God?",
  ],

  552: [
    "The Number of God; A Carpenter's Son; Four, Three, Seven; Two, Three, and Five; Seven, Eight, One; Seven, Zero, and Zero",
  ],

  553: [
    "What's the Name of God?",
  ],

  555: [
    "The Most Holy Name; He who is the Messiah; Three, One, and Zero; One, Two, Nine, Two",
  ],

  556: [
    "Four, Nine, Five; Three Hundred Two",
  ],

  557: [
    "The Prophet of God; He is the Lord our God; The Number Four",
  ],

  558: [
    "Holiest Numbers; A Servant of the Lord; Seven, One, Seven",
  ],

  559: [
    "He Forgave our Sin; The Angel of the Lord; Four, Seven, Eight; Six, Nine, Eight; Six, Seven, and Four; One, Two, Three, Four",
  ], 

  560: [
    "Name of Mary's Son; What's the Son's Name?",
  ],

  561: [
    "Who is the Lord our God?",
  ], 

  562: [
    "My Son's Number",
  ], 

  564: [
    "[IVRIT] Elohim shel Yisrael",
  ],

  565: [
    "Seven, Two, and Five",
  ],

  566: [
    "Most Holy Number; Five, Five, and One [IVRIT] HaMispar shel Yeshua",
  ],

  569: [
    "(104th Prime #)",
  ],

  570: [
    "The Messiah's Name; A Most Holy Number; King of Kings; Five Hundred One [IVRIT] Zeh HaB'yoter Yafe Shem",
  ], 
  
  571: [
	"The Messiah's Father",
  ],

  572: [
    "The Holiest of the Holy; Born of a Virgin",
  ],

  575: [
    "The Numbers of God; Scepter of Justice; Seven, Three, Five; Nine, Zero, and Six",
  ],

  577: [
    "The Son of the Father; Our King's Name; Who rose from the Dead?; Who is the Holy One?",
  ], 

  579: [
    "Number Forty-Two",
  ],

  580: [
    "What is a Holy Number?; A Heavenly Number",
  ], 

  581: [
    "Messiah's Number; Seven, Nine, Zero",
  ],

  585: [
    "The Lord Jesus Christ; He is the Son of Mary; My Son's Numbers; I AM THE LORD YOUR GOD; One, Zero, One, Three; Four, Eight, and One",
  ], 
  
  587: [
	"Son of the Most High; Crucified King",
  ],

  590: [
    "What is the Number?; Who is the Father's Son?; Who Lives in Heaven?; A Righteous King",
  ],

  592: [
    "The Greatest Name; Two, Three, Six, Eight; Eight, Four, and Four",
  ], 

  593: [
    "What is My Number?",
  ],

  594: [
    "What is God's Number?; A Number of My Son; Eight, Three, and Two",
  ],  

  596: [
    "[IVRIT] Mispar shel Moshia",
  ],

  598: [
    "Name of the Messiah; The Crown of Thorns; One, One, Two, and Four; Five, Seven, and Zero [IVRIT] Elohim mi-Yisrael",
  ],

  599: [
    "He died for our Sins",
  ],

  603: [
    "The Number of Jesus; The Virgin's Child; Ark of the Covenant",
  ],

  604: [
    "Messiah's Numbers; The Name of a King; Three, Six, and Three; Nine, Five, and Two",
  ], 
  
  605: [
	"Three Hundred One",
  ],

  608: [
    "[IVRIT] HaMispar shel Yehoshua",
  ],

  609: [
    "MY NAME MEANS 'GOD'",
  ],

  610: [
    "The King of the Jews [IVRIT] Ani HaMelech Yisrael",
  ],

  611: [
    "What is the Name of God?; Three, Eight, and Six",
  ],

  617: [
    "I AM NOT A SINNER; I TRUST IN THE LORD",
  ], 

  623: [
    "This is My Holy Name",
  ],

  626: [
    "Who is Lord Jesus Christ?; The Numbers of Jesus; I AM THE MESSIAH OF GOD; Whose Name Means 'God'?; Numbers Six and Two [IVRIT] Ani Melech v'Elohim",
  ], 
  
  631: [
	"What're God's Numbers?; One, Two, Eight, and Six",
  ],

  634: [
    "[IVRIT] Mi Hu Melech Yisrael?",
  ],

  635: [
    "What are God's Numbers?; Son of Mary and Joseph; Fulfilled All Prophecy; Five Hundred Three; Number Forty-Four",
  ],

  638: [
    "The God of the Living; Five, Eight, and Five; One, Six, Five, and One",
  ],

  640: [
    "What is Messiah's Name?",
  ],

  641: [
    "(89th Prime #) I AM THE MOST HIGH GOD; MY WAYS ARE NOT YOUR WAYS",
  ],

  645: [
    "Name of God Most High; Six Thousand Sixteen [IVRIT] Mi Hu HaElohei Elohim?",
  ],

  649: [
    "This is God's Number; The Virgin Birth; Number Eighty-Six",
  ], 

  657: [
    "[IVRIT] Mi Hu Nolad mi-Betulah?; HaMisparim Moshia",
  ],

  660: [
    "Who is the Antichrist?",
  ], 

  661: [
    "The Number of our God",
  ], 
  
  663: [
	"This is to be God's Name",
  ],

  666: [
    "The Bride's Numbers; This is the Name of God; Five, Three, and Three",
  ],

  667: [
    "Four Hundred Twenty; Three Hundred Twelve",
  ], 
  
  670: [
	"The Most Holy Number",
  ],

  671: [
    "A Number of My Name; Performs Miracles",
  ], 
  
  672: [
	"A Number of God's Name; Five, Four, Zero, Two, Five; Five, Four, Five, Two, Zero",
  ],

  674: [
    "The King of Kings; He is the Lord of the Sabbath",
  ], 

  675: [
    "Who is our Lord and Savior? [IVRIT] Misparim shel Yeshua",
  ],

  676: [
    "Which Name is Mine?",
  ],

  677: [
    "(123rd Prime #) This is Jesus' Number; Three Hundred Eight",
  ],

  681: [
    "This is a Number of God",
  ],

  686: [
    "Eight, Five, and Seven [IVRIT] HaMisparim Elohim",
  ],

  688: [
    "These are Holy Numbers",
  ],

  689: [
    "The Name Above All Names",
  ], 

  691: [
    "Who is our King and God?; The Son of the Most High; The Crucified King",
  ], 

  694: [
    "He wore a Crown of Thorns",
  ],

  695: [
    "The Number of God's Son",
  ],

  700: [
    "A Number of Jesus' Name; The Savior of Humanity; Two, One, Zero, Four, and Zero",
  ],

  702: [
    "The Name of the Messiah",
  ],

  706: [
    "These are God's Numbers",
  ], 
  
  707: [
	"The Ark of the Covenant",
  ],

  708: [
    "My Favorite Number; The Messiah's Numbers; The One Israel Praises; Seven, Four, and Nine",
  ],

  709: [
    "Two, Two, Zero, Three, and Zero",
  ],

  711: [
    "I AM THE MESSIAH'S FATHER; Number Eighty-Five; Four Hundred Sixteen",
  ],

  712: [
    "The Name of the Son of God; The King of Jerusalem",
  ], 
  
  715: [
	"MY WORDS ARE HOLY AND TRUE",
  ],

  716: [
    "Innocent of All Charges",
  ],

  717: [
    "Who is the Holiest of the Holy?; Who is Born of a Virgin?; A Number of the Messiah; I AM THE SON OF THE FATHER; I ASCENDED INTO HEAVEN",
  ], 
  
  718: [
	"The Numbers of God's Son",
  ],

  719: [
    "What's the Number of Jesus?; Who is our Heavenly Reward?; Three, Zero, One, and Five",
  ],

  720: [
    "What is the Name of our God?; The Consuming Fire; Seven, Two, Zero, Four, Five",
  ],

  721: [
    "Jesus Christ's Numbers; God's Name and Number; Who is the Righteous One?; I KNOW THE MIND OF GOD; Numbers Four and Four; Five Hundred Seventy",
  ],

  726: [
    "What is the Number of God?; The God of Heaven and Earth; Who was born on Christmas?; Two Hundred Eighty-One; Four, Three, Five, and Zero",
  ],

  727: [
    "A Number of the Son of God",
  ],

  729: [
    "What is the Most Holy Name?; Seven Hundred Eleven",
  ],

  730: [
    "Who is the Lord Jesus Christ?; A Number of Jesus Christ; An Important Name; The Greatest Numbers; I AM A WORM AND NOT A MAN; The Numbers Two and Six; Number Twenty-Five; Six Hundred Twenty-Six; Numbers Two and Eight",
  ], 

  732: [
    "God Most High's Number; This is a Number of Jesus; The Messianic King; Who is Son of the Most High?; He was Born in a Manger; One, Zero, Five, and Seven; The Number Forty-One; Forty-Four Thousand Five; Seven, Three, Zero, Two, Zero; Seven, One, Zero, and Five [IVRIT] Misparim shel Moshia",
  ],

  734: [
    "These are Jesus' Numbers; Wore the Crown of Thorns; Seven, Seven, and Eight",
  ], 

  735: [
    "He's the Offspring of God",
  ],

  740: [
    "The Number Ninety; Nine, Nine, and One; Seven, Seven, and Seven; Four, Zero, Five, Three, Zero",
  ], 
  
  744: [
	"What is the Messiah's Name?; In the Beginning",
  ],

  745: [
    "Number Forty-Nine; Five Hundred Sixty-One; Numbers Six, Six, and Six",
  ],

  749: [
    "The Name of God Most High; One, One, Five, Three, Zero; One Thousand Seventy-Two",
  ], 
  
  751: [
	"Enthroned as the Holy One",
  ],

  754: [
    "What is a Heavenly Number?; What is the Name of God's Son?; I WAS BORN IN BETHLEHEM; The Most Evil Numbers; Five Hundred Fifteen",
  ], 

  759: [
    "The Lord and Heaven and Earth [IVRIT] HaMisparim shel Moshia",
  ], 
  
  760: [
	"Who was Born in Bethlehem?",
  ],

  764: [
    "A Number of God Most High; One Hundred Thirty-Six",
  ],

  767: [
    "What are the Numbers of God?; The Son of Mary Magdalene; Numbers Two, Four, and Six",
  ],

  769: [
    "(136th Prime #) What is a Number of God's Son?; The Numbers Four and Two; Five, Two, Five, One, and Zero [IVRIT] Hu Malkeinu v'Eloheinu",
  ],

  771: [
    "The Number of My Name [IVRIT] Mispar Esrim ve'Shisha; Mispar Tishim ve'Sheva",
  ],

  777: [
    "What is the Number of Jesus?; A Death from Crucifixion; Son of the Virgin Mary; Who is the Messiah's Mother?; Two Hundred Thirty-Five; Number Ninety-Four; Two, Seven, Seven, and Five",
  ], 
  
  778: [
	"What is the Name of a King?",
  ],

  779: [
    "The Number of our Lord God; The Suffering Servant; I SIT ON THE THRONE OF GOD; The Numbers Six and One",
  ], 

  780: [
    "What's the Name of our Lord God?",
  ],

  781: [
    "This is the Number of God; Seven, One, Zero, Three, Zero",
  ],

  784: [
    "MY MOTHER IS A VIRGIN",
  ], 
  
  788: [
	"Three, Two, Zero, Zero, and Five",
  ],

  790: [
    "He who is the Lord Jesus Christ; This is a Number of our God; Number Eight Hundred; Nine Hundred Forty-Two",
  ],

  791: [
    "Which Number is Mine? This is My Son's Number; Who's My Only Begotten Son?",
  ],

  794: [
    "The Numbers of My Name; Four Hundred Sixty-Eight; Five Hundred Thirty-Six; Four Hundred Forty-Three",
  ],

  799: [
    "This is a Most Holy Number; This is the Messiah's Name; Numbers Four, Two, and One",
  ],

  800: [
    "The Number of Jesus' Name; One Hundred Forty-Seven; Seven Hundred Sixty-Four",
  ],

  801: [
    "What's the Messiah's Number?; Whose Mother is a Virgin?; Eight Hundred Forty-Four",
  ],

  806: [
    "The Lord Jesus Christ's Father; This is our King's Name; Five Hundred Seventy-Two; Numbers Two, Zero, and Five",
  ], 
  
  808: [
	"Three Hundred Eighty-Six",
  ],

  809: [
    "This is the Name of God's Son; Numbers Eight and Five; Numbers Six, One, and One",
  ],  
  
  810: [
	"What's the Number of My Son?",
  ],

  811: [
    "THIS IS MY NAME FOREVER; The Number Twenty-Four",
  ], 
  
  814: [
	"What're the Numbers of Jesus?",
  ],

  815: [
    "He is the King of Kings; The Number of the God of Gods; The Number Eighty-Five; Eight Hundred Fourteen; Numbers Five and Seven; Eight Hundred Eighty-Six; Six Hundred Eighty-Eight",
  ],

  816: [
    "Lord Jesus Christ's Number; What's a Number of Jesus' Name?; Numbers Four, One, and Six",
  ], 
  
  817: [
	"The Number of the Messiah",
  ],

  818: [
    "What are the Numbers of Jesus?; What's the Name of the Messiah?; Who was crucified on Passover?; The Numbers One and Four; Seven, Nine, and Nine",
  ],

  820: [
    "What's the Name of the King?; Seven Hundred Fifty-Four; Nine Hundred Fifty-Six",
  ],

  825: [
    "The Number of the Most Holy; Number One Thousand One; The Numbers Five and Zero; Seven Hundred Thirty-Two; The Number Ninety-Two; The Numbers Four and Four",
  ], 

  827: [
    "The Number of the Son of God",
  ],  
  
  828: [
	"Eight, Four, Zero, Three, Five",
  ],
  
  832: [
	"This is the Number of Jesus; Six Hundred Ninety-One; Four Hundred Seventy-One; Numbers Four, One, and Zero",
  ],

  836: [
    "What's My Name and Number?; Who is the Crucified King?; Who is the Son of the Most High?; Eight Hundred Eighteen; Seven, Three, Zero, Two, and Zero",
  ],

  838: [
    "These are the Numbers of God",
  ],

  840: [
    "The Numbers of the Messiah; I DIED FROM CRUCIFIXION; Seven Hundred Twenty-Six; The Numbers Two and Seven",
  ],

  844: [
    "What is the Most Holy Number?; Numbers Eight and Three; The Numbers Three and Six; Four, Zero, Five, Three, and Zero",
  ],

  845: [
    "He is My Only Begotten Son; Who is the Savior of Humanity?; An Important Number; Five Hundred Ninety-Two; One Thousand Twenty-Seven; Three Hundred Sixty-Three; Number Six Hundred Ten",
  ], 

  848: [
    "These are My Son's Numbers; I AM THE ONE ISRAEL PRAISES",
  ],

  850: [
    "What're the Holiest Numbers?; I'M THE FATHER OF ALL CREATION; The Number of the Child of God; The Numbers of the Son of God; Number One Thousand Ten; The Number Eighty-Three; Seven, One, Zero, Zero, and Five",
  ],

  853: [
    "(147th Prime #) The Name and Number of God; The Numbers of Jesus Christ; I AM YOUR KING AND YOUR GOD; The Name of the Most High God",
  ],

  854: [
    "What are the Holiest Numbers?; Numbers Seven, Two, and Zero; Numbers Nine and Five; The Numbers Four, Two, and Two; Two Hundred Seventy-Seven; Seven Hundred Seventy-Two",
  ],

  855: [
    "A Number of the Name of Jesus; The Name of the Passover Lamb; One Hundred Seventy-Five; Five Hundred Seventy-One",
  ], 

  857: [
    "What is the Number of Heaven?",
  ], 
  
  858: [
	"Numbers Three, Six, and Zero",
  ], 
  
  859: [
	"What is the Messiah's Number?",
  ],

  860: [
    "Four Hundred Nineteen; Six Hundred Eighty-Nine; Four Hundred Eighty-Seven; Nine Hundred Eighty-Six",
  ], 
  
  864: [
	"The Number of God Most High; The Numbers Two, Zero, and Zero; The Numbers One, Two, and Six",
  ],

  868: [
    "A Number of the Most High God; Three Hundred Thirty-Four",
  ],

  872: [
    "What is Jesus Christ's Number?; I AM THE MESSIANIC KING; Three Hundred Fifty-Eight; Eight Hundred Fifty-Three; Seven Hundred Twenty-One",
  ],

  880: [
    "He is the Son of Mary and Joseph",
  ],

  881: [
    "What're the Most Holy Numbers?; The Son of the Virgin Mary; Four Hundred Thirty-Seven; Number Seven Hundred Two; Numbers Eight, Zero, and Zero",
  ],

  882: [
    "Messiah's Name and Number; Number Five Hundred One; Nine Hundred Fifty-Five",
  ], 

  883: [
    "The Number of the Lord our God",
  ],

  885: [
    "What are the Most Holy Numbers?; Five Hundred Seventy-Five; Number Six Hundred Three; Seven, One, Zero, Three, and Zero",
  ],

  886: [
    "This is the Name of My Father; What is the Name of the Son of God?",
  ], 
  
  887: [
	"The Numbers of God Most High",
  ],

  888: [
    "The Numbers Four, Six, and Six",
  ],

  889: [
    "These are the Numbers of Jesus; The King of Heaven and Earth; Numbers Three and Nine; The Numbers Seven and One",
  ],

  890: [
    "The Numbers Eight and Four; Four, Three, Five, Zero, and Five; Numbers Three, One, and Zero",
  ],

  898: [
    "The Name of our King and God; Five Hundred Thirty-Eight",
  ], 

  899: [
    "What is a Number of the Most Holy?; This is the Most Holy Number; I AM THE LORD OF HEAVEN AND EARTH; Four Hundred Eighty-Nine",
  ], 

  904: [
    "Who is the Lord of Heaven and Earth?",
  ],

  906: [
    "The Numbers of the Lord our God",
  ], 
  
  910: [
	"What are the Numbers of God's Son?",
  ],

  917: [
    "Number Three Hundred One; Seven Hundred Forty-Nine; Nine Hundred Fifty-Three",
  ], 

  923: [
    "What is the Name of God Most High?; The Number of Crucifixion; These are the Father's Numbers; This is the Number of My Son",
  ], 
  
  927: [
	"Numbers Eight, Four, and Four",
  ],

  931: [
    "This is the Name of the Messiah; Seven Hundred Nineteen; Nine Hundred Seventeen",
  ], 
  
  934: [
	"What are the Numbers of a King?",
  ],

  937: [
    "This is My Favorite Number",
  ], 

  938: [
    "What is a Number of God Most High?; The Father of the Lord Jesus Christ",
  ],  
  
  945: [
	"What is the Number of My Name?",
  ],
  
  949: [
	"This is My Name and Number",
  ], 
  
  952: [
	"A Number of the Lord Jesus Christ",
  ],
  
  954: [
	"The Number One Thousand Ten",
  ],

  955: [
    "The Number of the Name of Jesus; Three Hundred Seventy-Three",
  ],

  956: [
    "These are the Most Holy Numbers; Numbers Nine, Five, and Six",
  ], 
  
  968: [
	"The Number of the Most High God; Numbers Seven, Three, and Zero",
  ],

  970: [
    "Nine Hundred Eighty-Seven",
  ],

  971: [
    "The Numbers of Lord Jesus Christ; These are the Messiah's Numbers; Number Six Hundred Seventy; Three, Four, Five, Three, and Five",
  ],

  978: [
    "This is the Name of God Most High; The Numbers of the Name of Jesus; Numbers One, Three, and Eight; The Numbers One, Three, and Six",
  ],

  981: [
    "Seven Hundred Seventy-Seven; Nine Hundred Ninety-One; The Numbers Two, Four, and Seven",
  ],

  986: [
    "What are the Numbers of My Name?; The Number Five Hundred one",
  ],

  987: [
    "What are the Numbers of God's Name?",
  ],

  989: [
    "Seven Hundred Twenty-Nine; The Number Six Hundred Three",
  ],

  991: [
    "What is the Number of the Messiah?; The Numbers of the Most High God; The Numbers Seven, Zero, and Zero; Nine Hundred Thirty-Seven; The Numbers Seven, One, and Six; Numbers Seven, Three, and Four",
  ],

  993: [
    "The Numbers Three and Nine",
  ],

  994: [
    "These are My Favorite Numbers; Numbers One, Two, Nine, and Two",
  ], 
  
  997: [
	"The Number of our Lord and Savior",
  ],

  1001: [
    "What is the Number of the Son of God?; The Numbers Three, Zero, and Four; Numbers Five, Three, and Three; The Numbers One, Eight, and Zero",
  ],  
  
  1004: [
	"Who created the Heavens and the Earth?",
  ],
  
  1005: [
	"These are the Numbers of a King",
  ],

  1013: [
    "The Number of our King and God; The Numbers One, Nine, and Two",
  ],

  1027: [
    "What is the Name and Number of God?; What is the Name of the Most High God?",
  ], 

  1031: [
    "The Offspring of Mary and Joseph; The Numbers Four, Four, and Eight",
  ],

  1032: [
    "What are the Numbers of the Messiah?",
  ],

  1036: [
    "The Numbers of our King and God; Numbers Three, Three, and Three; Numbers Seven, Nine, and One",
  ], 
  
  1038: [
	"What is the Number of God Most High?",
  ],

  1039: [
    "The Number of the King's Name; The Numbers Three, Two, and Seven",
  ], 
  
  1042: [
	"What are the Numbers of the Son of God?",
  ],

  1043: [
    "The Numbers Five, Nine, and Two",
  ], 
  
  1052: [
	"The Number of the Lord Jesus Christ; One Thousand One Hundred Forty-Two",
  ],
 

  1057: [
    "These are the Numbers of My Name; What is the Number of the Lord our God?",
  ],

  1065: [
    "What are the Antichrist's Numbers?",
  ], 
  

  1072: [
    "What is the Name of our King and God?",
  ], 
  
  1075: [
	"The Numbers of the Lord Jesus Christ",
  ],

  1078: [
    "I AM THE FATHER OF THE LORD JESUS CHRIST",
  ],  
  
   1083: [
    "Who is the Father of the Lord Jesus Christ?; The Number Four Hundred Twenty",
  ],  
  
  1094: [
    "The Main Character in the Holy Bible; Number Four Hundred Eighty-One; Number Seven Hundred Sixteen",
  ], 
  
  1098: [
	"What are the Numbers of the Lord our God?; Eighty Thousand Five Hundred Forty; Number One Thousand Fifty-Seven",
  ],
  
  1103: [
    "These are the Numbers of the Messiah",
  ],

  1111: [
    "Numbers Four, Two, Five, Zero, and Five",
  ],

  1112: [
    "The Numbers Eight, Five, and Three",
  ],

  1118: [
    "The Number and Name of the Messiah", 
	
],  

  1124: [
    "The Numbers Seven, Zero, and Nine",
  ], 

  1125: [
    "The Numbers Eight, Five, and Seven",
  ],

  1136: [
    "What is the Name and Number of our God?; The Number Five Hundred Forty-Six; The Number Six Hundred Forty-Five; The Number One Thousand Thirty-Two",
  ],

  1141: [
    "The Numbers and Name of the Messiah",
  ], 
  
  1142: [
	"What is the Number of the Most High God?",
  ],
  
  1148: [
	"The Numbers Two, Two, Zero, Three, and Zero; The Number Forty-Four Thousand Five; The Numbers One, Zero, Nine, and Eight",
  ],

  1150: [
    "These are the Numbers of God Most High",
  ],
  
  1154: [
	"The Numbers Eight, Three, and Eight",
  ],
  

  1156: [
    "The Number Seven Hundred Thirty",
  ],

  1166: [
	"This is a Number of the Messiah's Name; What're the Numbers of the Name of Jesus?",
  ],

  1167: [
    "Number One Hundred Seventy-Five",
  ], 
  
  1169: [
	"These are the Numbers of the Lord our God; The Number of the Name of the Messiah; The Numbers Two, Four, Zero, Zero, and Five",
  ], 
  
  1179: [
	"What're the Numbers of the Most High God?",
  ],
  
  1180: [
	"The Number One Hundred Thirty-Six; One Thousand Four Hundred Twenty-One",
  ],
  
  1181: [
	"THIS IS MY SON, IN WHOM I AM WELL PLEASED; The Numbers Four, One, Five, and Three",
  ],

  
  1183: [
	"What are the Numbers of the Most High God?",
  ],
  
  1184: [
	"The Name and Number of the Lord our God",
  ],
  
  1192: [
	"The King of Kings and the Lord of Lords",
  ],
  
  1194: [
    "The Numbers of My Only Begotten Son; Number Nine Hundred Fifty-Five",
  ], 

  1199: [
    "The Number of the Messianic King",
  ], 

  1200: [
    "The Numbers One, Zero, Eight, and Three",
  ],

  1202: [
    "The Number One Thousand Fifty-Seven",
  ], 
  
  1211: [
	"Number Four Hundred Eighty-Nine",
  ],

  1217: [
    "The Number Four Hundred Twenty-One; The Number Four Hundred Forty-Eight; The Number Eight Hundred Forty-Four",
  ], 

  1222: [
    "The Numbers of the Messianic King",
  ],

  1223: [
    "The Number Six Hundred Forty-Nine",
  ], 

  1224: [
    "What're the Numbers of our King and God?; This is the Name and Number of My Son; The Number Seven Hundred Ninety; The Number Three Hundred Eighty-Six",
  ],  
  
  1225: [
	"These are the Numbers of a King's Name; The Numbers Four, Four, Zero, Zero, and Five",
  ],
  
  1226: [
	"What is the Number of the Lord Jesus Christ?; The Number Three Hundred Sixty-Five; Forty-Three Thousand Five Hundred Five",
  ], 
  
  1228: [
	"What are the Numbers of our King and God?",
  ],

  1229: [
    "The Numbers of the Son of Mary and Joseph; Number Seven Hundred Forty-Nine",
  ],

  1234: [
    "These are the Numbers of Lord Jesus Christ; What's the Name and Number of the Messiah?; I AM THE MAIN CHARACTER IN THE HOLY BIBLE",
  ], 

  1242: [
    "This is the Number of our King and God",
  ],

  1256: [
    "The Number Seven Hundred Twenty-Six; The Numbers One, Five, Five, and Nine",
  ],  
  
  1257: [
	"The Number One Thousand Thirty-Eight",
  ],

  1267: [
    "What are the Numbers of the Lord Jesus Christ?; Numbers Eight, Four, Zero, Three, and Five",
  ], 
  
  1285: [
	"What's the Number of the Name of the Messiah?",
  ],

  1286: [
    "What are the Numbers of the Name of a King?; The Number One Thousand Seventy-Eight",
  ],

  1287: [
    "The Number Six Hundred Seventy-Seven",
  ], 

  1288: [
    "The Number Seven Hundred Twenty-One",
  ], 

  1292: [
    "What is the Name and Number of the Messiah?",
  ],
  
  1299: [
	"These are the Numbers of our King and God",
  ],

  1301: [
    "Number Seven Hundred Twenty-Nine",
  ],

  1306: [
    "The Numbers Eight, One, Five, Four, and Zero; Numbers Three, Four, Five, Three, and Five; The Numbers Five, Three, Zero, Zero, and Five",
  ],

  1309: [
    "The Number Seven Hundred Ninety-Two",
  ], 
  
  1316: [
	"The Number One Thousand Five Hundred Two",
  ],

  1326: [
    "Number Nine Hundred Seventy-Eight",
  ],

  1333: [
    "The Number Seven Hundred Forty-Nine",
  ], 

  1335: [
    "This is a Number of the Son of Mary and Joseph",
  ],

  1336: [
    "The Number Seventy-One Thousand Thirty; The Number Three Hundred Seventy-Five; Eighty Thousand Five Hundred Thirty-Five; The Number Nine Hundred Thirty-Four",
  ],  
  
  1338: [
	"These are the Numbers of the Lord Jesus Christ",
  ],
  
  1357: [
	"These are the Numbers of the Name of a King; The Number Two Thousand Two Hundred Twenty",
  ],
  
  1360: [
	"The Number Eight Hundred Twenty-Seven",
  ],

  1366: [
    "The Number Seven Hundred Twenty-Seven",
  ], 

  1375: [
    "The Number Five Hundred Ninety-Three",
  ], 

  1414: [
    "What are the Numbers of the Messianic King?",
  ], 
  
  1421: [
	"What are the Numbers of the Son of Mary and Joseph?",
  ],

  1423: [
    "The Number Three Hundred Ninety-Seven",
  ],

  1469: [
    "The Number Eight Hundred Ninety-Nine",
  ], 

  1488: [
    "What is the Name and Number of our King and God?",
  ], 
  
  1502: [
	"These are the Numbers of the Name of God Most High",
  ],

  1559: [
    "(246th Prime #) The Number One Thousand One Hundred Eighteen",
  ], 

  1599: [
    "The Number One Thousand Two Hundred Eighty-Seven",
  ],   
  
  1609: [
	" The Numbers One, One, Zero, Three, Zero, Three, and Five",
  ],
  
  1651: [
	"These are the Numbers of the Name of our King and God",
  ],
  
  1728: [
	"The Number One Thousand Three Hundred Thirty-Eight",
  ],
  
  1737: [
	"The Number Ninety-One Thousand Five Hundred Forty",
  ],

  5501: [
    "(726th Prime #)",
  ],

 },
 
 cipher7: {
	 
	 32: [
		"God",
	],
	
	34: [
		"Jesus",
	],
	
	38: [
		"[IVRIT] Yahweh",
	],
	
	39: [
		"Holy; Yeshu [IVRIT] Yeshu",
	], 
	
	40: [
		"Yeshua",
	],
	
	47: [
		"Yahoshua",
	],
	
	56: [
		"Yehoshua",
	],
	
	79: [
		"[IVRIT] HaShem",
	],
	
	80: [
		"Ten",
	],
	
	86: [
		"Who is God?; Two, Five",
	], 
	
	92: [
		"Holiest",
	],
	
	102: [
		"[IVRIT] Shemi; Arba'ah ve'Efes",
	],
	
	109: [
		"Messiah; Forty-Two",
	],
	
	113: [
		"I AM GOD",
	],
	
	125: [
		"Most Holy; Forty-Four; Fifty-Five",
	], 
	
	128: [
		"The Holiest; Fifteen",
	],
	
	129: [
		"My Son",
	],
	
	130: [
		"Crucified",
	],
	
	136: [
		"Jesus Christ; Two and Zero; Sixteen",
	],
	
	138: [
		"Salvation",
	],
	
	140: [
		"King; Nine",
	],
	
	145: [
		"The Messiah; Eighty-Six; Six, Zero, Four",
	],
	
	147: [
		"Forty-One; Fifty-Three; Eighty-Four",
	],
	
	148: [
		"The Son of God; Paschal Lamb",
	], 
	
	149: [
		"Yeshu Mashiach",
	], 
	
	156: [
		"Yeshu HaMashiach [IVRIT] Echad u'Shmona; MSPRI",
	],
	
	157: [
		"Holy to the Lord; Who was Crucified?; Fifty-Seven [IVRIT] Z MSPRI; Yeshua HaMashiach",
	],
	
	161: [
		"The Most Holy; Three and Two; Twenty-Six",
	],
	
	164: [
		"The Lord our God",
	], 
	
	166: [
		"Yeshua HaMeshiach"
	],
	
	167: [
		"Jesus of Nazareth; Thirty-Four; Seventy-Four",
	],
	
	169: [
		"I WAS CRUCIFIED",
	],
	
	172: [
		"Who's the Son of God?; Two, Nine",
	],
	
	173: [
		"Yehoshua HaMashiach [IVRIT] HaShem Adonai",
	],
	
	176: [
		"The King; Thirteen; Seventeen",
	],
	
	180: [
		"God Most High; Three Hundred",
	], 
	
	182: [
		"Yehoshua HaMeshiach [IVRIT] HaShem Beni",
	],
	
	188: [
		"Lord Jesus Christ; Who's the Lord our God?; Walked on Water; Seven, Five, Four; Four, Nine; One, Eight, Two; One, One, Four; One, Seven, Two; Seven, Zero, Zero; Two, Three, Two, Four [IVRIT] Misparai",
	], 
	
	191: [
		"Jesus' Number; Twenty-Three; Five, Zero, Seven",
	],
	
	193: [
		"The Name of God",
	],
	
	195: [
		"God's Number; Thirty-Three; Seventy-Three",
	],
	
	199: [
		"Who is the Messiah [IVRIT] Zeh HaShem Beni",
	],
	
	201: [
		"God's Numbers; Twenty-Seven; Twenty-Eight",
	],
	
	202: [
		"Who is the Son of God?",
	],
	
	204: [
		"[IVRIT] HaMispar Yeshua",
	],
	
	205: [
		"Thirty-Eight; Seventy-Seven; Ninety-Two",
	],
	
	206: [
		"I AM MOST HOLY [IVRIT] M MSPRI; Ze HaShem Elohim",
	],
	
	212: [
		"What is the Name?",
	],
	
	216: [
		"The Most High God; Three, Nine; One, One, Three",
	], 
	
	218: [
		"Who is the Lord our God?",
	],
	
	220: [
		"My Number; One Hundred Six [IVRIT] HaMispar Yehoshua",
	],
	
	222: [
		"Three, Three, One",
	],
	
	224: [
		"The Lord Jesus Christ; Who forgives sin?",
	],
	
	225: [
		"The God Number; King and God; Two, One, and One; The Number Two",
	],
	
	226: [
		"Messiah's Name; Five, Seven, Eight; Eight, Nine; One, Five, Two, One; Three, Six, and Zero; One, Two, Three, Four; One, One, Seven",
	],
	
	228: [
		"Three Hundred Four",
	],
	
	229: [
		"[IVRIT] HaKadosh Mispar",
	],
	
	230: [
		"What's God's Number?; Who is the King?; Nineteen",
	], 
	
	232: [
		"The Holy Number; Three, One, Two, Five",
	],
	
	238: [
		"Twelve Thousand Forty; Four Hundred Eight",
	],
	
	239: [
		"The Number of God; The Holiest Name; One Thousand One; Nine and Six; Two, Zero, One, Seven; The Number Six; Eighty-Nine",
	],
	
	241: [
		"The Number of Jesus; Seven, Five, and Four; Seven, Zero, and Zero; The Number Four; Two Twos and One Four; One, Eight, and Two; One, Seven, and Two; Three Hundred Fifty-Two",
	], 
	
	245: [
		"The Numbers of God; Two Hundred Forty-Two; Two, Two, Five, Three, Zero; One, Three, and Six; Four, Four, Four, and Four",
	],
	
	247: [
		"The Numbers of Jesus; The Number Five",
	],
	
	248: [
		"Mary Magdalene; Kingdom of God",
	],
	
	255: [
		"What's My Number?; Twenty-Nine",
	],
	
	256: [
		"What is Jesus' Number?; One, Six, Nine",
	],
	
	258: [
		"What is the Name of God?",
	], 
	
	259: [
		"Thirty-Nine; Seventy-Nine",
	],
	
	260: [
		"What is God's Number?; Three Hundred Ten; One, Eight, and Zero [IVRIT] Me'ah Shishim u'Shisha",
	], 
	
	262: [
		"The Messiah's Name",
	], 
	
	266: [
		"[IVRIT] HaMispar Shemi",
	],
	
	269: [
		"Our King and God; The Number Three",
	],
	
	271: [
		"What are God's Numbers?; What is a Number of Jesus?; A Crucified King; Four Hundred Seventy; Two, Six, and Nine",
	],
	
	272: [
		"This is My Name; Two Hundred Sixteen",
	],
	
	274: [
		"What's the Number of God?; Number Fifty-Six",
	],
	
	276: [
		"What's the Number of Jesus?; One, Five, Four, and Zero",
	],
	
	282: [
		"Most Holy Number; Number Forty-Four",
	],  
	
	283: [
		"A Most Holy Number; Two Hundred Forty-One; Three Hundred Fifty-Two; Four, Zero, Five, Three, Five",
	],
	
	285: [
		"The Holiest Number; What is My Number?; Three, One, Two, and Five",
	],
	
	290: [
		"What is the God Number?; These are Jesus' Numbers",
	],
	
	291: [
		"This is the Name of God; The Holiest Numbers [IVRIT] Mispar Arboim; Mispar shel Shemi; Matayim Esrim",
	], 
	
	295: [
		"Three Hundred Twenty; Two, Nine, and One; Four, Nine, and Five",
	],
	
	299: [
		"Jesus Christ's Number; One, Three, Zero, Four, Five; One, Zero, Five, One, Five [IVRIT] Shemi v'Mispari",
	],
	
	300: [
		"King of Kings",
	],
	
	302: [
		"Numbers Two and Five; One, Four, Five, Three, Five; The Number Forty-Two; One Hundred Fifteen",
	],
	
	304: [
		"What is the Number of God?; What is the Holiest Name; One, Three, Five, and Zero",
	], 
	
	308: [
		"The Messiah's Number; The Number Twenty; One, Eight, Zero, and Four; Eight, Two, Five, Two, and Zero",
	], 
	
	309: [
		"The Name of the Son of God; Seven Hundred Fifty-Four [IVRIT] Ze HaMispar shel Shemi; Shemi ve'Mispari",
	],
	
	310: [
		"The Number Fifty-Six; One Hundred Sixteen",
	], 
	
	312: [
		"Two, Nine, Nine",
	],
	
	315: [
		"A Number Holy to the Lord",
	],
	
	316: [
		"What're the Numbers of Jesus? ",
	],
	
	317: [
		"What are the Numbers of Jesus?; Two, Zero, Five, Three, and Zero",
	],
	
	318: [
		"The Most Holy Number; The Number Forty-Four",
	],
	
	319: [
		"These are My Numbers",
	],
	
	320: [
		"What's the Holiest Number?; Number Twenty-Four; Two, Three, Five, Zero, and Five",
	], 
	
	321: [
		"He is our King and God; One, One, Five, Three, Zero; The Number Fifteen; One Hundred Twenty-Two",
	],
	
	322: [
		"Four, One, Eight, Four, One",
	], 
	
	323: [
		"This is the God Number; Who is our King and God?",
	],
	
	324: [
		"Numbers Three and Two; Nine Hundred Ten; One, Four, Zero, Zero, and Zero; The Most Holy Numbers",
	],
	
	332: [
		"The Numbers Two and Four; Numbers One and Six",
	],
	
	334: [
		"Numbers Five, Two, and Two; Numbers Two and Eight; Numbers Two and Seven; The Number Fifty-One",
	], 
	
	337: [
		"What is the Most Holy Name?",
	],
	
	338: [
		"These are the Numbers of God; The Most Holy of Numbers; The Numbers Two and Five; The Number Eighty-Six",
	],
	
	339: [
		"One Hundred Thirty-Six; One, Nine, and Three; Number Six Hundred Two",
	],
	
	340: [
		"These are the Numbers of Jesus; Numbers One and Five; One, Three, Nine, Five; The Number Eighty-Four; The Number Twenty-Two; The Number Forty-One; The Number Fifty-Three",
	],
	
	343: [
		"The Number of Jesus Christ; What's the Messiah's Number?; The Son of Mary and Joseph; One Hundred Twenty-Five; Four Hundred Twenty-Three; Numbers Three and Zero",
	],
	
	344: [
		"The Number Thirty-Two; The Number Seventy-Two",
	], 
	
	350: [
		"The Number Holy to the Lord; Numbers Two, Four, and Five",
	],
	
	352: [
		"The Number of the Messiah; The Numbers Five and Six",
	], 
	
	353: [
		"What's the Most Holy Number?; Numbers Two, Zero, and Five",
	], 
	
	356: [
		"The Numbers Holy to the Lord",
	],
	
	358: [
		"Three, Four, Zero, Three, and Five",
	],
	
	359: [
		"One Hundred Eighty-Eight",
	],
	
	360: [
		"What's the Name of the Lord our God?; The Numbers Three and Two; The Number Thirty-Four; One, Nine, Zero, and Six",
	], 
	
	361: [
		"What are the Holiest Numbers?",
	],
	
	363: [
		"I AM YOUR KING AND GOD",
	],
	
	364: [
		"The Son of Mary Magdalene; The Numbers Two, Two, and Four; Three, Three, Five, Zero, and Five",
	],
	
	368: [
		"The Number of the Most Holy; Numbers Three and Three",
	],  
	
	369: [
		"Numbers Two, Zero, and One; The Number Thirteen",
	],
	
	371: [
		"The Number of the Lord our God; What is the Name of the Messiah?",
	],
	
	372: [
		"Who was Born in a Manger?",
	],
	
	373: [
		"What is the Messiah's Number?",
	],
	
	374: [
		"What is the Name of the Son of God?; Number Forty-Nine",
	], 
	
	375: [
		"The Number Six Hundred Two",
	],
	
	380: [
		"What is a Number Holy to the Lord?",
	],
	
	381: [
		"The Number of My Name",
	],
	
	383: [
		"What is the Most Holy Number?",
	],
	
	386: [
		"The Numbers Two, Four, and Five; The Numbers Four and Eight [IVRIT] Ma HaBeyoter Kadosh Mispar?",
	], 
	
	387: [
		"The Lord Jesus Christ's Number; What's the Number of the Messiah?; The Number of God Most High; Number Nineteen",
	],
	
	388: [
		"Numbers One, Four, and Five; Numbers Two and Nine; Numbers Eight and Eight; Numbers Two, Five, and Eight",
	], 
	
	390: [
		"What is the Name of the Lord our God?",
	],
	
	391: [
		"Numbers Four, Zero, and Three; The Number Four Hundred Six; Nine Hundred Fifty-Three",
	],
	
	393: [
		"What're the Most Holy Numbers?; Number Seven Hundred Six",
	],  
	
	394: [
		"What are the Most Holy Numbers?",
	],
	
	395: [
		"Two Hundred Thirty-Nine; Number Four Hundred Eight",
	], 
	
	398: [
		"A Number that is Holy to the Lord",
	],
	
	399: [
		"Twenty-One Thousand Twenty; Numbers Seven, Zero, and Six; The Number One Hundred Two",
	],
	
	401: [
		"One Hundred Ninety-Five; Numbers Four, Zero, and Eight; Number Five Hundred Seven [IVRIT] HaMispar Matayim ve'Arba'ah",
	],
	
	406: [
		"What is the Name of God Most High?; What's the Number of the Lord our God?",
	],
	
	408: [
		"What is the Number of Jesus Christ?",
	],
	
	410: [
		"The Number Forty-Nine",
	], 
	
	413: [
		"These are Numbers Holy to the Lord; Numbers Three, One, and Zero",
	],
	
	416: [
		"This is the Most Holy Number; Number Thirty-Nine",
	], 
	
	423: [
		"The Number of the Most High God; One Hundred Ninety-Three; The Number Nineteen",
	],
	
	431: [
		"The Number of the Lord Jesus Christ; The Number Twelve Thousand Forty",
	], 
	
	433: [
		"One Hundred Seventy-Nine",
	],
	
	435: [
		"The Number Consecrated to the Lord; The Numbers Seven, Zero, and Six [IVRIT] Mi Hu Malkeinu ve'Eloheinu?",
	],
	
	436: [
		"What is the Number of the Lord our God?",
	],
	
	437: [
		"The Numbers of the Lord Jesus Christ; The Number One Hundred One",
	],
	
	443: [
		"The Numbers Five, Zero, and Seven",
	],
	
	444: [
		"The Numbers Three, Six, and One",
	],
	
	449: [
		"The Numbers Three, One, and Zero; Two Hundred Ninety-Nine",
	],
	
	451: [
		"These are the Numbers of the Messiah",
	],
	
	452: [
		"What is the Number of God Most High?; The Number Thirty-Nine; The Number Seventy-Nine",
	],
	
	461: [
		"[IVRIT] HaMisparim Shlosha, Arba'ah, ve'Chamisha",
	],
	
	470: [
		"These are the Numbers of the Lord our God",
	],
	
	476: [
		"The Number of our King and God; The Number Three Hundred Fifty-Two; The Number Two Hundred Forty-One",
	],
	
	486: [
		"These are the Numbers of God Most High",
	],
	
	488: [
		"What is the Number of the Most High God?; The Numbers One, Four, Four, and One",
	],
	
	493: [
		"The Name of the Son of the Most High God",
	],
	
	494: [
		"The Number One Hundred Sixty-Four; The Numbers One, Eight, and Eight",
	],
	
	496: [
		"What is the Number of the Lord Jesus Christ?; Numbers, One, Three, Zero, Two, and Zero",
	],
	
	499: [
		"What are the Numbers of the Most High God?; These are the Numbers of the Name of God",
	],
	
	507: [
		"What are the Numbers of the Lord Jesus Christ?; The Numbers Four, Two, Five, One, and Zero",
	],
	
	512: [
		"One Thousand Five Hundred Twenty-One",
	],
	
	522: [
		"These are the Numbers of the Most High God",
	],
	
	530: [
		"These are the Numbers of the Lord Jesus Christ; The Number Four Hundred Eighty-Eight; The Number One Hundred Twenty-Four; The Number One Hundred Forty-Eight",
	],
	
	532: [
		"The Number One Hundred Thirty-Six; Number Three Hundred Seventy-Three; The Numbers One, Three, Zero, Two, and Zero",
	],
	
	549: [
		"The King of Kings and the Lord of Lords",
	],
	
	578: [
		"These are the Numbers of the Most Holy Name",
	],
	
	583: [
		"Forty-One Thousand Eight Hundred Forty-One",
	],
	
	700: [
		"The Number of the Name of the Son of the Most High God",
	],
 }
};

// === CALCULATE VALUE ===
function calculate() {
  let input = document.getElementById("inputText").value.toUpperCase().replace(/[^A-Z]/g, '');
  if (!input) return;

  let value = 0;
  const cipherMap = cipherMaps[currentCipher];

  for (let char of input) {
    value += cipherMap[char] || 0;
  }

  document.getElementById("resultDisplay").textContent = `Value: ${value}`;
  updateDatabaseBox(value);
}

// === SHOW MATCHING WORDS FROM DATABASE ===
function updateDatabaseBox(value) {
  const entries = staticDatabase[currentCipher]?.[value] || [];
  const box = document.getElementById("valueBox");

  if (entries.length > 0) {
    box.innerHTML = `<strong>${value}:</strong> ${entries.join(', ')}`;
  } else {
    box.innerHTML = `<em>No matches found in database.</em>`;
  }
}

// === PAGE LOAD SETUP ===
document.addEventListener("DOMContentLoaded", () => {
  database = JSON.parse(JSON.stringify(staticDatabase)); // deep copy

  // ✅ Set default PDF
  document.getElementById("pdfLink").href = cipherPDFs[currentCipher];

  // Optional: show sample result
  if (database[currentCipher]) {
    const exampleValue = Object.keys(database[currentCipher])[0];
  }
});
