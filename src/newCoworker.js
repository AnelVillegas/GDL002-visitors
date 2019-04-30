const newCoworker= document.querySelector('#newCoworker');

newCoworker.innerHTML = `

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