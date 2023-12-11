import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='flex-container'>
        {companies.map(company => {
          return (
            <Link
              to={`/company/${company.slug}`}
              style={{ textDecoration: 'none' }}
              key={company.id}
            >
              <div className='company-container'>
                <h2>{company.name}</h2>
                <img src={company.logo} alt={`${company.name} logo`} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
