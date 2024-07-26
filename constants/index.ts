export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-arora.png",
    name: "Dr.M.K. Arora(Pain Medicine)",
  },
  {
    image: "/assets/images/dr-saxena.png",
    name: "Dr.Renu Saxena(Haematology)",
  },
  {
    image: "/assets/images/dr-kharbanda.png",
    name: "Dr.O.P. Kharbanda(Dental)",
  },
  {
    image: "/assets/images/dr-baidya.png",
    name: " Dr.Kalim Baidya(Anasthesia)",
  },
  {
    image: "/assets/images/dr-tara.png",
    name: "Tara Shukla(Head Nurse)",
  },
  {
    image: "/assets/images/dr-bahl.png",
    name: "Dr.V.K Bahl(Cardiology)",
  },
  {
    image: "/assets/images/dr-kiran.png",
    name: "Dr.Usha Kiran(Cardiac Anaesthesia)",
  },
  {
    image: "/assets/images/dr-roy.png",
    name: "Dr.Tara shankar roy(Anatomy)",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr.Hardik Sharma(Dermatology)",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};