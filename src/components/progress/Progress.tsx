import React from 'react';
import './progress.scss';

interface ProgressProps {
  label: string;
  percentage: number;
}

const Progress = React.memo(({ label, percentage }: ProgressProps) => {

  return (
    <div className='progress'>
      <span className='progress-value'></span>
      <span className='progress-label'>{label}</span>
      <span className='progress-percentage'>{percentage}%</span>
    </div>
  )
});

export default Progress;