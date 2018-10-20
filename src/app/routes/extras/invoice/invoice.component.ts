import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  id: number = 3;
  contents='s';
  cs=["欧洲文化渊源","新闻英语","商务英语"];
  setId(id: number): any {
    this.id = id;
  }
  chapters : Array<any>= [
    {
      c: "Unit 1 Creation in Greek Myths",

      d: "了解古希腊创世神话中的主要神祗，Titan神族及相关典故。"
    },

    {
      c: " Unit 2 Olympian Gods",

      d: " 了解奥林匹斯神系的主要神祗及谱系关系，各自职责及相关典故。"
    },

    {
      c: " Unit 3 Stories in Homer's Epics ",

      d: " 了解基于荷马史诗的特洛伊战争及奥德修斯战后返乡的主要故事及相关典故。"
    },

    {
      c: " Unit 4 Heroes and Other Legends",

      d: "了解主要英雄Heracles, Jason, Theseus, Persus的传说，非主线的其他神话传说及相关典故。"
    },

    {
      c: "Unit 5 Creation and Pioneers    ",

      d: " 了解《创世纪》中的创世、以色列人先祖的故事及相关典故。"
    },

    {
      c: "Unit 6 Jewish History",

      d: " 了解《出埃及记》中摩西的故事，以色列人传统节日“逾越节”和“圣安息日”的来历，以色列王国时期三位国王Saul, David, Solomon的故事,及相关典故。"
    },

    {
      c: "Unit 7 Life Stories of Jesus",

      d: "  了解《新约》中记载的耶稣主要生平故事、相关典故。"

    }

  ];
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      data=>{
      this.id=data.id;
      console.log(data.id)});
  }

}
