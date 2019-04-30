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
                        <div class="form-fields">
                        <div>
                        <label for="name">Nombre Completo*</label>
                        <input required type="text" id="visitorName"/>
                        <label for="coWorker">A quien visitas*</label>
                        <select name="select" id="coWorkerName" minlength="10" maxlength="14">
                              <option value="Nombre1">Nombre 1</option>
                              <option value="Nombre2">Nombre 2</option>
                              <option value="Nombre3">Nombre 3</option>
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

let contactPage = `
<section class="contact">
    Test contact
    <div>
    <a href="#home">Home</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#resume">Resume</a>
    <a href="#contact">Contact</a>
    </div>
    <img class="image" src="data:image/jpeg;base64,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" />
</section>
`;

var routes = {
    '': homePage,
    '#home': homePage,
    '#visitante': visitorScreen,
    '#administrador': adminScreen,
    '#historial': contactPage,
};

let contentDiv = document.getElementById('content');

window.addEventListener("hashchange", () => {
    contentDiv.innerHTML = routes[window.location.hash];
});

contentDiv.innerHTML = routes[window.location.hash];