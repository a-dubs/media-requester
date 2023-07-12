import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {

  const getColor = (): string => {
    const green = Math.round(progress * 255 * 0.8);
    const red = Math.round((255 - green) * 0.8);
    return `rgb(${red}, ${green}, 20)`;
  };
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${5 + progress * 95}%`, backgroundColor: getColor() }}>
        <span className="progress-label">{Math.round(progress * 10000) / 100}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
