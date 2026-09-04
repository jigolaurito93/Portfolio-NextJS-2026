import React from 'react';
import {
  FigmaIcon,
  GithubIcon,
  PostmanIcon,
  SlackIcon,
  TrelloIcon,
  VercelIcon,
  VSCIcon,
} from '../Icons';

// Define the items for DevOps & Tools
const items = [
  { name: 'GitHub', icon: <GithubIcon /> },
  { name: 'VS Code', icon: <VSCIcon /> },
  { name: 'Slack', icon: <SlackIcon /> },
  { name: 'Postman', icon: <PostmanIcon /> },
  { name: 'Vercel', icon: <VercelIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'Trello', icon: <TrelloIcon /> },
];

// Function to duplicate array for animation or repeated entries
const extendedItems = Array(20).fill(items).flat();

// Define prop types for ItemCard
interface ItemCardProps {
  name: string;
  icon: JSX.Element;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, icon }) => (
  <div className="flex shrink-0 flex-col items-center justify-center gap-4">
    <span className="w-12 md:w-20">{icon}</span>
    <span className="font-mono text-sm text-primary">{name}</span>
  </div>
);

const Devops = () => {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <h3 className="px-12 text-center font-mono text-xs uppercase tracking-[0.2em] text-secondary">
        DevOps & Tools
      </h3>
      <div className="flex gap-6 animate-loop-scroll hover:[animation-play-state:paused]">
        {extendedItems.map((item, index) => (
          <ItemCard key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Devops;
