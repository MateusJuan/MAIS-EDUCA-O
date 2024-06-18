 function submitQuiz() {
        var score = 0;
    
        // Verifica a resposta da primeira pergunta
        var q1 = document.querySelector('input[name="q1"]:checked');
        if (q1 && q1.value === 'd') {
          score++;
        }
    
        // Verifica a resposta da segunda pergunta
        var q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === 'c') {
          score++;
        }
    
        // Verifica a resposta da terceira pergunta
        var q3 = document.querySelector('input[name="q3"]:checked');
        if (q3 && q3.value === 'b') {
          score++;
        }
        // Verifica a resposta da quarta pergunta
        var q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === 'a') {
          score++;
        }
        // Verifica a resposta da quinta pergunta
        var q5 = document.querySelector('input[name="q5"]:checked');
        if (q5 && q5.value === 'b') {
          score++;
        }
        // Verifica a resposta da sexta pergunta
        var q6 = document.querySelector('input[name="q6"]:checked');
        if (q6 && q6.value === 'a') {
            score++;
        }
        // Verifica a resposta da sétima pergunta
        var q7 = document.querySelector('input[name="q7"]:checked');
        if (q7 && q7.value === 'c') {
            score++;
        }
    
        // Exibe o resultado
        var resultContainer = document.getElementById('result');
        resultContainer.innerHTML = 'Você acertou ' + score + 'de 7 perguntas.';
      }