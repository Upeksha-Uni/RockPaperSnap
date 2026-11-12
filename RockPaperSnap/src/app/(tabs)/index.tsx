import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const COLORS ={
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1E293B',
    secondary: '#64748B',
    border: '#E2E8F0',
    rock: '#EF4444',
    paper: '#0D9488',
    scissors: '#D97706',
    vs: '#6366F1',
    win:'#0D9770',
    lose:'#EF4444',
    draw: '#D97706'
};

const CHOICES =[
    {name: 'Rock', color: COLORS.rock, emoji: '✊'},
    {name: 'Paper', color: COLORS.paper, emoji: '✋'},
    {name: 'Scissors', color: COLORS.scissors, emoji: '✌️'}
];

export default function PlayScreen() {
    const [userChoice, setUserChoice] = useState<(typeof CHOICES)[number] | null>(null);
    const [computerChoice, setComputerChoice] = useState<(typeof CHOICES)[number] | null>(null);
    const [result, setResult] = useState('Make your move!');
    const [resultColor, setResultColor] = useState(COLORS.text);
    const [score, setScore] = useState({wins: 0, losses: 0, draws: 0});
    const playGame = (choice: (typeof CHOICES)[number]) => {
        const randomNum = Math.floor(Math.random()*3);
        const compChoice = CHOICES[randomNum];
        setUserChoice(choice);
        setComputerChoice(compChoice);

        if (choice.name === compChoice.name) {
            setResult('Draw! 🤝');
            setResultColor(COLORS.draw);
            setScore(prevScore => ({...prevScore, draws: prevScore.draws + 1}));
        }
        else if (
(choice.name === 'Rock' && compChoice.name === 'Scissors') ||
(choice.name === 'Paper' && compChoice.name === 'Rock') ||
(choice.name === 'Scissors' && compChoice.name === 'Paper')
        ) {
            setResult('You win! 🎉');
            setResultColor(COLORS.win);
            setScore(prevScore => ({...prevScore, wins: prevScore.wins + 1}));
        } else {
            setResult('You lose! 😳');
            setResultColor(COLORS.lose);
            setScore(prevScore => ({...prevScore, losses: prevScore.losses + 1}));
        }
    };

    const resetGame = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult('Make your move!');
        setResultColor(COLORS.text);
        setScore({wins: 0, losses: 0, draws: 0});
    };

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: COLORS.background,
            alignItems: 'center',
            paddingTop:10,
            paddingHorizontal:16
        },
        header:{
            fontSize:32
        }
    })

    return(
    <View style={styles.container}>
        <Text style = {styles.header}>RPS Showdown</Text>
        
    </View>
    );
    
}



