import Listing from "../models/listing.model.js";
import { errorHandler } from "../utilis/error.js";
export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

 export const deleteListing = async (req,res,next) => {
  console.log("req.user.id-->",req.user.id);
  const listing = await Listing.findById(req.params.id);
  console.log("listing.userRef-->",listing.userRef);
   if (!listing) {
     return next(errorHandler(404, "Listing not found"));
   }
   if (req.user.id !== listing.userRef) {
     return next(errorHandler(401, "You can only delete your own listings"));
   }
   try {
     await Listing.findByIdAndDelete(req.params.id);
     return res.status(200).json("Listing has been deleted");
   } catch (error) {
     next(error);
   }
 };