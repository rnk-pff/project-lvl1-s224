#!/usr/bin/env node

import { rules, getQuestionAndAnswer } from '../games/gcd-game';
import player from '../player';

player(rules, getQuestionAndAnswer);
