export function ProgramTable() {
  const program = [
    {
      time: '09:00 – 09:30',
      activity: 'Registration & Welcome Coffee',
      details: 'Guests arrival, check-in, welcome drinks',
    },
    {
      time: '09:30 – 09:50',
      activity: 'Opening Session',
      details: 'Welcome by GEP CEO / MD, Opening by Huawei Director / CEO',
    },
    {
      time: '09:50 – 10:20',
      activity: 'GEP Presentation',
      details: 'Company overview, vision, key solutions & success stories',
    },
    {
      time: '10:20 – 10:50',
      activity: 'Huawei Presentation',
      details: 'Strategy & vision, solutions, partnership opportunities',
    },
    {
      time: '10:50 – 11:00',
      activity: 'Coffee Break',
      details: 'Networking',
    },
    {
      time: '11:00 – 12:15',
      activity: 'Panel Discussion',
      details:
        'Topic: Digital Transformation & Strategic Partnerships. Panelists: GEP, Huawei, optional client/expert. Q&A moderated by host',
    },
    {
      time: '12:15 – 12:30',
      activity: 'Closing Session',
      details: 'Key takeaways & joint closing remarks (GEP & Huawei)',
    },
    {
      time: '12:30 – 14:00',
      activity: 'Networking Lunch',
      details: 'Goodies distributed, informal networking',
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
              className={`border-b border-slate-700 transition-colors ${
                idx % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-800/10'
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
