import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye, Calendar, TrendingUp, BarChart3, PieChart } from "lucide-react"

export default function ReportsPage() {
  const annualReports = [
    {
      year: "2023-24",
      title: "Annual Quality Assurance Report",
      description: "Comprehensive review of quality initiatives, achievements, and future plans",
      status: "Published",
      pages: "85 pages",
      highlights: ["95% Student Satisfaction", "A+ NAAC Grade", "50+ Quality Initiatives"],
    },
    {
      year: "2022-23",
      title: "Annual Quality Assurance Report",
      description: "Quality enhancement measures and institutional development activities",
      status: "Published",
      pages: "78 pages",
      highlights: ["92% Student Satisfaction", "40+ Quality Initiatives", "Faculty Development Programs"],
    },
    {
      year: "2021-22",
      title: "Annual Quality Assurance Report",
      description: "Post-pandemic quality sustenance and digital transformation initiatives",
      status: "Published",
      pages: "72 pages",
      highlights: ["Digital Infrastructure", "Online Learning Excellence", "Research Growth"],
    },
  ]

  const quarterlyReports = [
    {
      period: "Q4 2023-24",
      title: "Fourth Quarter Report",
      description: "Final quarter achievements and annual summary",
      date: "March 2024",
    },
    {
      period: "Q3 2023-24",
      title: "Third Quarter Report",
      description: "Mid-year progress and quality enhancement activities",
      date: "December 2023",
    },
    {
      period: "Q2 2023-24",
      title: "Second Quarter Report",
      description: "Academic year progress and stakeholder feedback analysis",
      date: "September 2023",
    },
    {
      period: "Q1 2023-24",
      title: "First Quarter Report",
      description: "Academic year commencement and quality planning",
      date: "June 2023",
    },
  ]

  const specialReports = [
    {
      title: "NAAC Self-Study Report",
      description: "Comprehensive institutional self-assessment for NAAC accreditation",
      category: "Accreditation",
      date: "February 2024",
      icon: FileText,
    },
    {
      title: "Student Satisfaction Survey",
      description: "Annual survey results and analysis of student feedback",
      category: "Survey",
      date: "January 2024",
      icon: BarChart3,
    },
    {
      title: "Faculty Development Report",
      description: "Annual report on faculty training and development programs",
      category: "Development",
      date: "March 2024",
      icon: TrendingUp,
    },
    {
      title: "Infrastructure Audit Report",
      description: "Assessment of physical and digital infrastructure quality",
      category: "Audit",
      date: "December 2023",
      icon: PieChart,
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Quality Reports
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">IQAC Reports & Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive reports documenting our quality assurance activities, achievements, and continuous improvement
            initiatives across all institutional processes.
          </p>
        </div>

        {/* Report Statistics */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-primary">15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Annual Reports</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-primary">60+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Quarterly Reports</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-primary">25+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Special Reports</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-primary">1000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Pages Published</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Annual Quality Assurance Reports</h2>
          <div className="space-y-6">
            {annualReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="default" className="bg-primary">
                          {report.year}
                        </Badge>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {report.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <p className="text-sm text-muted-foreground mb-3">{report.pages}</p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {report.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quarterly Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Quarterly Progress Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quarterlyReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{report.period}</Badge>
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{report.date}</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Special Reports & Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialReports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <report.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{report.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{report.date}</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Archive Access */}
        <section className="bg-card rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Report Archive</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Access our complete archive of quality assurance reports dating back to the establishment of IQAC. All
            reports are available in PDF format for download.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Browse Archive
            </Button>
            <Button size="lg" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Bulk Download
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Report Calendar
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
