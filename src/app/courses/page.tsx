import { Layout } from "@/components/layout/layout";
import { CourseCard } from "@/components/course-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Atom, Telescope } from "lucide-react";

export default function Courses() {
  return (
    <Layout>
      {/* Available Courses */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive university-level courses in mathematics and physical sciences with detailed lessons, worked examples, and practice problems
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <CourseCard
            title="Mathematics"
            description="Master fundamental and advanced mathematical concepts essential for STEM fields. From calculus to differential equations, build a strong foundation in mathematical reasoning and problem-solving."
            icon={<Calculator className="h-10 w-10 text-primary" />}
            href="https://mathematics.karsilo.com"
            modules={[
              "Calculus I - Limits, Derivatives, Integration",
              "Calculus II - Advanced Integration & Series",
              "Linear Algebra - Matrices & Vector Spaces",
              "Differential Equations - ODEs & PDEs",
              "Multivariable Calculus",
            ]}
            questionsHref="/questions?course=mathematics"
          />

          <CourseCard
            title="Physics"
            description="Explore the fundamental laws governing our universe. Develop deep understanding through rigorous theory, mathematical derivations, and extensive problem-solving practice."
            icon={<Atom className="h-10 w-10 text-primary" />}
            href="https://physics.karsilo.com"
            modules={[
              "Classical Mechanics - Kinematics & Dynamics",
              "Electromagnetism - Fields & Maxwell's Equations",
              "Thermodynamics - Heat & Energy Transfer",
              "Quantum Mechanics - Wave Functions & Operators",
              "Special Relativity",
            ]}
            questionsHref="/questions?course=physics"
          />

          <CourseCard
            title="Astronomy"
            description="Journey through space and time exploring celestial objects and cosmic phenomena. Learn about our solar system, stellar evolution, galaxies, and the structure of the universe."
            icon={<Telescope className="h-10 w-10 text-primary" />}
            href="https://astronomy.karsilo.com"
            modules={[
              "Solar System - Planets, Moons & Small Bodies",
              "Stellar Astrophysics - Stars & Their Evolution",
              "Galactic Astronomy - Milky Way Structure",
              "Cosmology - Universe Evolution & Big Bang",
              "Observational Astronomy - Techniques & Instruments",
            ]}
            questionsHref="/questions?course=astronomy"
          />
        </div>
      </section>

      {/* Sample Content Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-16 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What You&apos;ll Learn</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each course includes comprehensive lessons, worked examples, and practice problems
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Theory</CardTitle>
                <CardDescription>
                  Detailed explanations of concepts with mathematical rigor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clear definitions and theorems</li>
                  <li>• Step-by-step derivations</li>
                  <li>• Visual aids and diagrams</li>
                  <li>• Real-world applications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Worked Examples</CardTitle>
                <CardDescription>
                  Follow along with detailed problem solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple difficulty levels</li>
                  <li>• Complete solution walkthroughs</li>
                  <li>• Common pitfalls highlighted</li>
                  <li>• Alternative approaches shown</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practice Problems</CardTitle>
                <CardDescription>
                  Test your understanding with curated problem sets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Progressive difficulty</li>
                  <li>• Detailed answer keys</li>
                  <li>• Exam-style questions</li>
                  <li>• Downloadable PDFs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </Layout>
  );
}
