import DashboardIcon from "../icons/dashboard.svg";
import HistoryIcon from "../icons/history.svg";
import CalendarIcon from "../icons/calender.svg";
import AppointmentsIcon from "../icons/appointments.svg";
import StatisticsIcon from "../icons/statistics.svg";
import Chat from "../icons/chat.svg";
import Support from "../icons/support.svg";
import Settings from "../icons/settings.svg";

export const SideBarMenuGeneral = () => {
  return [
    { label: "Dashboard", icon: DashboardIcon, iconName: "dashboard" },
    { label: "History", icon: HistoryIcon, iconName: "history" },
    { label: "Calendar", icon: CalendarIcon, iconName: "calendar" },
    { label: "Appointments", icon: AppointmentsIcon, iconName: "appointments" },
    { label: "Statistics", icon: StatisticsIcon, iconName: "statistics" },
  ];
};

export const SideBarMenuTools = () => {
  return [
    { label: "Chat", icon: Chat, iconName: "dashboard" },
    { label: "Support", icon: Support, iconName: "history" },
  ];
};

export const SideBarMenuSettings = () => {
  return [{ label: "Settings", icon: Settings, iconName: "dashboard" }];
};

export const organData = [
  {
    name: "Lungs",
    icon: "🫁",
    date: "26 Okt 2021",
    progress: 75,
    color: "error",
  },
  {
    name: "Teeth",
    icon: "🦷",
    date: "26 Okt 2021",
    progress: 75,
    color: "success",
  },
  {
    name: "Bone",
    icon: "🦴",
    date: "26 Okt 2021",
    progress: 75,
    color: "warning",
  },
];

export const activityData = [
  ["Mon", [30, 50, 20]],
  ["Tues", [40, 20, 30]],
  ["Wed", [35, 25, 45]],
  ["Thurs", [20, 40, 30]],
  ["Fri", [50, 30, 20]],
  ["Sat", [25, 35, 15]],
  ["Sun", [30, 25, 40]],
];

export const ActivityBarsData = {
  1: [
    { height: 120, color: "#dbe0e7" },
    { height: 10, color: "transparent" },
  ],
  2: [
    { height: 20, color: "transparent" },
    { height: 60, color: "#37d1de" },
    { height: 30, color: "transparent" },
  ],
  3: [
    { height: 35, color: "transparent" },
    { height: 35, color: "#dbe0e7" },
    { height: 30, color: "#dbe0e7" },
    { height: 10, color: "transparent" },
  ],
  4: [
    { height: 15, color: "transparent" },
    { height: 50, color: "transparent" },
    { height: 55, color: "#D3D3D3" },
  ],
  5: [
    { height: 60, color: "#37d1de" },
    { height: 50, color: "#5953a2" },
  ],
  6: [
    { height: 20, color: "transparent" },
    { height: 60, color: "#5953a2" },
    { height: 30, color: "transparent" },
  ],
  7: [
    { height: 35, color: "transparent" },
    { height: 35, color: "#dbe0e7" },
    { height: 30, color: "#dbe0e7" },
    { height: 10, color: "transparent" },
  ],
  8: [
    { height: 15, color: "transparent" },
    { height: 50, color: "transparent" },
    { height: 55, color: "#37d1de" },
  ],
  9: [{ height: 120, color: "#dbe0e7" }],
  10: [
    { height: 20, color: "transparent" },
    { height: 60, color: "#dbe0e7" },
    { height: 30, color: "transparent" },
  ],
  11: [
    { height: 35, color: "transparent" },
    { height: 35, color: "#36d1dd" },
    { height: 30, color: "#5953a2" },
    { height: 10, color: "transparent" },
  ],
  12: [
    { height: 60, color: "#dbe0e7" },
    { height: 50, color: "#dbe0e7" },
  ],
  13: [
    { height: 20, color: "transparent" },
    { height: 60, color: "#36d1dd" },
    { height: 30, color: "transparent" },
  ],
  14: [
    { height: 35, color: "transparent" },
    { height: 35, color: "#36d1dd" },
    { height: 30, color: "#5953a2" },
    { height: 10, color: "transparent" },
  ],
  15: [
    { height: 15, color: "transparent" },
    { height: 50, color: "transparent" },
    { height: 55, color: "#dbe0e7" },
  ],
  16: [{ height: 120, color: "#dbe0e7" }],
  17: [
    { height: 20, color: "transparent" },
    { height: 60, color: "#5953a2" },
    { height: 30, color: "transparent" },
  ],
  18: [
    { height: 35, color: "transparent" },
    { height: 35, color: "#dbe0e7" },
    { height: 30, color: "#dbe0e7" },
    { height: 10, color: "transparent" },
  ],
  19: [
    { height: 15, color: "transparent" },
    { height: 50, color: "transparent" },
    { height: 55, color: "#D3D3D3" },
  ],
  20: [
    { height: 60, color: "#37d1de" },
    { height: 50, color: "#5953a2" },
  ],
  21: [
    { height: 20, color: "transparent" },
    { height: 60, color: "#37d1de" },
    { height: 30, color: "transparent" },
  ],
  22: [
    { height: 35, color: "transparent" },
    { height: 35, color: "#dbe0e7" },
    { height: 30, color: "#dbe0e7" },
    { height: 10, color: "transparent" },
  ],
  23: [
    { height: 60, color: "#5953a2" },
    { height: 50, color: "#36d1dd" },
  ],
  24: [{ height: 120, color: "#dbe0e7" }],
  25: [
    { height: 15, color: "transparent" },
    { height: 50, color: "transparent" },
    { height: 55, color: "#5953a2" },
  ],
  26: [{ height: 120, color: "#dbe0e7" }],
  27: [
    { height: 20, color: "transparent" },
    { height: 60, color: "#dbe0e7" },
    { height: 30, color: "transparent" },
  ],
  28: [
    { height: 35, color: "transparent" },
    { height: 35, color: "#36d1dd" },
    { height: 30, color: "#5953a2" },
    { height: 10, color: "transparent" },
  ],
  29: [
    { height: 60, color: "#37d1de" },
    { height: 50, color: "#5953a2" },
  ],
  30: [{ height: 120, color: "#dbe0e7" }],
  31: [
    { height: 20, color: "transparent" },
    { height: 60, color: "#37d1de" },
    { height: 30, color: "transparent" },
  ],
  32: [
    { height: 35, color: "transparent" },
    { height: 35, color: "#dbe0e7" },
    { height: 30, color: "#dbe0e7" },
    { height: 10, color: "transparent" },
  ],
};

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];



export const AppointmentData = {
  currentWeek: [
    { day: 'Mon', date: 25, slots: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, slots: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, slots: ['12:00', '13:00'] },
    { day: 'Thurs', date: 28, slots: ['10:00', '11:00'] },
    { day: 'Fri', date: 29, slots: ['14:00', '16:00'] },
    { day: 'Sat', date: 30, slots: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, slots: ['09:00', '10:00'] },
  ],
  appointments: [
    {
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷',
      bgColor: '#3634a8',
      textColor: '#fff',
    },
    {
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '💪',
      bgColor: '#dde2f9',
      textColor: '#3634a8',
    },
  ],
  upcoming: {
    Thursday: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '💉' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
    Saturday: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧑‍⚕️' },
    ],
  },
};


export const AppointmentDataMock = [
    { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
    {
      day: "Tues",
      date: 26,
      slots: ["08:00", "09:00", "10:00"],
      selected: "09:00",
    },
    { day: "Wed", date: 27, slots: ["12:00", "------", "13:00"] },
    { day: "Thurs", date: 28, slots: ["10:00", "11:00", "------"] },
    { day: "Fri", date: 29, slots: ["14:00", "16:00", "------"] },
    {
      day: "Sat",
      date: 30,
      slots: ["12:00", "14:00", "15:00"],
      grouped: ["12:00"],
    },
    {
      day: "Sun",
      date: 31,
      slots: ["09:00", "10:00", "11:00"],
      grouped: ["09:00"],
    },
  ]