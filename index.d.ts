/**
Get the command from a shebang.

@example
```
import shebangCommand from 'shebang-command';

shebangCommand('#!/usr/bin/env node');
//=> 'node'

shebangCommand('#!/bin/bash');
//=> 'bash'
```
*/
declare function shebangCommand(shebang?: string): string | null;

export = shebangCommand;
