import React from 'react'
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

function Tech() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, 'tech');