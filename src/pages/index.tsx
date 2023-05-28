import Scrollable from '@mesihtasci/scrollable';
import '@mesihtasci/scrollable/dist/index.css';
import { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    const scrollable = new Scrollable();
  }, []);
  return (
    <>
      <Head>
        <title>Scrollable Next.js Demo</title>
      </Head>
      <div className='mt-vs'>
        <main className='mt-vs__container'>
          <section data-section-id='welcome' data-navigation-title='Welcome' className='mt-vs__content color--one'>
            <div className='mt-vs__content-wrapper mt-vs__content-wrapper--min-height-100 '>
              <div className='column-wrapper'>
                <p className='big-font'>
                  Hi,<br></br> welcome to the scrollable next.js demo.
                </p>
              </div>
            </div>
          </section>
          <section data-section-id='page-1' data-navigation-title='Page 1' className='mt-vs__content color--two'>
            <div className='mt-vs__content-wrapper mt-vs__content-wrapper--min-height-100 '>
              <div>
                <p className='big-font'>Page 1</p>
              </div>
            </div>
          </section>
          <section data-section-id='page-2' data-navigation-title='Page 2' className='mt-vs__content color--three'>
            <div className='mt-vs__content-wrapper mt-vs__content-wrapper--min-height-100 '>
              <div>
                <p className='big-font'>Page 2</p>
              </div>
            </div>
          </section>
          <section data-section-id='page-3' data-navigation-title='Page 3' className='mt-vs__content color--four'>
            <div className='mt-vs__content-wrapper mt-vs__content-wrapper--min-height-100 '>
              <div>
                <p className='big-font'>Page 3</p>
              </div>
            </div>
          </section>
        </main>
        <aside className='mt-vs__side-navigation'>
          <ul></ul>
        </aside>
        <nav className='mt-vs__top-navigation'>
          <ul></ul>
        </nav>
      </div>
    </>
  );
}
