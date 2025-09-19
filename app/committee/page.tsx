import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone } from "lucide-react"

export default function CommitteePage() {
  const chairperson = {
    name: "Dr. Rajesh Kumar",
    position: "Principal & Chairperson",
    department: "Administration",
    email: "principal@institution.edu",
    phone: "+91 98765 43210",
    image: "/placeholder-g6xv5.png",
  }

  const coordinator = {
    name: "Dr. Priya Sharma",
    position: "IQAC Coordinator",
    department: "Department of Management",
    email: "iqac.coordinator@institution.edu",
    phone: "+91 98765 43211",
    image: "/placeholder-gqqst.png",
  }

  const members = [
    {
      name: "Dr. Amit Patel",
      position: "Senior Faculty Representative",
      department: "Department of Computer Science",
      email: "amit.patel@institution.edu",
      category: "Faculty",
    },
    {
      name: "Dr. Sunita Verma",
      position: "Faculty Representative",
      department: "Department of Commerce",
      email: "sunita.verma@institution.edu",
      category: "Faculty",
    },
    {
      name: "Prof. Ravi Gupta",
      position: "Faculty Representative",
      department: "Department of Arts",
      email: "ravi.gupta@institution.edu",
      category: "Faculty",
    },
    {
      name: "Mr. Suresh Nair",
      position: "Administrative Officer",
      department: "Administration",
      email: "suresh.nair@institution.edu",
      category: "Administration",
    },
    {
      name: "Ms. Kavita Singh",
      position: "Student Representative",
      department: "Final Year Student",
      email: "kavita.singh@student.edu",
      category: "Student",
    },
    {
      name: "Mr. Vikram Joshi",
      position: "Alumni Representative",
      department: "Batch 2018",
      email: "vikram.joshi@alumni.edu",
      category: "Alumni",
    },
    {
      name: "Dr. Meera Agarwal",
      position: "External Expert",
      department: "Industry Professional",
      email: "meera.agarwal@external.com",
      category: "External",
    },
    {
      name: "Mr. Rajesh Mehta",
      position: "Parent Representative",
      department: "Parent Community",
      email: "rajesh.mehta@parent.com",
      category: "Parent",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Faculty: "bg-blue-100 text-blue-800",
      Administration: "bg-green-100 text-green-800",
      Student: "bg-purple-100 text-purple-800",
      Alumni: "bg-orange-100 text-orange-800",
      External: "bg-red-100 text-red-800",
      Parent: "bg-yellow-100 text-yellow-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            IQAC Committee
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Committee Members</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our dedicated team of faculty, administrators, students, and external stakeholders working together to
            ensure quality excellence in education.
          </p>
        </div>

        {/* Chairperson */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Chairperson</h2>
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={chairperson.image || "/placeholder.svg"} alt={chairperson.name} />
                <AvatarFallback className="text-2xl bg-primary-foreground text-primary">
                  {chairperson.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">{chairperson.name}</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg">{chairperson.position}</CardDescription>
              <p className="text-primary-foreground/70">{chairperson.department}</p>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{chairperson.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{chairperson.phone}</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Coordinator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Coordinator</h2>
          <Card className="max-w-2xl mx-auto bg-accent text-accent-foreground">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={coordinator.image || "/placeholder.svg"} alt={coordinator.name} />
                <AvatarFallback className="text-2xl bg-accent-foreground text-accent">
                  {coordinator.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">{coordinator.name}</CardTitle>
              <CardDescription className="text-accent-foreground/80 text-lg">{coordinator.position}</CardDescription>
              <p className="text-accent-foreground/70">{coordinator.department}</p>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2 text-accent-foreground/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{coordinator.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-accent-foreground/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{coordinator.phone}</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Committee Members */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">Committee Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-16 h-16 mx-auto mb-3">
                    <AvatarImage
                      src={`/professional-person.png?height=64&width=64&query=professional+person+${index}`}
                      alt={member.name}
                    />
                    <AvatarFallback className="bg-muted">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-sm">{member.position}</CardDescription>
                  <Badge variant="secondary" className={`text-xs ${getCategoryColor(member.category)}`}>
                    {member.category}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 text-center">{member.department}</p>
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    <span className="text-xs">{member.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Committee Structure Info */}
        <section className="mt-16 bg-card rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Committee Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <p className="text-muted-foreground">Total Members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <p className="text-muted-foreground">Faculty Representatives</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <p className="text-muted-foreground">External Stakeholders</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The IQAC committee meets quarterly to review quality initiatives, assess institutional performance, and
              plan strategic improvements for academic and administrative excellence.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
