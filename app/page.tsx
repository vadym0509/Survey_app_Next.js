import Container from '@/components/Container';
import FormList from '@/components/forms/FormsList';
import DefaultHeader from '@/components/DesignSystem/headers/DefaultHeader';

export default async function Home() {
      
  return (
    <Container>
      <div>
        <DefaultHeader 
          Headline = 'Your title here'
          Description = 'In sit amet malesuada erat. Praesent sodales erat non risus dictum lacinia. Nam a libero risus. Donec ac placerat libero. Pellentesque dui justo, mattis non ante non, pharetra vestibulum ex. Quisque a odio ut augue volutpat blandit eu sed tellus. Donec nec tempor arcu, at feugiat mi.'
          subHeadline = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'      
        />
      </div>
      <div>
        <FormList />
      </div>
    </Container>
  )
}
