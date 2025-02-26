import axios from 'axios';

import { IWidgetDetails } from '../interfaces/interfaces';
import { Env } from '@stencil/core';

const apiUrl = Env.API_URL;

export async function fetchWidgetDetails(id: string): Promise<IWidgetDetails> {
  const response = await axios.get(`${apiUrl}/elements/${id}`);
  return response.data;
}

export async function createPaymentIntent({ amount, elementId }: { amount: number; elementId: string }): Promise<any> {
  const response = await axios.post(`${apiUrl}/payment/intent`, { amount, elementId });
  return response.data;
}