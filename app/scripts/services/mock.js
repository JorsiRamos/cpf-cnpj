'use strict';

/**
 * @ngdoc service
 * @name cpfCnpjApp.mock
 * @description
 * # mock
 * Service in the cpfCnpjApp.
 */
angular.module('cpfCnpjApp')
  .service('mock', function () {
    var $public = this;
    
    $public.mockInit = function(){
    	var mock = [  
		   {  
		      "status":"SEARCH_SUCCESS",
		      "message":"Busca de dominio e sugestoes efetuada com sucesso",
		      "domain":"testecpfdaora.tur.br",
		      "extension":".tur.br",
		      "prices":[  
		         {  
		            "periodicity":1,
		            "value":64.9,
		            "promotion":""
		         },
		         {  
		            "periodicity":2,
		            "value":129.8,
		            "promotion":""
		         },
		         {  
		            "periodicity":5,
		            "value":324.5,
		            "promotion":""
		         },
		         {  
		            "periodicity":10,
		            "value":649,
		            "promotion":""
		         }
		      ],
		      "periodicityDefault":0,
		      "yearSelected":1,
		      "requirements":{  
		         "textArray":[  
		            "Esse registro exige um CNPJ"
		         ],
		         "type":"J",
		         "document":{  
		            "name":"",
		            "number":""
		         }
		      },
		      "avaliable":true,
		      "totalPrice":64.9,
		      "BLOCK":{  
		         "BLOCK_1":"",
		         "BLOCK_2":"",
		         "BLOCK_3":"<div class='block-flex-1 flex-padding-1 flex-padding-reset-right'><div class='istambul-block-text-2'><div class='basePrice'><span class='currency'>R$</span><span class='price'> 64,90</span><span class='period'>/ ano</span></div><p class='total'>Total: R$  64,90</p></div></div>",
		         "LIST_EXTENSIONS":[  
		            "*"
		         ],
		         "isDefault":true
		      },
		      "isChecked":true
		   },
		   {  
		      "status":"SEARCH_SUCCESS",
		      "message":"Busca de dominio e sugestoes efetuada com sucesso",
		      "domain":"testecpfdaora.adv.br",
		      "extension":".adv.br",
		      "prices":[  
		         {  
		            "periodicity":1,
		            "value":64.9,
		            "promotion":""
		         },
		         {  
		            "periodicity":2,
		            "value":129.8,
		            "promotion":""
		         },
		         {  
		            "periodicity":5,
		            "value":324.5,
		            "promotion":""
		         },
		         {  
		            "periodicity":10,
		            "value":649,
		            "promotion":""
		         }
		      ],
		      "periodicityDefault":0,
		      "yearSelected":1,
		      "requirements":{  
		         "textArray":[  
		            "Esse registro exige um CPF"
		         ],
		         "type":"C",
		         "document":{  
		            "name":"",
		            "number":""
		         }
		      },
		      "avaliable":true,
		      "totalPrice":64.9,
		      "BLOCK":{  
		         "BLOCK_1":"",
		         "BLOCK_2":"",
		         "BLOCK_3":"<div class='block-flex-1 flex-padding-1 flex-padding-reset-right'><div class='istambul-block-text-2'><div class='basePrice'><span class='currency'>R$</span><span class='price'> 64,90</span><span class='period'>/ ano</span></div><p class='total'>Total: R$  64,90</p></div></div>",
		         "LIST_EXTENSIONS":[  
		            "*"
		         ],
		         "isDefault":true
		      },
		      "isChecked":true
		   },
		   {  
		      "status":"SEARCH_SUCCESS",
		      "message":"Busca de dominio e sugestoes efetuada com sucesso",
		      "domain":"testecpfdaora.com.br",
		      "extension":".com.br",
		      "prices":[  
		         {  
		            "periodicity":1,
		            "value":49.9,
		            "promotion":""
		         },
		         {  
		            "periodicity":2,
		            "value":99.8,
		            "promotion":""
		         },
		         {  
		            "periodicity":5,
		            "value":249.5,
		            "promotion":""
		         },
		         {  
		            "periodicity":10,
		            "value":499.1,
		            "promotion":""
		         }
		      ],
		      "periodicityDefault":0,
		      "yearSelected":1,
		      "requirements":{  
		         "textArray":[  
		            "Esse registro exige um CPF ou CNPJ"
		         ],
		         "type":"A",
		         "document":{  
		            "name":"",
		            "number":""
		         }
		      },
		      "avaliable":true,
		      "totalPrice":49.9,
		      "BLOCK":{  
		         "BLOCK_1":"",
		         "BLOCK_2":"",
		         "BLOCK_3":"<div class='block-flex-1 flex-padding-1 flex-padding-reset-right'><div class='istambul-block-text-2'><div class='basePrice'><span class='currency'>R$</span><span class='price'> 49,90</span><span class='period'>/ ano</span></div><p class='total'>Total: R$  49,90</p></div></div>",
		         "LIST_EXTENSIONS":[  
		            "*"
		         ],
		         "isDefault":true
		      },
		      "isChecked":true
		   }
		]

		return mock;
    };


  });
