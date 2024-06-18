  function submitQuiz() {
            var score = 0;
    
            // Verifica a resposta da primeira pergunta
            var q1 = document.querySelector('input[name="q1"]:checked');
            if (q1 && q1.value === 'b') {
                score++;
            }
    
            // Verifica a resposta da segunda pergunta
            var q2 = document.querySelector('input[name="q2"]:checked');
            if (q2 && q2.value === 'a') {
                score++;
            }
    
            // Verifica a resposta da terceira pergunta
            var q3 = document.querySelector('input[name="q3"]:checked');
            if (q3 && q3.value === 'a') {
                score++;
            }
    
            // Verifica a resposta da quarta pergunta
            var q4 = document.querySelector('input[name="q4"]:checked');
            if (q4 && q4.value === 'd') {
                score++;
            }
    
            // Verifica a resposta da quinta pergunta
            var q5 = document.querySelector('input[name="q5"]:checked');
            if (q5 && q5.value === 'd') {
                score++;
            }
    
            // Exibe o resultado
            var resultContainer = document.getElementById('result');
            resultContainer.innerHTML = 'Você acertou ' + score + ' de 5 perguntas.';
        }