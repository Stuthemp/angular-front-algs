import {Component, Input, OnInit} from '@angular/core';
import {AlgType} from "../../app.component";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.css']
})
export class DataTypesComponent implements OnInit {


  @Input()
  dataType: AlgType = new AlgType(["Стек", "","../../assets/images/data-types-ic/stack-ic.svg","stack"],
    ["Очередь", "", "../../assets/images/data-types-ic/queue-ic.svg","queue"],
    ["Деревья", "","../../assets/images/data-types-ic/data-tree-ic.svg","trees"],
    ["Графы", "", "../../assets/images/data-types-ic/graph-ic.svg","graphs"],
    "Типы данных",
    "Наиболее популярные типы данных, использующиеся при работе с алгоритмами");
  constructor(private userService: UserService) { }

  numOfLikesFirst
  numOfLikesSecond = 10
  numOfLikesThird
  numOfLikesFourth
  firstLikeClicked = false;
  firstDislikeClicked = false;
  secondLikeClicked = false;
  secondDislikeClicked = false;
  thirdLikeClicked = false;
  thirdDislikeClicked = false;
  fourthLikeClicked = false;
  fourthDislikeClicked = false;

  firstLikeButtonClick() {
    this.firstLikeClicked = true;
    this.firstDislikeClicked = false;
    this.userService.addLike("alg_search").subscribe(
      res => {
        this.numOfLikesFirst = res;
      }
    )
  }


  firstDislikeButtonClick() {
    this.firstDislikeClicked = true;
    this.firstLikeClicked = false;
    this.userService.subtractLike("alg_search").subscribe(
      res => {
        this.numOfLikesFirst = res;
      }
    )

  }

  ngOnInit(): void {
  }

}
