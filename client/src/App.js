import genesis_logo from './genesis_logo.png';
import './App.css';

function App() {
  return (
    <div className="App" style={{ 
      fontFamily: 'Arial, Tahoma, sans-serif', // Sans-serif is recommended for readability [7]
      color: '#333', 
      lineHeight: '1.6' 
    }}>
      {/* 1. Meaningful Heading & Practice Identity [8, 9] */}
      <header style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <h1 style={{ fontSize: '24pt', marginBottom: '10px' }}>Genesis Clinical Practice</h1>
        <p style={{ fontSize: '14pt' }}>Compassionate Mental Health Support in [Your Geographical Region]</p>
      </header>

      {/* 2. Above the Fold Call-to-Action [10] */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: '#0056b3' }}>Book Your Appointment</h2>
          <p>We are currently integrating our secure Google Calendar booking system.</p>
          <p>
            <img src={genesis_logo} alt="genesis_logo" />
          </p>
          
          {/* Large, obviously clickable buttons [11, 12] */}
          <button style={{ 
            padding: '15px 30px', 
            fontSize: '14pt', 
            backgroundColor: '#0056b3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer' 
          }}>
            Check Availability
          </button>
        </section>

        {/* 3. Brief & Actionable Information [4, 13] */}
        <section style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h3>How to Get Started</h3>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>Select a service type (Consultation or Therapy) [14].</li>
            <li>Choose a time that works for your schedule [15].</li>
            <li>Receive a secure confirmation email [16].</li>
          </ul>
        </section>
      </main>

      {/* 4. Professional Footer & Legal Compliance [17-19] */}
      <footer style={{ padding: '40px 20px', textAlign: 'center', fontSize: '12pt', color: '#666' }}>
        <p>Contact: [Your Email] | [Your Phone Number]</p>
        <div style={{ marginTop: '10px' }}>
          {/* Required Notice of Privacy Practices Link [19, 20] */}
          <a href="/privacy-practices" style={{ color: '#0056b3', textDecoration: 'underline' }}>
            Notice of Privacy Practices (HIPAA)
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

