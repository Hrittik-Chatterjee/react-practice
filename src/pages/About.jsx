const Dashboard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.bewakoof.com/uploads/category/mobilesite/TamilCollection_Bewakoof_Homepage_InsideBanner_Msite_common_720x300_revised-1629277506.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h3 className="font-bold">Our Story</h3>
        <p>
          Founded in [Year], [Store Name] has come a long way from its
          beginnings in [Starting Location]. When we first started out, our
          passion for fashionable and comfortable T-shirts drove us to start our
          own business.
        </p>

        <h3 className="font-bold">Our Mission</h3>
        <p>
          Our mission is simple: to make you look and feel great in a T-shirt
          that’s perfect for every occasion. We believe that a T-shirt isnt just
          a piece of clothing, but a way to express your personality and style.
          Whether you’re looking for a classic plain tee, a graphic design, or
          something in between, we’ve got you covered.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
