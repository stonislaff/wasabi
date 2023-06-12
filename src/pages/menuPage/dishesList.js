//images import:
import deruni1 from '../../assets/menuImages/deruni1.jpg'
import deruni2 from '../../assets/menuImages/deruni2.jpg'
import kamamber from '../../assets/menuImages/kamamber.jpg'
import nagets from '../../assets/menuImages/nagets.jpg'
import cesar from '../../assets/menuImages/pizza_cesar.webp'
import cheeses from '../../assets/menuImages/pizza_4cheeses.jpg'
import karbonara from '../../assets/menuImages/pizza_karbonara.jpg'
import diabola from '../../assets/menuImages/pizza_diabola.jpg'
import peperoni from '../../assets/menuImages/pizza_peperoni.jpg'
import yar from '../../assets/menuImages/pizza_yar.jpg'
import country from '../../assets/menuImages/pizza_country.jpg'
import hunt from '../../assets/menuImages/pizza_hunt.jpg'
import meat from '../../assets/menuImages/pizza_meat.jpg'
import havay from '../../assets/menuImages/pizza_gavay.jpg'
const dishesList = [
    {
        dishName: 'Деруни зі сметаною',
        dishDescription:
            'Смажені картопляні оладки з хрусткою скоринкою та м\'якою серединкою, подаються зі сметаною.',
        dishPrice: '75',
        dishWeight: '200',
        dishImage: deruni1,
        category: 1
    },
    {
        dishName: 'Деруни зі свининою та грибами',
        dishDescription:
            'Смажені картопляні оладки зі смачною свининою та грибами - ситна та смачна страва.',
        dishPrice: '105',
        dishWeight: '250',
        dishImage: deruni2,
        category: 1
    },
    {
        dishName: 'Камамбер смажений',
        dishDescription: 'Хрусткий смажений сир з ніжною серединкою - чудова закуска.',
        dishPrice: '120',
        dishWeight: '150',
        dishImage: kamamber,
        category: 1
    },
    {
        dishName: 'Курячі нагетси',
        dishDescription:
            'Смажені шматочки курячого м\'яса - смачний вибір для закуски або дитячого меню.',
        dishPrice: '110',
        dishWeight: '250',
        dishImage: nagets,
        category: 1
    },
    {
        dishName: 'Діабола',
        dishDescription:
            'Чортове задоволення - поєднання гострої салямі, гострих перців та сиру.',
        dishPrice: '165',
        dishWeight: '1010',
        dishImage: diabola,
        category: 2
    },
    {
        dishName: 'Пепероні',
        dishDescription:
            'Італійська класика на піці - гостра пепероні, сир та ароматні спеції.',
        dishPrice: '225',
        dishWeight: '1040',
        dishImage: peperoni,
        category: 2
    },
    {
        dishName: 'Хрещатий яр',
        dishDescription:
            'Вогняна симфонія - поєднання пікантних інгредієнтів для любителів гострих відчуттів.',
        dishPrice: '220',
        dishWeight: '950',
        dishImage: yar,
        category: 2
    },
    {
        dishName: 'Кантрі',
        dishDescription:
            'Ідеальний варіант для гурманів - піца з смаженими ковбасками та ароматною цибулею.',
        dishPrice: '220',
        dishWeight: '970',
        dishImage: country,
        category: 2
    },
    {
        dishName: 'Карбонара',
        dishDescription:
            'Неперевершена класика - піца з беконом, яйцем та ароматним соусом Карбонара.',
        dishPrice: '225',
        dishWeight: '1000',
        dishImage: karbonara,
        category: 2
    },
    {
        dishName: 'Мисливська',
        dishDescription:
            'Хрустка смакова подорож - смажені м\'ясні ковбаски, шинка та цибуля на пухкій основі.',
        dishPrice: '220',
        dishWeight: '1000',
        dishImage: hunt,
        category: 2
    },
    {
        dishName: 'М\'ясна',
        dishDescription:
            'Ідеальна вишуканість - піца з ароматними м\'ясними начинками і соковитими спеціями.',
        dishPrice: '220',
        dishWeight: '1100',
        dishImage: meat,
        category: 2
    },
    {
        dishName: 'Гавайська',
        dishDescription:
            'Тропічна радість на тарілці - гармонійне поєднання фруктів і м\'яса на хрусткій піці.',
        dishPrice: '250',
        dishWeight: '960',
        dishImage: havay,
        category: 2
    },
    {
        dishName: 'Цезар',
        dishDescription:
            'Салатна свіжість на піці - соус Цезар, куряче філе та смачні спеції.',
        dishPrice: '295',
        dishWeight: '1080',
        dishImage: cesar,
        category: 2
    },
    {
        dishName: 'Чотири сири',
        dishDescription:
            'Сирна екстазія - ідеальне поєднання чотирьох різних сирів на хрусткій основі.',
        dishPrice: '310',
        dishWeight: '930',
        dishImage: cheeses,
        category: 2
    },
    {
        dishName: 'Дабл бургер',
        dishDescription:
            'Бургер для справжніх апетитів - подвійне м\'ясне задоволення з ароматними спеціями.',
        dishPrice: '188',
        dishWeight: '290',
        dishImage: nagets,
        category: 3
    },
    {
        dishName: 'Веган бургер',
        dishDescription:
            'Здорове задоволення - рослинний бургер з багатими смаками і хрусткою текстурою.',
        dishPrice: '165',
        dishWeight: '240',
        dishImage: nagets,
        category: 3
    },
    {
        dishName: 'Чілі бургер',
        dishDescription:
            'Пікантний експлозивний смак - гострий бургер зі смаженим м\'ясом, перцем та соусом.',
        dishPrice: '155',
        dishWeight: '260',
        dishImage: nagets,
        category: 3
    },
    {
        dishName: 'Chicken чізбургер',
        dishDescription:
            'Соковите куряче м\'ясо з сиром - ніжний бургер для любителів курячого смаку.',
        dishPrice: '165',
        dishWeight: '930',
        dishImage: nagets,
        category: 3
    },
    {
        dishName: 'Pork чізбургер',
        dishDescription:
            'Смакова насолода свинини - поєднання соковитого свинячого м\'яса, сиру та ароматних спецій.',
        dishPrice: '145',
        dishWeight: '240',
        dishImage: nagets,
        category: 3
    },
    {
        dishName: 'Beef чізбургер',
        dishDescription:
            'Смаковий екстаз - соковите яловиче м\'ясо з сиром і ароматним соусом.',
        dishPrice: '155',
        dishWeight: '240',
        dishImage: nagets,
        category: 3
    },
    {
        dishName: 'Deluxe',
        dishDescription:
            'Каліфорнія з лососем, каліфорнія з креветкою, онігірі з крабом, макі з огірком.',
        dishPrice: '165',
        dishWeight: '240',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: 'Мегаполіс',
        dishDescription:
            'Зелений дракон, філадельфія з лососем, сирний з креветкою, онігірі з тунцем.',
        dishPrice: '742',
        dishWeight: '980',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: 'Філа',
        dishDescription:
            'Філа з: лососем, вугрем, креветкою, лососем та огірком.',
        dishPrice: '895',
        dishWeight: '1040',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: '3 Дракони',
        dishDescription:
            'Червоний дракон, зелений дракон, золотий дракон.',
        dishPrice: '778',
        dishWeight: '820',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: 'Запечений теплий',
        dishDescription:
            'Рол з лососем, ніжний з куркою, запечений з вугрем, запечений з креветкою.',
        dishPrice: '667',
        dishWeight: '1070',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: 'Макі',
        dishDescription:
            'Макі з сиром, авокадо, лососем, вугрем.',
        dishPrice: '416',
        dishWeight: '480',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: 'Дабл',
        dishDescription:
            'Каліфорнія з лососем в кунжуті, онігірі з крабом, сирний з вугрем.',
        dishPrice: '510',
        dishWeight: '700',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: 'Самон',
        dishDescription:
            'Філадельфія з креветкою, ніжний з куркою, спайсі з лососем, макі з огірком, вега рол.',
        dishPrice: '724',
        dishWeight: '1150',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: 'Каліфорнія',
        dishDescription:
            'Каліфорнія з креветкою, ніжний з куркою, спайсі з лососем, онігірі з лососем, ніжний з лососем.',
        dishPrice: '667',
        dishWeight: '950',
        dishImage: nagets,
        category: 4
    },
    {
        dishName: 'BIG мікс',
        dishDescription:
            'Філа з лососем та огірком, каліфорнія з лососем в кунжуті, макі з авокадо, сирний з креветкою, спайсі з крабом, ніжний з куркою',
        dishPrice: '895',
        dishWeight: '1390',
        dishImage: nagets,
        category: 4
    }
];

export default dishesList