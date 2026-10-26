const JOBS = [
    {
        id: 1,
        role: "Python Developer",
        company: "TechCorp",
        dept: "Engineering",
        location: "Mumbai West",
        salary: "6 LPA",
        ctc: "6.5 LPA",
        hours: "10:00 - 19:00",
        days: "Mon - Fri",
        probation: "3 months",
        mode: "WFO",
        bond: "1 Year",
        skills: ["Python", "SQL", "Flask"],
        vacancies: 2
    },
    {
        id: 2,
        role: "Data Analyst",
        company: "InsightMetrics",
        dept: "Analytics",
        location: "Remote",
        salary: "5 LPA",
        ctc: "5.5 LPA",
        hours: "09:30 - 18:30",
        days: "Mon - Fri",
        probation: "6 months",
        mode: "WFH",
        bond: "None",
        skills: ["Python", "SQL", "Excel"],
        vacancies: 1
    },
    {
        id: 3,
        role: "QA Tester",
        company: "BugFree Labs",
        dept: "Quality Assurance",
        location: "Hybrid",
        salary: "4 LPA",
        ctc: "4.5 LPA",
        hours: "10:00 - 19:00",
        days: "Mon - Fri",
        probation: "3 months",
        mode: "Hybrid",
        bond: "None",
        skills: ["Manual Testing", "SQL", "Git"],
        vacancies: 3
    }
];

function getCurrentUser() {
    const userStr = localStorage.getItem("jobhunt_user");
    return userStr ? JSON.parse(userStr) : null;
}

function getApplications() {
    const apps = localStorage.getItem("jobhunt_applications");
    return apps ? JSON.parse(apps) : [
        { id: 101, jobId: 1, role: "Python Developer", company: "TechCorp", status: "Shortlisted", reason: "Good skill match and relevant projects." },
        { id: 102, jobId: 2, role: "Data Analyst", company: "InsightMetrics", status: "Applied", reason: "" }
    ];
}