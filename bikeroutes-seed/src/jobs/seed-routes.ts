import { seedRoutes } from "../../townhall-files/routes.js";
import { Coordinate, RouteGroup } from '../models';

class Routes {
  origin: Coordinate;
  destiny: Coordinate;
  constructor(origin: Coordinate, destiny: Coordinate) {
    // this.routes = this.routesArrays();
    this.origin = origin;
    this.destiny = destiny;
    // this.closestFromOrigin = this.getClosestFromOrigin();
  }
  // routesArrays() {
  //   var cicleGroups = [];
  //   var group = [];
  //   var groupName;
  //   for (let i = 0; i < database.length; i++) {
  //     if (
  //       database[i] &&
  //       database[i].programa !== "" &&
  //       database[i].programa !== "programa" &&
  //       i != 0
  //     ) {
  //       cicleGroups.push(group);
  //       groupName = database[i].programa;
  //       group = [];
  //     }
  //     if (
  //       database[i].latitude !== "latitude" &&
  //       database[i].longitude !== "longitude" &&
  //       database[i].latitude !== "" &&
  //       database[i].longitude !== ""
  //     ) {
  //       group.push([parseFloat(database[i].latitude, 2), parseFloat(database[i].longitude, 2)]);
  //     }
  //   }
  //   return cicleGroups;
  // }
  routesObjects(): RouteGroup[] {
    const routeGroups: RouteGroup[] = [];
    var group: RouteGroup | null;
    var groupName;
    for (let i = 0; i < seedRoutes.length; i++) {
      if (
        seedRoutes[i] &&
        seedRoutes[i].programa !== "" &&
        seedRoutes[i].programa !== "programa" &&
        i != 0
      ) {
       
      }
      if (
        seedRoutes[i].latitude !== "latitude" &&
        seedRoutes[i].longitude !== "longitude" &&
        seedRoutes[i].latitude !== "" &&
        seedRoutes[i].longitude !== ""
      ) {
       
      }
    }
    return routeGroups;
  }
  getDistance(p1: { x: number; y: number; }) {
    return Math.sqrt(Math.pow(p1.x - this.origin.lat, 2) + Math.pow(p1.y - this.origin.long, 2));
  }
  getClosestFromOrigin() {

    async function getClosestAsync(startFrom: any) {
      return new Promise((resolve, reject) => {
        for(let i = startFrom; i < this.routes.length; i ++) {

          
        }
      })
    }

    // var closestsArray = [];
    // let closestIndex;
    // if (this.routes.length) {
    //   let closest = this.routes.reduce((a, b, index) => {
    //     console.log(index, 'mainIndex')
    //     console.log(this.routes);
    //     let closestOfThisItemA = a.reduce((c, d, arrayIndex) => this.getDistance({x: c[0], y: c[1]}) < this.getDistance({x: d[0], y: d[1]}) ? c : d);
    //     let closestOfThisItemB = b.reduce((e, f, arrayIndex) => this.getDistance({x: e[0], y: e[1]}) < this.getDistance({x: f[0], y: f[1]}) ? e : f);
    //     let finalClosest = this.getDistance({x: closestOfThisItemA[0], y: closestOfThisItemA[1]}) < this.getDistance({x: closestOfThisItemB[0], y: closestOfThisItemB[1]}) ? (index - 1) : index;
    //     closestIndex = finalClosest;
        
    //     // console.log(closestOfThisItemA)
    //     // console.log(closestOfThisItemB)
    //     // console.log(finalClosest);
    //     return this.routes[closestIndex];
    //     // let formata = { x: a[0], y: a[1] };
    //     // let formatb = { x: b[0], y: b[1] };
    //   });

      // console.log(closest);
      // for(let i = 0; i < this.routes.length; i++) {
      //     console.log(this.routes[i]);
      //     this.routes[i].reduce((a, b, index) => {
      //         let formata = {x: a[0], y:a[1]}
      //         let formatb = {x: b[0], y:b[1]}
      //         let closestOfThisItem = this.routes.reduce((a, b) => getDistance(formata, this.origin) < getDistance(formatb, this.origin) ? formata : formatb);
      //         console.log(closestOfThisItem);
      //     })
      // }
    }
  }
}

var routes = new Routes({ lat: -23.557, long: -46.656 }, { lat: -23.557, long: -46.656 });

routes.getClosestFromOrigin();

// const traversingDataBase = () => {
//     var cicleGroups = [];
//     var group = [];
//     var groupName;
//     for(let i = 0; i < database.length; i ++) {
//          if(database[i] && database[i].programa !== '' && database[i].programa !== 'programa' && i != 0) {
//             cicleGroups.push(group);
//             groupName = database[i].programa;
//             group = [];
//          }
//          if (database[i].latitude !== 'latitude' && database[i].longitude !== 'longitude'
//          && database[i].latitude !== '' && database[i].longitude !== '') {
//             group.push([database[i].latitude, database[i].longitude])
//          }
//     }
//     return cicleGroups;

// }

// const getClosestFromOrigin = (origin) => {

// }
