import React from 'react';
import SortableItem from './SortableItem';
import styled, { css } from 'styled-components';

const List = styled.ul`
  padding-left: 0;
  width: 100%;
  
  & + button {
    margin-bottom: 10px;
    background: red;
  }
  
  ${props => props.hideItems && css`
    clip-path: inset(100%);
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;`
  }
`;

const SortableList = ({ items, hideItems, removeUser }) => {
    return (
        <List hideItems={hideItems}>
            {items.map(( value, index ) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    item={index}
                    value={value}
                    removeUser={removeUser}
                />
            ))}
        </List>
    );
};

export default SortableList;
