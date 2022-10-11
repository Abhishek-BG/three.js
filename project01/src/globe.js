import * as THREE from 'three'
import moon from './img/moon.jpeg';
import  gsap from 'gsap'
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 )
//
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild( renderer.domElement );

const sphere = new THREE.Mesh( new THREE.SphereGeometry(5,50,50),
new THREE.MeshBasicMaterial({
    //load image
    map:new THREE.TextureLoader().load(moon),flatShading:true,
    blending: THREE.AdditiveBlending,
    side:THREE.AmbientLight
    }));
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
scene.add( sphere );
camera.position.z=10;
//stars
const vertices = [];

for ( let i = 0; i < 10000; i ++ ) {

	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );

	vertices.push( x, y, z );

}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
const material = new THREE.PointsMaterial( { color: 0xffffff } );
const points = new THREE.Points( geometry, material );
scene.add( points );
//

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, -1, 1)
scene.add(light)

const backLight = new THREE.DirectionalLight(0xffffff, 1)
backLight.position.set(0, 0, -1)
scene.add(backLight)
function animate(){
    requestAnimationFrame(animate);
    
    sphere.rotation.y +=0.003
    renderer.render(scene,camera)
}
animate();

const globe = () => {
  return (
    <></>
  )
}

export default globe