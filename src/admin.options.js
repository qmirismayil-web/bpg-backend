const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const AdminCompany = require('./companies/company.admin')
const AdminSlide = require('./slide/slide.admin')
const AdminVideo = require('./homeVideo/video.admin')
const AdminService = require('./homeService/service.admin')
const AdminTeam = require('./team/team.admin')
const AdminNews = require('./news/news.admin')
const AdminSubscribe = require('./subscribe/subscribe.admin')
const AdminContact = require('./contact/contact.admin')
const AdminPageTexts = require('./PageTexts/PageTexts.admin')
const AdminCareers = require('./Careers/Careers.admin')
const AdminVacancyApplies = require('./VacancyApplies/VacancyApplies.admin')
const AdminRemoteHires = require('./RemoteHires/RemoteHires.admin')
const AdminServiceCategories = require('./ServiceCategories/ServiceCategories.admin')
const AdminJournalCategories = require('./JournalCategories/JournalCategories.admin')
const AdminRemoteWorker = require('./RemoteWorker/RemoteWorker.admin')
const AdminServiceForm = require('./ServiceForm/ServiceForm.admin')
const AdminSelects = require('./Selects/Selects.admin')
const AdminJournals = require('./Journals/Journals.admin')
const AdminNewsCategories = require('./NewsCategories/NewsCategories.admin')
const AdminPagesTerm = require('./PagesTerm/PagesTerm.admin')
const AdminRecall = require('./Recall/recall.admin')
const AdminLibrary = require('./Library/Library.admin')
const AdminIstehsalatTeqvimi = require('./IstehsalatTeqvimi/index.admin')
const AdminJournalForm = require('./JournalForm/JournalForm.admin')
const AdminCurrency = require('./Currency/index.admin')
const AdminHomeCurrency = require('./HomeCurrency/index.admin')

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [
    AdminCurrency,
    AdminHomeCurrency,
    AdminCompany,
    AdminSlide,
    AdminVideo,
    AdminService,
    AdminTeam,
    AdminNews,
    AdminSubscribe,
    AdminRecall,
    AdminContact,
    AdminPageTexts,
    AdminServiceCategories,
    AdminRemoteWorker,
    AdminRemoteHires,
    AdminCareers,
    AdminVacancyApplies,
    AdminServiceForm,
    AdminJournalForm,
    AdminJournals,
    AdminLibrary,
    AdminIstehsalatTeqvimi,
    AdminSelects,
    AdminNewsCategories,
    AdminPagesTerm,
    AdminJournalCategories,
  ],
}

module.exports = options
