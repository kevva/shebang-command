import test from 'ava';
import shebangCommand from '.';

test('main', t => {
	t.is(shebangCommand('#!/usr/bin/env node'), 'node');
	t.is(shebangCommand('#!/bin/bash'), 'bash');
	t.is(shebangCommand('#!/bin/bash -ex'), 'bash -ex');
	t.is(shebangCommand('#! /bin/bash'), 'bash');
	t.is(shebangCommand('#! /bin/bash -ex'), 'bash -ex');
	t.is(shebangCommand('#!/sh'), 'sh');
	t.is(shebangCommand('node'), null);
	t.is(shebangCommand(), null);
});
