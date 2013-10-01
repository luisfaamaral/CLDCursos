jQuery(document).ready(function() {
  // Login block
  jQuery('form#user-login-form input#edit-name').val('Usuário').addClass('notFilled')
  jQuery('form#user-login-form input#edit-pass').val('Senha').addClass('notFilled')
  jQuery('form#user-login-form input#edit-name').blur(function() {
    if (jQuery(this).val() == "") {
      jQuery(this).addClass('notFilled')
      jQuery(this).val('Usuário')
    }
  })

  jQuery('form#user-login-form input#edit-name').focus(function() {
    if (jQuery(this).val() == "Usuário") {
      jQuery(this).removeClass('notFilled')
      jQuery(this).val('')
    }

  })

  jQuery('form#user-login-form input#edit-pass').blur(function() {
    if (jQuery(this).val() == "") {
      jQuery(this).addClass('notFilled')
      jQuery(this).val('Senha')
    }
  })

  jQuery('form#user-login-form input#edit-pass').focus(function() {
    if (jQuery(this).val() == "Senha") {
      jQuery(this).removeClass('notFilled')
      jQuery(this).val('')
    }
  })

  // remove the course link
  jQuery('div#block-block-3 ul.menu li:nth-child(2)').click(function() {
    jQuery('#cursos').toggle()
  })

  // collapse/expand course files
  jQuery('div#block-block-1 fieldset').each(function() {
    jQuery(this).children('legend').addClass('collapse')
    jQuery(this).children('div').hide()
  })
  jQuery('div#block-block-1 legend').click(function() {
    if ( jQuery(this).parent('fieldset').children('div').is(':visible') ) {
      jQuery(this).parent('fieldset').children('div').hide()
      jQuery(this).addClass('collapse').removeClass('expand')
    } else {
      jQuery(this).parent('fieldset').children('div').show()
      jQuery(this).addClass('expand').removeClass('collapse')
    }
  })

  // collapse/expand configuration
  jQuery('body.page-node-6 fieldset').each(function() {
    jQuery(this).children('legend').addClass('collapse')
    jQuery(this).children('div').hide()
  })
  jQuery('body.page-node-6 legend').click(function() {
    if ( jQuery(this).parent('fieldset').children('div').is(':visible') ) {
      jQuery(this).parent('fieldset').children('div').hide()
      jQuery(this).addClass('collapse').removeClass('expand')
    } else {
      jQuery(this).parent('fieldset').children('div').show()
      jQuery(this).addClass('expand').removeClass('collapse')
    }
  })

  //contato
  if (jQuery('form#webform-client-form-13 input#edit-submitted-nome').val()=="") {
	  jQuery('form#webform-client-form-13 input#edit-submitted-nome').val("Nome")
  }
  if (jQuery('form#webform-client-form-13 input#edit-submitted-email').val()=="") {
	  jQuery('form#webform-client-form-13 input#edit-submitted-email').val("Email")
  }
  if (jQuery('form#webform-client-form-13 input#edit-submitted-telefone').val()=="") {
	  jQuery('form#webform-client-form-13 input#edit-submitted-telefone').val("Telefone")
  }
  jQuery('form#webform-client-form-13 input#edit-submitted-nome').focus(function() {
    if (jQuery(this).val() == "Nome") {
      jQuery(this).val('')
    }
  })
  jQuery('form#webform-client-form-13 input#edit-submitted-nome').blur(function() {
    if (jQuery(this).val() == "") {
      jQuery(this).val('Nome')
    }
  })

  jQuery('form#webform-client-form-13 input#edit-submitted-email').focus(function() {
    if (jQuery(this).val() == "Email") {
      jQuery(this).val('')
    }
  })
  jQuery('form#webform-client-form-13 input#edit-submitted-email').blur(function() {
    if (jQuery(this).val() == "") {
      jQuery(this).val('Email')
    }
  })

  jQuery('form#webform-client-form-13 input#edit-submitted-telefone').focus(function() {
    if (jQuery(this).val() == "Telefone") {
      jQuery(this).val('')
    }
  })
  jQuery('form#webform-client-form-13 input#edit-submitted-telefone').blur(function() {
    if (jQuery(this).val() == "") {
      jQuery(this).val('Telefone')
    }
  })

  //Atualizacao
  jQuery('div#block-views-atualizacoes-block li').each(function() {
    var nid = jQuery(this).children('div.views-field-nid').children('span').html()
    jQuery(this).html(jQuery(this).html().replace('@nid', nid))
  })

  //Filtra curso
  jQuery('div.content div#cursos div#search_filter ul li').click(function() {
    if (jQuery(this).html() == "Todos") {
      jQuery('form#views-exposed-form-show-all-courses-block input#edit-title').val("")
    } else {
      jQuery('form#views-exposed-form-show-all-courses-block input#edit-title').val(jQuery(this).html())
    }
    jQuery('form#views-exposed-form-show-all-courses-block input#edit-submit-show-all-courses').click()
  })
  
  // Quiz page
  if (jQuery('body.page-node-76')) {
    jQuery('#block-views-tabela-quiz-block').addClass('active')
  }
  
  jQuery('#tabs #ranking').click(function() {
	  if (!('#block-views-tabela-quiz-block').is(':visible')) {
	    jQuery('.active').hide()
	    jQuery('#block-views-tabela-quiz-block').addClass('active').show()
	  }
	})

	jQuery('#tabs #fotos').click(function() {
	  if (!('#block-views-quiz-galery-block-1').is(':visible')) {
	    jQuery('.active').hide()
	    jQuery('#block-views-quiz-galery-block-1').addClass('active').show()
	  }
	})
  
})

function showSignUpBlock () {
  jQuery('div#block-block-9 a.showBlock').hide();
  jQuery('div#block-block-9 div#sign-up-block').show();
}