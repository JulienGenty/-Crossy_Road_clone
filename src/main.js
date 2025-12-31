import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { Player } from "./components/Player";
import "./style.css";
import { map, initializeMap, addRows } from "./components/Map";

const scene = new THREE.Scene();
scene.add(Player());
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight();
directionalLight.position.set(-100, -100, 200);
scene.add(directionalLight);

const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame() {
  initializeMap();
  addRows();
}

const renderer = Renderer();
renderer.render(scene, camera);
