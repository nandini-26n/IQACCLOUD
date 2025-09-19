import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye, BookOpen, Users, Target, Shield, Lightbulb } from "lucide-react"

export default function PoliciesPage() {
  const policies = [
    {
      title: "Academic Quality Policy",
      description: "Comprehensive framework for maintaining and enhancing academic standards across all programs",
      category: "Academic",
      icon: BookOpen,
      lastUpdated: "March 2024",
      pages: "15 pages",
    },
    {
      title: "Faculty Development Policy",
      description: "Guidelines for continuous professional development and capacity building of faculty members",
      category: "Faculty",
      icon: Users,
      lastUpdated: "February 2024",
      pages: "12 pages",
    },
    {
      title: "Student Assessment Policy",
      description: "Standardized procedures for fair and transparent evaluation of student performance",
      category: "Assessment",
      icon: Target,
      lastUpdated: "January 2024",
      pages: "18 pages",
    },
    {
      title: "Research & Innovation Policy",
      description: "Framework to promote research culture and innovation among faculty and students",
      category: "Research",
      icon: Lightbulb,
      lastUpdated: "March 2024",
      pages: "20 pages",
    },
    {
      title: "Infrastructure Quality Policy",
      description: "Standards for maintaining and upgrading physical and digital infrastructure",
      category: "Infrastructure",
      icon: Shield,
      lastUpdated: "February 2024",
      pages: "10 pages",
    },
    {
      title: "Stakeholder Feedback Policy",
      description: "Systematic approach for collecting and implementing stakeholder feedback",
      category: "Feedback",
      icon: Users,
      lastUpdated: "January 2024",
      pages: "8 pages",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: "bg-blue-100 text-blue-800",
      Faculty: "bg-green-100 text-green-800",
      Assessment: "bg-purple-100 text-purple-800",
      Research: "bg-orange-100 text-orange-800",
      Infrastructure: "bg-red-100 text-red-800",
      Feedback: "bg-yellow-100 text-yellow-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Quality Policies
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Quality Assurance Policies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive policies and guidelines that govern our quality assurance framework and ensure excellence in
            all institutional processes.
          </p>
        </div>

        {/* Policy Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>6 Core Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive coverage of all quality aspects from academics to infrastructure
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Regular Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Policies are reviewed and updated quarterly to reflect best practices</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Compliance Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>All policies align with NAAC guidelines and regulatory requirements</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Policy Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <policy.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className={getCategoryColor(policy.category)}>
                      {policy.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{policy.title}</CardTitle>
                  <CardDescription className="text-sm">{policy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Last Updated: {policy.lastUpdated}</span>
                      <span>{policy.pages}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Policy Implementation */}
        <section className="bg-card rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Policy Implementation Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Development Process</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Stakeholder consultation and needs assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Draft policy development by expert committees</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Review and feedback from all departments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>IQAC approval and institutional ratification</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Monitoring & Review</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Quarterly implementation progress reviews</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Annual policy effectiveness assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Stakeholder feedback integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuous improvement and updates</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Policy Manual (Complete)
            </Button>
            <Button size="lg" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download All Policies
            </Button>
            <Button size="lg" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Policy Feedback Form
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
