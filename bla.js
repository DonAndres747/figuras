
function main() {
    const scene= new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.z = 20;
     
    const cubo= new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({color:"red"}));
    cubo.position.x=5;

    const cilindro = new THREE.Mesh(new THREE.CylinderGeometry( 2.5, 2.5, 7,50));
    cilindro.position.x=15;

    const dona = new THREE.Mesh(new THREE.TorusGeometry(2.5, 1.5, 100, 100), new THREE.MeshNormalMaterial({wireframe : true}));
    dona.position.x=-5;

    const cono = new THREE.Mesh(new THREE.ConeGeometry( 3, 5.5, 30 ), new THREE.MeshBasicMaterial( {color: 0xffff00} ))
    cono.position.x= -15;
    
    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }
  scene.add(cubo, cilindro, dona, cono )
  
  animate();
    
}

main();
