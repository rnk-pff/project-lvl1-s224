#!/usr/bin/env node

import { rules, getQuestionAndAnswer } from '../games/calc-game';
import player from '../player';

player(rules, getQuestionAndAnswer);
