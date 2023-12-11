import { useParams } from 'react-router-dom';

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  const companyData = companies.find(company => {
    return company.slug === companySlug;
  });

  console.log(companyData);

  return (
    <div>
      <div className='CompanyPage'>
        <h1>Company Profile</h1>
        <div className='CompanyProfile' key={companyData.id}>
          <div className='image-card'>
            <img src={companyData.logo} alt={`${companyData.name} logo`} />
          </div>
          <div className='info-card'>
            <h2>{companyData.name}</h2>
            <h3>About</h3>
            <p>{companyData.description}</p>
          </div>
        </div>
        <div className='tech-stack'>
          {companyData.techStack.map(technology => {
            return (
              <div key={technology.name} className='technology'>
                <div className='tech-card'>
                  <img src={technology.image} alt={`${technology.name} logo`} />
                </div>
                <h3>{technology.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;
