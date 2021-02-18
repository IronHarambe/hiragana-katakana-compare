import React from "react";
import Char from "../char-items/Char";
import "./Hiragana.scss";

function Hiragana() {
  return (
    <div className="hiragana">
      <div className="chart">
        <Char title="か" tag="wa"></Char>
        <Char title="ら" tag="ra"></Char>
        <Char title="や" tag="ya"></Char>
        <Char title="ま" tag="ma"></Char>
        <Char title="は" tag="ha"></Char>
        <Char title="な" tag="na"></Char>
        <Char title="た" tag="ta"></Char>
        <Char title="さ" tag="sa"></Char>
        <Char title="か" tag="ka"></Char>
        <Char title="あ" tag="a"></Char>

        <Char title="" tag=""></Char>
        <Char title="り" tag="ri"></Char>
        <Char title="" tag=""></Char>
        <Char title="み" tag="mi"></Char>
        <Char title="ひ" tag="hi"></Char>
        <Char title="に" tag="ni"></Char>
        <Char title="ち" tag="chi"></Char>
        <Char title="し" tag="shi"></Char>
        <Char title="き" tag="ki"></Char>
        <Char title="い" tag="i"></Char>

        <Char title="" tag=""></Char>
        <Char title="る" tag="ru"></Char>
        <Char title="ゆ" tag="yu"></Char>
        <Char title="む" tag="mu"></Char>
        <Char title="ふ" tag="fu/hu"></Char>
        <Char title="ぬ" tag="nu"></Char>
        <Char title="つ" tag="tsu"></Char>
        <Char title="す" tag="su"></Char>
        <Char title="く" tag="ku"></Char>
        <Char title="う" tag="u"></Char>

        <Char title="ん" tag="n"></Char>
        <Char title="れ" tag="re"></Char>
        <Char title="" tag=""></Char>
        <Char title="め" tag="me"></Char>
        <Char title="へ" tag="he"></Char>
        <Char title="ね" tag="ne"></Char>
        <Char title="て" tag="te"></Char>
        <Char title="せ" tag="se"></Char>
        <Char title="け" tag="ke"></Char>
        <Char title="え" tag="e"></Char>

        <Char title="を" tag="wo"></Char>
        <Char title="ろ" tag="ro"></Char>
        <Char title="よ" tag="yo"></Char>
        <Char title="も" tag="mo"></Char>
        <Char title="ほ" tag="ho"></Char>
        <Char title="の" tag="no"></Char>
        <Char title="と" tag="to"></Char>
        <Char title="そ" tag="so"></Char>
        <Char title="こ" tag="ko"></Char>
        <Char title="お" tag="o"></Char>
      </div>
    </div>
  );
}

export default Hiragana;
