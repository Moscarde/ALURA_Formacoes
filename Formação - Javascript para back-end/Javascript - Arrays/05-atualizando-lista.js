const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme']
// primeiro item do indice      // quantidade de itens para remover      // opcional, item a ser inserido 
nomes.splice(1, 2, 'Rodrigo')
nomes.splice(1, 0, 'Rodrigo')   // passando 0 no segundo argumento, pode ser entendido como um metodo para inserir itens em listas

console.log(nomes);