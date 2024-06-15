


<div className="tab">
<h2>StakHolders</h2>
<p><label for="stakes">StakHolders diretos</label></p>
<p><input type="text" id="stakes" name="stakes" maxlength="120" placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."/></p>      
<div className="flex-container">
      <div className="item1"><input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" /></div>
      <div className="item2"><button id="addInput"><span className="material-symbols-outlined">add</span></button></div>
      <div className="item3"><button id="delInput"><span className="material-symbols-outlined">del</span></button></div>   
</div>
</div>

<div className="tab">
<h2>Fases e Principais entregaveis</h2>
{/*<!-- Aqui tem que ficar a calculadora do Adam -->*/}
<p><input placeholder="Username..." oninput="this.className = ''" name="uname"/></p>
<p><input placeholder="Password..." oninput="this.className = ''" name="pword" type="password"/></p>
</div>

<div style={{overflow:'auto'}}>
\                     <div style={{float:'right'}}>
   <button className="button-geral" type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
   <button className="button-geral" type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
</div>
</div>
{/*<!-- Circles which indicates the steps of the form: -->*/}
<div style={{textAlign:'center', marginTop:'40px'}}>
<span className="step"></span>
<span className="step"></span>
<span className="step"></span>
<span className="step"></span>
<span className="step"></span>
</div>