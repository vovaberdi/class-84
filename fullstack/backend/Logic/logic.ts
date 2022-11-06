//return data in promise (pending,full field,rejected)

import Donation, { deleteME, donationList } from "../model/Donation";

//get all payments

//get all donations
function getDonations() {
  return donationList;
}

//get single donation
function getSingleDonation(id: number) {
  return donationList.filter((item) => item.getID() === id);
}
//add donation

//delete donation

//update donation

//cancel donation

//testmode
function makeTest() {
  return { name: "Leon", moto: "mess with the best and die like the rest" };
}
function sayHi(userName: string, age: number) {
  return {
    name: "Hello " + userName,
    born: 2022 - age,
  };
}

function getDonationRange(from: number, to: number) {
  return donationList.filter(
    (item) => item.getSum() >= from && item.getSum() <= to
  );
}

function getDonationByName(userName: string) {
  return donationList.filter(
    (item) =>
      item.getName().includes(userName) || item.getLastName().includes(userName)
  );
}

function addDonation(newDonation: Donation) {
  //const myDonation = new Donation();
  //myDonation.getDonation(newDonation);
  //donationList.push(myDonation);
  donationList.push(newDonation);
}

function deleteID(id: number) {
  //donationList = donationList.filter((item) => item.getID() !== id); will not work becuase it's an import
  deleteME(id);
}

export default {
  makeTest,
  sayHi,
  getDonations,
  getSingleDonation,
  getDonationRange,
  getDonationByName,
  addDonation,
  deleteID,
};
