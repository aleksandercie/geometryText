// Simple three.js example

var mesh, renderer, scene, camera, controls;

init();
animate();

function init() {

    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor("#F2D0A4");
    document.body.appendChild( renderer.domElement );

    // scene
    scene = new THREE.Scene();
    
    // camera
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    controls = new THREE.OrbitControls( camera, renderer.domElement );

    camera.position.set(0, 0, 1500 );
    
    
    // light
    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 10, 200, 0 );
    scene.add( light );
    
    // axes
    scene.add( new THREE.AxisHelper( 0 ) );
    var loader = new THREE.FontLoader();
    loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

        var geometry = new THREE.TextGeometry( 'Aleksander Gasior', {
            font: font,
            size: 80,
            height: 10,
            curveSegments: 0,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
        } );
        var material = new THREE.MeshLambertMaterial({color: 0x555555});
          
          // mesh
          mesh = new THREE.Mesh( geometry, material );
          
          scene.add( mesh );
        } );
    
}


function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.y += 0.01; 

    renderer.render( scene, camera );

}
