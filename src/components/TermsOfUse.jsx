import { Box, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const PolicyContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "800px",
  margin: "auto",
  backgroundColor: "rgba(47, 47, 47, 0.5)", 
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
  border: "1px solid rgba(100, 100, 100, 0.5)", 
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
  },
}));

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#6366F1",
    },
    primary: {
      main: "#6366F1",
    },
    secondary: {
      main: "#4338CA",
    },
  },
  typography: {
    h4: {
      fontFamily: "Future2, Arial, sans-serif",
      fontWeight: "bold", 
      fontSize: "2rem", 
    },
    h6: {
      fontFamily: "Future2, Arial, sans-serif",
      color: "#ffffff", 
      fontWeight: "bold",
      fontSize: "1.25rem", 
    },
    body1: {
      fontFamily: "Arial, sans-serif",
      color: "#b0b0b0", 
      fontSize: "1rem",
      lineHeight: "1.6",
    },
  },
});


const BackgroundContainer = styled(Box)(() => ({
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

const TermsOfUse = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <ThemeProvider theme={theme}>
        <BackgroundContainer>
          <PolicyContainer>
            <Typography
              variant="h4"
              align="center"
              color="white"
              gutterBottom
              fontFamily={"Future2, Helvetica, Arial"}
            >
              Terms of Use
            </Typography>
            <Typography variant="body1" gutterBottom>
              Welcome to our Terms of Use page. By accessing or using our website, you agree to be bound by these terms and conditions.
            </Typography>

            <Typography variant="h6" gutterBottom>
              1. User Responsibilities
            </Typography>
            <Typography variant="body1" gutterBottom>
              As a user of our website, you agree to provide accurate and complete information when creating an account and purchasing courses. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
            </Typography>

            <Typography variant="h6" gutterBottom>
              2. Services Offered
            </Typography>
            <Typography variant="body1" gutterBottom>
              We offer a variety of online courses across domains. Course availability may vary, and we reserve the right to modify or discontinue any course at any time.
            </Typography>

            <Typography variant="h6" gutterBottom>
              3. Payment Terms
            </Typography>
            <Typography variant="body1" gutterBottom>
              All courses must be paid for in full at the time of enrollment. Payment is non-refundable unless stated otherwise in the course description. We accept various payment methods for your convenience.
            </Typography>

            <Typography variant="h6" gutterBottom>
              4. Intellectual Property
            </Typography>
            <Typography variant="body1" gutterBottom>
              All content provided through our courses is owned by us or our licensors. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </Typography>

            <Typography variant="h6" gutterBottom>
              5. Limitation of Liability
            </Typography>
            <Typography variant="body1" gutterBottom>
              We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our courses or website. This includes but is not limited to any errors or omissions in course content.
            </Typography>

            <Typography variant="h6" gutterBottom>
              6. Changes to Terms
            </Typography>
            <Typography variant="body1" gutterBottom>
              We may modify these Terms of Use at any time. It is your responsibility to review these terms periodically. Your continued use of the website after any changes constitutes your acceptance of the new terms.
            </Typography>

            <Typography variant="h6" gutterBottom>
              7. Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              If you have any questions about these Terms of Use, please reach out to our support team via the contact form on our website.
            </Typography>

            {/* Buttons for Accept and Reject */}
            <Box display="flex" justifyContent="space-between" marginTop={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert("You rejected the terms.")}
              >
                Reject
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => alert("You accepted the terms.")}
              >
                Accept
              </Button>
            </Box>
          </PolicyContainer>
        </BackgroundContainer>
      </ThemeProvider>
    </div>
  );
};

export default TermsOfUse;
