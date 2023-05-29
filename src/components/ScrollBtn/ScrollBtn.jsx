import ScrollToTop from 'react-scroll-to-top';

const ScrollToTopBtn = () => {
  return (
    <ScrollToTop
      smooth
      color="#373737"
      style={{
        backgroundColor: '#ebd8ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default ScrollToTopBtn;
