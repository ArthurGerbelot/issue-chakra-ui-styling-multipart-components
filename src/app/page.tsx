import { TestChildren, TestContainer } from "@/components/TestContainer";

export default function Home() {
  return (
    <main>

      {/* Work */}
      <TestContainer>Foo</TestContainer>

      {/* Do not Work */}
      <TestContainer>
        <TestChildren>Foo</TestChildren>
      </TestContainer>

    </main>
  )
}
