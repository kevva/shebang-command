import {expectType} from 'tsd';
import shebangCommand = require('.');

expectType<string | null>(shebangCommand('#!/usr/bin/env node'));
expectType<string | null>(shebangCommand('#!/bin/bash'));
expectType<string | null>(shebangCommand());
