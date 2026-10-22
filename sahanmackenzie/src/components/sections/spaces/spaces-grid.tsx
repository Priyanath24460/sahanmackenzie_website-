import { spaces } from '@/content/spaces';
import SpaceCard from './space-card';

export default function SpacesGrid() {
  return (
    <>
      {spaces.map((item) => <SpaceCard key={item.t} item={item} />)}
    </>
  );
}
