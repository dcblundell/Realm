import RESOURCES from '../definitions/resources';


export default {
    title: 'Eat the rich',
    description: 'Many of our soldiers are going hungry, they\'ve been eying some of our richer farmsteds. We could turn a blind eye, or protect the farmers.',
    choices: [
        {
            description: 'I see no soldiers',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                }
            ]
        },
        {
            description: 'Arrest the rabble',
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: -10,
                }
            ]
        },
    ]
}