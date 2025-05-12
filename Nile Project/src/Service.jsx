import "./Service.css";
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

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">🛒</span> Food Distribution
          </h3>
          <p>
            Regular programs that provide nutritious food to those facing food
            insecurity. This includes:
          </p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Food Pantries:</strong> Access to
              local food pantries that offer a variety of grocery items.
            </li>
            <li>
              <strong className="highlight">Meal Programs:</strong> Community
              meal services providing balanced, nutritious meals.
            </li>
          </ul>
        </div>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">👥</span> Counseling and Support Services
          </h3>
          <p>Emotional and practical support for those facing hardships:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Social Work Services:</strong>{" "}
              Professional guidance and support to help individuals navigate
              their challenges.
            </li>
            <li>
              <strong className="highlight">Support Groups:</strong> Facilitated
              group sessions for emotional support and shared experiences.
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

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">💊</span> Medical Treatment
          </h3>
          <p>Provision of medical care to address various health needs:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Primary Care Services:</strong>{" "}
              Treatment for common illnesses and minor injuries.
            </li>
            <li>
              <strong className="highlight">Chronic Disease Management:</strong>{" "}
              Ongoing care and support for chronic conditions like diabetes and
              hypertension.
            </li>
          </ul>
        </div>
        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">💉</span> Vaccinations and Preventive Care
          </h3>
          <p>Programs aimed at preventing diseases and promoting health:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Immunization Clinics:</strong>{" "}
              Providing essential vaccinations for children and adults
            </li>
            <li>
              <strong className="highlight">Health Education:</strong> Workshops
              and informational sessions on healthy living and disease
              prevention.
            </li>
          </ul>
        </div>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">🧠</span> Mental Health Support
          </h3>
          <p>Services to address mental well-being:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Counseling Services: </strong>{" "}
              Professional counseling for mental health issues such as anxiety,
              depression, and stress.
            </li>
            <li>
              <strong className="highlight">Support Programs</strong> Programs
              and resources for mental health education and support.
            </li>
          </ul>
        </div>
      </div>

      <div className="service-card">
        <h2 className="service-category">3. Educational Programs</h2>
        <p className="service-description">
          Educational Support and Development
        </p>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">🏆</span> Scholarships and Grants
          </h3>
          <p>Financial support for educational expenses:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Tuition Assistance:</strong>{" "}
              Scholarships covering school or college tuition fees
            </li>
            <li>
              <strong className="highlight">Educational Grants:</strong>{" "}
              Financial aid for books, supplies, and other educational needs.
            </li>
          </ul>
        </div>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">👩‍🏫</span> Tutoring and Mentorship
          </h3>
          <p>Personalized educational support to enhance learning:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">One-on-One Tutoring:</strong>{" "}
              Academic support in subjects where students need extra help.
            </li>
            <li>
              <strong className="highlight">Mentorship Programs: </strong>{" "}
              Guidance and support from experienced mentors to aid personal and
              academic growth
            </li>
          </ul>
        </div>
        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">📚</span> Educational Materials
          </h3>
          <p>Provision of necessary learning resources:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">ISchool Supplies:</strong>{" "}
              Distribution of textbooks, notebooks, and stationery.
            </li>
            <li>
              <strong className="highlight">Technology Access:</strong>{" "}
              Providing computers and other technology to aid learning.
            </li>
          </ul>
        </div>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">👨‍🎓</span> Adult Education
          </h3>
          <p>Opportunities for adult learning and development:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Literacy Classes: </strong> Basic
              education in reading, writing, and numeracy.
            </li>
          </ul>
        </div>
      </div>

      <div className="service-card">
        <h2 className="service-category">4. Financial Aid and Management</h2>
        <p className="service-description">
          Transparent and Effective Financial Support
        </p>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">🏦</span> Grants and Loans
          </h3>
          <p>Financial assistance for various needs:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Emergency Grants:</strong> Funds for
              urgent needs like medical emergencies or essential repairs.
            </li>
            <li>
              <strong className="highlight">Business Loans:</strong> Microloans
              for individuals to start or expand small businesses.
            </li>
          </ul>
        </div>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">📊</span> Financial Counseling
          </h3>
          <p>Professional advice on managing finances:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Budgeting Assistance:</strong> Help
              with creating and sticking to a budget.
            </li>
            <li>
              <strong className="highlight">Debt Management: </strong> Guidance
              on handling debt and improving credit scores.
            </li>
          </ul>
        </div>
        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">🤝</span> Investment in Community Projects
          </h3>
          <p>Funding for initiatives that benefit the community:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Infrastructure Development:</strong>{" "}
              Support for projects such as building community centers or
              improving local facilities.
            </li>
            <li>
              <strong className="highlight">Community Programs:</strong> Funding
              for programs that address local needs, such as after-school
              activities or youth programs.
            </li>
          </ul>
        </div>

        <div className="service-subsection">
          <h3 className="subsection-title">
            <span className="icon">🔍</span> Transparency and Accountability
          </h3>
          <p>Ensuring responsible use of funds:</p>
          <ul className="service-list">
            <li>
              <strong className="highlight">Regular Reporting: </strong>{" "}
              Detailed reports on how funds are allocated and used.
            </li>
            <li>
              <strong className="highlight">Audits:</strong> Independent audits
              to verify that resources are managed properly and effectively.
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
