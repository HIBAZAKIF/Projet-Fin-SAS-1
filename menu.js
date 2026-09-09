const prompt = require('prompt-sync')();


const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = []; 


let id_ticket = 0 ;


function longueur (tab){
    let notFin = true;
    let compteur = 0;
    do {
        if(tab[compteur] != undefined){
            compteur++;
        }else{
            notFin = false ;
        }
    }while(notFin);
    return compteur ;
}


function afficherTrajets (){
    for(let i = 0 ; i < longueur(trips) ; i++){
        console.log(`#${i + 1} ${trips[i].departure} -> ${trips[i].destination}
            départ : ${trips[i].departureTime}
            arrivée : ${trips[i].arrivalTime}
            prix : ${trips[i].price} DH
            Places disponibles : ${trips[i].availableSeats} 
            `);
    }
}

function acheterTickets (){

    let nom_passager = prompt('entrer le nom du passager : ');
    let id_trajet = Number(prompt('entrer l\'identifiant du trajet : '));
    let trajet_exist = trips.find( (n)=> n.id == id_trajet );

    if (trajet_exist == undefined ){     
        console.log("trajet introuvable!");
    }else{

        if (trajet_exist.availableSeats > 0){
            const ticket = {
                id : ++id_ticket ,
                passengerName : nom_passager ,
                tripId : id_trajet ,
                seatNumber : 50 - (trajet_exist.availableSeats - 1 ) ,
                price : trajet_exist.price
            }
            trajet_exist.availableSeats-- ;
            tickets.push(ticket);
            console.log("Ticket acheté avec succès.");
            console.log(`# Ticket : ${ticket.id }
                Passager : ${ticket.passengerName}
                Trajet : ${trajet_exist.departure} -> ${trajet_exist.destination}
                Place : ${ticket.seatNumber}
                Prix : ${ticket.price} `)
        }else{
            console.log("train complet!");
        }

    }
}
function afficherTickets(){
    let length = longueur(tickets);
    if(length == 0){
        console.log("Aucun ticket enregistré.");
    }else{
        for ( let i = 0 ; i < longueur(tickets) ; i++ ){
            const trajet = trips.find((trip)=>trip.id == tickets[i].tripId);
            console.log(`============== TICKETS ==============
                Tickets # ${tickets[i].id} 
                Passager : ${tickets[i].passengerName}
                Trajet : ${trajet.departure} -> ${trajet.destination}
                Place : ${tickets[i].seatNumber}
                Prix : ${tickets[i].price} DH

                `)        
        }
    }
    
    
}

function annulerTickets (){
    let id = Number(prompt("identifiant du ticket : "));
    let ticket_exist = null;
    let index_ticket = null;
    for(let i = 0 ; i < longueur(tickets) ; i++){
        if( tickets[i].id == id){
            ticket_exist = tickets[i] ;
            index_ticket = i;
            break;
    }
        }
    if ( ticket_exist == null ){
        console.log("Ticket introuvable.")
    }else{
            
            let trajet = null ;
            let index_trajet = null ;
            for(let i = 0 ; i < longueur (trips) ; i++){
                if( trips[i].id == ticket_exist.tripId){
                    trajet = trips[i];
                    index_trajet = i ;
                    break;
                }
            }
            tickets.splice(index_ticket , 1);
            trips[index_trajet].availableSeats +=  1 ;
            console.log(`Identifiant du ticket : ${id} `);
            console.log(`Ticket annulé avec succès. `);       
    }
}

function rechercherTickets (){
    let nom = prompt("entrer le nom du passager : ");
    let ticket_de_nom = [] ;
    for(let i = 0 ; i < longueur(tickets) ; i++){
        if(tickets[i].passengerName == nom){
            ticket_de_nom.push(tickets[i]);
        }   
    }
    if(longueur(ticket_de_nom) == undefined){
        console.log("aucun ticket pour ce passager");
    }else{
        for(let i = 0 ; i < longueur(ticket_de_nom) ; i++){
            let trip_nom = trips.find((n)=>n.id == ticket_de_nom[i].tripId);
            console.log(`
                Ticket #${ticket_de_nom[i].id }
                Passager : ${ticket_de_nom[i].passengerName}
                Trajet : ${trip_nom.departure} -> ${trip_nom.destination} 
                Place : ${ticket_de_nom[i].seatNumber}
                rix : ${ticket_de_nom[i].price}
            `)
        }
    }


}
function filterTrajets (){
    let filtre = prompt("entrer la ville de depart : ");
    const tab = [];
    for(let i = 0 ; i < longueur(trips) ; i++){
        if (trips[i].departure == filtre ){
            tab.push(trips[i]) ;
        }
    }
    if (tab[0] == undefined){
        console.log("trajet non trouvé");
    }else{
        console.log('Résultats :')
        for(let i = 0 ; i < longueur(tab) ; i++){
            console.log(`
                #${i + 1} ${tab[i].departure} -> ${tab[i].destination}
                départ : ${tab[i].departureTime}
                arrivée : ${tab[i].arrivalTime}
                prix : ${tab[i].price} DH
                Places disponibles : ${tab[i].availableSeats} 
                `);
        }
    }
}

function trierTrajets (){
    const trajet_trier = [];
    let secours = null;
    for(let i = 0 ; i < longueur(trips) ; i++){
        trajet_trier.push(trips[i]);
    }

    for(let j = 0 ; j < longueur(trajet_trier) ; j++){
        let swap = false ;
        for(let i = 0 ; i < longueur(trajet_trier)-1 ; i++){

            if (trajet_trier[i].price > trajet_trier[ i + 1 ].price){
                secours = trajet_trier[i];
                trajet_trier[i] = trajet_trier[i+1];
                trajet_trier[i+1] = secours;

                swap = true ;
            }
        }
        if (swap == false){
            break ;
        }

    }

    console.log("les trajet trier par prix croissant");
    for(let i = 0 ; i < longueur(trajet_trier) ; i++ ){
        console.log(`${trajet_trier[i].departure} -> ${trajet_trier[i].destination} : ${trajet_trier[i].price} DH`)
    }

}

function statistiques(){

    //total des ticker
    let total_ticket = longueur(tickets);
    console.log(`Nombre total de tickets : ${total_ticket}`);
    
    //chiffre daffaires total
    let chiffre_affaires = 0;
    for(let i = 0 ; i < longueur(trips); i++){
        chiffre_affaires += trips[i].price*trips[i].availableSeats ;
    }
    console.log(`chiffre d'affaires total : ${chiffre_affaires} DH`);

    //trajet le plus vendus
    let max_ticket = 0 ;
    let index = null ;
    for (let i = 0 ; i < longueur(trips) ; i++) {
        const tab = [];
        for (let j = 0 ; j < longueur(tickets) ; j++){
             if(tickets[j].tripId == trips[i].id){
                 tab.push(tickets[j]);
             }
        }

        if (longueur(tab) > max_ticket ){
            max_ticket = longueur(tab);
            index = i ;
        }
    }

    console.log(`
            Trajet le plus vendu :
             ${trips[index].departure} -> ${trips[index].destination}
             ${max_ticket} tickets vendus
             `)

}


let choix = null ;
do{
    console.log(`================================= 
        RAILWAY MANAGER 
        ================================= 
        1. Afficher les trajets 
        2. Acheter un ticket 
        3. Afficher les tickets 
        4. Annuler un ticket 
        5. Rechercher un ticket 
        6. Filtrer les trajets 
        7. Trier les trajets 
        8. Statistiques
        0. Quitter `
    );
    choix = Number(prompt("Votre choix : "));

    switch(choix){
        case 1 : 
            afficherTrajets();
            break;

        case 2 :
            acheterTickets();
            break;
        case 3 : 
            afficherTickets();
            break;
        case 4 : 
            annulerTickets();
            break;
        case 5 : 
            rechercherTickets();
            break;
        case 6 : 
            filterTrajets();
            break;
        case 7 : 
            trierTrajets();
        case 8 : 
            statistiques();
            break;
        // case 0 : 
        //     return;
    }
}while (choix != 0);