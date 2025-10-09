import ParentDetails from "../../models/Student/ParentDetails.js";
import catchAsync from "../../utils/catchAsync.js";
import AppError from "../../utils/appError.js";
import User from "../../models/User.js";

// Create or Update Parent Details Data
export const createOrUpdateParentDetails = catchAsync(async (req, res, next) => {
  const {
    userId,
    fatherFirstName,
    fatherMiddleName,
    fatherLastName,
    motherFirstName,
    motherMiddleName,
    motherLastName,
    fatherOccupation,
    fatherOrganization,
    fatherDesignation,
    fatherPhoneNumber,
    fatherOfficePhone,
    fatherOfficeAddress,
    fatherAnnualIncome,
    motherOccupation,
    motherOrganization,
    motherDesignation,
    motherPhoneNumber,
    motherOfficePhone,
    motherOfficeAddress,
    motherAnnualIncome,
    address,
    state,
    pincode,
  } = req.body;

  try {
    console.log("Create or update parent details reached");
    
    const updatedParentDetails = await ParentDetails.findOneAndUpdate(
      { userId },
      {
        fatherFirstName,
        fatherMiddleName,
        fatherLastName,
        motherFirstName,
        motherMiddleName,
        motherLastName,
        fatherOccupation,
        fatherOrganization,
        fatherDesignation,
        fatherPhoneNumber,
        fatherOfficePhone,
        fatherOfficeAddress,
        fatherAnnualIncome,
        motherOccupation,
        motherOrganization,
        motherDesignation,
        motherPhoneNumber,
        motherOfficePhone,
        motherOfficeAddress,
        motherAnnualIncome,
        address,
        state,
        pincode,
      },
      { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        parentDetails: updatedParentDetails,
      },
    });
  } catch (err) {
    console.error("Error in createOrUpdateParentDetails:", err);
    next(new AppError(err.message, 400));
  }
});

// Get Parent Details Data by User ID
export const getParentDetailsByUserId = catchAsync(async (req, res, next) => {
  console.log("Route handler triggered, req.params:", req.params);
  const { userId } = req.params;
  console.log("Querying for userId:", userId);
  
  const parentDetails = await ParentDetails.findOne({ userId: userId });

  if (!parentDetails) {
    return res.status(200).json({
      status: "success",
      data: {
        parentDetails: null,
      },
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      parentDetails,
    },
  });
});

// Get all Parent Details data with user details
export const getAllParentDetails = catchAsync(async (req, res, next) => {
  const parentDetailsData = await User.aggregate([
    {
      $match: {
        role: "student",
      },
    },
    {
      $lookup: {
        from: "parentdetails",
        localField: "_id",
        foreignField: "userId",
        as: "parentDetails",
      },
    },
    {
      $unwind: {
        path: "$parentDetails",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        role: 1,
        parentDetails: 1,
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: parentDetailsData,
  });
});

// Delete Parent Details Data by User ID
export const deleteParentDetailsByUserId = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const deletedParentDetails = await ParentDetails.findOneAndDelete({ userId: userId });

  if (!deletedParentDetails) {
    return next(new AppError("Parent details not found for deletion", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
 