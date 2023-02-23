import React from 'react';
import data from '../data';
import { useParams } from 'react-router-dom';

export default function ProductScreen() {
  const { slug } = useParams();
  const product=data.products.map((product) => product.slug === slug)
  return <div>product{slug}</div>;
}
