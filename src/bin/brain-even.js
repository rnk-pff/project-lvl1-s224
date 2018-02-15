#!/usr/bin/env node

import { rules, getQuestionAndAnswer } from '../games/even-game';
import player from '../player';

player(rules, getQuestionAndAnswer);
