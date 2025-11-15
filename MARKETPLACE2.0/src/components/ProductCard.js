import React from 'react';
export default function ProductCard({product}){ return <div className="border p-2">{product?.name || 'Product'}</div> }