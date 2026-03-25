export function ProgramTable() {
  const program = [
    {
      time: '08:30 – 09:15',
      activity: 'Registration & Welcome Coffee',
      details: 'Guests arrival, check-in, welcome drinks',
    },
    {
      time: '09:15 – 09:40',
      activity: 'Opening Session',
      details: 'Welcome by the CEO of GEP (Monsieur MADI Ahmad), Opening by Huawei - Financial Services Industry Huawei (Madame SHAMS)',
    },
    {
      time: '09:40 – 09:55',
      activity: 'GEP Presentation',
      details: 'Company overview, vision, key solutions & success stories (Madame BENALI Assia / Head of technical team)',
    },
    {
      time: '09:55 – 10:10',
      activity: 'Presentation of the eIYC solution and the project feature',
      details: 'Presentation of the eIYC solution and the project feature (Monsieur HADJ ALI Yacine / Computer Science Engineer)',
    },
    {
      time: '10:10 – 10:25',
      activity: 'Progres Soft Presentation',
      details: 'Presentation of the company and Progressoft\'s projects (Madame Nadia SALEH / Telecommunications Engineer)',
    },
    {
      time: '10:25 – 10:55',
      activity: 'Huawei Presentation',
      details: 'Strategy & vision, solutions, partnership opportunities (Monsieur Mohamed Salah Dammene Debbih / CTO IP & Security in Huawei Algeria)',
    },
    {
      time: '10:55 – 11:25',
      activity: 'Huawei Presentation',
      details: 'Anti-Fraud Presentation by "(Monsieur Mohamed Salah Dammene Debbih / CTO IP & Security in Huawei Algeria"',
    },
    {
      time: '11:25 – 11:45',
      activity: 'Coffee Break',
      details: 'Networking',
    },
    {
      time: '11:45 – 12:20',
      activity: 'B2B Exchange',
      details: 'Topic: Digital Transformation & Strategic Partnerships. Panelists: GEP, Huawei, optional client/expert, MS Teams Interaction with ProgressSoft – Mr. Nabeel, Senior Solution Consultant',
    },
    {
      time: '12:20 – 12:30',
      activity: 'Goodies',
      details: 'Goodies distributed',
    },
    {
      time: '12:30',
      activity: 'Networking Lunch',
      details: 'Informal networking',
    },
    {
      time: '13:30',
      activity: 'Closing Session',
      details: 'Closing Remarks will be delivered by Mr. Messaodene, General Director of SATIM',
    },
  ]


  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-blue-400">
            <th className="text-left py-4 px-6 font-semibold text-blue-300 w-32">Time</th>
            <th className="text-left py-4 px-6 font-semibold text-blue-300 w-40">Activity</th>
            <th className="text-left py-4 px-6 font-semibold text-blue-300">Details</th>
          </tr>
        </thead>
        <tbody>
          {program.map((item, idx) => (
            <tr
              key={idx}
              className={`border-b border-slate-700 transition-colors ${idx % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-800/10'
                } hover:bg-slate-700/30`}
            >
              <td className="py-4 px-6 text-slate-300 font-mono text-xs">{item.time}</td>
              <td className="py-4 px-6 text-blue-200 font-medium">{item.activity}</td>
              <td className="py-4 px-6 text-slate-300">{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
