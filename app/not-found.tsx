import Container from '@/components/Container';
import DefaultHeader from '@/components/DesignSystem/headers/DefaultHeader';

export default async function Home() {
      
  return (
    <Container>
      <div>
        <DefaultHeader 
          Headline = 'Oops! Seems you are lost'
          Description = 'This is a placeholder'
          subHeadline = 'This is a placeholder'      
        />
      </div>
    </Container>
  )
}
