import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';

class Botao extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.styles = StyleSheet.create({
            botao: {
                width: 250,
                height: 50,
                borderWidth: 2,
                borderColor: props.color,
                backgroundColor: 'transparent',
                borderRadius: 25
            },
            botaoArea: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },
            botaoText: {
                color: props.color,
                fontSize: 14,
                fontWeight: 'bold'
            }

        });
    }
  render(){
    return (
        <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
            <View style={this.styles.botaoArea}>
                <Text style={this.styles.botaoText}>Quebrar biscoito</Text>
            </View>
        </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {texto: ''};
        this.frases = ['O importante não é vencer todos os dias, mas lutar sempre.', 'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!', 'É melhor conquistar a si mesmo do que vencer mil batalhas.', 'Enquanto houver vontade de lutar haverá esperança de vencer.', 'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.'];
        this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    }

    quebrarBiscoito() {
        let s = this.state;
        let r = Math.floor(Math.random() * this.frases.length);

        s.texto = this.frases[r];
        this.setState(s);
    }
  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./images/cookie.png')}></Image>

          <Text style={styles.texto}>"{this.state.texto}"</Text>

        <Botao color="#191970" text={"Quebrar Biscoito"} onPress={this.quebrarBiscoito}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
      alignItems: 'center'
  },
    texto: {
      fontSize: 17,
      color: '#191970',
      margin: 30,
      fontStyle: 'italic'
    }
});
