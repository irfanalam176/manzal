import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { style } from '../style/style';

const Duas = () => {
  const duas = [
    {
      name: "کھانے سے پہلے کی دعا",
      dua: "بِسْمِ اللّٰہِ وَعَلٰی بَرَكَةِ اللّٰہِ",
      urdu: "میں نے الله کے نام کے ساتھ اور الله کی برکت پر کھانا شروع کیا",
      english: "In the name of Allah and with the blessings of Allah I begin (eating)"
    },
    {
      name: "کھانے کے بعد کی دعا",
      dua: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ",
      urdu: "اللہ عزوجل کا شکر ہے جس نے ہمیں کھلایا پلایا اور مسلمانوں میں سے بنایا۔",
      english: "Thanks to Allah Azzawajal who fed us and made us among Muslims"
    },
    {
      name: "سوتے وقت کی دعا",
      dua: "اَللّٰھُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
      urdu: "الٰہی عزوجل میں تیرے نام پر مرتا ہوں اور جیتا ہوں۔",
      english: "O Allah (Almighty) I live and die in your name."
    },
    {
      name: "نیند سے بیدار ہونے کی دعا",
      dua: "الْحَمْدُ لِلّٰہِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      urdu: "تمام تعریفیں اللہ عزوجل کے لئے جس نے ہمیں موت (نیند) کے بعد حیات (بیداری) عطا فرمائی اور ہمیں اسی طرف لوٹنا ہے۔",
      english: "All Praise onto Allah (Almighty) Who granted us life after death (Sleep) and we are return to him."
    },
    {
      name: "مشکل کے وقت پڑھی جانے والی دعا",
      dua: "لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
      urdu: "تیرے علاوہ کوئی سچا معبود نہیں، تو پاک ہے، یقینا میں ہی ظالموں میں سے ہوں۔",
      english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."
    },
    {
      name: "درد اور بخار کی دعا",
      dua: "بِسْمِ اللَّهِ الْكَبِيرِ أَعُوذُ بِاللَّهِ الْعَظِيمِ مِنْ شَرِّ كُلِّ عَرَقٍ نَعَّارٍ وَمِنْ شَرِّ حَرِّ النَّارِ",
      urdu: "شروع اللہ کے نام سے جو کبریائی والا ہے اور میں اس اللہ کی پناہ میں آتا ہوں جو عظمت والا ہے پھڑکتی رگ اور آگ کی گرمی سے",
      english: "I seek relief taking Allah's great blessed name from all the evils of pulling (pulsating) nerves and from the evils of the hot fire"
    },
    {
      name: "جلنے کے بعد کی دعا",
      dua: "أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ اشْفِ أَنْتَ الشَّافِي لَا شَافِيَ إِلَّا أَنْتَ",
      urdu: "اے اللہ! تو تمام لوگوں کا رب ہے، بیماری کو دور کر دے اور اسے شفا عطا فرما، تو ہی شفا دینے والا ہے، تیر ی شفاع کے علاوہ اور کوئی شفاع نہیں۔",
      english: "O Lord of all mankind, remove the difficulty and grant relief (for) there is no One but You who grants relief (cure)"
    },
    {
      name: "غصہ آنے کے وقت کی دعا",
      dua: "أَعُوذُ بِاللّٰہِ مِنَ الشَّيْطٰنِ الرَّجِيمِ",
      urdu: "میں شیطان مردود سے اللہ عزوجل کی پناہ چاہتا ہوں۔",
      english: "I seek the refuge of Allah Almighty from the rejected Shetan."
    },
    {
      name: "چاند دیکھنے کی دعا",
      dua: "أَعُوذُ بِاللَّهِ مِنْ شَرِّ هَذَا لغاسِق",
      urdu: "میں اللہ عزوجل کی پناہ طلب کرتا ہوں اس تاریک ہوجانے والے کی برائی سے۔",
      english: "I seek the refuge of Allah Azzawajal from the badness of this that darkness."
    },
    {
      name: "چاند دیکھنے کی دعا (دوبارہ)",
      dua: "أَعُوذُ بِاللَّهِ مِنْ شَرِّ هَذَا لغاسِق",
      urdu: "میں اللہ عزوجل کی پناہ طلب کرتا ہوں اس تاریک ہوجانے والے کی برائی سے۔",
      english: "I seek the refuge of Allah Azzawajal from the badness of this that darkness."
    },
    {
      name: "مسجد میں داخل ہونے کی دعا",
      dua: "اَللّٰهُمَّ افْتَحْ لِيْ اَبْوَابَ رَحْمَتِکَ.",
      urdu: "اے اللہ! میرے لیے رحمت کے دروازے کھول دے۔",
      english: "Oh Allah! Open the doors for me of your Blessings."
    },
    {
      name: "مسجد سے نکلنے کی دعا",
      dua: "اَللّٰهُمَّ اِنِّيْ اَسْاَلُکَ مِنْ فَضْلِکَ وَرَحْمَتِکَ",
      urdu: "اے اللہ! میں تجھ سے تیرا فضل اور تیری رحمت مانگتا ہوں۔",
      english: "Oh Allah! I ask you of your Favour"
    }
  ];

  return (
    <ScrollView contentContainerStyle={style.container}>
      {duas.map((item, index) => (
        <View key={index} style={style.duacard}>
          <Text style={style.name}> {item.name}</Text>
          <Text style={style.arabic}>{item.dua}</Text>
          <Text style={style.urdu}>{item.urdu}</Text>
          <Text style={style.english}>{item.english}</Text>
        </View>
      ))}
    </ScrollView>
  );
};


export default Duas;
