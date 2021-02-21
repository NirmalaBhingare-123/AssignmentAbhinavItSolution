import { Injectable } from "@angular/core";

@Injectable()
export class FiledataService {
  files: any;
  constructor() {}

  getData() {
    return (this.files = [
      {
        name: "Awesome File 1",
        type: "text",
        createdAt: 1589292459,
        size: 127
      },
      {
        name: "Awesome File 2",
        type: "text",
        createdAt: 1589292112,
        size: 68
      },
      {
        name: "Awesome Image 1 ",
        type: "image",
        createdAt: 1589292059,
        size: 127
      },
      {
        name: "Awesome Image 2",
        type: "image",
        createdAt: 1589219519,
        size: 31
      },
      {
        name: "Folder 1",
        type: "folder",
        createdAt: 1589216123,
        files: [
          {
            name: "Great File 1",
            type: "text",
            createdAt: 1589296100,
            size: 636
          },
          {
            name: "Great File 2",
            type: "text",
            createdAt: 1589298326,
            size: 75
          },
          {
            name: "Folder 2",
            type: "folder",
            createdAt: 1589216945,
            files: [
              {
                name: "Awesome File 1",
                type: "text",
                createdAt: 1589237154,
                size: 1224
              },
              {
                name: "Awesome File 2",
                type: "text",

                createdAt: 1589237158,
                size: 10
              }
            ]
          }
        ]
      },
      {
        name: "Folder 2",
        type: "folder",
        createdAt: 1589214312,
        files: []
      }
    ]);
  }
}
