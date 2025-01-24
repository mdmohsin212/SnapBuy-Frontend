{
  /* <div>
            <h1 className="text-center pt-5 pb-2">Buy History</h1>
            <hr className="w-75 m-auto" />
          </div>

          <div className="w-75 m-auto">
            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : products.length === 0 ? (
              <p className="text-center fw-medium">No Product available.</p>
            ) : (
              products.map((item) => (
                <div key={item.id} className="p-4 mb-4 border rounded">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid border rounded"
                        src={item.product_img}
                        alt=""
                        style={{ width: "80px", height: "80px" }}
                      />
                      <div className="text-start ps-4">
                        <h5 className="mb-3">{item.product_title}</h5>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <small className="text-truncate">
                        <i className="far fa-calendar-alt text-primary"></i>
                        Buy Date:{" "}
                        {new Date(item.buying_time).toLocaleDateString()}
                      </small>

                      <div className="d-flex mb-3 mt-3 gap-2">
                        <Link
                          className="btn btn-outline-dark m-2"
                          to={`/buy_info/${item.id}`}
                        >
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div> */
}




