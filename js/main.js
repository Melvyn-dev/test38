let url = 'data/search-user.json';


async function loadJson() {
    try {
        const response = await fetch(url);
		console.log(response);
        let res = await response.json();
		console.log(res);
if (response.status === 200) {
    // 			// alors on renvoit la réponse
    			return res;
    // 			// sinon on envoie une erreur avec le message voulu
    		} else {
    			throw new Error("Erreur de récupération des données");
    		}
    	} catch (error) {
    // 		// renvoit de l'erreur si le bloc try n'est pas un succès
    		console.error(error);
    	}
}      



function displayUserInfo() {
    loadJson().then(
        (res) => {
            let userInfo = '';
            res.forEach(user => {
                userInfo += `
                    <p>Prénom : ${user.firstname}</p>
                    <p>Nom : ${user.lastname}</p>
                    <p>Adresse : ${user.address.details_add}</p>
                    <p>Ville : ${user.address.city}</p>
                    <p>Code postal : ${user.address.zip_code}</p>
                    <hr>
                `;
            });
            document.getElementById('result').innerHTML = userInfo;
        }
    );
}

displayUserInfo();



    // async function loadJson(url) {
    //     try {
    //         const response = await fetch(url);
    //         if (response.status === 200) {
    //             const res = await response.json();
    //             return res;
    //         } else {
    //             throw new Error(`Erreur : ${response.status}`);
    //         }
    //     } catch (error) {
    //         console.error(error); // Gère l'erreur dans la console
    //         alert(error); // Affiche l'erreur dans une alerte
    //     }
    // }
    
    // async function displayUserInfo() {
    //     try {
    //         const userData = await loadJson('data/search-user.json');
    //         document.getElementById('result').innerHTML = JSON.stringify(userData, null, 2);
    //     } catch (error) {
    //         console.error("Erreur lors de l'affichage des données utilisateur :", error);
    //     }
    // }
    
    // Appelle la fonction pour afficher les données utilisateur
    














// CORRECtion :
// async function loadJson(url) {
//     try {
//         const response = await fetch(url);
//         if (response.status === 200) {
//             const res = await response.json();
//             return res;
//         } else {
//             throw new Error(`Erreur : ${response.status}`);
//         }
//     } catch (error) {
//         console.error(error); // Gère l'erreur dans la console
//         alert(error); // Affiche l'erreur dans une alerte
//     }
// }

// function loadJson() {
//     // Appel de la fonction qui récupère la blague
//     loadJson().then(
//         (res) => {
//             // Affiche seulement le texte de la blague dans le div avec l'ID "result"
//             results.innerHTML = res.value;
//         }
//     );
// }




