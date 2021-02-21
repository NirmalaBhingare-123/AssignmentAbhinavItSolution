import { Component, OnInit } from "@angular/core";
import { FiledataService } from "../filedata.service";

@Component({
  selector: "app-filemanager",
  templateUrl: "./filemanager.component.html",
  styleUrls: ["./filemanager.component.css"]
})
export class FilemanagerComponent implements OnInit {
  fileArray = [];
  folderInArray = [];
  secondFolderArray = [];
  constructor(private filedataservice: FiledataService) {}

  ngOnInit() {
    this.fileArray = this.filedataservice.getData();
    this.displayArrayData();
  }
  displayArrayData() {
    this.fileArray.map(data => {
      if (data.name == "Folder 1") {
        this.folderInArray = data.files;
      }
    });
  }
}
