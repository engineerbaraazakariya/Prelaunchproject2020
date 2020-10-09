import React from "react";
import ViralLoops from "viral-loops-react";
import config from "../../config";
import { Container } from "@material-ui/core";

const Referral = () => {
  return (
    <Container>
      <ViralLoops
        publicToken={config.viralLoopsCampaignId}
        formWidget
        milestoneWidget
      />
    </Container>
  );
};

export default Referral;
