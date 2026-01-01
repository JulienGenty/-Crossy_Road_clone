import * as THREE from "three";
import { Grass } from "./Grass.js";
import { Tree } from "./Tree.js";
import { Road } from "./Road.js";
import { Car } from "./Car.js";
import { Truck } from "./Truck.js";

export const metadata = [
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: 2, height: 30 },
      { tileIndex: 5, height: 50 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: 10,
    vehicles: [{ initialTileIndex: 2, color: 0xff0000 }],
  },
  {
    type: "truck",
    direction: true,
    speed: 10,
    vehicles: [{ initialTileIndex: -4, color: 0xff0000 }],
  },
];

export const map = new THREE.Group();

export function initializeMap() {
  for (let rowIndex = 0; rowIndex > -5; rowIndex--) {
    const grass = Grass(rowIndex);
    map.add(grass);
  }
  addRows();
}

export function addRows() {
  metadata.forEach((rowData, index) => {
    const rowIndex = index + 1;

    if (rowData.type === "forest") {
      const row = Grass(rowIndex);

      rowData.trees.forEach(({ tileIndex, height }) => {
        const three = Tree(tileIndex, height);
        row.add(three);
      });

      map.add(row);
    }

    if (rowData.type === "car") {
      const row = Road(rowIndex);

      rowData.vehicles.forEach((vehicle) => {
        const car = Car(vehicle.initialTileIndex, vehicle.color, rowData.direction);
        vehicle.ref = car;
        row.add(car);
      });

      map.add(row);
    }

    if (rowData.type === "truck") {
      const row = Road(rowIndex);

      rowData.vehicles.forEach((vehicle) => {
        const truck = Truck(vehicle.initialTileIndex, vehicle.color, rowData.direction);
        vehicle.ref = truck;
        row.add(truck);
      });

      map.add(row);
    }
  });
  console.log(metadata)
}
