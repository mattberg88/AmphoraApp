import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

export default class AmphoraText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  handleButtonClick = (view) => {
    console.log(view)
    switch (view) {
      case 'menu':
        this.setState({ view:'menu' }, () => {});
      case 'intro':
        this.setState({ view: 'intro' }, () => {});
    }
  }

  render() {
    switch (this.props.type) {
      case 'intro':
        return (
          <View>>
            <Text style={styles.title}>
              はじめに
            </Text>
            <Text style={styles.body}>
  {`  
      アロマテラピー占星術とは、占星術チャート
    に示される潜在的な情報も含め、クライアント
    (顧客）のことをよりよく理解し、的確なアド
    バイスをして精油を使いエネルギーの調整をす
    ることが目的です。
    
      占星術は古代メソポタミアから始まり、長い
    年月を経て現代に受け継がれて来ました。占星
    術チャートでのクラアントの気質や体質の評価、
    使用する植物や精油の決定はヒポクラテス、ニ
    コラス・カルペパー、ルネ・モーリス・ガット
    フォセなどが取り入れていたことで有名です。
    小宇宙である私たちと大宇宙の関係は自然療法
    の大切な一面です。東洋医学、アユルヴェーダ、
    ユナニ医学でも重要視されてきました。

      現代での実践はセルフケア、または心身の健
    康の維持と調整のために取り入れることが可能
    です。現代では素晴らしい最新医療がある反面、
    宇宙との調和や内面の声を聞くということが疎
    かになっています。これがひとつのアロマテラ
    ピー占星術の役割となります。でも決して医療
    に代わるものではなく、参考として使用すると
    いうスタンスが大切です。エネルギーの状態を
    見て、ホリスティックなアプローチのひとつの
    道と考えるといいのではないかと思います。

      アロマテラピーと占星術を一緒に使用するに
    は、学ぶことがたくさんあるので、このアプリ
    を使用すれば時間のあるときにいつでも勉強で
    き、実際のリーディング（鑑定）のときにも確
    認することもできます。倫理的でポジティブに、
    そして自由な方法でこのアプリを活用してくだ
    さい。
    `}
            </Text>
        
          <Button title='back' onPress={this.props.onClick}/>
          </View>
        );
    } 
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign:'center',
    paddingTop: 30,
    fontWeight: 'bold'

  },
  body:{
    padding: 20,
  },
});
