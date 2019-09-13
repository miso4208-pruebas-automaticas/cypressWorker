describe('Habitica testing', function() {
  it('Visits habitica and register', function() {
      cy.visit('https://www.habitica.com')
      cy.contains('Ingresar').click()
      cy.get('.login-form').find('a[href="/register"]').click()
      cy.get('.login-form').find('input[id="usernameInput"]').click().type("H6.Hangover")
      cy.get('.login-form').find('input[id="emailInput"]').click().type("h6.hangover@gmail.com")
      cy.get('.login-form').find('input[id="passwordInput"]').click().type("pruebas201902")
      cy.get('.login-form').find('input[id="confirmPasswordInput"]').click().type("pruebas201902")
      cy.contains('Únete a Habitica').click()
    })/*
    it('Visits habitica and login', function() {
      cy.visit('https://www.habitica.com')
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.get('.login-form').find('input[id="usernameInput"]').click().type("wrongemail@example.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })/*
    it('Visits los estudiantes and register', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.contains('Registrarse').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Alejandro")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Martinez")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ja.martinezl@uniandes.edu.co")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
      cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      //cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
    it('Visits los estudiantes and fails at register', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas
      cy.contains('Ingresar').click()
      cy.contains('Registrarse').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Alejandro")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Martinez")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ja.martinezl@uniandes.edu.co")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
      cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ocurrió un error activando tu cuenta')
      cy.contains('Ok').click()
    })
    it('Visits los estudiantes, search and enter to page teacher', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.get('.buscador').find('input').focus().type("Mario Linares Vasquez",{force:true})
      cy.get('[id^="react-select-"]').eq(1).contains("Mario Linares Vasquez").click()
    })
    it('Visits teacher page and filter a subjetc', function() {
      cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
      cy.get('.statsProfesorDropdownItemChecked').find('input[name="id:MISO4208"]').check()
    })*/
})
