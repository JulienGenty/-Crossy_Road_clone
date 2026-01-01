import * as THREE from "three";

export function DirectionalLight() {
  const directionalLight = new THREE.DirectionalLight();
  directionalLight.position.set(-100, -100, 200);
  directionalLight.up.set(0, 0, 1);
  directionalLight.castShadow = true;

  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;

  directionalLight.shadow.camera.up.set(0, 0, 1);
  directionalLight.shadow.camera.left = -400;
  directionalLight.shadow.camera.right = 400;
  directionalLight.shadow.camera.top = 400;
  directionalLight.shadow.camera.bottom = -400;
  directionalLight.shadow.camera.near = 50;
  directionalLight.shadow.camera.far = 400;

  return directionalLight;
}
