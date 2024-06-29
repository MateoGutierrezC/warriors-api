const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


const warriors = {
    "warriors": [
        {
            "id": "1",
            "champion": "Ahri",
            "date": "14 de diciembre de 2011",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg",
            "origen": "Jonia",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Mid laner",
                    "type": "Mago",
                    "id": "63f3ffb04e41205a5af0577c"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/4/4f/Ahri_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904214455&path-prefix=es",
                            "title": "Ladrona de Esencias",
                            "description": "Ahri se cura tras matar 9 súbditos o monstruos. Se cura un mayor porcentaje tras participar en el asesinato de un campeón enemigo.",
                            "id": "63f3ffb04e41205a5af0577e"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bd/Ahri_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904214552&path-prefix=es",
                            "title": "Orbe del Engaño",
                            "description": "Ahri lanza y recupera su orbe, lo que inflige daño mágico de ida y daño verdadero de vuelta.",
                            "id": "63f3ffb04e41205a5af0577f"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/7/7e/Ahri_-_W.png/revision/latest/scale-to-wth-down/50?cb=20220904214618&path-prefix=es",
                            "title": "Fuego Zorruno",
                            "description": "Ahri obtiene un breve aumento de velocidad de movimiento y lanza tres llamas en total que siguen a los enemigos más cercanos para infligirles daño mágico.",
                            "id": "63f3ffb04e41205a5af05780"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e0/Ahri_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904214441&path-prefix=es",
                            "title": "Encanto",
                            "description": "Ahri lanza un beso que inflige daño mágico y encanta al enemigo que alcance, lo que detiene las habilidades de movimiento al instante y causa que camine inofensivamente hacia ella.",
                            "id": "63f3ffb04e41205a5af05781"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/7/75/Ahri_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904214604&path-prefix=es",
                            "title": "Impulso Espiritual",
                            "description": "Ahri se desplaza y dispara rayos de esencia que infligen daño mágico a enemigos cercanos. Esta habilidad puede lanzarse tres veces antes de entrar en enfriamiento y obtiene desplazamientos adicionales al participar en asesinatos de campeones enemigos.",
                            "id": "63f3ffb04e41205a5af05782"
                        }
                    ],
                    "id": "63f3ffb04e41205a5af0577d"
                }
            ],
            "createdAt": "2023-02-20T23:18:08.797Z",
            "updatedAt": "2023-02-20T23:18:08.797Z"
        },
        {
            "id": "2",
            "champion": "Aatrox",
            "date": "13 de junio de 2013",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_7.jpg",
            "origen": "Runaterra",
            "resource": "ninguno",
            "position": [
                {
                    "rol": "Top laner",
                    "type": "Luchador",
                    "id": "63f3ffd64e41205a5af05785"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c6/Aatrox_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904214357&path-prefix=es",
                            "title": "Heraldo de la Destrucción",
                            "description": "Cada cierto tiempo, el siguiente ataque básico de Aatrox inflige daño físico adicional según la vida máxima del objetivo y lo cura una cantidad del daño adicional infligido.",
                            "id": "63f3ffd64e41205a5af05787"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b5/Aatrox_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904214404&path-prefix=es",
                            "title": "La Espada Darkin",
                            "description": "Aatrox golpea el piso con su espada e inflige daño físico. Puede atacar con ella tres veces, cada vez con un área de efecto distinta. En cada área hay un borde en el que si se encuentra un enemigo en esa zona, Aatrox le inflige mucho más daño físico.",
                            "id": "63f3ffd64e41205a5af05788"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/34/Aatrox_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904214422&path-prefix=es",
                            "title": "Aatrox lanza una cadena que inflige daño físico y ralentiza al primer enemigo alcanzado. La cadena creará una zona en la que si el enemigo no escapa de ella en los próximos segundos, será arrastrado al centro del área y se le infligirá daño físico.",
                            "description": "Cadenas Infernales",
                            "id": "63f3ffd64e41205a5af05789"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/97/Aatrox_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904214350&path-prefix=es",
                            "title": "Impulso Siniestro",
                            "description": "De forma pasiva, Aatrox se cura un porcentaje del daño que inflige a campeones. Al utilizar esta habilidad, Aatrox se desplaza en la dirección seleccionada.",
                            "id": "63f3ffd64e41205a5af0578a"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Aatrox_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904214412&path-prefix=es",
                            "title": "Destructor de Mundos",
                            "description": "Aatrox revela su verdadera forma donde aterroriza a los súbditos enemigos cercanos y obtiene daño de ataque, curación aumentada y velocidadde movimiento. Si participa en un asesinato, la duración de la habilidad se extiende.",
                            "id": "63f3ffd64e41205a5af0578b"
                        }
                    ],
                    "id": "63f3ffd64e41205a5af05786"
                }
            ],
            "createdAt": "2023-02-20T23:18:47.002Z",
            "updatedAt": "2023-02-20T23:18:47.002Z"
        },
        {
            "id": "3",
            "champion": "Akali",
            "date": "11 de mayo de 2010",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_50.jpg",
            "origen": "Jonia",
            "resource": "Energia",
            "position": [
                {
                    "rol": "Mid laner",
                    "type": "Asesino",
                    "id": "63f400ce4e41205a5af0578e"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Akali_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904215734&path-prefix=es",
                            "title": "Marca de la Asesina",
                            "description": "Tras infligir daño por habilidades a un campeón enemigo, Akali crea un círculo alrededor de dicho enemigo en el que, si sale de él, su próximo ataque básico tendrá más alcance e infligirá daño mágico adicional.",
                            "id": "63f400ce4e41205a5af05790"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/f/f9/Akali_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904215743&path-prefix=es",
                            "title": "Ráfaga de los Cinco Filos",
                            "description": "Akali arroja cinco kunai que ralentizan e infligen daño mágico.",
                            "id": "63f400ce4e41205a5af05791"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c9/Akali_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904215802&path-prefix=es",
                            "title": "Manto Crepuscular",
                            "description": "Akali lanza una cortina de humo y obtiene velocidadde movimiento por un momento. Al estar dentro de ella, se vuelve invisible y no puede ser alcanzada por habilidades y ataques enemigos. Quedará revelada por un instante si ataca o usa habilidades.",
                            "id": "63f400ce4e41205a5af05792"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/30/Akali_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904215724&path-prefix=es",
                            "title": "Maniobra de Shuriken",
                            "description": "Akali realiza una voltereta hacia atrás y arroja un shuriken hacia adelante que inflige daño mágico. El primer enemigo o zona de la cortina de humo impactados quedan marcados. Si se vuelve a utilizar la habilidad, Akali se desplazará hacia el objetivo marcado e infligirá daño mágico.",
                            "id": "63f400ce4e41205a5af05793"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/5/55/Akali_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904215754&path-prefix=es",
                            "title": "Ejecución Perfecta",
                            "description": "Akali salta hacia el campeón enemigo seleccionado y le inflige daño mágico a todos los enemigos que sobrepasa. Si se vuelve a utilizar la habilidad, Akali se desplaza en la dirección seleccionada y le inflige daño mágico a todos los enemigos que sobrepasa.",
                            "id": "63f400ce4e41205a5af05794"
                        }
                    ],
                    "id": "63f400ce4e41205a5af0578f"
                }
            ],
            "createdAt": "2023-02-20T23:22:54.657Z",
            "updatedAt": "2023-02-20T23:22:54.657Z"
        },
        {
            "id": "4",
            "champion": "Akshan",
            "date": "21 de julio de 2021",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_10.jpg",
            "origen": "Shurima",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Mid laner",
                    "type": "Tirador",
                    "id": "63f404f74e41205a5af05797"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/Akshan_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904220516&path-prefix=es",
                            "title": "Pelea Sucio",
                            "description": "Al utilizar su ataque básico, Akshan realiza un disparo adicional que inflige menos daño. Si cancela el disparo adicional, obtendrá velocidadde movimiento en su lugar. Si Akshan ataca tres veces a un enemigo (ya sea por ataques básicos o habilidades), le infligirá daño mágico adicional. Si el enemigo es un campeón, recibirá adicionalmente un escudo.",
                            "id": "63f404f74e41205a5af05799"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/7/77/Akshan_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904220525&path-prefix=es",
                            "title": "Venganzarang",
                            "description": "Akshan lanza un búmeran que inflige daño de ida y vuelta, el búmeran extiende su alcance cada vez que golpea a un enemigo.",
                            "id": "63f404f74e41205a5af0579a"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/0/07/Akshan_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904220543&path-prefix=es",
                            "title": "Contra las Reglas",
                            "description": "De forma pasiva, Akshan marca a campeones enemigos que hayan asesinado a campeones aliados. Si mata a un campeón marcado, resucitará al campeón aliado asesinado por dicho enemigo, recibirá oro adicional y eliminará las demás marcas. Al utilizar esta habilidad, Akshan se camufla. Si camina hacia enemigos marcados, obtendrá velocidadde movimiento y regeneración de maná. Pierde el camuflaje si no está cerca de terreno o en una maleza.",
                            "id": "63f404f74e41205a5af0579b"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/4/42/Akshan_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904220509&path-prefix=es",
                            "title": "Pirueta Heroica",
                            "description": "Akshan lanza un gancho que se clava en terreno y luego hace una pirueta; mientras lo hace, dispara repetidamente contra el enemigo más cercano y le inflige daño físico. Akshan puede saltar de la cuerda antes para terminar la pirueta. También se soltará antes si choca contra un campeón enemigo o terreno.",
                            "id": "63f404f74e41205a5af0579c"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/90/Akshan_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904220535&path-prefix=es",
                            "title": "Tu Merecido",
                            "description": "Akshan apunta a un campeón enemigo y empieza a almacenar balas. Al liberar la carga, dispara todas las balas almacenadas, lo que inflige daño físico según la vida faltante del primer campeón, súbdito o estructura alcanzado.",
                            "id": "63f404f74e41205a5af0579d"
                        }
                    ],
                    "id": "63f404f74e41205a5af05798"
                }
            ],
            "createdAt": "2023-02-20T23:40:39.595Z",
            "updatedAt": "2023-02-20T23:40:39.595Z"
        },
        {
            "id": "5",
            "champion": "Alistar",
            "date": "11 de abril de 2009",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_20.jpg",
            "origen": "Runaterra",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Support",
                    "type": "Tanque",
                    "id": "63f418ae4e41205a5af057bd"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/d/dc/Alistar_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904221506&path-prefix=es",
                            "title": "Rugido Triunfal",
                            "description": "Alistar genera una acumulación de Triunfo al aturdir o desplazar campeones enemigos, o cuando mueren enemigos cercanos. Al tener el máximo de acumulaciones, se cura a sí mismo y a todos los campeones aliados cercanos.",
                            "id": "63f418ae4e41205a5af057bf"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/c/ce/Alistar_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904221514&path-prefix=es",
                            "title": "Pulverizar",
                            "description": "Alistar aplasta el suelo donde levanta a todos los enemigos cercanos y les inflige daño mágico.",
                            "id": "63f418ae4e41205a5af057c0"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/9e/Alistar_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904221530&path-prefix=es",
                            "title": "Testarazo",
                            "description": "Alistar empuja hacia atrás al enemigo seleccionado, lo aturde por unos instantes y le inflige daño mágico.",
                            "id": "63f418ae4e41205a5af057c1"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/ba/Alistar_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904221458&path-prefix=es",
                            "title": "Pisotear",
                            "description": "Alistar empieza a pisotear el suelo infligiendo daño mágico a los enemigos cercanos, ignorando la colisión de unidades y genera una acumulación de Pisotear. Al máximo de acumulaciones, el próximo ataque básico a un campeón enemigo infligirá daño mágico adicional y lo aturdirá.",
                            "id": "63f418ae4e41205a5af057c2"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/1/10/Alistar_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904221522&path-prefix=es",
                            "title": "Voluntad Inquebrantable",
                            "description": "Alistar elimina todo el control de masas que tenga encima y recibirá menos daño físico y mágico.",
                            "id": "63f418ae4e41205a5af057c3"
                        }
                    ],
                    "id": "63f418ae4e41205a5af057be"
                }
            ],
            "createdAt": "2023-02-21T01:04:46.360Z",
            "updatedAt": "2023-02-21T01:04:46.360Z"
        },
        {
            "id": "6",
            "champion": "Amumu",
            "date": "26 de junio de 2009",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_44.jpg",
            "origen": "Shurima",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Jungla",
                    "type": "Tanque",
                    "id": "63f419864e41205a5af057c6"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/0/08/Amumu_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904222559&path-prefix=es",
                            "title": "Toque Maldito",
                            "description": "Los ataques básicos de Amumu infligen Maldición a sus enemigos, lo que hace que reciban daño verdadero adicional a partir del daño mágico que Amumu inflija.",
                            "id": "63f419864e41205a5af057c8"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e2/Amumu_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904222607&path-prefix=es",
                            "title": "Lanzamiento de Vendas",
                            "description": "Amumu lanza una venda adhesiva en la dirección seleccionada que aturde al primer enemigo alcanzado, lo desplaza hacia él y le inflige daño mágico.",
                            "id": "63f419864e41205a5af057c9"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/8/83/Amumu_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904222626&path-prefix=es",
                            "title": "Desesperanza",
                            "description": "Amumu crea un mar de lágrimas a su alrededor donde inflige daño mágico por segundo y reinicia la Maldición de los enemigos.",
                            "id": "63f419864e41205a5af057ca"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/1/1f/Amumu_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904222545&path-prefix=es",
                            "title": "Berrinche",
                            "description": "De forma pasiva, Amumu reduce un porcentaje del daño físico que recibe. Al utilizar la habilidad, Amumu desata su furia y le inflige daño mágico a los enemigos cercanos. Reduce el enfriamiento de la habilidad por cada ataque básico que recibe.",
                            "id": "63f419864e41205a5af057cb"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/2/20/Amumu_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904222618&path-prefix=es",
                            "title": "Maldición de la Momia Triste",
                            "description": "Maldición de la Momia Triste",
                            "id": "63f419864e41205a5af057cc"
                        }
                    ],
                    "id": "63f419864e41205a5af057c7"
                }
            ],
            "createdAt": "2023-02-21T01:08:22.757Z",
            "updatedAt": "2023-02-21T01:08:22.757Z"
        },
        {
            "id": "7",
            "champion": "Anivia",
            "date": "10 de julio de 2009",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_46.jpg",
            "origen": "Freljord",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Mid laner",
                    "type": "Mago",
                    "id": "63f429844e41205a5af057fa"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/0/03/Anivia_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904223325&path-prefix=es",
                            "title": "Renacimiento",
                            "description": "Al ya no contar con más vida, Anivia se convertirá en un huevo y renacerá con la vida que tenga mientras está en ese estado.",
                            "id": "63f429844e41205a5af057fc"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e9/Anivia_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904223332&path-prefix=es",
                            "title": "Destello Helado",
                            "description": "Anivia lanza una esfera de hielo en la dirección seleccionada que inflige daño mágico a los enemigos que sobrepase y aturdirá a los que se encuentren dentro de ella cuando explote. Es posible realizar la explosión antes al activar nuevamente la habilidad.",
                            "id": "63f429844e41205a5af057fd"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/Anivia_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904223348&path-prefix=es",
                            "title": "Cristalizar",
                            "description": "Anivia invoca un muro de hielo en el lugar seleccionado que bloquea temporalmente una sección de camino.",
                            "id": "63f429844e41205a5af057fe"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e0/Anivia_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904223316&path-prefix=es",
                            "title": "Quemadura Gélida",
                            "description": "Anivia lanza un viento gélido al enemigo seleccionado al que le inflige daño mágico. Si el enemigo seleccionado recibió previamente daño de Destello Helado o Tormenta Glacial, recibirá el doble de daño mágico.",
                            "id": "63f429844e41205a5af057ff"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b4/Anivia_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904223340&path-prefix=es",
                            "title": "Tormenta Glacial",
                            "description": "Anivia desata una lluvia de hielo en el lugar seleccionado donde le inflige daño mágico por segundo a los enemigos que se encuentren dentro de ella y los ralentiza.",
                            "id": "63f429844e41205a5af05800"
                        }
                    ],
                    "id": "63f429844e41205a5af057fb"
                }
            ],
            "createdAt": "2023-02-21T02:16:36.667Z",
            "updatedAt": "2023-02-21T02:16:36.667Z"
        },
        {
            "id": "8",
            "champion": "Annie",
            "date": "11 de abril de 2009",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_13.jpg",
            "origen": "Runaterra",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Mid laner",
                    "type": "Mago",
                    "id": "63f42ab84e41205a5af05803"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/97/Annie_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904223502&path-prefix=es",
                            "title": "Piromanía",
                            "description": "Luego de lanzar 4 habilidades, la próxima habilidad de Annie aturdirá al objetivo (excepto Escudo Fundido).",
                            "id": "63f42ab84e41205a5af05805"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/4/48/Annie_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904223510&path-prefix=es",
                            "title": "Desintegrar",
                            "description": "Annie lanza una bola de fuego al enemigo seleccionado, infligiendo daño mágico y recuperando el costo de maná si le da el último golpe.",
                            "id": "63f42ab84e41205a5af05806"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/b3/Annie_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904223526&path-prefix=es",
                            "title": "Incinerar",
                            "description": "Annie lanza una llama en la dirección seleccionada, infligiendo daño mágico a todos los enemigos que se encuentren dentro de la zona.",
                            "id": "63f42ab84e41205a5af05807"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/Annie_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904223455&path-prefix=es",
                            "title": "Escudo Fundido",
                            "description": "Le otorga a Annie o a un campeón aliado seleccionado un escudo, un aumento de velocidadde movimiento e inflige daño mágico a los enemigos que la atacan con ataques básicos.",
                            "id": "63f42ab84e41205a5af05808"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3f/Annie_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904223519&path-prefix=es",
                            "title": "Invocar: Tibbers",
                            "description": "Annie invoca a Tibbers en la zona seleccionada, infligiendo daño mágico a todos los enemigos que se encuentren dentro de dicha zona. Tibbers puede atacar y quemar a los enemigos adyacentes.",
                            "id": "63f42ab84e41205a5af05809"
                        }
                    ],
                    "id": "63f42ab84e41205a5af05804"
                }
            ],
            "createdAt": "2023-02-21T02:21:44.719Z",
            "updatedAt": "2023-02-21T02:21:44.719Z"
        },
        {
            "id": "9",
            "champion": "Aphelios",
            "date": "11 de diciembre de 2019",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg",
            "origen": "Tárgon",
            "resource": "Mana",
            "position": [
                {
                    "rol": "AD carry",
                    "type": "Tirador",
                    "id": "63f42c5e4e41205a5af0580c"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/7/7a/Aphelios_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904224014&path-prefix=es",
                            "title": "El Victimario y la Vidente",
                            "description": "Aphelios cuenta con cinco armas donde solo puede utilizar dos a la vez. Cada arma tiene su propio ataque básico y su propia habilidad, además de que cada arma cuenta con 50 balas de munición. Las armas de Aphelios aparecen en el siguiente orden: Calibrum: Aphelios puede atacar de larga distancia. Severum: Aphelios puede curarse por cada ataque que haga. Gravitum: Aphelios puede ralentizar al enemigo al que ataque. Infernum: Aphelios puede lanzar una llama que atraviesa al enemigo seleccionado. Crescendum: Aphelios puede lanzar su arma y recuperarla según qué tan cerca esté del enemigo que ataca. También crea Chakram especular si un enemigo es alcanzado por habilidades de esta arma. Por cada Chakram que consiga, infligirá más daño. Adicionalmente, Aphelios no podrá mejorar sus habilidades (excepto Vigilia de Luz Lunar) cada vez que suba de nivel. En cambio, podrá mejorar sus estadísticas de daño de ataque, velocidadde ataque y letalidad.",
                            "id": "63f42c5e4e41205a5af0580e"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/d/da/Aphelios_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904224025&path-prefix=es",
                            "title": "habilidades de Armas",
                            "description": "Las armas cuentan con las siguientes habilidades: Disparo Lunar: Si el arma es Calibrum, Aphelios realiza un disparo en la dirección seleccionada que marca al primer enemigo alcanzado y le permite realizar un segundo ataque de larga distancia, ambos infligiendo daño físico. Ímpetu: Si el arma es Severum, Aphelios obtiene velocidadde movimiento y ataca rápidamente al enemigo más cercano con las dos armas que tenga en ese momento. Eclipse Inmovilizador: Si el arma es Gravitum, Aphelios inmoviliza al enemigo que esté ralentizado por el ataque básico de esta misma arma y le inflige daño mágico. Crepúsculo: Si el arma es Infernum, Aphelios lanza una onda de llamas en la dirección seleccionada infligiendo daño físico a los enemigos alcanzados y permitiéndole atacar con su arma secundaria. Guardián: Si el arma es Crescendum, Aphelios despliega una torreta en el lugar seleccionado el cual dispara balas del arma secundaria que tenga en ese momento.",
                            "id": "63f42c5e4e41205a5af0580f"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e4/Aphelios_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904224041&path-prefix=es",
                            "title": "Cambio de Arma",
                            "description": "Aphelios cambia de su arma principal a su arma secundaria.",
                            "id": "63f42c5e4e41205a5af05810"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/6/6a/Aphelios_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904224005&path-prefix=es",
                            "title": "Sistema de Armas en serie",
                            "description": "Al agotarse la munición del arma actual, Aphelios cambiará al arma que aparezca en el ícono de esta habilidad.",
                            "id": "63f42c5e4e41205a5af05811"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e5/Aphelios_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904224033&path-prefix=es",
                            "title": "Vigilia de Luz Lunar",
                            "description": "Aphelios lanza una onda de luz lunar que explota cuando impacta contra campeones enemigos infligiéndoles daño físico, además de poder realizar un ataque adicional y aplicarles un efecto según el arma que tenga: Calibrum: Al igual que la habilidad, Aphelios marca al enemigo para realizar un segundo ataque, ambos haciendo daño físico. Severum: Aphelios se cura una cierta cantidad. Gravitum: Aphelios aumenta la eficacia de la ralentización y la duración de la inmovilización. Infernum: Aphelios aumenta el daño de la onda de luz lunar. Crescendum: Aphelios obtiene cinco Chakrams más el total de campeones enemigos golpeados por la onda de luz lunar.",
                            "id": "63f42c5e4e41205a5af05812"
                        }
                    ],
                    "id": "63f42c5e4e41205a5af0580d"
                }
            ],
            "createdAt": "2023-02-21T02:28:46.111Z",
            "updatedAt": "2023-02-21T02:28:46.111Z"
        },
        {
            "id": "10",
            "champion": "Ashe",
            "date": "11 de abril de 2009",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_32.jpg",
            "origen": "Freljord",
            "resource": "Mana",
            "position": [
                {
                    "rol": "AD carry",
                    "type": "Tirador",
                    "id": "63f42d414e41205a5af05815"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/1/19/Ashe_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904224346&path-prefix=es",
                            "title": "Tiro Escarchado",
                            "description": "Los ataques básicos de Ashe ralentizan al enemigo seleccionado y hace que reciba más daño. Los golpes críticos de Ashe no infligen más daño pero sí aumentan la ralentización.",
                            "id": "63f42d414e41205a5af05817"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Ashe_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904224354&path-prefix=es",
                            "title": "Concentración de la Guardabosques",
                            "description": "Ashe acumula Concentración al realizar ataques básicos. Al máximo de acumulaciones, la habilidad puede ser activada y hará que Ashe obtenga más velocidadde ataque y realice múltiples disparos cuando dé un ataque básico.",
                            "id": "63f42d414e41205a5af05818"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c8/Ashe_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904224408&path-prefix=es",
                            "title": "Descarga",
                            "description": "Ashe dispara una ráfaga de flechas en la dirección seleccionada que infligen daño físico. Las flechas de esta habilidad también activan Tiro Escarchado.",
                            "id": "63f42d414e41205a5af05819"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3a/Ashe_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904224339&path-prefix=es",
                            "title": "Tiro de Halcón",
                            "description": "Ashe envía un halcón en el lugar seleccionado que otorga visión del trayecto que recorre y de la zona solicitada.",
                            "id": "63f42d414e41205a5af0581a"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bd/Ashe_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904224401&path-prefix=es",
                            "title": "Flecha de Cristal Encantada",
                            "description": "Ashe dispara una flecha de hielo de alcance global en la dirección seleccionada. Si la flecha impacta contra un campeón enemigo, inflige daño mágico y lo aturde. Mientras más distancia recorra la flecha, más durará el aturdimiento. Los enemigos que estén cerca de la unidad afectada también recibirán daño mágico, pero en menor medida, además de ser ralentizados.",
                            "id": "63f42d414e41205a5af0581b"
                        }
                    ],
                    "id": "63f42d414e41205a5af05816"
                }
            ],
            "createdAt": "2023-02-21T02:32:33.209Z",
            "updatedAt": "2023-02-21T02:32:33.209Z"
        },
        {
            "id": "11",
            "champion": "Azir",
            "date": "16 de septiembre de 2014",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_5.jpg",
            "origen": "Shurima",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Mid laner",
                    "type": "Mago",
                    "id": "63f5b48e3259b13d6acca849"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/90/Azir_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904224734&path-prefix=es",
                            "title": "Legado de Shurima",
                            "description": "En zonas de torretas destruidas, Azir es capaz de invocar una torreta en forma de disco, pero tiene menos durabilidad y solo está activa por un minuto.",
                            "id": "63f5b48e3259b13d6acca84b"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/ef/Azir_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904224742&path-prefix=es",
                            "title": "Conquistador de las Arenas",
                            "description": "Azir envía a sus soldados de arena en la dirección seleccionada, infligiendo daño mágico a los enemigos alcanzados y ralentizándolos.",
                            "id": "63f5b48e3259b13d6acca84c"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/0/03/Azir_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904225038&path-prefix=es",
                            "title": "¡Levántense!",
                            "description": "De manera pasiva, Azir obtiene velocidadde ataque que se ve duplicado por unos segundos si hay tres soldados de arena activos. Al utilizar esta habilidad, Azir invoca un soldado de arena en el lugar seleccionado y su ataque básico es reemplazado por los ataques de dicho soldado (únicamente si hay enemigos cerca del soldado). Puede invocar a varios soldados y sus ataques infligen daño mágico.",
                            "id": "63f5b48e3259b13d6acca84d"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Azir_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904224728&path-prefix=es",
                            "title": "Arenas Movedizas",
                            "description": "Azir se desplaza al soldado de arena seleccionado y obtiene un escudo en el trayecto. Si durante el desplazamiento Azir choca contra un campeón enemigo, le infligirá daño mágico y podrá invocar un soldado de arena.",
                            "id": "63f5b48e3259b13d6acca84e"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/6/67/Azir_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904224751&path-prefix=es",
                            "title": "División Imperial",
                            "description": "Azir invoca un muro de soldados que, con una carga hacia delante, infligen daño mágico y lanzan hacia atrás a los campeones enemigos que se encuentren durante la carga.",
                            "id": "63f5b48e3259b13d6acca84f"
                        }
                    ],
                    "id": "63f5b48e3259b13d6acca84a"
                }
            ],
            "createdAt": "2023-02-22T06:22:06.108Z",
            "updatedAt": "2023-02-22T06:22:06.108Z"
        },
        {
            "id": "12",
            "champion": "Bardo",
            "date": "12 de marzo de 2015",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_26.jpg",
            "origen": "Runaterra",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Support",
                    "type": "Mago",
                    "id": "63f5b82c3259b13d6acca852"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/5/53/Bardo_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904225210&path-prefix=es",
                            "title": "Llamado del Viajero",
                            "description": "En el mapa aparecen aleatoriamente campanillas que Bardo puede recoger. Cuando Bardo consigue una campanilla, obtiene experiencia, velocidadde movimiento por unos segundos y restauran un porcentaje de maná. Bardo atrae a un Meep cada cierto tiempo. Cuando un Meep está con él, Bardo mejora su ataque básico de manera que inflige daño mágico adicional y obtiene un efecto según la cantidad de campanillas que tenga: Al tener 5 campanillas, el ataque básico también ralentizará. Al tener 15 campanillas, el ataque básico también golpeará a los enemigos que se encuentren detrás del objetivo seleccionado. Al tener 35 campanillas, el área de golpeo de los enemigos que se encuentren por detrás del objetivo seleccionado es mayor.",
                            "id": "63f5b82c3259b13d6acca854"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e0/Bardo_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904225217&path-prefix=es",
                            "title": "Amarre Cósmico",
                            "description": "Bardo dispara un proyectil en la dirección seleccionada que inflige daño mágico y ralentiza al primer enemigo alcanzado, después el proyectil sigue su trayectoria. Si en dicha trayectoria el proyectil se encuentra con terreno, el enemigo será aturdido. Si se encuentra con otro enemigo, ambos serán aturdidos.",
                            "id": "63f5b82c3259b13d6acca855"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/d/dd/Bardo_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904225235&path-prefix=es",
                            "title": "Altar del Guardián",
                            "description": "Bardo crea un altar de vida en el lugar seleccionado en el que si un campeón aliado pasa sobre él, obtendrá velocidadde movimiento por unos segundos y se curará. La curación se verá mejorada si no se toma el altar por un tiempo. Bardo puede tener hasta tres altares activos y pueden ser destruidos si un campeón enemigo pasa sobre ellos.",
                            "id": "63f5b82c3259b13d6acca856"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Bardo_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904225201&path-prefix=es",
                            "title": "Viaje Místico",
                            "description": "Bardo crea un portal de un solo sentido sobre terreno para que los campeones aliados, enemigos y él puedan atravesar dicho terreno.",
                            "id": "63f5b82c3259b13d6acca857"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/0/0b/Bardo_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904225227&path-prefix=es",
                            "title": "Destino Apacible",
                            "description": "Bardo lanza una energía protectora en el lugar seleccionado que inmoviliza a todos los campeones, súbditos, monstruos y torretas que se encuentren dentro de la zona por unos momentos.",
                            "id": "63f5b82c3259b13d6acca858"
                        }
                    ],
                    "id": "63f5b82c3259b13d6acca853"
                }
            ],
            "createdAt": "2023-02-22T06:37:32.689Z",
            "updatedAt": "2023-02-22T06:37:32.689Z"
        },
        {
            "id": "13",
            "champion": "Blitzcrank",
            "date": "2 de septiembre de 2009",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_22.jpg",
            "origen": "Piltower",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Support",
                    "type": "Mago",
                    "id": "63f5b931846ef3e36dbd651e"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/32/Blitzcrank_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904230505&path-prefix=es",
                            "title": "Barrera de Maná",
                            "description": "Cuando Blitzcrank tenga poca vida, despliega un escudo según su maná actual.",
                            "id": "63f5b931846ef3e36dbd6520"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/1/13/Blitzcrank_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904230513&path-prefix=es",
                            "title": "Agarre Cohete",
                            "description": "Blitzcrank dispara su mano para agarrar al primer enemigo alcanzado, infligirle daño mágico y arrastrarlo hacia él.",
                            "id": "63f5b931846ef3e36dbd6521"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/3d/Blitzcrank_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904230532&path-prefix=es",
                            "title": "Sobremarcha",
                            "description": "Blitzcrank recibe un aumento temporal de velocidadde ataque y movimiento.",
                            "id": "63f5b931846ef3e36dbd6522"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/1/1a/Blitzcrank_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904230456&path-prefix=es",
                            "title": "Puño de Poder",
                            "description": "El siguiente ataque básico de Blizcrank inflige el doble de daño físico y levanta a su objetivo.",
                            "id": "63f5b931846ef3e36dbd6523"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/6/6d/Blitzcrank_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904230525&path-prefix=es",
                            "title": "Campo Estático",
                            "description": "De forma pasiva, los ataques básicos de Blitzcrank marcan a los enemigos para ser alcanzados por relámpagos después de un segundo de haberlos atacado. Al activar la habilidad, Blitzcrank genera un campo de electricidad donde elimina los escudos de los enemigos cercanos, además de infligirles daño mágico y silenciarlos brevemente.",
                            "id": "63f5b931846ef3e36dbd6524"
                        }
                    ],
                    "id": "63f5b931846ef3e36dbd651f"
                }
            ],
            "createdAt": "2023-02-22T06:41:53.939Z",
            "updatedAt": "2023-02-22T06:41:53.939Z"
        },
        {
            "id": "14",
            "champion": "Brand",
            "date": "12 de abril de 2011",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_7.jpg",
            "origen": "Runaterra",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Support / Mid laner",
                    "type": "Mago",
                    "id": "63f5ba4c846ef3e36dbd6527"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/32/Brand_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904230649&path-prefix=es",
                            "title": "Llamarada",
                            "description": "Las habilidades de Brand prenden a su objetivo en llamas, infligiéndole daño mágico por unos segundos. Si Brand mata al enemigo que está en llamas, recuperará maná. Llamarada puede acumularse tres veces en un campeón enemigo o monstruo grande. Al alcanzar el máximo de acumulaciones, las llamas se volverán inestables y causarán una explosión que inflige daño mágico al objetivo y enemigos cercanos.",
                            "id": "63f5ba4c846ef3e36dbd6529"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/f/fd/Brand_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904230657&path-prefix=es",
                            "title": "Abrasar",
                            "description": "Brand lanza una bola de fuego en la dirección seleccionada que inflige daño mágico al primer enemigo alcanzado. Si el objetivo se encontraba en llamas anteriormente, la bola de fuego lo aturdirá.",
                            "id": "63f5ba4c846ef3e36dbd652a"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/7/72/Brand_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904230713&path-prefix=es",
                            "title": "Columna de Fuego",
                            "description": "Brand crea un pilar de fuego en el lugar seleccionado que inflige daño mágico a los enemigos que se encuentren dentro de la zona. Si el objetivo se encontraba en llamas anteriormente, le infligirá más daño mágico.",
                            "id": "63f5ba4c846ef3e36dbd652b"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/5/58/Brand_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904230640&path-prefix=es",
                            "title": "Conflagración",
                            "description": "Brand conjura una explosión contra el enemigo seleccionado, infligiéndole daño mágico al objetivo y enemigos cercanos. Si el objetivo se encontraba en llamas anteriormente, aumenta el alcance de la explosión.",
                            "id": "63f5ba4c846ef3e36dbd652c"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/36/Brand_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904230703&path-prefix=es",
                            "title": "Piroclasma",
                            "description": "Brand lanza una bola de fuego hacia el enemigo seleccionado y después rebota hasta cinco veces si hay enemigos cercanos o si Brand se encuentra cerca de él. Cada rebote inflige daño mágico. Si el objetivo se encontraba en llamas anteriormente, será ralentizado brevemente.",
                            "id": "63f5ba4c846ef3e36dbd652d"
                        }
                    ],
                    "id": "63f5ba4c846ef3e36dbd6528"
                }
            ],
            "createdAt": "2023-02-22T06:46:36.374Z",
            "updatedAt": "2023-02-22T06:46:36.374Z"
        },
        {
            "id": "15",
            "champion": "Braum",
            "date": "12 de mayo de 2014",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_11.jpg",
            "origen": "Freljord",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Support",
                    "type": "Tanque",
                    "id": "63f5baef846ef3e36dbd6530"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Braum_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904230914&path-prefix=es",
                            "title": "Golpes Conmocionantes",
                            "description": "Los ataques básicos de Braum acumulan Golpes Conmocionantes en el objetivo. Al alcanzar la cuarta acumulación, el enemigo queda aturdido y sufre daño mágico.",
                            "id": "63f5baef846ef3e36dbd6532"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/8/81/Braum_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904230924&path-prefix=es",
                            "title": "Rigor del Invierno",
                            "description": "Braum lanza hielo de su escudo en la dirección seleccionada, infligiendo daño mágico y ralentizando al objetivo.",
                            "id": "63f5baef846ef3e36dbd6533"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/5/59/Braum_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904230944&path-prefix=es",
                            "title": "Detrás de Mí",
                            "description": "Braum salta hacia el campeón o súbdito aliado seleccionado, recibiendo ambos una bonificación de armadura y resistencia mágica durante algunos segundos.",
                            "id": "63f5baef846ef3e36dbd6534"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/7/70/Braum_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904230907&path-prefix=es",
                            "title": "Inquebrantable",
                            "description": "Braum levanta su escudo en la dirección seleccionada para bloquear todos los proyectiles. Anula el daño del primer impacto y reduce el daño de impactos subsiguientes.",
                            "id": "63f5baef846ef3e36dbd6535"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/94/Braum_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904230933&path-prefix=es",
                            "title": "Fisura Glacial",
                            "description": "Braum golpea el piso con su escudo en la dirección seleccionada, lanzando por los aires a los enemigos frente a él. A lo largo de la línea de impacto se crea una fisura que ralentiza a los enemigos cercanos.",
                            "id": "63f5baef846ef3e36dbd6536"
                        }
                    ],
                    "id": "63f5baef846ef3e36dbd6531"
                }
            ],
            "createdAt": "2023-02-22T06:49:19.576Z",
            "updatedAt": "2023-02-22T06:49:19.576Z"
        },
        {
            "id": "16",
            "champion": "Caitlyn",
            "date": "4 de enero de 2011",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_30.jpg",
            "origen": "Piltower",
            "resource": "Mana",
            "position": [
                {
                    "rol": "AD carry",
                    "type": "Tirador",
                    "id": "63f5bc3b846ef3e36dbd6539"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/94/Caitlyn_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20221103202337&path-prefix=es",
                            "title": "Disparo a la Cabeza",
                            "description": "Caitlyn realiza un tiro a la cabeza que inflige daño físico adicional después de lanzar varios ataques básicos.",
                            "id": "63f5bc3b846ef3e36dbd653b"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/6/6f/Caitlyn_-_Q.png/revision/latest/scale-to-width-down/50?cb=20221103202339&path-prefix=es",
                            "title": "Pacificadora de Piltóver",
                            "description": "Caitlyn carga su rifle para liberar un disparo penetrante que provoca daño físico. Realiza menos daño a los enemigos posteriores.",
                            "id": "63f5bc3b846ef3e36dbd653c"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/34/Caitlyn_-_W.png/revision/latest/scale-to-width-down/50?cb=20221103202344&path-prefix=es",
                            "title": "Trampa para Yordles",
                            "description": "Caitlyn pone una trampa que, al activarse, inmoviliza y revela al campeón enemigo. De igual manera, obtiene un Disparo a la Cabeza contra el enemigo atrapado.",
                            "id": "63f5bc3b846ef3e36dbd653d"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/1/1c/Caitlyn_-_E.png/revision/latest/scale-to-width-down/50?cb=20221103202335&path-prefix=es",
                            "title": "Red Calibre 90",
                            "description": "Caitlyn lanza una red que ralentiza a su objetivo, donde el retroceso la empuja hacia atrás. Adicionalmente, obtiene un Disparo a la Cabeza contra el enemigo ralentizado.",
                            "id": "63f5bc3b846ef3e36dbd653e"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bc/Caitlyn_-_R.png/revision/latest/scale-to-width-down/50?cb=20221103202342&path-prefix=es",
                            "title": "As bajo la Mira",
                            "description": "Caitlyn se toma su tiempo para disparar, causando una gran cantidad de daño físico a un solo objetivo a gran distancia. Los aliados del enemigo pueden interceptar el disparo.",
                            "id": "63f5bc3b846ef3e36dbd653f"
                        }
                    ],
                    "id": "63f5bc3b846ef3e36dbd653a"
                }
            ],
            "createdAt": "2023-02-22T06:54:51.989Z",
            "updatedAt": "2023-02-22T06:54:51.989Z"
        },
        {
            "id": "17",
            "champion": "Camille",
            "date": "7 de diciembre de 2016[",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_32.jpg",
            "origen": "Piltower",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Top laner",
                    "type": "Luchador",
                    "id": "63f5bcd2846ef3e36dbd6542"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bb/Camille_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904231205&path-prefix=es",
                            "title": "Defensas Flexibles",
                            "description": "Los ataques básicos de Camille contra campeones le otorgan un escudo contra el tipo de daño del oponente (físico o mágico) igual a un porcentaje de la vida máxima de Camille.",
                            "id": "63f5bcd2846ef3e36dbd6544"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/a/ad/Camille_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904231212&path-prefix=es",
                            "title": "Protocolo de Precisión",
                            "description": "El siguiente ataque básico de Camille inflige daño físico adicional y le otorga una bonificación de velocidadde movimiento. Después de unos segundos, Camille puede reactivar la habilidad para infligir más daño físico y también daño verdadero.",
                            "id": "63f5bcd2846ef3e36dbd6545"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/c/c7/Camille_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904231226&path-prefix=es",
                            "title": "Barrido Táctico",
                            "description": "Camille se prepara y hace un corte en la dirección seleccionada, infligiendo daño físico a los enemigos que se encuentren dentro del área. Si hay enemigos ubicados desde la mitad del área, estos recibirán más daño, serán ralentizados y Camille se curará parte del daño infligido.",
                            "id": "63f5bcd2846ef3e36dbd6546"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/0/0e/Camille_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904231156&path-prefix=es",
                            "title": "Gancho",
                            "description": "Camille dispara un gancho en la dirección seleccionada. Si se engancha a un muro, salta y aterriza en el lugar seleccionado, infligiendo daño físico si se encuentra a un enemigo y levantándolo.",
                            "id": "63f5bcd2846ef3e36dbd6547"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/6/67/Camille_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904231219&path-prefix=es",
                            "title": "El Ultimátum Hextech",
                            "description": "Camille salta al campeón enemigo seleccionado y hace que no pueda escapar de un área en forma de hexágono por unos segundos. Durante este tiempo, los ataques básicos de Camille también infligen daño mágico.",
                            "id": "63f5bcd2846ef3e36dbd6548"
                        }
                    ],
                    "id": "63f5bcd2846ef3e36dbd6543"
                }
            ],
            "createdAt": "2023-02-22T06:57:22.612Z",
            "updatedAt": "2023-02-22T06:57:22.612Z"
        },
        {
            "id": "18",
            "champion": "Cassiopeia",
            "date": "14 de diciembre de 2010",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_9.jpg",
            "origen": "Runaterra",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Mid laner",
                    "type": "Mago",
                    "id": "63f5bd81846ef3e36dbd654b"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/ed/Cassiopeia_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220904234831&path-prefix=es",
                            "title": "Gracia Serpentina",
                            "description": "Cassiopeia obtiene velocidadde movimiento por nivel, pero no puede comprar botas.",
                            "id": "63f5bd81846ef3e36dbd654d"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/f/f3/Cassiopeia_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220904234840&path-prefix=es",
                            "title": "Explosión Nociva",
                            "description": "Cassiopeia lanza un gas nocivo en el lugar seleccionado, infligiendo daño mágico a los enemigos que se encuentren dentro del área y envenenándolos por unos segundos. Si el enemigo es un campeón, Cassiopeia obtiene velocidadde movimiento adicional.",
                            "id": "63f5bd81846ef3e36dbd654e"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e3/Cassiopeia_-_W.png/revision/latest/scale-to-width-down/50?cb=20220904234906&path-prefix=es",
                            "title": "Miasma",
                            "description": "Cassiopeia lanza nubes de veneno en la dirección seleccionada que ralentiza, ancla, envenena e inflige daño mágico a los enemigos que se encuentren dentro de ellas por unos segundos.",
                            "id": "63f5bd81846ef3e36dbd654f"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Cassiopeia_-_E.png/revision/latest/scale-to-width-down/50?cb=20220904234822&path-prefix=es",
                            "title": "Colmillos Gemelos",
                            "description": "Cassiopeia libera un ataque que inflige daño mágico al objetivo seleccionado. Si el enemigo se encuentra envenenado, aumenta el daño y Cassiopeia se curará. Si el enemigo muere por esta habilidad, Cassiopeia recuperará maná.",
                            "id": "63f5bd81846ef3e36dbd6550"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/2/2e/Cassiopeia_-_R.png/revision/latest/scale-to-width-down/50?cb=20220904234856&path-prefix=es",
                            "title": "Mirada Petrificante",
                            "description": "Cassiopeia lanza un rayo de energía de sus ojos en la dirección seleccionada, infligiendo daño mágico a los enemigos que se encuentren dentro del área, aturdiéndolos si la estaban mirando y ralentizándolos sino.",
                            "id": "63f5bd81846ef3e36dbd6551"
                        }
                    ],
                    "id": "63f5bd81846ef3e36dbd654c"
                }
            ],
            "createdAt": "2023-02-22T07:00:17.368Z",
            "updatedAt": "2023-02-22T07:00:17.368Z"
        },
        {
            "id": "19",
            "champion": "Corki",
            "date": "19 de septiembre de 2009",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_26.jpg",
            "origen": "Bandle",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Mid laner",
                    "type": "Mago",
                    "id": "63f5bebe846ef3e36dbd6554"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/b/bf/Corki_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220905003257&path-prefix=es",
                            "title": "Munición Hextech",
                            "description": "Los ataques básicos de Corki causan un porcentaje de su daño como daño físico y el porcentaje restante como daño mágico. Ocasionalmente, Corki puede recoger El Paquete en la base de su equipo para mejorar su velocidadde movimiento y potenciar el siguiente lanzamiento de su habilidad Valquiria.",
                            "id": "63f5bebe846ef3e36dbd6556"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/f/fe/Corki_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220905003305&path-prefix=es",
                            "title": "Bomba Fosfórica",
                            "description": "Corki dispara una bomba a una ubicación seleccionada, revelando a los enemigos alcanzados e infligiendo daño mágico.",
                            "id": "63f5bebe846ef3e36dbd6557"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/5/59/Corki_-_W.png/revision/latest/scale-to-width-down/50?cb=20220905003426&path-prefix=es",
                            "title": "Valquiria",
                            "description": "Corki vuela una corta distancia en la dirección seleccionada, dejando un rastro explosivo que causa daño mágico a los enemigos que permanezcan en la zona.",
                            "id": "63f5bebe846ef3e36dbd6558"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/e/e6/Corki_-_E.png/revision/latest/scale-to-width-down/50?cb=20220905003201&path-prefix=es",
                            "title": "Cañón de Repetición",
                            "description": "Corki dispara una ráfaga de balas en un cono frente a él, causando daño físico y mágico y reduciendo la armadura y resistencia mágica de los enemigos.",
                            "id": "63f5bebe846ef3e36dbd6559"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/9/9d/Corki_-_R.png/revision/latest/scale-to-width-down/50?cb=20220905003322&path-prefix=es",
                            "title": "Descarga de Misiles",
                            "description": "Corki dispara un misil en la dirección seleccionada, causando daño mágico a los enemigos alcanzados. Periódicamente Corki almacena cargas de misiles hasta un máximo de siete, los cuales puede disparar de forma sucesiva, cada tercer misil causa daño adicional.",
                            "id": "63f5bebe846ef3e36dbd655a"
                        }
                    ],
                    "id": "63f5bebe846ef3e36dbd6555"
                }
            ],
            "createdAt": "2023-02-22T07:05:34.707Z",
            "updatedAt": "2023-02-22T07:05:34.707Z"
        },
        {
            "id": "20",
            "champion": "Darius",
            "date": "23 de mayo de 2012",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_15.jpg",
            "origen": "Noxus",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Top laner",
                    "type": "Luchador",
                    "id": "63f5bf59846ef3e36dbd655d"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Darius_-_Pasiva.png/revision/latest/scale-to-width-down/50?cb=20220905003611&path-prefix=es",
                            "title": "Hemorragia",
                            "description": "Darius acumula Hemorragia en el objetivo por medio de ataques básicos y habilidades que infligen daño. Cada acumulación inflige daño físico por unos segundos. Mientras más acumulaciones tenga el objetivo, más daño recibirá. Al llegar a cinco acumulaciones (o matando a un enemigo por Guillotina Noxiana), Darius obtiene más daño de ataque y su siguiente ataque básico en un nuevo enemigo le aplicará las cinco acumulaciones de manera inmediata.",
                            "id": "63f5bf59846ef3e36dbd655f"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/3/36/Darius_-_Q.png/revision/latest/scale-to-width-down/50?cb=20220905003640&path-prefix=es",
                            "title": "Diezmar",
                            "description": "Darius alza su hacha y la hace girar a su alrededor, infligiendo más daño físico a los enemigos alcanzados por el filo que por la empuñadura. Darius recuperará una cierta cantidad de vida según la cantidad de campeones enemigos o monstruos grandes alcanzados por el filo.",
                            "id": "63f5bf59846ef3e36dbd6560"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Darius_-_W.png/revision/latest/scale-to-width-down/50?cb=20220905003920&path-prefix=es",
                            "title": "Golpe Incapacitante",
                            "description": "El siguiente ataque básico de Darius inflige más daño físico y ralentiza al enemigo por un segundo. Si el objetivo muere por esta habilidad, Darius recupera el maná gastado y reduce el enfriamiento de la habilidad.",
                            "id": "63f5bf59846ef3e36dbd6561"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/8/8a/Darius_-_E.png/revision/latest/scale-to-width-down/50?cb=20220905003554&path-prefix=es",
                            "title": "Aprehender",
                            "description": "De manera pasiva, Darius obtiene penetración de armadura. Al utilizar la habilidad, Darius engancha con su hacha en la dirección seleccionada y atrae a los enemigos hacia él, además de ralentizarlos.",
                            "id": "63f5bf59846ef3e36dbd6562"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://static.wikia.nocookie.net/leagueoflegends/images/a/a3/Darius_-_R.png/revision/latest/scale-to-width-down/50?cb=20220905003727&path-prefix=es",
                            "title": "Guillotina Noxiana",
                            "description": "Darius salta hacia el campeón enemigo seleccionado y le asesta un golpe letal que le inflige daño verdadero. El daño aumenta según la cantidad de acumulaciones que tenga el enemigo de Hemorragia. Si el objetivo muere por esta habilidad, Darius podrá volver a usar esta habilidad por unos segundos.",
                            "id": "63f5bf59846ef3e36dbd6563"
                        }
                    ],
                    "id": "63f5bf59846ef3e36dbd655e"
                }
            ],
            "createdAt": "2023-02-22T07:08:09.423Z",
            "updatedAt": "2023-02-22T07:08:09.423Z"
        },



        {
            "id": "21",
            "champion": "Nocturne",
            "date": "5 de Julio de 2015",
            "splash_art": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_7.jpg",
            "origen": "Ruanterra",
            "resource": "Mana",
            "position": [
                {
                    "rol": "Jungla",
                    "type": "Asesino",
                    "id": "63f5bf59846ef3e36dbd655x"
                }
            ],
            "habilities": [
                {
                    "pasive": [
                        {
                            "abilityIcon": "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/Nocturne_UmbraBlades.png",
                            "title": "Espadas Oscuras",
                            "description": "Cada pocos segundos, el siguiente ataque de Nocturne golpea a los enemigos cercanos, inflige daño físico adicional y lo cura. Los ataques básicos de Nocturne reducen este enfriamiento.",
                            "id": "63f5bf59846ef3e36dbd655ff"
                        }
                    ],
                    "q": [
                        {
                            "abilityIcon": "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/NocturneDuskbringer.png",
                            "title": "Portador del Anochecer",
                            "description": "Nocturne lanza una espada de sombras que inflige daño, deja un rastro de oscuridad y provoca que los campeones dejen un rastro de oscuridad. Dentro de dicho rastro, Nocturne puede moverse entre unidades y ve incrementada su velocidadde movimiento y daño de ataque.",
                            "id": "63f5bf59846ef3e36dbd65600"
                        }
                    ],
                    "w": [
                        {
                            "abilityIcon": "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/NocturneShroudofDarkness.png",
                            "title": "Velo de Oscuridad",
                            "description": "Nocturne potencia sus espadas, ganando velocidadde ataque de forma pasiva. Utilizar Velo de oscuridad le permite a Nocturne perderse en las sombras, creando una barrera mágica que bloquea la habilidad de un enemigo y, en caso de tener éxito, dobla su velocidadde ataque pasiva.",
                            "id": "63f5bf59846ef3e36dbd65611"
                        }
                    ],
                    "e": [
                        {
                            "abilityIcon": "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/NocturneUnspeakableHorror.png",
                            "title": "Horror Inenarrable",
                            "description": "De manera pasiva, Darius obtiene penetración de armadura. Al utilizar la habilidad, Darius engancha con su hacha en la dirección seleccionada y atrae a los enemigos hacia él, además de ralentizarlos.",
                            "id": "63f5bf59846ef3e36dbd65622"
                        }
                    ],
                    "r": [
                        {
                            "abilityIcon": "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/NocturneParanoia.png",
                            "title": "Paranoia",
                            "description": "Nocturne reduce el radio de visión de todos los campeones enemigos y elimina su visión de los aliados. Entonces, puede lanzarse hacia un campeón enemigo cercano.",
                            "id": "63f5bf59846ef3e36dbd65633"
                        }
                    ],
                    "id": "63f5bf59846ef3e36dbd655ee"
                }
            ],
        },
    ]
}

app.get('/', (req, res) => {
    res.send('Warriors API');
})

app.get('/api/warriors', (req, res) => {
    res.send(warriors);
})

app.get('/api/warriors/:id', (req, res) => {
    const warrior = warriors.find(w => w.id === req.params.id)
    /* const warrior = warriors.find(w => w."id" === req.params."id"); */
    if (!warrior) return res.status(404).send('Warrior not found')
    else res.send(warrior)
})

const port = process.env.port || 80;

app.listen(port, () => console.log(`Listening on port ${port}...`));


//PARA AGREGAR UN CAMPEON

/* app.post('/api/warriors/:id', (req,res) => {
    const warrior = {
        id: warriors.length + 1,
        name: req.body.nombre,
        edad: parseInt(req.body.edad),
        #demas propiedades#

    }
})
 */

//PARA ELMINAR UN GUERRERO

/* app.delete('/api/warriors/:id", (req,res) => {
    const warrior = warriors.find(warrior => warrior.id === parseInt(req.params.id))
    if(!warrior) return res.status(404).send('Warrior not found')
    const index = warriors.indexOf(warrior);
    warriors.splice(index, 1);
    res.send(warrior);
})
 */