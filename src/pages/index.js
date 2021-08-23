import { gql } from '@apollo/client';
// import React, { useEffect, useState } from 'react';
import { HomePage } from '../components';
import { getApolloClient } from '../utils';

export default function Home(props) {
  const { profile } = props;
  // const [profileData, setProfileData] = useState(profile);
  // const getProfile = async () => {
  //   const GET_PROFILE = gql`{
  //   getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
  //     dev
  //   }
  // }`;
  //   const { data } = await getApolloClient().query({ query: GET_PROFILE });
  //   const profil = JSON.parse(data.getProfile.dev);
  //   return profil;
  // };

  // useEffect(async () => {
  //   const data = getProfile();
  //   const dataShow = await data;
  //   setProfileData(dataShow);
  // }, []);
  return <HomePage profile={profile} />;
}

export const getStaticProps = async () => {
  const GET_PROFILE = gql`{
    getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
      dev
    }
  }`;

  const { data } = await getApolloClient().query({ query: GET_PROFILE });
  const profile = JSON.parse(data.getProfile.dev);

  return {
    props: {
      profile,
    },
    revalidate: 1,
  };
};
