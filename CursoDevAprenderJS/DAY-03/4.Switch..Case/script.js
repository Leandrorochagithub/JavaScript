let permission = 'manager'// ordinary, manager, director

switch (permission) { // condição
    case 'ordinary': // valor
        console.log('Ordinary')
        break; // Para parar de comparar ao achar o resultado desejado.

        case 'manager': // valor
        console.log('Manager')
        break; // Para parar de comparar ao achar o resultado desejado.

        case 'director': // valor
        console.log('Director')
        break; // Para parar de comparar ao achar o resultado desejado.

    default: // Comando a ser executado, caso não seja encontrado nenhum esperado
        console.log('User not identified')
        break;
}