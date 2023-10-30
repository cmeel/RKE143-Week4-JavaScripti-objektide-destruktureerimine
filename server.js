const kool = {
    nimi: "Hogwarts",
    asukoht: {
      linn: "Hogsmeade",
      maakond: "Šoti Kõrge-Šotimaa",
      riik: "Suurbritannia"
    },
    õpilased: [
      {
        eesnimi: "Harry",
        perenimi: "Potter",
        majad: ["Gryffindor", "Kolmas aasta"]
      },
      {
        eesnimi: "Hermione",
        perenimi: "Granger",
        majad: ["Gryffindor", "Kolmas aasta"]
      },
    ]
    };

    const {õpilased: students} = kool;
    const [harry, hermione] = students;
    
    const {eesnimi: harryFirstName} = harry;
    const {eesnimi: hermioneFirstName} = hermione;

    console.log(`${harryFirstName} and ${hermioneFirstName} are friends.`);
    //console.log(õpilased);

//const numbrid = [1, 2, 3, 4, 5];
//const [first, second, third, fourth, fifth] = numbrid;
//const firstElement = numbrid[0];
//const lastElement = numbrid[numbrid.length - 1];
//const [firstElement,,,, lastElement] = numbrid;

//console.log(lastElement);


//const tegelane = {
   //isiklikudAndmed: {
    //eesnimi: "Harry",
    //perekonnanimi: "Potter",
    //vanus: 17,
   //linn: "London"
   //},
   //eriala: "Nõiduskunst"
  //};

  //const {isiklikudAndmed: {perekonnanimi: lastName, vanus: age}, eriala: profession} = tegelane;
  //console.log(`Last name: ${lastName}; Age: ${age} Profession: ${profession};`);
  //console.log(isiklikudAndmed);
  //console.log(eriala);


  //const tegelane = {
    //eesnimi: "Harry",
   //perekonnanimi: "Potter",
    //vanus: 17,
   // linn: "London"
  //};
  // const firstName = tegelane.eesnimi;
  // const lastName = tegelane.perekonnanimi;
  // const age = tegelane.vanus;

  //const {eesnimi: firstName, perekonnanimi: lastName, vanus: age} = tegelane;
  //tegelane.perekonnanimi ="Plotter";

  //console.log(`First name: ${firstName}; Last name: ${lastName}, Age: ${age};`);
  //console.log(tegelane);