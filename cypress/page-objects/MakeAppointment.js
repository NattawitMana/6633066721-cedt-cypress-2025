const Page = require('./Page')

class MakeAppointment extends Page {
	// Web Elements
	static cmbFacility = '#combo_facility'
	static chkHospitalReadmission = '#chk_hospotal_readmission'
	static rdoHealthcareProgramMedicare = '#radio_program_medicare'
	static rdoHealthcareProgramMedicaid = '#radio_program_medicaid'
	static rdoHealthcareProgramNone = '#radio_program_none'
	static txtVisitDate = '#txt_visit_date'
	static txtComment = '#txt_comment'
	static btnBookAppointment = '#btn-book-appointment'
	static lblAppointmentConfirmation = '#summary > div > div > div > h2'
	static lblFacility = '#facility'
}
