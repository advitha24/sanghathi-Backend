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
    fatherOfficePhone,
    fatherOfficeAddress,
    fatherAnnualIncome,
    motherOccupation,
    motherOrganization,
    motherDesignation,
    motherOfficePhone,
    motherOfficeAddress,
    motherAnnualIncome,
  } = req.body;

  try {
    console.log("Create or update reached");

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
        fatherOfficePhone,
        fatherOfficeAddress,
        fatherAnnualIncome,
        motherOccupation,
        motherOrganization,
        motherDesignation,
        motherOfficePhone,
        motherOfficeAddress,
        motherAnnualIncome,
      },
      { new: true, upsert: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        parentDetails: updatedParentDetails,
      },
    });
  } catch (err) {
    next(new AppError(err.message, 400));
  }
});

// Get Parent Details Data by User ID
export const getParentDetailsByUserId = catchAsync(async (req, res, next) => {
  console.log("Route handler triggered, req.params:", req.params);
  const { userId } = req.params;

  console.log("Querying for userId:", userId);

  const parentDetails = await ParentDetails.findOne({ userId });

  if (!parentDetails) {
    return next(new AppError("Parent details not found", 404));
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
        from: "parentdetails", // ⚠️ Mongo collection name is lowercase
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
        parentDetails: {
          fatherFirstName: "$parentDetails.fatherFirstName",
          fatherMiddleName: "$parentDetails.fatherMiddleName",
          fatherLastName: "$parentDetails.fatherLastName",
          motherFirstName: "$parentDetails.motherFirstName",
          motherMiddleName: "$parentDetails.motherMiddleName",
          motherLastName: "$parentDetails.motherLastName",
          fatherOccupation: "$parentDetails.fatherOccupation",
          fatherOrganization: "$parentDetails.fatherOrganization",
          fatherDesignation: "$parentDetails.fatherDesignation",
          fatherOfficePhone: "$parentDetails.fatherOfficePhone",
          fatherOfficeAddress: "$parentDetails.fatherOfficeAddress",
          fatherAnnualIncome: "$parentDetails.fatherAnnualIncome",
          motherOccupation: "$parentDetails.motherOccupation",
          motherOrganization: "$parentDetails.motherOrganization",
          motherDesignation: "$parentDetails.motherDesignation",
          motherOfficePhone: "$parentDetails.motherOfficePhone",
          motherOfficeAddress: "$parentDetails.motherOfficeAddress",
          motherAnnualIncome: "$parentDetails.motherAnnualIncome",
        },
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
  const { id } = req.params;
  const deletedParentDetails = await ParentDetails.findOneAndDelete({ userId: id });

  if (!deletedParentDetails) {
    return next(new AppError("Parent details not found for deletion", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
