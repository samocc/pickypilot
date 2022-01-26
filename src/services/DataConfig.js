export const PickyCategories = [
    { name: 'Catering' },
    { name: 'Home experience' },
    { name: 'Mixology' },
    { name: 'Meal surf' },
    { name: 'Cooking classes' },
    { name: 'Virtual experience' }
]

export const Genders = ['Masculino', 'Femenino', 'Otro'];
export const BirthYears = buildBirthYearsArray(1930, 2010);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 7.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function buildBirthYearsArray(start, finish) {
    const result = [];

    for(let i = finish; i >= start; i--) {
        result.push(i.toString());
    }

    return result;
}

export const FoodSpecialities = [
    'Fusión',
    'Vegetariana',
    'Vegana',
    'Low carb (Keto)',
    'Saludable',
    'Gourmet',
    'Internacional',
    'Mexicana',
    'Americana',
    'Arabe',
    'Asiática',
    'Libanesa',
    'Argentina',
    'Brasileña',
    'India',
    'China',
    'Japonesa',
    'Francesa',
    'Alemana',
    'Italiana',
    'Griega',
    'Tai',
    'Española',
    'Yucateca',
    'Campechana',
    'Oaxaqueña',
    'Sushi',
    'Pasta',
    'Hamburguesas',
    'Tacos',
    'Tortas',
    'Pizzas',
    'Carnes',
    'Pescados y mariscos',
    'Helados',
    'Pasteles',
    'Panadería',
    'Alitas',
    'Sandwiches',
    'BBQ',
    'Ensaladas',
    'Crepas',
    'Carnitas',
    'Bocadillos',
    'Desayunos',
    'Repostería'
].sort();

export const regions = [
    { name: 'Aguascalientes', code: 'AS' },
    { name: 'Baja California', code: 'BC' },
    { name: 'Baja California Sur', code: 'BS' },
    { name: 'Campeche', code: 'CC' },
    { name: 'Chiapas', code: 'CS' },
    { name: 'Chihuahua', code: 'CH' },
    { name: 'Coahuila', code: 'CL' },
    { name: 'Colima', code: 'CM' },
    { name: 'Distrito Federal', code: 'DF' },
    { name: 'Durango', code: 'DG' },
    { name: 'Guanajuato', code: 'GT' },
    { name: 'Guerrero', code: 'GR' },
    { name: 'Hidalgo', code: 'HG' },
    { name: 'Jalisco', code: 'JC' },
    { name: 'México', code: 'MC' },
    { name: 'Michoacan', code: 'MN' },
    { name: 'Morelos', code: 'MS' },
    { name: 'Nayarit', code: 'NT' },
    { name: 'Nuevo León', code: 'NL' },
    { name: 'Oaxaca', code: 'OC' },
    { name: 'Puebla', code: 'PL' },
    { name: 'Querétaro', code: 'QT' },
    { name: 'Quintana Roo', code: 'QR' },
    { name: 'San Luis Potosí', code: 'SP' },
    { name: 'Sinaloa', code: 'SL' },
    { name: 'Sonora', code: 'SR' },
    { name: 'Tabasco', code: 'TC' },
    { name: 'Tlaxcala', code: 'TL' },
    { name: 'Tamaulipas', code: 'TS' },
    { name: 'Veracruz', code: 'VZ' },
    { name: 'Yucatán', code: 'YN' },
    { name: 'Zacatecas', code: 'ZS' }
];

export const UserSuccessChoro = 'Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf\n' +
    '                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf\n' +
    '                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf\n' +
    '                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf\n' +
    '                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n'

export const ChefSuccessChoro = 'Chef choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf\n' +
    '                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf\n' +
    '                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf\n' +
    '                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf\n' +
    '                    Choro choro oadijaiedaoijifa oiafjae oifjeai foaeij\n' +
    '                    djaeifja oaijdfiae foaeijfea oaijfiae ofijaeif foaiejfea foeiajf'