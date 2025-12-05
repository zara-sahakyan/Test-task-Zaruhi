import Categories from '../../components/categories/Categories';
import ImageSlider from '../../components/imageslider/ImageSlider';
import LiveChat from '../../components/livechat/LiveChat';
import InfoSection from '../../components/infosection/InfoSection';
import SupportSection from '../../components/supportsection/SupportSection';

export function Home() {
    return (
        <div className="container">
            <ImageSlider />
            <LiveChat />
            <Categories />
            <InfoSection/>
            <SupportSection/>
        </div>
    );
}
