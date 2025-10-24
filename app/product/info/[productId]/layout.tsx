import { Metadata } from 'next';
import productsData from "../../../products/productsData.js";

interface Props {
  params: { productId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = productsData.find(p => p.productId === productId);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.title} - Product Details`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}