import React from 'react';
import { useSelector } from 'react-redux';
import { Profile } from './components';

interface User {
  _id: string;
  // Add other properties as needed
}

export default () => {
  const users: Map<string, User> = useSelector((state: any) => state.users);
  const profile: { _id: string } = useSelector((state: any) => state.internal.profile);

  return <Profile {...users.get(profile._id)} />;
};