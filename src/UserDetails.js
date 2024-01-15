
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const githubUsername = 'ishanrajpurohit-iitj'; 

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
     
        const userResponse = await axios.get(`https://api.github.com/users/${githubUsername}`);
        setUserDetails(userResponse.data);
      } catch (error) {
        console.error('Error fetching GitHub user details:', error);
      }
    };

    fetchUserDetails();
  }, [githubUsername]);

  return (
    <div>
      <h1 className='font-bold text-4xl'>GitHub Details</h1>
    
      <h1 className='pt-4 font-semibold text-4xl'>Ishan Rajpurohit</h1>
      <br></br>
      {userDetails ? (
        <div className='flex'>
          <br></br>  
          <img src={userDetails.avatar_url} alt="Profile" className="rounded-full w-48 h-48 mt-10" />
          <br></br>
          <div className='grid mx-16 text-xl gap-2'>
          <h2>{userDetails.name}</h2>
          <p class="font-bold">Username: </p><p>{userDetails.login}</p>
      
          <p class="font-bold">Followers: </p><p>{userDetails.followers}</p>
          <p class="font-bold">Public Repositories: </p><p>{userDetails.public_repos}</p>
          <p class="font-bold">Link: </p><p><a className="underline"href='https://www.github.com/ishanrajpurohit-iitj' target='_Blank' rel="noreferrer">github.com/ishanrajpurohit-iitj</a></p>
          </div>
    
        </div>
      ) : (
        <p>Loading GitHub user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
