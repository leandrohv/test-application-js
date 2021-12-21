var pesquisaEmpresa = null;

function LiberarCache()
{
	window.document.forms[0].reset();
}

// Método para armazenar a posição do scroll do div da treeview
function GuardarPosicaoScroll()
{
	var div = window.document.getElementById('divPagina'); 
	var posicaoScroll = window.document.getElementById('ctl00_hidPosicao'); 
	
	if(posicaoScroll != null)
	{
		posicaoScroll.value = div.scrollTop;		
	}
}

// Método para reposicionar o scroll do div da treeview
function ReposicionarScroll()
{
	var div = window.document.getElementById('divPagina'); 
	var posicaoScroll = window.document.getElementById('ctl00_hidPosicao'); 
	
	if(div != null)
	{
		div.scrollTop = posicaoScroll.value;
	}
}

// Localiza e seta o foco para o objeto indicado
function SetarFocoObjeto(idObjeto)
{
	var objeto = window.document.getElementById(idObjeto); 
	
	if(objeto == null) { return; }
	   
	if ((objeto.type != 'hidden') && (objeto .type != 'select-one')) 
	{
		if (objeto.disabled != true) 
		{
			objeto.focus();
        }
	}    
}

// Exibe uma messagebox solicitando ao usuário a confirmação ou cancelamento de uma ação
function MsgConfirmar(texto,botao)
{       
    if (confirm(texto))
    {
        __doPostBack(botao);
        return true;    
    }    
   
   return false;
}


// Exibe uma messagebox solicitando ao usuário a confirmação ou cancelamento de uma ação
function MsgConfirmarRetorno(texto,idHidConfirmar)
{ 
	// Exibe a mensagem e armazena a resposta do usuário em uma variável
	var ret = confirm(texto); 
	// Localiza o controle hidden que armazena a resposta entre os posts
	var hid = window.document.getElementById(idHidConfirmar); 
	
	// Verifica qual foi a resposta 
	if(ret) 
	{
		// Confirmou a ação
		hid.value = '1';
	}else{ 
		// Cancelou a ação
		hid.value = '0';
	}
	return ret;
}

// Exibe uma messagebox solicitando ao usuário a confirmação ou cancelamento de uma ação
function MsgConfirmarPostBack(texto,botaoAcao,idHidConfirmar)
{ 
	// Exibe a mensagem e armazena a resposta do usuário em uma variável
	var ret = confirm(texto); 
	// Localiza o controle hidden que armazena a resposta entre os posts
	var hid = document.getElementById(idHidConfirmar); 				
	// Verifica qual foi a resposta 	
	if(ret) 
	{
		// Confirmou a ação
		hid.value = '1';
		__doPostBack(botaoAcao, null);		
	}else{ 
		// Cancelou a ação
		hid.value = '0';
	} 
}

// Exibe uma messagebox solicitando ao usuário a confirmação ou cancelamento de uma ação
function MsgConfirmarPostBackCancel(texto,botaoAcao,idHidConfirmar,botaoCancelar)
{ 
	// Exibe a mensagem e armazena a resposta do usuário em uma variável
	var ret = confirm(texto); 
	// Localiza o controle hidden que armazena a resposta entre os posts
	var hid = document.getElementById(idHidConfirmar); 				
	// Verifica qual foi a resposta 	
	if(ret) 
	{
		// Confirmou a ação
		hid.value = '1';
		__doPostBack(botaoAcao, null);	
	}else{ 
		// Cancelou a ação
		hid.value = '0';
		__doPostBack(botaoCancelar, null);
	} 
}

function MsgConfirmarPostBackCancelSucess(texto,botaoAcao,idHidConfirmar,botaoCancelar,sucessMessage)
{ 
	// Exibe a mensagem e armazena a resposta do usuário em uma variável
	var ret = confirm(texto); 
	// Localiza o controle hidden que armazena a resposta entre os posts
	var hid = document.getElementById(idHidConfirmar); 				
	// Verifica qual foi a resposta 	
	if(ret) 
	{
		// Confirmou a ação
		hid.value = '1';
		__doPostBack(botaoAcao, '');
		
		alert(sucessMessage);
	}else{ 
		// Cancelou a ação
		hid.value = '0';
		__doPostBack(botaoCancelar, null);
	} 
}

// Exibe uma messagebox com um alerta ao usuário sobe o resultado de uma ação
function MsgAvisar(texto)
{ 
    texto = texto.replace(/<br>/g,"\n");
	alert(texto);
}

// Exibe uma messagebox com um alerta ao usuário sobre o resultado de uma ação e redireciona para potra página
function MsgAvisarRedirecionar(texto, urlDestino)
{ 
	alert(texto);
	
	if(BrowserDetect.browser == 'Explorer')
	{
		window.navigate(urlDestino);
	}
	else
	{
		window.location.href = urlDestino;
	}	
}

// Exibe o diálogo de impressão do browser para o usuário
function Imprimir()
{
	window.print();
}

// Abre uma janela PopUp para o usuário, centralizando automaticamente 
function AbrirPopUp(url)
{
	var largura = screen.availWidth - 100;
	var altura = screen.availHeight - 100;
	var posHoriz = (screen.availWidth - largura) / 2;
	var posVert = (screen.availHeight - altura) / 2; 
	
	window.open(url, '', 'width = ' + largura + ', height = ' + altura + ', top = ' + posVert + ', left = ' + posHoriz + ', scrollbars = yes');
}

// Abre uma janela PopUp para o usuário com o tamanho definido e centralizada 
function AbrirPopUpCentral(url, altura, largura)
{
	var posHoriz = (screen.availWidth - largura) / 2;
	var posVert = (screen.availHeight - altura) / 2; 
	window.open(url, '', 'width = ' + largura + ', height = ' + altura + ', top = ' + posVert + ', left = ' + posHoriz + ', scrollbars = auto');
}

// Efetua o post num Form e indica qual o controle responsável
function Postar(idControle, idHidden)
{
	var hidden = document.getElementById(idHidden);
	hidden.value = idControle;
	window.document.forms[0].submit();	
}

// Força um submit no formulário pai e indica se a tela deve ser fechada ou não
function PostarFormPai(fechar)
{
	window.opener.document.forms[0].submit();
	if(fechar == '1'){ window.close(); }
}

// Funcionalidade de marcar/desmarcar todos os checkbox de uma tabela em uma colula determinada
function SelecionarCheck(tabela, coluna)
{
	var tbl = document.getElementById(tabela);
	var chkTodos = tbl.rows[0].cells[coluna].all[0];

	for(i = 1; i < tbl.rows.length; i++)
	{
		var chk = tbl.rows[i].cells[coluna].all[0];
		chk.checked = chkTodos.checked;
	}
}

// Limita a quantidade de caracteres de um TextArea
function LimitarCaracter(textArea, limite)
{
	var texto = new String();
	texto = textArea.innerText;
	if (texto.substr((limite - 1), 1) != '') 
	{
	  event.returnValue=false;
      return false;
    } 	
}

// Método para chamada da execução da máscara 
function Mascara(o,f)
{
    v_obj=o
    v_fun=f
    setTimeout('ExecMascara()',1)
}

// Executsa o método de máscara de entrada configurado no controle
function ExecMascara()
{
    v_obj.value=v_fun(v_obj.value)
}

// Máscara que somente aceita a digitação de dados numéricos 
function Numeros(v)
{
	return v.replace(/\D/g,'')
}

// Formata alguns estilos de acordo com o browser selecionado
function FormatarConteudo(nomeBrowser)
{
	/*var fdsConteudo = document.getElementById('fdsConteudo');
	var divPagina = document.getElementById('divPagina');
	var lblTitulo = document.getElementById('ctl00_lblTitulo');
	var tdTitulo = document.getElementById('tdTitulo');
	var divCorpo = document.getElementById('divCorpo');
    
    alert(nomeBrowser);
    
	if(nomeBrowser == 'Explorer')
	{
        divCorpo.style.height = '440px';
	    divPagina.style.height = '340px';
	}
	else if(nomeBrowser == 'Firefox')
	{
	    alert(nomeBrowser);
		//divCorpo.style.height = '430px';
		divPagina.style.height = '600px';
		
		alert(divPagina.style.height);
		//tdTitulo.style.paddingLeft = '2px';
	}
	else if(nomeBrowser == 'Mozilla')
	{
		divPagina.style.height = '340px';
		tdTitulo.style.paddingLeft = '3px';
	}
	else if(nomeBrowser == 'Chrome')
	{
        divPagina.style.height = '380px';
		tdTitulo.style.paddingLeft = '3px';
	}
	else
	{
		alert('Atenção:\nSeu navegador não foi reconhecido, a configuração padrão do sistema será utilizada');
		divPagina.style.height = '340px';
	}
	
	var scnWid,scnHei;
	if (self.innerHeight) // all except Explorer
	{
		scnHei = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
		// Explorer 6 Strict Mode
	{
		scnHei = document.documentElement.clientHeight;
	}
	else if (document.body) // other Explorers
	{
		scnHei = document.body.clientHeight;
	}
	if(scnHei < 570)
	{
	    scnHei = 570;
	}
	//divPagina.style.height = scnHei - 250
	*/
}

// Formata alguns estilos de acordo com o browser selecionado
function FormatarConteudoLogin(nomeBrowser)
{
	var tblConteudo = document.getElementById('tblConteudo');
	
	if(nomeBrowser == 'Explorer')
	{
		tblConteudo.style.height = '475px';
	}
	else if(nomeBrowser == 'Mozilla')
	{
		tblConteudo.style.height = '500px';
	}
	else if(nomeBrowser == 'Firefox')
	{
		tblConteudo.style.height = '515px';
	}
	else
	{
		alert('Atenção:\nSeu navegador não foi reconhecido, a configuração padrão do sistema será utilizada');
	}	
}

// Máscaras
function FormataCampo(Campo,teclapres,mascara)
{
    var charCode = (teclapres.which) ? teclapres.which : teclapres.keyCode;
   
    evt = (teclapres) ? teclapres : window.event;   
    DesabilitarEvento(evt); 
    
   if((charCode >= 42) && (charCode <= 47) || 
	  (charCode >= 97) && (charCode <= 105) ||   
	  (charCode == 16) ||
	  (charCode == 40) || (charCode == 41))
    {     
     evt.returnValue=false;
     return false; 
    }
            
    //pegando o tamanho do texto da caixa de texto com delay de -1 no event 
    //ou seja o caractere que foi digitado não será contado. 
    strtext = Campo.value;
    tamtext = strtext.length;
    //pegando o tamanho da mascara 
    tammask = mascara.length;
    //criando um array para guardar cada caractere da máscara 
    arrmask = new Array(tammask);
    //jogando os caracteres para o vetor 
    for (var i = 0 ; i < tammask; i++)
    { 
        arrmask[i] = mascara.slice(i,i+1);
    } 
    //alert (teclapres.keyCode) 
    //começando o trabalho sujo     
    
    // Bloqueia o shift dentro do input //
    if(window.event)
    {
		var shift=window.event.shiftKey;
		if (shift)
		{		
		event.keyCode=0; 
		event.returnValue=false; 			
		}
	}
	else if(teclapres.shiftKey)// FireFox
	{ 	 		 	
 		return false;
	}	 
 
    if (((((arrmask[tamtext] == '#') || (arrmask[tamtext] == '9'))) || (((arrmask[tamtext+1] != '#') || (arrmask[tamtext+1] != '9')))))
    { 
        if (
            (charCode >= 96 && charCode <= 105) || 
            (charCode >= 48 && charCode <= 57) || 
            (charCode >= 37 && charCode <= 40) || 
            (charCode == 8) || 
            (charCode == 9) || 
            (charCode == 13) || 
            (charCode == 46) ||
	        (charCode == 40) ||
	        (charCode == 41)
            )        
        {             
            Organiza_Casa(Campo,arrmask[tamtext],charCode,strtext);
        } 
        else
        { 
            //Detona_Event(Campo,strtext);            
            return false;
        } 
    } 
    
    else    
    {//Aqui funcionaria a mascara para números mas eu ainda não implementei 
        if ((arrmask[tamtext] == 'A')) 
        { 
            charupper = teclapres.valueOf();
            //charupper = charupper.toUpperCase();
            Detona_Event(Campo,strtext,teclapres);
            masktext = strtext + charupper;
            Campo.value = masktext;
        } 
    }     
} 

function RemoverEspeciais(objeto)
{     
    var especiais = new Array('-','=','+','´','`','[',']','{','}','^','~',',','<','.','>',';',':','?','!','@','#','$','%','¨','&','*','(',')','_','+','\'');
    var texto = new String(objeto.value);
    
    for(i=0; i < especiais.length; i++)
    {
       if(texto.indexOf(especiais[i])>-1)
       {
          texto = texto.replace(especiais[i], '');
       }        
    }
    
    objeto.value = texto;
}

function Organiza_Casa(Campo,arrpos,teclapres_key,strtext)
{ 
    if (((arrpos == '/') || (arrpos == '.') || (arrpos == ',') || (arrpos == ':') || (arrpos == ' ') || (arrpos == '-') || (arrpos == '(') || (arrpos == ')')) && !(teclapres_key == 8))
    { 
        separador = arrpos;
        masktext = strtext + separador;
        Campo.value = masktext;
    } 
} 

function Detona_Event(Campo,strtext,evt)
{ 
    if (strtext != '') 
    { 
        Campo.value = strtext;
    } 
}

function PreencherCamposEmpresa(sender, campoId ,campoNome, valorId, valorNome)
{    
    if(campoId != '')
    {        
        window.opener.document.getElementById(campoId).value = valorId;        
    }
      
    if(campoNome != '')
    {
        window.opener.document.getElementById(campoNome).value = valorNome;
    }

    if(sender != '')
    {
        opener.__doPostBack(sender,'');
    }

    window.close();
}

function Trim(str){return str.replace(/^\s+|\s+$/g,'');}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : evt.keyCode;      
    
    if(((charCode >= 37) && (charCode <= 40)) || 
       (charCode == 8) || 
       (charCode == 9) || 
       (charCode == 13) || 
       (charCode == 46))
    return true;    
    
    if ((charCode >= 48 && charCode <= 57) ||
        (charCode >= 96 && charCode <= 105))
    {  
        return true;  
    } 
    return false;
}

function getIndex(input) 
{   
    var index = -1, i = 0, found = false;   
    while (i < input.form.length && index == -1)   
        if (input.form[i] == input) 
        {  
            index = i;  
            if (i < (input.form.length -1)) 
            {  
                if (input.form[i+1].type == 'hidden') 
                {  
                    index++;   
                }  
                if (input.form[i+1].type == 'button' && input.form[i+1].id == 'tabstopfalse') 
                {  
                    index++;   
                }  
            }  
        }  
        else   
            i++;   
    return index;   
}  
   

function isNumberKeyTab(input, evt)
{    
    var charCode = (evt.which) ? evt.which : evt.keyCode;      
    
    if (charCode == 13)
    {		
		return false;		
        /*var ind = 0;        
        ind = getIndex(input);
        try
        {
            input.form[++ind].focus();
        }catch(e)
        {}*/
    }  
    
    if(((charCode >= 37) && (charCode <= 40)) || 
       (charCode == 8) || 
       (charCode == 9) || 
       //(charCode == 13) || 
       (charCode == 46))
    return true;    
    
    if ((charCode == 17) ||
		(charCode >= 48 && charCode <= 57) ||
        (charCode >= 96 && charCode <= 105)
       )
    {  
        return true;  
    } 
    return false;
}

function TABEnter(evt)
{
	var key = window.event ? event.keyCode : evt.which;
	var target = evt.target ? evt.target : evt.srcElement;
	
	if(key == 13)
	{
	    if(navigator.appName.indexOf("Explorer") != -1)
	    {
	        event.keyCode = 9;
	    }
	    else //Firefox, Chrome
	    {
	        var flag = false;
	        for(i=0; i<document.forms[0].elements.length; i++)
	        {
	            if(flag == true)
	            {
	                if(document.forms[0].elements[i].id.indexOf("btnCausa1") == -1)
	                {
	                    var proximoCampo = document.getElementById(document.forms[0].elements[i].id);
	                    if(!proximoCampo.disabled)
	                    {
	                        proximoCampo.focus();
	                        break;
	                    }
	                }
	            }
	            
	            if(target.id == document.forms[0].elements[i].id) 
	                flag = true;
	        }
	    }
	}
}

function pulaCampo(evt)
{
    var key = window.event ? event.keyCode : evt.which;
	var target = evt.target ? evt.target : evt.srcElement;
	
	if(key == 13 || key == 9)
	{
	    if(navigator.appName.indexOf("Explorer") != -1)
        {
            event.keyCode = 9;
        }
        else //Firefox, Chrome
        {
            var flag = false;
            for(i=0; i<document.forms[0].elements.length; i++)
            {
                if(flag == true)
                {
                    if(document.forms[0].elements[i].id.indexOf("btnCausa1") == -1)
                    {
                        var proximoCampo = document.getElementById(document.forms[0].elements[i].id);
                        if(!proximoCampo.disabled)
                        {
                            proximoCampo.focus();
                            break;
                        }
                    }
                }
                
                if(target.id == document.forms[0].elements[i].id) 
                    flag = true;
            }
        }
    }
    else
    {
        if(navigator.appName.indexOf("Explorer") != -1)
            evt.returnValue = false;
        else
        {
            var flag = false;
            for(i=0; i<document.forms[0].elements.length; i++)
            {
                if(flag == true)
                {
                    if(document.forms[0].elements[i].id.indexOf("btnCausa1") == -1)
                    {
                        var proximoCampo = document.getElementById(document.forms[0].elements[i].id);
                        if(!proximoCampo.disabled)
                        {
                            proximoCampo.focus();
                            break;
                        }
                    }
                }
                
                if(target.id == document.forms[0].elements[i].id) 
                    flag = true;
            }
        }
    }
}

function FecharPesquisaEmpresa()
{
    if(pesquisaEmpresa != null)
    {
        pesquisaEmpresa.close();
    }
}

// Desabilita a tecla ENTER
function DesabilitarEnter(e)
{	
	var key;     
    
    if(window.event)
    {
		key = window.event.keyCode;// IE
    }   
	else
	{	 
		key = e.which; // Firefox / Mozilla		
	}

	return (key != 13);
}

function DesabilitarEvento(evt) 
{
   evt = (evt) ? evt : window.event;
   evt.cancelBubble = true;      
}

function ConfigurarMaxLength(objID, max)
{
	var obj = document.getElementById(objID);

	if (obj != null)
	{
		obj.maxLength = max;

		//Processa os eventos de entrada de dados.                    
		obj.onpaste = ValidarMaxLength;
		obj.onkeydown = ValidarMaxLength;
		obj.ondrop = ValidarMaxLength;
	}
}

function ValidarMaxLength()
{
	var obj = event.srcElement;
	
	switch (event.type)
	{
		case 'keydown':
			if (!ValidarTecla(event.keyCode))
			{
				if (obj.value.length >= obj.maxLength)
				{
					return false;
				}
			}                                            
			break;
	                
		case 'paste':
			var str = clipboardData.getData('Text');
			
			if (obj.value.length >= obj.maxLength)
			{
				return false;
			}
	                
			if ((obj.value.length + str.length) > obj.maxLength)
			{
				var i = obj.maxLength - obj.value.length;
				str = str.substring(0, i);
			}

			clipboardData.setData('Text', str);                                   
			break;
	                
		case 'drop':
			var str = event.dataTransfer.getData('Text');
			
			if (obj.value.length >= obj.maxLength)
			{
				return false;
			}
            
			if ((obj.value.length + str.length) > obj.maxLength)
			{
				var i = obj.maxLength - obj.value.length;
				str = str.substring(0, i);
			}

			event.dataTransfer.setData('Text', str);                            
			break;
	                
		default:
			return false;
	}

	return true;
}

//onpress
function BloqueaCaracter(id, numCaracteres, e) 
{  	   	 
   var valor = new String(); 
   var valor = id.value;   
   evt = (e) ? e : window.event;
   
   DesabilitarEvento(evt); 
   
   if(valor.length>=numCaracteres)
   { 
	 // alert('mais que '+numCaracteres);     	
     var whichCode = (window.Event) ? e.which : e.keyCode;         
     if(whichCode == 8 || whichCode == 0) {evt.returnValue=true; return true; } // aceita Tab e Back Space                
     
     evt.returnValue=false;
     return false;
     
   }else{             
      evt.returnValue=true;
      return true;    
   } 
	
}   

//só no IE - onpaste/oncopy/oncut
function ValidarCopyPaste(obj, numCaracteres)
{ 		
	var texto = new String();
	texto = obj.value;	
		
	var str = clipboardData.getData('Text');
	
	if(texto.length >= numCaracteres) 
	{	 
	 return false;
	}		
	
	if((texto.length + str.length) >= numCaracteres) 
	{	
	  var i = numCaracteres - texto.length;
	  str = str.substring(0, i);	  	  
	}		
	
	clipboardData.setData('Text', str); 	
	return true;	
}

function ValidarPaste()
{
	var texto = new String();
	var valor = new Number();
	
	texto = window.clipboardData.getData('Text');	
	valor = parseInt(texto)
	
	if(isNaN(valor))
	{
		window.clipboardData.setData('Text', '');
	}
	else
	{
		window.clipboardData.setData('Text', texto);
	}	
}

function ValidarDrop(evt)
{
	var texto = new String();
	var valor = new Number();
	
	texto = evt.dataTransfer.getData('Text');
	valor = parseInt(texto)
	
	if(isNaN(valor))
	{
		evt.dataTransfer.setData('Text', '');
	}
	else
	{
		evt.dataTransfer.setData('Text', texto);
	}	
}

function ValidarNumero(textBox)
{
	var texto = new String();
	var valor = new Number();
	
	texto = textBox.value;
	valor = parseInt(texto)
	
	if(isNaN(valor))
	{
		textBox.value = '';
	}
	else
	{
		textBox.value = valor;
	}	
}

//Calcula a quantidade de caracteres que podem ser digitados
function ContaCaracteres(textbox, contador)
{
    var counter = document.getElementById(contador);

    if (textbox.value.length > 800)
        textbox.value = textbox.value.substring(0, 800);
    else
        counter.innerText = 800 - textbox.value.length;
}

//Valida se o mes informado é valido
function validaMesAno(obj){
    var valores = obj.value.split("/");
    var mes = parseInt(valores[0], 10);
    var ano = parseInt(valores[1], 10);   
    
    if(mes < 1 || mes > 12)
    {
        alert("O mês informado é inválido");
        obj.value = "";
    }
    
    if(ano == 0000)
    {
        alert("O ano informado é inválido");
        obj.value = "";
    }
}

//Função que substitui todas as ocorrencias de caracteres encontradas pela definida
function replaceAll(str, de, para){
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}