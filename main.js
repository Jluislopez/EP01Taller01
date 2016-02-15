 	var areacirculo = function(radio)
    {
    	var area = Math.PI * (Math.pow(radio,2));
    	return area;
    }

	var areacuadrado = function(lado)
    {
    	var area = (Math.pow(lado,2));
    	return area;
    }

    var areatriangulo = function(base,altura)
    {
    	var area = ((base*altura) / 2);
    	return area;
    }
    
    // Contador de Vocales
    var vocales = function(palabra)
    {
    	
    	var palabraCalculo = palabra.toLowerCase(); // Conversión a minúsculas
    	var contarVocal = [["a", 0],["e", 0],["i", 0],["o", 0],["u", 0]]; // Array que contiene las vocales
    	var longitud = 0; // Variable de relleno para el fin del ternario

    	// For que recorre la palabra ingresada y la iguala estrictamente a cada una de las vocales 

    	for (var i = 0; i <= (palabraCalculo.length - 1); i++)
    	{
    		 palabraCalculo.charAt(i) === contarVocal[0][0] ? contarVocal[0][1]++ :
    		 palabraCalculo.charAt(i) === contarVocal[1][0] ? contarVocal[1][1]++ :
    		 palabraCalculo.charAt(i) === contarVocal[2][0] ? contarVocal[2][1]++ :
    		 palabraCalculo.charAt(i) === contarVocal[3][0] ? contarVocal[3][1]++ :
    		 palabraCalculo.charAt(i) === contarVocal[4][0] ? contarVocal[4][1]++ :
    		 longitud ++;
       	}
        
        // For que recorre el Array para pintarlo en la consola

       	for (var i = 0; i <= contarVocal.length - 1; i++)
       	{
       		console.log(contarVocal[i]);
       	}
       	
    }

    var consonantes = function(palabra)
    {
    	var palabraCalculo = palabra.toLowerCase();
    	var contarVocal = [["a", 0],["e", 0],["i", 0],["o", 0],["u", 0]];
        var consonantes = [];

      	for (var i = 0; i <= (palabraCalculo.length - 1); i++)
    	{
    		var exists = 0;
    		 if(palabraCalculo.charAt(i) !== contarVocal[0][0] && palabraCalculo.charAt(i) !== contarVocal[1][0]
    		 && palabraCalculo.charAt(i) !== contarVocal[2][0] && palabraCalculo.charAt(i) !== contarVocal[3][0]
    		 && palabraCalculo.charAt(i) !== contarVocal[4][0])
    		 { 
	    		 if(consonantes.length !== 0) 
	    		 {
		    		 for (var i = 0; i <= (consonantes.length - 1); i++)
		    		 {
		    		 	exists = consonantes[i][0] === palabraCalculo.charAt(i)
		    		 	? 1 : 0;
		    		 	exists > 0 ? consonantes[i][1]++ : consonantes.push([palabraCalculo.charAt(i), 1]);    		 	
		    		 } 	    		 
		    	 } 
	    	}
    	    else
    	    {
    	 		consonantes.push([palabraCalculo.charAt(i), 1]); 
    	    }		 
    	}  		
    	

        for (var i = 0; i <= consonantes.length - 1; i++)
       	{
       		console.log(consonantes[i]);
       	}

    }

        /*var palabraCalculo = "nana";
        var contarVocal = [["a", 0],["e", 0],["i", 0],["o", 0],["u", 0]];
        var consonantes = [];

      	for (var i = 0; i <= (palabraCalculo.length - 1); i++)
    	{
    		if(palabraCalculo.charAt(i) !== contarVocal[0][0] && palabraCalculo.charAt(i) !== contarVocal[1][0]
    		 && palabraCalculo.charAt(i) !== contarVocal[2][0] && palabraCalculo.charAt(i) !== contarVocal[3][0]
    		 && palabraCalculo.charAt(i) !== contarVocal[4][0])
    		 {    		 	
    		 	if(consonantes.length !== 0) 
	    		 {
	    		 	console.log(consonantes.length - 1); 
	    		    /*for (var i = 0; i < (consonantes.length - 1); i++)
		    		 {
		    		 	console.log(i); 		 	
		    		 }*/		  			 	
	    	    /* }
	    	     else
	    	     {
	    	     	consonantes.push([palabraCalculo.charAt(i), 1]);
	    	     	
	    	     }
    		 }   
    		 else
    		 {
    		 	
    		 } 		
	    }*/
    	    