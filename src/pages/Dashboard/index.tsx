import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on Github</Title>

      <Form action="">
        <input placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/18500?s=460&v=4"
            alt="Thiago Assis"
          />
          <div>
            <strong>rails/rails</strong>
            <p>Rails framework</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/18500?s=460&v=4"
            alt="Thiago Assis"
          />
          <div>
            <strong>rails/rails</strong>
            <p>Rails framework</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/18500?s=460&v=4"
            alt="Thiago Assis"
          />
          <div>
            <strong>rails/rails</strong>
            <p>Rails framework</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
