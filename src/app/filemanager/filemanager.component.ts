import { Component, OnInit } from "@angular/core";
import { FiledataService } from "../filedata.service";

@Component({
  selector: "app-filemanager",
  templateUrl: "./filemanager.component.html",
  styleUrls: ["./filemanager.component.css"]
})
export class FilemanagerComponent implements OnInit {
  fileArray = [];
  folderInArray: [];
  constructor(private filedataservice: FiledataService) {}

  ngOnInit() {
    this.fileArray = this.filedataservice.getData();
    console.log("........", JSON.stringify(this.fileArray));

    this.displayArrayData();
  }
  displayArrayData() {
    this.fileArray.map(data => {
      if (data.name == "Folder 1") {
        this.folderInArray = data.files;
        console.log("........", JSON.stringify(this.folderInArray));
      }
    });
  }
}
