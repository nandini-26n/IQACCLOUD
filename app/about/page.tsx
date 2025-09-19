import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, BookOpen, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in all academic and administrative processes",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Maintaining open and clear communication with all stakeholders",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Upholding ethical practices and honest evaluation in all quality initiatives",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with faculty, students, and administration for quality enhancement",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About IQAC
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Internal Quality Assurance Cell</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Established to develop a system for conscious, consistent and catalytic improvement in the overall
            performance of our institution.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Target className="h-6 w-6" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg opacity-90">
                To facilitate and enhance the quality of education through systematic planning, implementation, and
                evaluation of quality initiatives, ensuring continuous improvement in academic and administrative
                processes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Eye className="h-6 w-6" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                To be a catalyst for transforming our institution into a center of excellence that provides quality
                education, promotes research, and contributes to society through innovative practices and continuous
                improvement.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About IQAC */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What is IQAC?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Quality Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  IQAC is a post-accreditation quality sustenance measure as per NAAC guidelines. It works towards
                  institutionalization of quality enhancement and sustenance measures.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Stakeholder Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  The cell ensures active participation of all stakeholders including faculty, students, parents,
                  alumni, and employers in quality enhancement processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Continuous Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  IQAC promotes measures for institutional functioning towards quality enhancement through
                  internalization of quality culture and institutionalization of best practices.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Functions */}
        <section className="bg-card rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Functions of IQAC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Academic Quality</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Development and application of quality benchmarks</li>
                <li>• Facilitating creation of learner-centric environment</li>
                <li>• Promotion of research and innovation</li>
                <li>• Enhancement of teaching-learning processes</li>
                <li>• Academic audit and quality assessment</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Administrative Excellence</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Feedback collection and analysis</li>
                <li>• Documentation of quality initiatives</li>
                <li>• Organization of quality-related programs</li>
                <li>• Dissemination of best practices</li>
                <li>• Coordination with external agencies</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
