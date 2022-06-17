import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              pretium quam vulputate dignissim suspendisse in est ante. Rhoncus
              aenean vel elit scelerisque mauris pellentesque pulvinar
              pellentesque habitant. Faucibus interdum posuere lorem ipsum dolor
              sit. Justo eget magna fermentum iaculis eu. Ultricies leo integer
              malesuada nunc vel risus commodo viverra. Lectus sit amet est
              placerat in egestas erat. Interdum consectetur libero id faucibus
              nisl. Nibh nisl condimentum id venenatis. A diam sollicitudin
              tempor id eu nisl nunc mi ipsum. Ac auctor augue mauris augue
              neque gravida. Sit amet venenatis urna cursus eget. At auctor urna
              nunc id cursus metus aliquam. Augue interdum velit euismod in
              pellentesque massa. At risus viverra adipiscing at. Turpis
              tincidunt id aliquet risus feugiat in. Dictum at tempor commodo
              ullamcorper.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
