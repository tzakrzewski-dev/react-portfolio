import React, { Component } from "react";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//import OrbitControls from "orbit-controls-es6";

//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

class Configurator extends Component {


  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      45,
      10000
    );

    camera.position.set(-900,-200,-900)
    

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, this.mount);
    controls.minDistance=500;
    controls.maxDistance=1500

    //this.controls = new OrbitControls( this.camera, this.el );

    //var controls = new OrbitControls(camera, renderer.domElement);
    //controls.update() must be called after any manual changes to the camera's transform
    
    const materialArray = [];
    const texture_ft = new THREE.TextureLoader().load("arid2_ft.jpg");
    const texture_bk = new THREE.TextureLoader().load("arid2_bk.jpg");
    const texture_up = new THREE.TextureLoader().load("arid2_up.jpg");
    const texture_dn = new THREE.TextureLoader().load("arid2_dn.jpg");
    const texture_rt = new THREE.TextureLoader().load("arid2_rt.jpg");
    const texture_lf = new THREE.TextureLoader().load("arid2_lf.jpg");

   materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
   materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
   materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
   materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
   materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
   materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

    for (let i = 0; i < 6; i++)materialArray[i].side = THREE.BackSide;

    const skyboxgeometry = new THREE.BoxGeometry(100, 100, 100);

    const skybox = new THREE.Mesh(skyboxgeometry,materialArray);
    scene.add(skybox);

    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
export default Configurator;
