"use client";

import {useEffect} from "react";

import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/api';
import type {WithAuthenticatorProps} from '@aws-amplify/ui-react';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import config from '../../amplifyconfiguration.json';
import {createTodo} from '@/graphql/mutations';
import {listTodos} from '@/graphql/queries';

const client = generateClient();
Amplify.configure(config);

function Login({signOut, user}: WithAuthenticatorProps) {
	
	useEffect(() => {
		async function create() {
			const result = await client.graphql({
				query: createTodo, variables: {
					input: {
						name: 'My first blog!'
					}
				}
			});
			console.log('createeeeeeeee', result);
			return result;
		}
		
		create().then(response => {
			console.log(response);
		})
		
	}, []);
	
	
	useEffect(() => {
		async function listAll() {
			const result = await client.graphql({query: listTodos});
			console.log('list', result);
			return result;
		}
		
		listAll().then(response => {
			console.log(response);
		})
	}, []);
	
	
	return (<>
				<h1>Hello {user?.signInDetails?.loginId}</h1>
				<button onClick={signOut}>Sign out</button>
			</>);
}

export default withAuthenticator(Login);
