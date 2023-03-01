import styled from 'styled-components';

export const PumpContainer = styled.div`
  width: ${(props) => props.width || '100%'};
  color: ${(props) => props.color || 'inherit'};
  position: ${(props) => props.position || 'static'};
  top: ${(props) => props.top || 'unset'};
  left: ${(props) => props.left || 'unset'};
  height: ${(props) => props.height || 'auto'};
  min-height: ${(props) => props.minHeight || 'auto'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius || '0px'};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius || '0px'};
  border-top-right-radius: ${(props) => props.borderTopRightRadius || '0px'};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius || '0px'};
  background: ${(props) => props.background || 'unset'};
  background-size: ${(props) => props.backgroundSize || 'unset'};
`;

export const PumpCard = styled.div`
  border-radius: ${(props) => props.borderRadius || '32px'};
  background-color: ${(props) => props.backgroundColor || 'white'};
  margin ${(props) => props.margin || '0px'};
`;

export const PumpText = styled.p`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: ${(props) => props.fontWeight || '400'};
  line-height: ${(props) => props.lineHeight || '100%'};
  text-align: ${(props) => props.textAlign || 'left'};
  font-family: ${(props) => props.fontFamily || '\'Karla\', sans-serif'};
  margin-bottom: ${(props) => props.marginBottom || 'unset'};
  @media (max-width: 768px) {
    color: ${(props) => props.colorMobile || props.color};
    font-size: ${(props) => props.fontSize || props.fontSize};
    font-weight: ${(props) => props.fontWeight || props.fontWeight};
    text-align: ${(props) => props.textAlign || props.textAlign};
    margin-bottom: ${(props) => props.marginBottom || props.marginBottom};
  }
`;

export const PumpButton = styled.button`
  width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || '0.4rem 1rem'};
  background-color: ${(props) => props.backgroundColor || 'blue'};
  box-shadow: ${(props) => props.boxShadow || 'inherit'};
  border: ${(props) => props.border || 'unset'};
  text-align: ${(props) => props.textAlign || 'center'};
  border-radius: ${(props) => props.borderRadius || '16px'};
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '14px'};
  @media (max-width: 768px) {
    padding: ${(props) => props.paddingMobile || props.padding};
  }
`;

export const PumpDivider = styled.div`
  width: ${(props) => props.width || '100%'};
  color: ${(props) => props.color || 'white'};
  border-top: ${(props) => props.border || `5px solid white`};
  margin: ${(props) => props.margin || `1rem 0px`};
  background-color: ${(props) => props.backgroundColor || 'white'};
  @media (max-width: 768px) {
    width: ${(props) => props.widthMobile || props.width};
  }
`;

export const PumpInput = styled.input`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border: ${(props) => props.border || '0px'};
  border-bottom: ${(props) => props.borderBottom || '1px solid gray'};
  border-radius: ${(props) => props.borderRadius || '0px'};
`;

export const PumpImage = styled.img`
  min-height: ${(props) => props.minHeight || 'auto'};
  @media (max-width: 768px) {
    min-height: ${(props) => props.minHeightMobile || 'auto'};
    border-radius: ${(props) => props.borderRadiusMobile || props.borderRadius};
  }
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50% !important;
  left: 50% !important;
  -webkit-transform: translate(-50%, -50%) !important;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%) !important;
  margin: 0 auto !important;
  padding: 32px;
  width: ${(props) => props.width || '40%'};
  background: ${(props) => props.bg || 'unset'};
  background-color: ${(props) => props.bgColor || 'white'};
  margin: ${(props) => props.margin || '0px auto'};
  text-align: ${(props) => props.textAlign || 'left'};
  border-radius: ${(props) => props.borderRadius || 'unset'};
  border: ${(props) => props.border || 'unset'};
  @media (max-width: 1200px) {
    width: ${(props) => props.width1200 || '40%'};
    margin: ${(props) => props.margin1200 || '0px auto'};
  }
  @media (max-width: 992px) {
    width: ${(props) => props.width992 || '40%'};
    margin: ${(props) => props.margin992 || '0px auto'};
  }
  @media (max-width: 768px) {
    width: ${(props) => props.widthMobile || '100% !important'};
    margin: ${(props) => props.marginMobile || '0px auto'};
    height: ${(props) => props.heightMobile || 'unset'};
  }
`;
