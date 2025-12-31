import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { Player } from "./components/Player";
import "./style.css";

const scene = new THREE.Scene();
scene.add(Player());

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight();
directionalLight.position.set(-100, -100, 200);
scene.add(directionalLight);

const camera = Camera();
scene.add(camera);

const renderer = Renderer();
renderer.render(scene, camera);

console.log("Hello World");
