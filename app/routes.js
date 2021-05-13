const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/list-beacons', (req, res) => {
    let beacons = [{
        "id": 1,
        "name": "Dracopis amplexicaulis (Vahl) Cass.",
        "owner": "Babs Linacre",
        "email": "arushby0@amazon.co.uk",
        "contact_phone": "465-101-9889",
        "emergency_contact_name": "Aldon Rushby",
        "emergency_contact_phone": "396-493-2484",
        "emergency_contact_email": "arushby0@symantec.com",
        "activated": true
      }, {
        "id": 2,
        "name": "Lesquerella arctica (Wormsk. ex Hornem.) S. Watson",
        "owner": "Falkner Kenworthey",
        "email": "fde1@comcast.net",
        "contact_phone": "879-626-3201",
        "emergency_contact_name": "Fenelia De Andisie",
        "emergency_contact_phone": "151-755-4227",
        "emergency_contact_email": "fde1@mapquest.com",
        "activated": false
      }, {
        "id": 3,
        "name": "Physocarpus alternans (M.E. Jones) J.T. Howell ssp. alternans",
        "owner": "Ervin Kirk",
        "email": "bpady2@surveymonkey.com",
        "contact_phone": "345-975-1251",
        "emergency_contact_name": "Bruno Pady",
        "emergency_contact_phone": "267-260-7322",
        "emergency_contact_email": "bpady2@barnesandnoble.com",
        "activated": true
      }, {
        "id": 4,
        "name": "Dryptodon Brid.",
        "owner": "Mireille Abram",
        "email": "bbaillie3@abc.net.au",
        "contact_phone": "892-863-6241",
        "emergency_contact_name": "Brittaney Baillie",
        "emergency_contact_phone": "601-455-5717",
        "emergency_contact_email": "bbaillie3@tuttocitta.it",
        "activated": true
      }, {
        "id": 5,
        "name": "Trientalis L.",
        "owner": "Rustie Clayton",
        "email": "jswane4@harvard.edu",
        "contact_phone": "242-606-3273",
        "emergency_contact_name": "Joane Swane",
        "emergency_contact_phone": "319-701-3447",
        "emergency_contact_email": "jswane4@privacy.gov.au",
        "activated": false
      }, {
        "id": 6,
        "name": "Acroptilon repens (L.) DC.",
        "owner": "Bryanty Siddell",
        "email": "nivimey5@bbc.co.uk",
        "contact_phone": "157-240-3981",
        "emergency_contact_name": "Nero Ivimey",
        "emergency_contact_phone": "153-460-3353",
        "emergency_contact_email": "nivimey5@kickstarter.com",
        "activated": false
      }, {
        "id": 7,
        "name": "Hymenopappus filifolius Hook. var. cinereus (Rydb.) I.M. Johnst.",
        "owner": "Rabi Springham",
        "email": "lpaty6@plala.or.jp",
        "contact_phone": "750-372-3505",
        "emergency_contact_name": "Lynnell Paty",
        "emergency_contact_phone": "764-777-0332",
        "emergency_contact_email": "lpaty6@wp.com",
        "activated": true
      }, {
        "id": 8,
        "name": "Utricularia L.",
        "owner": "Pet Karslake",
        "email": "mandriolli7@washington.edu",
        "contact_phone": "590-415-5910",
        "emergency_contact_name": "Marvin Andriolli",
        "emergency_contact_phone": "983-656-3047",
        "emergency_contact_email": "mandriolli7@mozilla.com",
        "activated": false
      }, {
        "id": 9,
        "name": "Dendrophthora domingensis (Spreng.) Eichl.",
        "owner": "Leta Allabarton",
        "email": "rtooley8@slate.com",
        "contact_phone": "568-629-9397",
        "emergency_contact_name": "Raf Tooley",
        "emergency_contact_phone": "217-497-5230",
        "emergency_contact_email": "rtooley8@irs.gov",
        "activated": true
      }, {
        "id": 10,
        "name": "Ranunculus cortusifolius Willd.",
        "owner": "Barthel Kirkam",
        "email": "hixer9@sohu.com",
        "contact_phone": "800-430-4774",
        "emergency_contact_name": "Hewitt Ixer",
        "emergency_contact_phone": "946-617-5786",
        "emergency_contact_email": "hixer9@umich.edu",
        "activated": false
      }];
    
    if (req.query.activated) {
        beacons = beacons.filter(b => b.activated);
    }

    res.render('list-beacons.html', { beacons: beacons });
});

module.exports = router
