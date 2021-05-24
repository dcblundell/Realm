import RESOURCES from '../definitions/resources';


export default {
    title: 'In my day we used our hands',
    description: 'A travelling inventor is showing off a new type of plow he says will increase our farm yields.',
    choices: [
        {
            description: 'A plow for every farm!',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ]
        },
        {
            description: 'He can keep his plows. We\'re fine the way things are.',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                }
            ]
        },
    ]
}