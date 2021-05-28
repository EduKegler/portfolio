import React from 'react';
import './sectionTitle.scss';

interface SectionTitleProps {
    title: string;
}

const SectionTitle = React.memo(({ title }: SectionTitleProps) => {
    return (
        <div className='section-title'>
            <span>{title}</span>
        </div>
    )
});

export default SectionTitle;