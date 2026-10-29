import { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const COLORS =  {
    background: '#FFFF',
    surface: '#F8FAFC',
    text: '#1E293B',
    secondaryText: '#64748B',
    border:'#E2E8F0',
    rock: '#EF4444',
    paper: '#0D9488',
    scissors: '#D97706',
    vs: '#6366F1',
    win: '#0D9488',
    draw: '#D97706',
    loss: '#EF4444'
};

const CHOICES = [
    { name:'Rock',emoji:'✊',color:COLORS.rock},
    {name: 'Paper', emoji: '✋', color:COLORS.paper},
    {name:'Scissor', emoji:'✌', color:COLORS.scissors}
];
