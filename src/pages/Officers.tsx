import { useState, useEffect } from 'react';
import OfficerCard from '../components/OfficerCard';
const Officers = () => {
  const [officers, setOfficers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const officers = await fetchOfficers();
      setOfficers(data);
    }
    fetchData();
  })
  return (
    <section>
      <h1>Officers</h1>
      {officers.map(({id, name, title, picture}) => <OfficerCard key={id} name={name} title={title} picture={picture} />)}
    </section>
  );
}

export default Officers;