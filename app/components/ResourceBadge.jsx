import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RESOURCES from '../definitions/resources';


function ResourceBadge({ resourceName, isSelected }) {
    return (
        <Badge
            factionBadgeColour={RESOURCES[resourceName.toUpperCase()].badgeColour}
            factionFontColour={RESOURCES[resourceName.toUpperCase()].fontColour}
            isSelected={isSelected}
        >
            {resourceName.slice(0,1).toUpperCase()}
        </Badge>
    )
}

ResourceBadge.propTypes = {
    resourceName: PropTypes.oneOf(Object.values(RESOURCES).map(resource => resource.slug)).isRequired,
    isSelected: PropTypes.bool,
}

ResourceBadge.defaultProps = {
    isSelected: false,
}

const Badge = styled.span`
    display: block;
    width: 25px;
    height: 25px;

    float: left;
    background: ${props => props.factionBadgeColour};
    margin-right: 5px;
    border-radius: 25%;

    text-align: center;
    color: ${props => props.factionFontColour};
    font-weight: 700;
    position: relative;

    ${props => props.isSelected && `
        border: 2px solid white;

        &::before {
            content: '';
            display: block;
            width: 5px;
            height: 4px;

            background-color: black;
            position: absolute;
            top: -10px;
            left: 0;
            right: 0;
            margin: auto;
        }
    `}
`

export default ResourceBadge
