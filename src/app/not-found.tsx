import { Button } from '@/components/Button'
import { CirclesBackground } from '@/components/CirclesBackground'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
        <CirclesBackground className="absolute left-1/2 top-1/2 -z-10 mt-44 w-[68.125rem] -translate-x-1/2 -translate-y-1/2 stroke-gray-300/30 dark:stroke-gray-700/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">404</p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
          Page not found
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          You stepped into a black hole.
        </p>
        <Button href="/" variant="outline" className="mt-8">
          Go back home
        </Button>
      </Container>
    </Layout>
  )
}
