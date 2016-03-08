import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('#!/usr/bin/env node'), 'node');
	t.is(fn('#!/bin/bash'), 'bash');
	t.is(fn('#!/bin/bash -ex'), 'bash -ex')
	t.is(fn('#! /bin/bash'), 'bash');
	t.is(fn('#! /bin/bash -ex'), 'bash -ex');
	t.is(fn('#!/sh'), 'sh');
	t.is(fn('node'), null);
});
