export default function Service() {
  return (
    <div className="service-container">
      <h1 className="service-title">Our Services</h1>

      {/* Welfare Assistance */}
      <div className="service-card">
        <h2 className="service-category">1. Welfare Assistance</h2>
        <p className="service-description">
          Comprehensive Support for Those in Need
        </p>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">🚑</span> Emergency Relief
          </h3>
          <p>
            We provide immediate assistance to individuals and families in
            urgent need. This includes:
          </p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Food Aid:</strong> Provision of
              non-perishable food items and ready-to-eat meals.
            </li>
            <li>
              <strong className="highlight">Clothing and Bedding:</strong>{" "}
              Distribution of essential clothing, shoes, and bedding.
            </li>
            <li>
              <strong className="highlight">Temporary Shelter:</strong>{" "}
              Assistance in finding temporary housing for those who are homeless
              or displaced.
            </li>
            <li>
              <strong className="highlight">Crisis Support:</strong> Short-term
              financial assistance for urgent expenses such as medical
              emergencies or unexpected repairs.
            </li>
          </ul>
        </div>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">💰</span> Financial Aid
          </h3>
          <p>
            Direct financial support aimed at alleviating immediate financial
            pressures, including:
          </p>
          <ul className="service-list">
            <li>
              <strong className="highlight">
                Rent and Utility Assistance:
              </strong>{" "}
              Help with covering rent and utility bills.
            </li>
            <li>
              <strong className="highlight">Medical Expenses:</strong> Support
              for medical bills and treatments.
            </li>
            <li>
              <strong className="highlight">Educational Expenses:</strong>{" "}
              Financial help for school fees and supplies.
            </li>
          </ul>
        </div>
      </div>

      {/* Health Services */}
      <div className="service-card">
        <h2 className="service-category">2. Health Services</h2>
        <p className="service-description">Health and Medical Support</p>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">🏥</span> Health Screenings
          </h3>
          <ul className="service-list">
            <li>
              <strong className="highlight">Basic Health Checks:</strong> Vital
              signs and condition screenings.
            </li>
            <li>
              <strong className="highlight">Specialist Referrals:</strong>{" "}
              Access to further diagnosis.
            </li>
          </ul>
        </div>
      </div>

      {/* Donate CTA */}
      <div className="cta-section">
        <p className="cta-text">Your donation can save lives today!</p>
        <button className="donate-btn">Donate Now</button>
      </div>
    </div>
  );
}
