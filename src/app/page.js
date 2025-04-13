import PrintProduct from './(gallary)/product/PrintProduct';
import ProductList from './(gallary)/product/ProductList';
import ServicesHome from './(gallary)/servicesHome/page';
import PopCard from './(home)/PopCard/page';
import VideoPlayer from './(home)/VideoPlayer/page'
import Photo from './(home)/photo/page'

import CompanyLogoCarousel from './CompanyLogoCarousel/page'
import Marquee from './marquee/page'
import GoogleReview from './reviews/GoogleReview';

export default function Home() {
  return (
    <div className="">
      <Marquee />
      <VideoPlayer />
      <ProductList />
      <CompanyLogoCarousel />
      <PrintProduct />
      <GoogleReview />
      <ServicesHome />
    </div>
  );
}
