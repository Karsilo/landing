import { Layout } from "@/components/layout/layout";
import { CourseCard } from "@/components/course-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Atom, Telescope, BookOpen, Code, Target, CheckCircle } from "lucide-react";

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

      {/* What You'll Learn Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-16 md:py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What You&apos;ll Learn</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every course is designed to give you a complete learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Comprehensive Theory</CardTitle>
                <CardDescription className="text-base">
                  Build a solid foundation with detailed explanations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Clear definitions and theorems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Step-by-step derivations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Visual aids and interactive diagrams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-world applications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Worked Examples</CardTitle>
                <CardDescription className="text-base">
                  Master techniques through guided problem solving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multiple difficulty levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete solution walkthroughs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Common pitfalls highlighted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multiple solution approaches</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Practice Problems</CardTitle>
                <CardDescription className="text-base">
                  Test and reinforce your understanding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Progressive difficulty levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Detailed answer keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Exam-style practice questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Downloadable PDF worksheets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </Layout>
  );
}
