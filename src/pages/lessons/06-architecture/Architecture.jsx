import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import ProductDemo from './ProductDemo.jsx'

export default function Architecture() {
  return (
    <LessonShell
      number="6"
      title="Architecture exercise & rebuild challenge"
      subtitle="Given a tree, decide what is reusable and what is a one-off. Then prove you own today's material by rebuilding from a blank project, closed book."
      minutes="25"
    >
      <ConceptCallout title="If it appears more than once, it is a component with props.">
        <p>
          ProductCard appears three times with different data, so it is one component with
          props. Navbar appears once, but it is still a component because it is a clear,
          nameable piece of the page.
        </p>
      </ConceptCallout>

      <DocsLink title="Thinking in React, Step 1: break the UI into a component hierarchy" href="https://react.dev/learn/thinking-in-react">
        Read step 1 together and draw boxes on their mockup. Step 2 (a static version with props, no state) is exactly what students built today. Stop there: steps 3 to 5 are state, which starts on Day 2.
      </DocsLink>

      <ExampleBlock
        variant="wedo"
        title="Together: read the tree, answer the questions"
        description="Put the tree on the projector. Ask the questions before revealing the answers. Toggle the outlines on the demo to check the class's answer."
        minutes="10"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Tree caption="The architecture exercise tree.">{`App
 ├ Navbar
 ├ ProductList
 │   ├ ProductCard
 │   ├ ProductCard
 │   └ ProductCard
 └ Footer`}</Tree>
          <ProductDemo />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <RevealCard question="What should be reusable?">
            <p><strong>ProductCard.</strong> Three uses, same shape, different data. Write it once, pass name and price as props.</p>
            <p>Navbar and Footer are reusable across pages too, even though this page uses each once.</p>
          </RevealCard>
          <RevealCard question="What is a component?">
            <p>A function that returns UI. Every box in the tree is one function. App is a component too, it just happens to be the root.</p>
          </RevealCard>
          <RevealCard question="How many files would you create?">
            <p>Five: App.jsx, Navbar.jsx, ProductList.jsx, ProductCard.jsx, Footer.jsx. One ProductCard file, used three times.</p>
          </RevealCard>
          <RevealCard question="Who passes the props to ProductCard?">
            <p>Its parent, ProductList. Data flows down one level at a time. App does not talk to ProductCard directly.</p>
          </RevealCard>
          <RevealCard question="Why three ProductCard tags instead of a loop?">
            <p>Because rendering lists from arrays is a later lesson. Three tags is correct today, and typing them by hand is what makes the loop feel necessary when it arrives.</p>
          </RevealCard>
          <RevealCard question="Where would a 'cart count' in the Navbar come from?">
            <p>Good question, hold it. Data that changes is state, and sharing it between components is Day 3. Today the Navbar can take a static prop.</p>
          </RevealCard>
        </div>
        <CodeBlock label="src/components/ProductList.jsx (what the class should arrive at)">{`import ProductCard from './ProductCard.jsx'

function ProductList() {
  return (
    <section>
      <ProductCard name="Headphones" price="59" />
      <ProductCard name="Keyboard" price="89" />
      <ProductCard name="Monitor" price="249" />
    </section>
  )
}

export default ProductList`}</CodeBlock>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Rebuild challenge (15 minutes, closed book)"
        description="Close and save your previous work. Create a new React project and build: App, Header, Card, and props usage. No notes, no copying from the other project. If you get stuck, that is the thing to review tonight."
        minutes="15"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Terminal">{`cd ..
npm create vite@latest rebuild
#  React, JavaScript
cd rebuild
npm install
npm run dev`}</CodeBlock>
          <Tree caption="Minimum tree. Anything beyond this is a bonus.">{`App
 ├ Header      (takes a title prop)
 ├ Card        (title, value)
 └ Card        (title, value)`}</Tree>
        </div>
        <Checklist
          items={[
            'New project created and the starter files cleaned out, from memory',
            'Header.jsx in src/components/, exported, imported, rendered',
            'Card.jsx takes at least two props and renders them',
            'App renders Header once and Card at least twice with different props',
            'Browser shows it with no console errors',
            'Bonus: Footer with the current year',
            'Bonus: the ProductList tree from above, with three ProductCards',
          ]}
        />
        <Note tone="emerald" title="Instructor">
          <ul className="list-disc list-inside space-y-1">
            <li>Say the time remaining at 10, 5, and 1 minute.</li>
            <li>Students who freeze at the terminal: that is useful information. The setup commands go on the handout for a reason.</li>
            <li>Collect a quick show of hands at the end: who finished the minimum tree? Who got a bonus? That tells you how to pace the start of Day 2.</li>
          </ul>
        </Note>
      </ExampleBlock>
    </LessonShell>
  )
}
