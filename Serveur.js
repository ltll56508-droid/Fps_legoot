// Déclaration des variables de base
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Le renderer doit couvrir toute la fenêtre
renderer.setSize(window.innerWidth, window.innerHeight);

// Ajouter le canvas au document HTML
// Sur CodePen, le rendu sera dans la zone d'affichage
document.body.appendChild(renderer.domElement);

//-----------------------------------------------------
// 2. Éclairage : essentiel pour voir les objets en 3D !
//-----------------------------------------------------

// Lumière ambiante (illumine tout doucement)
const ambientLight = new THREE.AmbientLight(0x404040, 5); // Couleur gris, intensité 5
scene.add(ambientLight);

// Lumière directionnelle (simule le soleil)
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

//-----------------------------------------------------
// 3. Création du Sol (comme dans votre aperçu)
//-----------------------------------------------------

const groundGeometry = new THREE.PlaneGeometry(50, 50); // Grande surface 50x50
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
// Le plan est par défaut vertical, on le tourne pour en faire un sol
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

//-----------------------------------------------------
// 4. Position de la caméra (Le joueur)
//-----------------------------------------------------

// Positionner la caméra au centre, à une hauteur réaliste (1.8m)
camera.position.set(0, 1.8, 0);

//-----------------------------------------------------
// 5. Boucle de rendu (Animation Loop)
//-----------------------------------------------------

function animate() {
    // Cette fonction demande au navigateur d'appeler animate() avant le prochain rafraîchissement
    requestAnimationFrame(animate);

    // Mettez ici le code de déplacement du joueur, de l'IA, etc.

    // Rendu de la scène
    renderer.render(scene, camera);
}

// Lancer la boucle
animate();
