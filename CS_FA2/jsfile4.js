    function myFunction(operator) {
            var x = parseFloat(document.getElementById("n1").value);
            var y = parseFloat(document.getElementById("n2").value);

            const operations = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                '*': (a, b) => a * b,
                '/': (a, b) => a / b, 
                '%': (a, b) => a % b
            };
			
			const operationNames = {
				'+': 'sum',
				'-': 'difference',
				'*': 'product',
				'/': 'quotient',
				'%': 'remainder'
			};
			const result = operations[operator](x, y);
			let operationText = operationNames[operator];

            document.getElementById("demo").innerHTML = `The ${operationText} of ${x} and ${y} is ${result}.`;
        }