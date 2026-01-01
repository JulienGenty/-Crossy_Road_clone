import * as THREE from "three";
import { tileSize } from "../constants.js";
import { Wheel } from "./Wheel.js";

export function Car(initialTileIndex, color, direction) {
  const car = new THREE.Group();
  car.position.x = initialTileIndex * tileSize;
  if (!direction) car.rotation.z = Math.PI;

  const main = new THREE.Mesh(new THREE.BoxGeometry(60, 30, 15), new THREE.MeshLambertMaterial({ color: color, flatShading: true }));
  main.position.z = 12;
  car.add(main);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(33, 24, 12), new THREE.MeshLambertMaterial({ color: "white", color: color, flatShading: true }));
  cabin.position.x = -6;
  cabin.position.z = 25.5;
  car.add(cabin);

  const frontWheel = Wheel(18);
  car.add(frontWheel);

  const backWheel = Wheel(-18);
  car.add(backWheel);

  return car;
}
