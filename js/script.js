            
function skstrok(){
            
  var chisloFigur = document.getElementById('figures').value.split('\n').length; //Определяем число введенных фигур
  var ffig = document.getElementById('figures').value.split('\n'); //Делим текст на строки. Получаем массив из введенных строк
  
  for (let i = 0; i < chisloFigur; i++) { 
    //Проверяем верно ли введены данные
    var emptyStroka = ffig[i].match(/^\s*$/);

    //линии
    var ffigl1 = ffig[i].match(/[\s?]+\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigl2 = ffig[i].match(/[\s?]+\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);

    //прямоугольники
    var ffigr = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s?/);
    var ffigrc = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigrca = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigrb = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigrba = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigr1 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigr2 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigr3 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigr4 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    
    //треугольники
    var ffigt = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s?/);
    var ffigtc = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigtca = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigtb = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigtba = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigt1 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigt2 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigt3 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigt4 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s\[\d+\,\s\d+\]\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    
    //круги
    var ffigc = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s?/);
    var ffigcc = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigcca = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigcb = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigcba = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigc1 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigc2 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigc3 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigc4 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r\s\d+\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    
    //эллипсы
    var ffige = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s?/);
    var ffigec = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigeca = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffigeb = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffigeba = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffige1 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffige2 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s-c\srgb\(\d+\,\s\d+\,\s\d+\)\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);
    var ffige3 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s-b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s?/);
    var ffige4 = ffig[i].match(/\w+\s-p\s\[\d+\,\s\d+\]\s-r1\s\d+\s-r2\s\d+\s-c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)\s-b\srgb\(\d+\,\s\d+\,\s\d+\)\s?/);

      if ( ffig[i] == emptyStroka || 
        ffig[i] == ffigl1 || ffig[i] == ffigl2 || //линии

        ffig[i] == ffigr || //прямоугольники
        ffig[i] == ffigrc || ffig[i] == ffigrca || ffig[i] == ffigrb || ffig[i] == ffigrba ||
        ffig[i] == ffigr1 || ffig[i] == ffigr2 || ffig[i] == ffigr3 || ffig[i] == ffigr4 || 
        
        ffig[i] == ffigt || //треугольники
        ffig[i] == ffigtc || ffig[i] == ffigtca || ffig[i] == ffigtb || ffig[i] == ffigtba || 
        ffig[i] == ffigt1 || ffig[i] == ffigt2 || ffig[i] == ffigt3 || ffig[i] == ffigt4 || 

        ffig[i] == ffigc || //круги
        ffig[i] == ffigcc || ffig[i] == ffigcca || ffig[i] == ffigcb || ffig[i] == ffigcba || 
        ffig[i] == ffigc1 || ffig[i] == ffigc2 || ffig[i] == ffigc3 || ffig[i] == ffigc4 || 

        ffig[i] == ffige || //эллипсы
        ffig[i] == ffigec || ffig[i] == ffigeca || ffig[i] == ffigeb || ffig[i] == ffigeba || 
        ffig[i] == ffige1 || ffig[i] == ffige2 || ffig[i] == ffige3 || ffig[i] == ffige4 ){

        //рисуем поле

          var canvas = document.getElementById('canvas');
          if (canvas.getContext){
          var ctx = canvas.getContext('2d');

            //организуем цикл по количеству фигур

            let t = []; //массив названий фигур
                
            for (let i = 0; i < chisloFigur; i++) { 
                t[i] = ffig[i].match(/\w+\S/); //первое слово - название фигуры     
            };

            for (let i = 0; i < chisloFigur; i++) { 
                  
              //ЛИНИЯ
    
              if (t[i] == 'line') { 
                let parametr = ffig[i].match(/\[(.*?)\]/g); //координаты основных точек фигуры
                let k1 = parametr[0].slice(1, parametr[0].length-1);
                let koordinata1 = k1.split(',');
                let k2 = parametr[1].substring(1, parametr[1].length-1);
                let koordinata2 = k2.split(',');
                let regexp = /-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                let colorLine = ffig[i].match(/-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                let cLine = regexp.test(colorLine);

                ctx.beginPath(); //Отрисовка линии

              if (cLine == true){ //цветная линия
                let colorLine1 = colorLine[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/); //цвет линии
                ctx.strokeStyle = colorLine1[0]; 
              }  else {
                ctx.strokeStyle = 'rgb(0, 0, 0)'; 
              }
                ctx.moveTo(koordinata1[0],koordinata1[1]);
                ctx.lineTo(koordinata2[0],koordinata2[1]);
                ctx.stroke();

              //ПРЯМОУГОЛЬНИК

              } else if (t[i] == 'rectangle') { 
                let parametr = ffig[i].match(/\[(.*?)\]/g); //координаты основных точек фигуры
                let k1 = parametr[0].slice(1, parametr[0].length-1);
                let koordinata1 = k1.split(',');
                let k2 = parametr[1].substring(1, parametr[1].length-1);
                let koordinata2 = k2.split(',');

                ctx.beginPath();

                let colorRect = ffig[i].match(/-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                let regexp = /-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                let cRect = regexp.test(colorRect);

                let backRect = ffig[i].match(/-b\srgb\(\d+\,\s\d+\,\s\d+\)| -b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                let regexp1 = /-b\srgb\(\d+\,\s\d+\,\s\d+\)| -b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                let bRect = regexp1.test(backRect);

              if (cRect == true){ //цветная линия
                let colorRect1 = colorRect[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/); //цвет линии
                ctx.strokeStyle = colorRect1[0]; 
              }  else {
                ctx.strokeStyle = 'rgb(0, 0, 0)'; 
              }

              if (bRect == true){ //есть заливка
                let backRect1 = backRect[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/); //цвет линии
                ctx.fillStyle = backRect1[0]; 
              }  else {
                ctx.fillStyle = 'rgba(0, 0, 0, 0)'; 
              }

              ctx.strokeRect(koordinata1[0],koordinata1[1],koordinata2[0],koordinata2[1]); //Отрисовка прямоугольника
              ctx.fillRect(koordinata1[0],koordinata1[1],koordinata2[0],koordinata2[1]);
  
                //ТРЕУГОЛЬНИК

              } else if (t[i] == 'triangle') { 
                let parametr = ffig[i].match(/\[(.*?)\]/g); //координаты основных точек фигуры
                
                let k1 = parametr[0].slice(1, parametr[0].length-1);
                let koordinata1 = k1.split(',');
                
                let k2 = parametr[1].substring(1, parametr[1].length-1);
                let koordinata2 = k2.split(',');
                
                let k3 = parametr[2].substring(1, parametr[2].length-1);
                let koordinata3 = k3.split(',');

                ctx.beginPath();

                let colorTriangle = ffig[i].match(/-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                let regexpT1 = /-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                let cTriangle = regexpT1.test(colorTriangle);

                let backTriangle = ffig[i].match(/-b\srgb\(\d+\,\s\d+\,\s\d+\)| -b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                let regexpT2 = /-b\srgb\(\d+\,\s\d+\,\s\d+\)| -b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                let bTriangle = regexpT2.test(backTriangle);

                if (cTriangle == true){ //цветная линия
                  let colorTriangle1 = colorTriangle[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/); //цвет линии
                  ctx.strokeStyle = colorTriangle1[0]; 
                }  else {
                  ctx.strokeStyle = 'rgb(0, 0, 0)'; 
                }

                if (bTriangle == true){ //есть заливка
                  let backTriangle1 = backTriangle[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);//заливка
                  ctx.fillStyle = backTriangle1[0]; 
                }  else {
                  ctx.fillStyle = 'rgba(0, 0, 0, 0)'; 
                }     

                ctx.moveTo(koordinata1[0],koordinata1[1]); //Отрисовка треугольника
                ctx.lineTo(koordinata2[0],koordinata2[1]);
                ctx.lineTo(koordinata3[0],koordinata3[1]);
                ctx.lineTo(koordinata1[0],koordinata1[1]);
                ctx.stroke();
                ctx.fill();
              
                //КРУГ

              } else if (t[i] == 'circle') {  

                let parametr = ffig[i].match(/\[(.*?)\]/g); //координаты основных точек фигуры
                let k1 = parametr[0].slice(1, parametr[0].length-1);
                
                let koordinata1 = k1.split(','); // Центр круга

                let r = ffig[i].match(/r\s\d+/);
                let radius = r[0].match(/\d+/);

                ctx.beginPath();

                let colorCircle = ffig[i].match(/-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                let regexpC1 = /-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                let cCircle = regexpC1.test(colorCircle);

                let backCircle = ffig[i].match(/-b\srgb\(\d+\,\s\d+\,\s\d+\)| -b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                let regexpC2 = /-b\srgb\(\d+\,\s\d+\,\s\d+\)| -b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                let bCircle = regexpC2.test(backCircle);

                if (cCircle == true){ //цветная линия
                  let colorCircle1 = colorCircle[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/); //цвет линии
                  ctx.strokeStyle = colorCircle1[0]; 
                }  else {
                  ctx.strokeStyle = 'rgb(0, 0, 0)'; 
                }

                if (bCircle == true){ //есть заливка
                  let backCircle1 = backCircle[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);//заливка
                  ctx.fillStyle = backCircle1[0]; 
                }  else {
                  ctx.fillStyle = 'rgba(0, 0, 0, 0)'; 
                }  
                ctx.arc(koordinata1[0],koordinata1[1],radius,0,Math.PI*2,true);
                ctx.stroke();
                ctx.fill();

                //ЭЛЛИПС

              } else if (t[i] == 'ellipse') { //Отрисовка эллипса
                  let parametr = ffig[i].match(/\[(.*?)\]/g); //координаты основных точек фигуры
                  let k1 = parametr[0].slice(1, parametr[0].length-1);
                  
                  let koordinata1 = k1.split(','); // Центр круга

                  let r = ffig[i].match(/r.\s\d+/g);
                  let radius1 = r[0].split(' ');
                  let radius2 = r[1].split(' ');

                  ctx.beginPath();

                  let colorEllipse = ffig[i].match(/-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                  let regexpE1 = /-c\srgb\(\d+\,\s\d+\,\s\d+\)| -c\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                  let cEllipse = regexpE1.test(colorEllipse);

                  let backEllipse = ffig[i].match(/-b\srgb\(\d+\,\s\d+\,\s\d+\)| -b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);
                  let regexpE2 = /-b\srgb\(\d+\,\s\d+\,\s\d+\)| -b\srgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/;
                  let bEllipse = regexpE2.test(backEllipse);

                if (cEllipse == true){ //цветная линия
                  let colorEllipse1 = colorEllipse[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/); //цвет линии
                  ctx.strokeStyle = colorEllipse1[0]; 
                }  else {
                  ctx.strokeStyle = 'rgb(0, 0, 0)'; 
                }

                if (bEllipse == true){ //есть заливка
                  let backEllipse1 = backEllipse[0].match(/rgb\(\d+\,\s\d+\,\s\d+\)| rgba\(\d+\,\s\d+\,\s\d+\,\s\d.\d\)/);//заливка
                  ctx.fillStyle = backEllipse1[0]; 
                }  else {
                  ctx.fillStyle = 'rgba(0, 0, 0, 0)'; 
                }  

                  ctx.ellipse(koordinata1[0],koordinata1[1],radius1[1],radius2[1],0,0,Math.PI*2,true);
                  ctx.stroke();
                  ctx.fill();
                } else {
              }
            };     
          }
        } else {
          document.getElementById('oshibka').style.visibility='visible';
          document.getElementById('oshibkaStr').textContent = "Кажется где-то ошибка!";          
        }
      };
    }

function noWarn(){
  document.getElementById('oshibka').style.visibility='hidden';
}

function clearB(){
  var canvas = document.getElementById('canvas');
  
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('oshibka').style.visibility='hidden';
  }
}


