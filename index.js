
function main() {
    const scene= new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    var controls;
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    var _controls = new (function () {
      this.rotationSpeedX = 0.02;
      this.rotationSpeedY = 0.02;
    })();

    var stats;

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.z = 20;
     

    ///////////obejtos///////////
    const cubo= new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({color:"red"}));
    cubo.position.x=5;

    const cilindro = new THREE.Mesh(new THREE.CylinderGeometry( 2.5, 2.5, 7,50));
    cilindro.position.x=15;

    const dona = new THREE.Mesh(new THREE.TorusGeometry(2.5, 1.5, 100, 100), new THREE.MeshNormalMaterial({wireframe : true}));
    dona.position.x=-5;

    const cono = new THREE.Mesh(new THREE.ConeGeometry( 3, 5.5, 30 ), new THREE.MeshBasicMaterial( {color: 0xffff00} ))
    cono.position.x= -15;

    /////////////////////////////

    function createStats() {
      stats = new Stats();
      stats.setMode(2); // 0: fps, 1: ms, 2memory
      stats.domElement.style.position = "absolute";
      stats.domElement.style.left = "100px";
      stats.domElement.style.top = "10px";
      document.getElementById("myStats").appendChild(stats.domElement);
      return stats;
    } 
    createStats();

    function createDataGui() {
      var gui = new dat.GUI();
      gui.add(_controls, "rotationSpeedX", 0, 1);
      gui.add(_controls, "rotationSpeedY", 0, 1);
    }
    createDataGui();
    
    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
      dona.rotation.x += _controls.rotationSpeedX;
      dona.rotation.y += _controls.rotationSpeedY;

      controls.update();
      stats.update();
    }

    scene.add(cubo, cilindro, dona, cono )
  
  animate();
    
}

main();
