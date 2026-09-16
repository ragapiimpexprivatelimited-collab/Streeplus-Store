export default function AdminDashboardPage() {
  return (
    <section className="inner-page section-block">
      <div className="container narrow">
        <div className="section-header center">
          <span className="eyebrow">Admin dashboard</span>
          <h1>Operations overview</h1>
        </div>

        <div className="about-grid">
          <div className="info-card">
            <h3>Orders</h3>
            <p>1,284 total orders across the last 90 days.</p>
          </div>
          <div className="info-card">
            <h3>Revenue</h3>
            <p>$483,200 in sales this quarter with steady growth.</p>
          </div>
          <div className="info-card">
            <h3>Customers</h3>
            <p>Great retention with a strong repeat purchase signal.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
