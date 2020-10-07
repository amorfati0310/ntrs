import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};



export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' });
    
};

interface loginProps {
    email: string;
    password: string
}

export async function login({email, password}: loginProps) {
    try {
        const response = await axios.post(
          `${SERVER_BASE_URL}/users/login`,
          JSON.stringify({ user: { email, password } }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        return response;
      } catch (error) {
        return error.response;
      }
}
