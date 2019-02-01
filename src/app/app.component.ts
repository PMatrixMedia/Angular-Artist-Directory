import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  style: [
    `
  .list-group-item:first-child {
    boarder-top-left-radious: 0;
    boarder-top-right-radious: 0;
    boarder-top: 0;
  }
  `
  ]
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;

  showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight;
  }

  constructor(private http: HttpClient) {
    this.query = "";
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<Object>("../assets/data.json").subscribe(data => {
      this.artists = data;
    });
  }
}
