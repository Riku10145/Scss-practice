export const InlineSytyle = () => {
  // containerのstyle
  const containerstyle = {
    border: "solid 2px #ccd5ae",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  // titleのstyle
  const titlestyle = {
    margin: 0,
    color: "#d4a373"
  };
  // buttonのstyle
  const buttonstyle = {
    backgroundColor: "#e9edc9",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerstyle}>
      <p style={titlestyle}>- Inline Styles -</p>
      <button style={buttonstyle}>FIGHT!!</button>
    </div>
  );
};
