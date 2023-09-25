import styled from "styled-components";
import store from '../../store/store'
import { connect } from "react-redux";


const Desktop1NeedsToUseAuto = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border: 4px solid #ff0000;
  box-sizing: border-box;
  width: 1440px;
  height: 1024px;
`;
const Desktop1Child = styled.div`
  position: absolute;
  top: 126px;
  left: 750px;
  background: radial-gradient(50% 50% at 50% 50%, #e4691e 57.29%, #ea8f5a);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 690px;
  height: 898px;
`;
const Desktop1Item = styled.div`
  position: absolute;
  top: 126px;
  left: 0px;
  background: radial-gradient(50% 50% at 50% 50%, #e4691e 57.29%, #ea8f5a);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 750px;
  height: 898px;
`;
const PngtreelordGaneshaPng84769 = styled.img`
  position: absolute;
  top: 132px;
  left: 61px;
  width: 715px;
  height: 892px;
  object-fit: cover;
`;
const Desktop1Inner = styled.div`
  position: absolute;
  top: 173px;
  left: 789px;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 8px 5px 4px rgba(0, 0, 0, 0.2);
  width: 580px;
  height: 822px;
`;
const EReciept = styled.b`
  position: absolute;
  top: 336px;
  left: 1015px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #e88042;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 1440px;
  height: 132px;
`;
const VecteezyIndianElephantGodOIcon = styled.img`
  position: absolute;
  top: 201px;
  left: 1029px;
  width: 100px;
  height: 115px;
  object-fit: cover;
`;
const GaneshUtsav2023 = styled.div`
  position: absolute;
  top: 6px;
  left: 368px;
  font-size: 96px;
  font-family: Ruthie;
  color: #fff;
  text-shadow: 11px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Ganesha1Generated1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 131px;
  height: 132px;
  object-fit: cover;
`;
const LineIcon = styled.img`
  position: absolute;
  top: 387px;
  left: 815px;
  width: 515px;
  height: 5.07px;
`;
const Desktop1Child1 = styled.img`
  position: absolute;
  top: 777px;
  left: 822px;
  width: 515px;
  height: 5.07px;
`;
const Name1 = styled.b`
  position: absolute;
  top: 432px;
  left: 860px;
  font-family: "Istok Web";
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Mahesh = styled.div`
  position: absolute;
  top: 432px;
  left: 1072px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Email = styled.b`
  position: absolute;
  top: 569px;
  left: 856px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Amount = styled.b`
  position: absolute;
  top: 502px;
  left: 856px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const MhrB123 = styled.div`
  position: absolute;
  top: 638px;
  left: 1072px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Asdgfhh = styled.div`
  position: absolute;
  top: 703px;
  left: 1072px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Abcdegmailcom = styled.div`
  position: absolute;
  top: 567px;
  left: 1072px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Rs = styled.div`
  position: absolute;
  top: 502px;
  left: 1072px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const ThankYouFor = styled.p`
  margin: 0;
`;
const ThankYouForContainer = styled.b`
  position: absolute;
  top: 826px;
  left: 877px;
  font-size: 32px;
  font-family: Inconsolata;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Hostel = styled.b`
  position: absolute;
  top: 638px;
  left: 856px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const EId = styled.b`
  position: absolute;
  top: 703px;
  left: 856px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const IndianInstituteOfTechnologyIcon = styled.img`
  position: absolute;
  top: 6px;
  left: 1281px;
  width: 159px;
  height: 120px;
  overflow: hidden;
`;
const Desktop1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #fff;
  width: 1440px;
  height: 1024px;
  overflow: hidden;
`;
const ExportToCodeErrorsDeleteRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: 24px;
  color: #000;
  font-family: Inter;
`;


const ExportToCodeErrorsDelete = () => {
  const donorJSON = localStorage.getItem("donor");
  const donor = JSON.parse(donorJSON);
  console.log(donor);
  return (
    <ExportToCodeErrorsDeleteRoot>
      <Desktop1NeedsToUseAuto />
      <Desktop1>
        <Desktop1Child />
        <Desktop1Item />
        <PngtreelordGaneshaPng84769
          alt=""
          src="https://images.unsplash.com/photo-1598195596234-e04b82ef8adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZXNoYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        />
        <Desktop1Inner />
        <EReciept>E - Reciept</EReciept>
        <RectangleDiv />
        <VecteezyIndianElephantGodOIcon
          alt=""
          src="https://i.postimg.cc/LsHKqNHn/vecteezy-indianelephantgodonwhitebackground-6772541-1-2x.png"
        />
        <GaneshUtsav2023>Ganesh Utsav -2023</GaneshUtsav2023>
        <Ganesha1Generated1Icon
          alt=""
          src="https://i.postimg.cc/RZxzmvy1/ganesha-1-generated-1-2x.png"
        />
        <LineIcon alt="" src="https://i.postimg.cc/W1pcz5pt/line-2.png" />
        <Desktop1Child1 alt="" src="https://i.postimg.cc/W1pcz5pt/line-2.png" />
        <Name1>Name</Name1>
        <Mahesh>{donor.name}</Mahesh>
        <Email>Email</Email>
        <Amount>Amount</Amount>
        <MhrB123>{donor.hostelName} {donor.roomNumber}</MhrB123>
        <Asdgfhh>{donor._id}</Asdgfhh>
        <Abcdegmailcom>{donor.mail}</Abcdegmailcom>
        <Rs>{donor.amount}</Rs>
        <ThankYouForContainer>
          <ThankYouFor>{`Thank You for Generosity `}</ThankYouFor>
          <ThankYouFor>We appreciate your support</ThankYouFor>
        </ThankYouForContainer>
        <Hostel>Hostel</Hostel>
        <EId>E - ID</EId>
        <IndianInstituteOfTechnologyIcon
          alt=""
          src="https://i.postimg.cc/XY2SC9XL/indian-institute-of-technology-bhubaneswar-logo-1.png"
        />
      </Desktop1>
    </ExportToCodeErrorsDeleteRoot>
  );
};

const mapStoreStateToProps = ({ donor }) => {
  return {
    ...donor,
  };
};


export default connect(mapStoreStateToProps)(ExportToCodeErrorsDelete);
