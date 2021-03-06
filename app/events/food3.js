import RESOURCES from '../definitions/resources';
import MONEY from '../images/events/money.png';
import BARREL from '../images/events/barrel.png';


export default {
    title: `Nature's bounty`,
    description: `
        Our clerks report we've had a bountiful harvest this season. We can more than adequately feed the people, leaving us with a surplus.

        What shall we do with this unexpected bonus?
    `,
    choices: [
        {
            description: 'Store it, we may need it come winter.',
            effects: [
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    You prudently decide to store the excess food away against any future disaster.
                    The Guilds mutter from behind their stacks of coin that you have missed an opportunity for profit.
                `,
                image: BARREL,
            }
        },
        {
            description: `Trade it with neighbouring kingdoms.`,
            effects: [
                {
                    type: RESOURCES.WEALTH.slug,
                    modifier: 10,
                },
                {
                    type: RESOURCES.FOOD.slug,
                    modifier: -10,
                }
            ],
            outcome: {
                message: `
                    The Guilds commend your sound judgement, whilst the people watch carts laden with precious food leave the city.
                `,
                image: MONEY,
            }
        },
    ]
}
