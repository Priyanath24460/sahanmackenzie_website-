import { services } from '@/content/services';
import ServiceCard from './service-card';

export default function ServicesGrid() {
  return (
    <>
      {services.map((item) => <ServiceCard key={item.t} item={item} />)}
    </>
  );
}
