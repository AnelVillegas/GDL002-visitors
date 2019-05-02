let homePage = `
            <main>
              <article><img class="foto" src="../spa/img/image.png"></article>
              <nav>nav</nav>
              
            </main>
            <footer>footer</footer>
`;

let visitorScreen = `
<section>
      
                 
</section>
<section id="registerNewone">
  <div class="register">
    <span><h2>Bienvenido Visitante</h2></span>
    <div class="completeForm">
    <p>
          <div class="item">
             <h3>Información personal</h3>
              <div class="allFields">
               
                  <form>
                    <div class="form-column">
                    <img src ="http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg  "></img>
                    <div class="camera">
                    <video id="video">Video stream not available</video>
                    <button id="cameraBtn">Take a selfie</button>
                    </div>
                    <canvas id="canvas">
                    </canvas>
                    <div class="output" hidden>
                    <img id="photo" alt="The screen capture will appear in this box">
                    </div>
                        <div class="form-fields">

                        <div>
                        <label for="name">Nombre Completo*</label>
                        <input required type="text" id="visitorName"/>
                        <label for="coWorker">A quien visitas*</label>
                        <select name="select" id="coWorkerName" minlength="10" maxlength="14">
                        <option></option>    <!--aquí van los nombres de los coworkers para seleccionar-->
                          </select>
                            <label for="time">hora de salida</label>
                            <input type="text" id="timeIn"/> 
                        </div>
                       
                        <div>
                        
                        <label for="time">Hora de entrada</label>
                            <input  type="text" id="timeOut"/>
                            <label for="email">Email</label>
                            <input type="email" pattern="[^ @]+@[^ @]+.[a-z]+" id="visitorEmail"/>
                        
                        </div>
                        </div>
                        </div>
                         
                    <input id="signUpVisitor" type="submit" class="sendButton">
                  </form>
                </div>
              </div>

</section>
`;

let adminScreen = `
<section id="registerNewone">
      <div class="register">
        <span><h2>REGISTRO DE CO-WORKERS</h2></span>
        <div class="completeForm">
        <p>
           <!--<div class="informationForm">-->
            <!--<div class="slide">-->
              <div class="item">
                 <h3>Información personal</h3>
                  <div class="allFields">
                   
                      <form>
                        <div class="form-column">
                          
                            <div class="form-fields">
                            <div>
                            <label for="name">Nombre*</label>
                            <input required type="text" id="name"/>
                            <label for="lastName">Apellido*</label>
                            <input required type="text" id="lastName"/>
                            <label for="celphone">Celular*</label>
                            <input required type="tel" minlength="10" maxlength="14" id="celPhone"/>
                            </div>
                         
                            <div>
                            <label for="email">Email</label>
                            <input type="email" pattern="[^ @]+@[^ @]+.[a-z]+" id="email"/>
                            <label for="company">Empresa</label>
                            <input type="text" id="company"/>
                            </div>
                            </div>
                            </div>
                             
                        <input id="sendButton" type="submit" class="sendButton" value="Guardar">
                      </form>
                    </div> `;

let record = `
<table class="table">
  <thead>
  <tr>
     <th scope="col">No.</th>
     <th scope="col">Nombre del visitante</th>
     <th scope="col">Nombre del coworker</th>
     <th scope="col">Fecha</th>
     <th scope="col">Hora</th>
    </th>
  <thead>
  <tbody id="summary">
     <tr>
     <th scope="col"></th>
     <td></td>
     <td></td>
     <td></td>
     </tr>
   </tbody>
   <table>
      `
`;

var routes = {
    '': homePage,
    '#home': homePage,
    '#visitante': visitorScreen,
    '#administrador': adminScreen,
    '#historial': record,
};

let contentDiv = document.getElementById('content');

window.addEventListener("hashchange", () => {
    contentDiv.innerHTML = routes[window.location.hash];
});

contentDiv.innerHTML = routes[window.location.hash];