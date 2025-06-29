function gerarStringAleatoria(tamanho) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indice];
    }
    return resultado;
  }
  
  console.log(gerarStringAleatoria(10)); // Exemplo: "aB3dE9xK1Z"
  
