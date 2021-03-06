import {Component, Input, OnInit} from '@angular/core';
import {AlgType} from "../../app.component";

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {

  @Input()
  hashType: AlgType = new AlgType(["Таблицы с прямой адресацией", "O(n^2)","../../assets/images/hash-ic/direct-adress-ic.svg","direct_address"],
    ["Хеш-таблицы", "O(n^2)", "../../assets/images/hash-ic/hash-table-ic.svg","hash_tables"],
    ["Хеш-функции", "O(n^2)","../../assets/images/hash-ic/hash-func-ic.svg","hash_functions"],
    ["Методы разрешения коллизий", "O(n*log(n))", "../../assets/images/hash-ic/collision-handle-ic.svg","kolis"],
    "Хэширование",
    "Основы хэширования");
  constructor() { }

  ngOnInit(): void {
  }

}
