import Logo from '../../assets/splash.png'

import macaco from '../../assets/macaco.jpg'
import motor from '../../assets/motor.jpg'
import pao from '../../assets/pao.jpg'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Mico Buguer Trifásico",
        logo: Logo,
        detalhes: "Carne de mico leão dourado com molho de motor trifásico, com amor!",
        preco: "R$ 30,99",
        botao: "Macaco Surpresas"
    },
    itens: {
        titulo: "Itens do Hamburguer",
        lista: [
            {
                id: 1,
                nome: "1 Sopa de Macaco",
                imagem: macaco,
            },
            {
                id: 2,
                nome: "1 Motor Trifásico",
                imagem: motor,
            },
            {
                id: 3,
                nome: "1 Hambúrguer Sírio",
                imagem: pao,
            },
        ],
    }
}

export default produto;