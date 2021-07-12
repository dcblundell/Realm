import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FACTIONS from '../definitions/factions';
import useEventStore from '../hooks/useEventStore';
import Choice from './Choice';
import scrollBgImage from '../images/scroll-bg.png';


function EventSelector({ realm, user }) {
    const events = useEventStore(realm, user);

    return (
        <EventContainer
            backgroundImage={scrollBgImage}
        >
            <p><strong>To the {FACTIONS[user.faction].factionTitle},</strong></p>

            <p>A matter has arisen in the realm which requires your attention.</p>

            <If condition={events.activeEvent}>
                <h2 style={{textDecoration: 'underline'}}>{events.activeEvent.title}</h2>

                <p>{events.activeEvent.description}</p>
            </If>

            <p>A decision is required on this matter most urgently.</p>

            <If condition={events.activeEvent}>
                <ul
                    className="event-list"
                >
                    <For each="choice" of={events.activeEvent.choices} index="index">
                        <li
                            className="event-list-item"
                            key={index}
                        >
                            <Choice
                                onMouseEnter={() => realm.setPreviewEvent(choice)}
                                onMouseLeave={() => realm.setPreviewEvent()}
                                onFocus={() => realm.setPreviewEvent(choice)}
                                onBlur={() => realm.setPreviewEvent()}
                                onClick={() => events.handleEventChoice(choice)}
                                factionIcon={user.faction}
                            >
                                {choice.description}
                            </Choice>
                        </li>
                    </For>
                </ul>
            </If>
        </EventContainer>
    )
}

EventSelector.propTypes = {
    realm: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

const EventContainer = styled.section`
    margin-top: 1rem;
    padding: 7rem;

    background-image: url(${props => props.backgroundImage});
    background-size: cover;

    .event-list {
        margin-top: 4rem;
        padding-left: 0;
    }

    .event-list-item {
        list-style: none;
    }
`

export default EventSelector;