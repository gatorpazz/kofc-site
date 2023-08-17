import frontOfChurch from '../assets/front-of-church.jpg';
import stJamesCathedral from '../assets/st-james-cathedral.jpg';

const Home = () => {
  return (
    <main>
      <h1>Knights of Columbus Council 12402</h1>
      <section>
        <h2>Saint James Catholic Cathedral</h2>
        <div className="church-pictures">
          <img src={frontOfChurch} alt="Front of Church" />
          <img src={stJamesCathedral} alt="Saint James Catholic Cathedral" />
        </div>
      </section>
      <section>
        <h2>History of St James Council</h2>
        <p>
          Council 12402 was founded at St. James Cathedral on March 25, 1999 with 38 Charter Members and now has over 190 members. We contribute money and time to over 15 charitable causes such as: Vocations, JMJ Pregnancy Center, Special Olympics, Coats for Kids, Christian Refugee Fund, Feed the Homeless, Habitat for Humanity, Wounded Warrior Project, Russell Home, Morning Star School, Bishop Grady Villas, Autism Speaks, Epilepsy of Central FL, Military Chaplain fund, Catholic Charities, Wheelchair Mission, Center for Independent Living, and the Ultrasound Initiative.
        </p>
      </section>
    </main>
  );
}

export default Home;