import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const names = [
{"id":"1","arabicName":"ٱلْرَّحْمَـانُ","meaning":"The Most or Entirely Merciful","name":"Ar-Rahmaan"},
{"id":"2","arabicName":"ٱلْرَّحِيْمُ","meaning":"The Bestower of Mercy","name":"Ar-Raheem"},
{"id":"3","arabicName":"ٱلْمَلِكُ","meaning":"The King and Owner of Dominion","name":"Al-Malik"},
{"id":"4","arabicName":"ٱلْقُدُّوسُ","meaning":"The Absolutely Pure","name":"Al-Quddus"},
{"id":"5","arabicName":"ٱلْسَّلَامُ","meaning":"The Perfection and Giver of Peace","name":"As-Salam"},
{"id":"6","arabicName":"ٱلْمُؤْمِنُ","meaning":"The One Who gives Emaan and Security","name":"Al-Mu’min"},
{"id":"7","arabicName":"ٱلْمُهَيْمِنُ","meaning":"The Guardian, The Witness, The Overseer","name":"Al-Muhaymin"},
{"id":"8","arabicName":"ٱلْعَزِيزُ","meaning":"The All Mighty","name":"Al-Azeez"},
{"id":"9","arabicName":"ٱلْجَبَّارُ","meaning":"The Compeller, The Restorer","name":"Al-Jabbar"},
{"id":"10","arabicName":"ٱلْمُتَكَبِّرُ","meaning":"The Supreme, The Majestic","name":"Al-Mutakabbir"},
{"id":"11","arabicName":"ٱلْخَالِقُ","meaning":"The Creator, The Maker","name":"Al-Khaaliq"},
{"id":"12","arabicName":"ٱلْبَارِئُ","meaning":"The Originator","name":"Al-Baari’"},
{"id":"13","arabicName":"ٱلْمُصَوِّرُ","meaning":"The Fashioner","name":"Al-Musawwir"},
{"id":"14","arabicName":"ٱلْغَفَّارُ","meaning":"The All- and Oft-Forgiving","name":"Al-Ghaffar"},
{"id":"15","arabicName":"ٱلْقَهَّارُ","meaning":"The Subduer, The Ever-Dominating","name":"Al-Qahhar"},
{"id":"16","arabicName":"ٱلْوَهَّابُ","meaning":"The Giver of Gifts","name":"Al-Wahhaab"},
{"id":"17","arabicName":"ٱلْرَّزَّاقُ","meaning":"The Provider","name":"Ar-Razzaaq"},
{"id":"18","arabicName":"ٱلْفَتَّاحُ","meaning":"The Opener, The Judge","name":"Al-Fattaah"},
{"id":"19","arabicName":"ٱلْعَلِيمُ","meaning":"The All-Knowing, The Omniscient","name":"Al-‘aleem"},
{"id":"20","arabicName":"ٱلْقَابِضُ","meaning":"The Withholder","name":"Al-Qaabid"},
{"id":"21","arabicName":"ٱلْبَاسِطُ","meaning":"The Extender","name":"Al-Baasit"},
{"id":"22","arabicName":"ٱلْخَافِضُ","meaning":"The Reducer, The Abaser","name":"Al-Khaafidh"},
{"id":"23","arabicName":"ٱلْرَّافِعُ","meaning":"The Exalter, The Elevator","name":"Ar-Raafi’"},
{"id":"24","arabicName":"ٱلْمُعِزُّ","meaning":"The Honourer, The Bestower","name":"Al-Mu’izz"},
{"id":"25","arabicName":"ٱلْمُذِلُّ","meaning":"The Dishonourer, The Humiliator","name":"Al-Muzil"},
{"id":"26","arabicName":"ٱلْسَّمِيعُ","meaning":"The All-Hearing","name":"As-Samee’"},
{"id":"27","arabicName":"ٱلْبَصِيرُ","meaning":"The All-Seeing","name":"Al-Baseer"},
{"id":"28","arabicName":"ٱلْحَكَمُ","meaning":"The Judge, The Giver of Justice","name":"Al-Hakam"},
{"id":"29","arabicName":"ٱلْعَدْلُ","meaning":"The Utterly Just","name":"Al-‘adl"},
{"id":"30","arabicName":"ٱلْلَّطِيفُ","meaning":"The Subtle One, The Most Gentle","name":"Al-Lateef"},
{"id":"31","arabicName":"ٱلْخَبِيرُ","meaning":"The Acquainted, the All-Aware","name":"Al-Khabeer"},
{"id":"32","arabicName":"ٱلْحَلِيمُ","meaning":"The Most Forbearing","name":"Al-Haleem"},
{"id":"33","arabicName":"ٱلْعَظِيمُ","meaning":"The Magnificent, The Supreme","name":"Al-‘atheem"},
{"id":"34","arabicName":"ٱلْغَفُورُ","meaning":"The Forgiving, The Exceedingly Forgiving","name":"Al-Ghafoor"},
{"id":"35","arabicName":"ٱلْشَّكُورُ","meaning":"The Most Appreciative","name":"As--shakoor"},
{"id":"36","arabicName":"ٱلْعَلِيُّ","meaning":"The Most High, The Exalted","name":"Al-‘alee"},
{"id":"37","arabicName":"ٱلْكَبِيرُ","meaning":"The Greatest, The Most Grand","name":"Al-Kabeer"},
{"id":"38","arabicName":"ٱلْحَفِيظُ","meaning":"The Preserver, The All-Heedful and All-Protecting","name":"Al-Hafeedh"},
{"id":"39","arabicName":"ٱلْمُقِيتُ","meaning":"The Sustainer","name":"Al-Muqeet"},
{"id":"40","arabicName":"ٱلْحَسِيبُ","meaning":"The Reckoner, The Sufficient","name":"Al-Haseeb"},
{"id":"41","arabicName":"ٱلْجَلِيلُ","meaning":"The Majestic","name":"Al-Jaleel"},
{"id":"42","arabicName":"ٱلْكَرِيمُ","meaning":"The Most Generous, The Most Esteemed","name":"Al-Kareem"},
{"id":"43","arabicName":"ٱلْرَّقِيبُ","meaning":"The Watchful","name":"Ar-Raqeeb"},
{"id":"44","arabicName":"ٱلْمُجِيبُ","meaning":"The Responsive One","name":"Al-Mujeeb"},
{"id":"45","arabicName":"ٱلْوَاسِعُ","meaning":"The All-Encompassing, the Boundless","name":"Al-Waasi’"},
{"id":"46","arabicName":"ٱلْحَكِيمُ","meaning":"The All-Wise","name":"Al-Hakeem"},
{"id":"47","arabicName":"ٱلْوَدُودُ","meaning":"The Most Loving","name":"Al-Wadood"},
{"id":"48","arabicName":"ٱلْمَجِيدُ","meaning":"The Glorious, The Most Honorable","name":"Al-Majeed"},
{"id":"49","arabicName":"ٱلْبَاعِثُ","meaning":"The Resurrector, The Raiser of the Dead","name":"Al-Ba’ith"},
{"id":"50","arabicName":"ٱلْشَّهِيدُ","meaning":"The All- and Ever Witnessing","name":"As--shaheed"},
{"id":"51","arabicName":"ٱلْحَقُّ","meaning":"The Absolute Truth","name":"Al-Haqq"},
{"id":"52","arabicName":"ٱلْوَكِيلُ","meaning":"The Trustee, The Disposer of Affairs","name":"Al-Wakeel"},
{"id":"53","arabicName":"ٱلْقَوِيُّ","meaning":"The All-Strong","name":"Al-Qawiyy"},
{"id":"54","arabicName":"ٱلْمَتِينُ","meaning":"The Firm, The Steadfast","name":"Al-Mateen"},
{"id":"55","arabicName":"ٱلْوَلِيُّ","meaning":"The Protecting Associate","name":"Al-Waliyy"},
{"id":"56","arabicName":"ٱلْحَمِيدُ","meaning":"The Praiseworthy","name":"Al-Hameed"},
{"id":"57","arabicName":"ٱلْمُحْصِيُ","meaning":"The All-Enumerating, The Counter","name":"Al-Muhsee"},
{"id":"58","arabicName":"ٱلْمُبْدِئُ","meaning":"The Originator, The Initiator","name":"Al-Mubdi"},
{"id":"59","arabicName":"ٱلْمُعِيدُ","meaning":"The Restorer, The Reinstater","name":"Al-Mu’id"},
{"id":"60","arabicName":"ٱلْمُحْيِى","meaning":"The Giver of Life","name":"Al-Muhyee"},
{"id":"61","arabicName":"ٱلْمُمِيتُ","meaning":"The Bringer of Death, the Destroyer","name":"Al-Mumeet"},
{"id":"62","arabicName":"ٱلْحَىُّ","meaning":"The Ever-Living","name":"Al-Hayy"},
{"id":"63","arabicName":"ٱلْقَيُّومُ","meaning":"The Sustainer, The Self-Subsisting","name":"Al-Qayyoom"},
{"id":"64","arabicName":"ٱلْوَاجِدُ","meaning":"The Perceiver","name":"Al-Waajid"},
{"id":"65","arabicName":"ٱلْمَاجِدُ","meaning":"The Illustrious, the Magnificent","name":"Al-Maajid"},
{"id":"66","arabicName":"ٱلْوَاحِدُ","meaning":"The One","name":"Al-Waahid"},
{"id":"67","arabicName":"ٱلْأَحَد","meaning":"The Unique, The Only One","name":"Al-Ahad"},
{"id":"68","arabicName":"ٱلْصَّمَدُ","meaning":"The Eternal, Satisfier of Needs","name":"As-Samad"},
{"id":"69","arabicName":"ٱلْقَادِرُ","meaning":"The Capable, The Powerful","name":"Al-Qadir"},
{"id":"70","arabicName":"ٱلْمُقْتَدِرُ","meaning":"The Omnipotent","name":"Al-Muqtadir"},
{"id":"71","arabicName":"ٱلْمُقَدِّمُ","meaning":"The Expediter, The Promoter","name":"Al-Muqaddim"},
{"id":"72","arabicName":"ٱلْمُؤَخِّرُ","meaning":"The Delayer, the Retarder","name":"Al-Mu’akhkhir"},
{"id":"73","arabicName":"ٱلأَوَّلُ","meaning":"The First","name":"Al-Awwal"},
{"id":"74","arabicName":"ٱلْآخِرُ","meaning":"The Last","name":"Al-Aakhir"},
{"id":"75","arabicName":"ٱلْظَّاهِرُ","meaning":"The Manifest","name":"Az-Dhaahir"},
{"id":"76","arabicName":"ٱلْبَاطِنُ","meaning":"The Hidden One, Knower of the Hidden","name":"Al-Baatin"},
{"id":"77","arabicName":"ٱلْوَالِي","meaning":"The Governor, The Patron","name":"Al-Waali"},
{"id":"78","arabicName":"ٱلْمُتَعَالِي","meaning":"The Self Exalted","name":"Al-Muta’ali"},
{"id":"79","arabicName":"ٱلْبَرُّ","meaning":"The Source of Goodness, the Kind Benefactor","name":"Al-Barr"},
{"id":"80","arabicName":"ٱلْتَّوَّابُ","meaning":"The Ever-Pardoning, The Relenting","name":"At-Tawwab"},
{"id":"81","arabicName":"ٱلْمُنْتَقِمُ","meaning":"The Avenger","name":"Al-Muntaqim"},
{"id":"82","arabicName":"ٱلْعَفُوُّ","meaning":"The Pardoner","name":"Al-‘afuww"},
{"id":"83","arabicName":"ٱلْرَّؤُفُ","meaning":"The Most Kind","name":"Ar-Ra’oof"},
{"id":"84","arabicName":"مَالِكُ ٱلْمُلْكُ","meaning":"Master of the Kingdom, Owner of the Dominion","name":"Ma-Lik-ul-mulk"},
{"id":"85","arabicName":"ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ","meaning":"Possessor of Glory and Honour, Lord of Majesty and Generosity","name":"Dh-L-jalaali wal-ikraam"},
{"id":"86","arabicName":"ٱلْمُقْسِطُ","meaning":"The Equitable, the Requiter","name":"Al-Muqsit"},
{"id":"87","arabicName":"ٱلْجَامِعُ","meaning":"The Gatherer, the Uniter","name":"Al-Jaami’"},
{"id":"88","arabicName":"ٱلْغَنيُّ","meaning":"The Self-Sufficient, The Wealthy","name":"Al-Ghaniyy"},
{"id":"89","arabicName":"ٱلْمُغْنِيُّ","meaning":"The Enricher","name":"Al-Mughni"},
{"id":"90","arabicName":"ٱلْمَانِعُ","meaning":"The Withholder","name":"Al-Mani’"},
{"id":"91","arabicName":"ٱلْضَّارُ","meaning":"The Distresser","name":"Ad-Dharr"},
{"id":"92","arabicName":"ٱلْنَّافِعُ","meaning":"The Propitious, the Benefactor","name":"An-Nafi’"},
{"id":"93","arabicName":"ٱلْنُّورُ","meaning":"The Light, The Illuminator","name":"An-Nur"},
{"id":"94","arabicName":"ٱلْهَادِي","meaning":"The Guide","name":"Al-Haadi"},
{"id":"95","arabicName":"ٱلْبَدِيعُ","meaning":"The Incomparable Originator","name":"Al-Badee’"},
{"id":"96","arabicName":"ٱلْبَاقِي","meaning":"The Ever-Surviving, The Everlasting","name":"Al-Baaqi"},
{"id":"97","arabicName":"ٱلْوَارِثُ","meaning":"The Inheritor, The Heir","name":"Al-Waarith"},
{"id":"98","arabicName":"ٱلْرَّشِيدُ","meaning":"The Guide, Infallible Teacher","name":"Ar-Rasheed"},
{"id":"99","arabicName":"ٱلْصَّبُورُ","meaning":"The Forbearing, The Patient","name":"As-Saboor"}
];

const NameListScreen = () => {
  const navigation = useNavigation();

  const handleNamePress = (item) => {
    navigation.navigate('NameDetailsScreen', { name: item.name, meaning: item.meaning, arabicName: item.arabicName });
  };

  const renderName = ({ item }) => (
    <TouchableOpacity style={styles.nameContainer} onPress={() => handleNamePress(item)}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.meaning}>{item.meaning}</Text>
      <Text style={styles.arabicName}>{item.arabicName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={names}
        renderItem={renderName}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  
  nameContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  meaning: {
    fontSize: 16,
    color: '#444',
  },
  
  arabicName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  }
});

export default NameListScreen;
