import { Typography, Box, Grid } from "@mui/material";
export default function Beast() {
  return (
    <div
      style={{
        marginBottom: "24px",
        width: "90%",
        margin: "60px auto",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
      <Box
        elevation={3}
        style={{
          flex: "1",
          marginBottom: "16px",
          padding: "20px",

          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "bold" }} component="div">
          EQ beats IQ
        </Typography>
      </Box>

      <Box
        elevation={3}
        style={{
          flex: "1",
          marginBottom: "16px",
          padding: "20px",

          backgroundColor: "white",
        }}
      >
        <Typography variant="h5">
          People with high emotional <br />
          intelligence (Eq) live more fulfilled
          <br />
          lives. They tend to be happier and
          <br /> have healthier relationship.
        </Typography>
      </Box>

      <Box
        elevation={3}
        style={{
          flex: "1",
          marginBottom: "16px",
          padding: "20px",

          backgroundColor: "white",
        }}
      >
        <Typography variant="h5">
          They are more successful in their
          <br /> pursuits and make for inspiring
          <br />
          leaders. According to since, they
          <br /> eard $29k a year.
        </Typography>
      </Box>
    </div>
  );
}
