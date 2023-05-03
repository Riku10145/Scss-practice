export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled Jsx -</p>
        <button className="btn">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #ccd5ae;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0;
          color: #d4a373;
        }

        .btn {
          background-color: #e9edc9;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
