import axios from 'axios';

import { IWidgetDetails } from '../interfaces/interfaces';
import { Env } from '@stencil/core';

export async function fetchWidgetDetails(id: string): Promise<IWidgetDetails> {
  const apiUrl = Env.API_URL;
  const response = await axios.get(`${apiUrl}/elements/${id}`);
  return response.data;
}
