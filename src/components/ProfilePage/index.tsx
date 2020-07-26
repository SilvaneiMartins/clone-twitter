import React from 'react';

import Feed from '../Feed'

import { Container, EditButton, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
          
                <h1>Silvanei Martins</h1>
                <h2>@silvaneimartins</h2>

                <p>
                    Developer at <a href="https://silvaneimartins.com.br">@SilvaneiMartins</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        <span>Rondônia, Brasil</span>
                    </li>
                    <li>
                        <CakeIcon />
                        <span>Nascido(a) em 00 de dezembro de 1978</span>
                    </li>
                </ul>

                <Followage>
                    <span>
                        Seguindo <strong>1200</strong>
                    </span>
                    <span>
                        <strong>907 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
  )
}

export default ProfilePage;