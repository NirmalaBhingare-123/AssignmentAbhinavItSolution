import { Component, OnInit } from "@angular/core";
import { FiledataService } from "../filedata.service";

@Component({
  selector: "app-filemanager",
  templateUrl: "./filemanager.component.html",
  styleUrls: ["./filemanager.component.css"]
})
export class FilemanagerComponent implements OnInit {
  fileArray = [];
  constructor(private filedataservice: FiledataService) {}

  ngOnInit() {
    this.fileArray = this.filedataservice.getData();
    console.log("........", this.fileArray);
  }
}
