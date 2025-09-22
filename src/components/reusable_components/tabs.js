"use client";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Mood Check-In",
      value: "mood",
      content: (
        <QuestionBox>
          <label className="block mb-2 text-lg font-semibold">How are you feeling today?</label>
          <input type="range" min="1" max="5" className="w-full mb-6" />

          <label className="block mb-2">Can you describe your mood in a few words?</label>
          <input type="text" placeholder="e.g. Anxious, Hopeful" className="w-full p-2 rounded border mb-6" />

          <label className="block mb-2">What emotion stayed with you most today?</label>
          <select className="w-full p-2 rounded border">
            <option>Anxious</option>
            <option>Angry</option>
            <option>Sad</option>
            <option>Neutral</option>
            <option>Hopeful</option>
            <option>Other</option>
          </select>
        </QuestionBox>
      ),
    },
    {
      title: "Stress & Sleep",
      value: "stress",
      content: (
        <QuestionBox>
          <label className="block mb-2 text-lg font-semibold">How well did you sleep last night?</label>
          <input type="range" min="1" max="5" className="w-full mb-6" />

          <label className="block mb-2 text-lg font-semibold">How would you rate your current stress level?</label>
          <input type="range" min="1" max="5" className="w-full" />
        </QuestionBox>
      ),
    },
    {
      title: "Support & Panic",
      value: "support",
      content: (
        <QuestionBox>
          <label className="block mb-2">Have you had any panic symptoms recently?</label>
          <select className="w-full p-2 rounded border mb-6">
            <option>Yes</option>
            <option>No</option>
          </select>

          <label className="block mb-2">Do you feel emotionally supported today?</label>
          <select className="w-full p-2 rounded border">
            <option>Yes</option>
            <option>No</option>
          </select>
        </QuestionBox>
      ),
    },
    {
      title: "Mental Health History",
      value: "history",
      content: (
        <QuestionBox>
          <label className="block mb-2">Are you currently on any mental health medications?</label>
          <select className="w-full p-2 rounded border mb-4">
            <option>Yes</option>
            <option>No</option>
          </select>

          <label className="block mb-2">Have you ever worked with a therapist or counselor?</label>
          <select className="w-full p-2 rounded border">
            <option>Yes</option>
            <option>No</option>
          </select>
        </QuestionBox>
      ),
    },
    {
      title: "Tool Preferences",
      value: "tools",
      content: (
        <QuestionBox>
          <label className="block mb-2">Would you like access to calming tools?</label>
          <select className="w-full p-2 rounded border mb-4">
            <option>Yes</option>
            <option>No</option>
          </select>

          <label className="block mb-2">Would you like reminders for daily check-ins?</label>
          <select className="w-full p-2 rounded border">
            <option>Yes</option>
            <option>No</option>
          </select>
        </QuestionBox>
      ),
    },
  ];

  return (
    <div className="h-auto md:min-h-[40rem] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

// Wrapper for equal tab panel height and scrollable content
const QuestionBox = ({ children }) => (
  <div className="w-full h-[30rem] overflow-y-auto rounded-2xl p-6 md:p-10 text-base md:text-lg font-medium text-gray-900 bg-white shadow-md space-y-4">
    {children}
  </div>
);
