export const name = 'Benji';
export const age: number = 35;
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puede tener 
"" dobles
' simple
inyectar valores: ${ name } 
caracteres: \$
expresiones: ${ 1 + 1 }
`;

console.log(templateString);