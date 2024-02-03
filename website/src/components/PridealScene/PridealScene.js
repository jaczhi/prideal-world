import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function PridealScene({ children, initialLightLoc, modelPath, cameraLoc, cameraRotation }) {
  const refContainer = useRef(null);
  const [camera, setCamera] = useState(null);

  function moveCamera(camera, x, y, z) {
    if (camera.position.x === x && camera.position.y === y && camera.position.z === z) return;
    gsap.to(camera.position, {
      x,
      y,
      z,
      duration: 1.5,
    });
  }

  function rotateCamera(camera, x, y, z) {
    if (camera.rotation.x === x && camera.rotation.y === y && camera.rotation.z === z) return;
    gsap.to(camera.rotation, {
      x,
      y,
      z,
      duration: 1.5,
    });
  }

  useEffect(() => {
    if (camera) {
      moveCamera(camera, cameraLoc[0], cameraLoc[1], cameraLoc[2]);
      rotateCamera(camera, cameraRotation[0], cameraRotation[1], cameraRotation[2]);
    }
  }, [cameraLoc, cameraRotation]);

  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    //scene.add(new THREE.AxesHelper(5));
    const light = new THREE.PointLight(0xfffad1, 10);
    light.position.set(initialLightLoc[0], initialLightLoc[1], initialLightLoc[2]);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(cameraLoc[0], cameraLoc[1], cameraLoc[2]);
    camera.rotation.set(cameraRotation[0], cameraRotation[1], cameraRotation[2]);

    var renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    var loader = new GLTFLoader();
    var model = new THREE.Object3D();
    loader.load(
      modelPath,
      function (gltf) {
        model = gltf.scene;
        scene.add(model);
        model.name = "model";
        model.position.set(0, 0, 0);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    //skybox
    let skyboxgeo = new THREE.BoxGeometry(1000, 1000, 1000);
    let materialArray = [];

    let texture_ft = new THREE.TextureLoader().load("models/skybox/front.png");
    let texture_bk = new THREE.TextureLoader().load("models/skybox/back.png");
    let texture_up = new THREE.TextureLoader().load("models/skybox/up.png");
    let texture_dn = new THREE.TextureLoader().load("models/skybox/down.png");
    let texture_rt = new THREE.TextureLoader().load("models/skybox/right.png");
    let texture_lf = new THREE.TextureLoader().load("models/skybox/left.png");

    materialArray.push(
      new THREE.MeshBasicMaterial({ map: texture_ft, side: THREE.BackSide })
    );
    materialArray.push(
      new THREE.MeshBasicMaterial({ map: texture_bk, side: THREE.BackSide })
    );
    materialArray.push(
      new THREE.MeshBasicMaterial({ map: texture_up, side: THREE.BackSide })
    );
    materialArray.push(
      new THREE.MeshBasicMaterial({ map: texture_dn, side: THREE.BackSide })
    );
    materialArray.push(
      new THREE.MeshBasicMaterial({ map: texture_rt, side: THREE.BackSide })
    );
    materialArray.push(
      new THREE.MeshBasicMaterial({ map: texture_lf, side: THREE.BackSide })
    );

    let skybox = new THREE.Mesh(skyboxgeo, materialArray);
    skybox.name = "skybox";
    scene.add(skybox);

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    setCamera(camera);

    animate();
  }, []);
  return <div ref={refContainer}>{children}</div>;
}

export default PridealScene;
