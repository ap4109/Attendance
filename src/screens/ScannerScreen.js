import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
export default class ScannerScreen extends React.Component {
  onSuccess = ({ data, navigation }) => {
   


      if(data==='VlRvNUJCQmMvb3BiR09NeVlOV3V6Nzlpc2FHSEtTN3EwaWR0dGlmcHNQL0xnWkJIZVhaOGF5dUdlWnRaM20xaw'){
        this.props.navigation.navigate('Result', {
          Id  :'AWTS001111',
          Name :'Lakshmeesha',
          contractor: 'Naraiah',
        })
      }

     else if(data==='VzdJc21TUnZ5M0RWUmZqODNVODhJWjhTei9uVmNPejVHVDhBSHNBdTdVZk1UdXkwQk8yd2UwaWRrRSsvaXBvWA'){
        this.props.navigation.navigate('Result',{
          Id  :'AWTS002222',
          Name:'Arpit',
          contractor: 'Naraiah',
        })
      }

     else if(data==='Z3FnbDZ0VVBxQnptQ0sxZnIvR1NoTDQ2bkxZclVYQkErQW56RUNtZ1poaTlKL29pRTJndzVxb1pLamJaK0VjOA'){
        this.props.navigation.navigate('Result',{
          Id  :'AWTS003333',
          Name:'Narendra',
          contractor: 'Naraiah',
        })
      }

     else if(data==='ZFhWaEhXaEhmNHBFTHdDSDNxS1VyTHFDYUIyQzZaNDhWTUlEcGVwU1Z6L2xyendLTFpxalVpbC9qZVZtU014WA'){
        this.props.navigation.navigate('Result',{
          Id :'AWTS004444',
          Name:'Chandrakant',
          contractor: 'Naraiah',
        })
      }

     else if(data==='ZWpObVZHREY0Z2ZWYTZNVDNOVWpRQWJYQ2VRekNQcnlhdy9pZ29OMUp6WG5HV0NneWNkZnAwaWRrRSsvaXBvWA'){
        this.props.navigation.navigate('Result',{
          Id :'AWTS005555',
          Name:'Krishna',
          contractor: 'Naraiah',
        })
      }
      else (alert('Please Scan Valid QR Code'))



  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        fadeIn={true}
        showMarker={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
