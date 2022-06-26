import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import selectText from './component-selectors';
import { ComponentProps } from './component-types';
import './component.scss';

const Component: FC<ComponentProps> = ({ propText }) => {
  const stateText: string = useSelector(selectText);

  return (
    <div className='block'>
      <div className='block__element'>
        Prop text:
        {propText}
      </div>
      <div className='block__element'>
        State text:
        {stateText}
      </div>
    </div>
  );
};

export default Component;
