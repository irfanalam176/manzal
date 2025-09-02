import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
export const style = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
    backgroundColor: '#41644A',
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0D4715',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  pagerView: {
    flex: 1,
  },
  cards: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 20,
  },
  card: {
    width: width / 2.4,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#A3D1C6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 10,
    backgroundColor: '#41644A',
  },
  duacard: {
    marginBottom: 20,
    backgroundColor: '#F1F0E9',
    padding: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'right',
    borderWidth:2,
    padding:10,
    borderColor:"green",
    borderRadius:10
  },
  arabic: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 20,
    color: '#E9762B',
    marginBottom: 5,
  },
  urdu: {
    textAlign: 'right',
    fontSize: 16,
    color: '#0D4715',
    marginBottom: 5,
    textAlign: 'right',
  },
  english: {
    fontSize: 14,
    color: '#666',
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F1F0E9',
    textAlign: 'center',
    marginVertical: '20',
  },
  mainBtn: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'red',
  },
  bannerAdd:{
    backgroundColor:"white",
  }
});
