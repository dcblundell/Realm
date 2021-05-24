import RESOURCES from '../definitions/resources';


export default {
    title: 'A sharp dressed watchman',
    description: 'The city watch are having to buy their own uniforms. In most cases they aren\'t able to afford proper equipment either. We should make sure they are properly funded.',
    choices: [
        {
            description: 'Fund the city watch.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ]
        },
        {
            description: 'Save the money.',
            effects: [
                {
                    type: RESOURCES.SECURITY.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ]
        },
    ]
}