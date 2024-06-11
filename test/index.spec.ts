// test/index.spec.ts
import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';

it('should insert and query user', async () => {
	const user = await env.DB.prepare('insert into users(name, email) values(?,?) returning *')
		.bind('name', 'email@example.com')
		.first<UserRow>();
	expect(user).toEqual({ id: 1, name: 'name', email: 'email@example.com' });

	const userById = await env.DB.prepare('select * from users where id = ?').bind(user!.id).first<UserRow>();
	expect(userById).toEqual({ id: 1, name: 'name', email: 'email@example.com' });
});
