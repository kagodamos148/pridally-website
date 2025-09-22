import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findById(userId).select("-password");

    // Calculate progress based on form submissions
    // This is a placeholder - implement actual progress calculation logic
    const progress = {
      mental: calculateProgress(user.mentalHealthForms),
      physical: calculateProgress(user.physicalHealthForms),
      social: calculateProgress(user.socialHealthForms),
      sexual: calculateProgress(user.sexualHealthForms),
      reproductive: calculateProgress(user.reproductiveHealthForms),
      overall: calculateOverallProgress(user),
      milestones: calculateMilestones(user),
      chats: user.weeklyChats || 0,
      streak: calculateStreak(user)
    };

    return NextResponse.json({
      message: "Progress found",
      progress
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Helper functions to calculate progress
function calculateProgress(forms) {
  if (!forms || !forms.length) return 0;
  // Implement your progress calculation logic here
  return Math.round((forms.length / totalExpectedForms) * 100);
}

function calculateOverallProgress(user) {
  // Implement overall progress calculation
  const progressValues = [
    calculateProgress(user.mentalHealthForms),
    calculateProgress(user.physicalHealthForms),
    calculateProgress(user.socialHealthForms),
    calculateProgress(user.sexualHealthForms),
    calculateProgress(user.reproductiveHealthForms)
  ];
  
  return Math.round(progressValues.reduce((a, b) => a + b, 0) / progressValues.length);
}

function calculateMilestones(user) {
  // Implement milestone calculation
  return user.completedMilestones?.length || 0;
}

function calculateStreak(user) {
  // Implement streak calculation
  return user.currentStreak || 0;
}
