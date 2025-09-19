import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Users, FileText, Award, TrendingUp, CheckCircle, Sparkles, Star } from "lucide-react"

export default function HomePage() {
  const objectives = [
    {
      icon: Target,
      title: "Quality Enhancement",
      description: "Develop and apply quality benchmarks/parameters for various academic and administrative activities",
    },
    {
      icon: Users,
      title: "Stakeholder Engagement",
      description: "Facilitate creation of learner-centric environment conducive to quality education",
    },
    {
      icon: FileText,
      title: "Documentation",
      description:
        "Arrangement for feedback from students, parents and other stakeholders on quality-related institutional processes",
    },
    {
      icon: Award,
      title: "Best Practices",
      description: "Dissemination of information on various quality parameters to all stakeholders",
    },
  ]

  const achievements = [
    { metric: "95%", label: "Student Satisfaction", icon: Star },
    { metric: "A+", label: "NAAC Grade", icon: Award },
    { metric: "50+", label: "Quality Initiatives", icon: Target },
    { metric: "100%", label: "Faculty Participation", icon: Users },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(53,89,199,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 animate-scale-in">
              <Sparkles className="h-3 w-3 mr-1" />
              Quality Assurance Excellence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 animate-slide-up">
              Internal Quality
              <span className="gradient-text"> Assurance Cell</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto animate-fade-in">
              Committed to enhancing the quality of education through systematic planning, implementation, and
              evaluation of quality initiatives in our institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="hover-lift glow-effect" asChild>
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover-lift bg-transparent" asChild>
                <Link href="/reports">View Reports</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Objectives</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              IQAC works towards continuous improvement in quality of education and institutional processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className="text-center hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div
                    className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <objective.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{objective.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(53,89,199,0.05),transparent_70%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quality Achievements</h2>
            <p className="text-xl text-muted-foreground">Measurable outcomes of our quality enhancement initiatives</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center animate-scale-in hover-lift group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-4 mx-auto w-fit p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <achievement.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{achievement.metric}</div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Functions Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Key Functions & Responsibilities</h2>
              <p className="text-muted-foreground mb-8">
                IQAC serves as a nodal agency for coordinating quality-related activities including adoption and
                dissemination of best practices within the institution.
              </p>

              <div className="space-y-4">
                {[
                  "Development and application of quality benchmarks",
                  "Facilitating learner-centric environment",
                  "Arrangement for stakeholder feedback",
                  "Dissemination of quality parameters",
                  "Organization of workshops and seminars",
                  "Documentation of various programs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Quality Enhancement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Continuous monitoring and evaluation of academic and administrative processes to ensure sustained
                    quality improvement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Stakeholder Satisfaction</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Regular feedback collection and analysis from students, faculty, parents, and employers to enhance
                    institutional effectiveness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">Ready to Learn More?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Explore our quality initiatives, policies, and reports to understand how we maintain excellence in education
            and institutional governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" variant="secondary" className="hover-lift" asChild>
              <Link href="/policies">Quality Policies</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover-lift"
              asChild
            >
              <Link href="/contact">Contact IQAC</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
