let aboutFilm = {
    filmName:"The Intouchables",
    filmphotolink:"https://en.wikipedia.org/wiki/File:The_Intouchables.jpg",
    filmDescription:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver. A rich quadriplegic, living in a mansion in Paris, requires a live-in carer. A young offender turns up for an interview, but he is not really looking to get the job. However, to his surprise, he is hired. The two men then develop a close friendship.",
    filmIMDB:"8,5",
    filmActors:["François Cluzet","Omar Sy","Anne Le Ny","Audrey Fleurot","Joséphine de Meaux","Alba Gaïa Bellugi"],
    filmDirector:{ 
        DirectorFirstname:"Olivier ",
        DirectorLastname:"Nakache",
        HisBestFilms:["The Intachables","Those Happy Days","Samba"]
}


}
console.log(aboutFilm);
console.log(aboutFilm.filmActors);
console.log(aboutFilm.filmDescription);
console.log(aboutFilm.filmDirector);
console.log(aboutFilm.filmIMDB);
console.log(aboutFilm.filmphotolink);

document.write(aboutFilm.filmName);


