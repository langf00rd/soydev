import axios from "axios";
import toast from "react-hot-toast";

export async function saveResultInDB(
  percentage: number,
  data: {
    selectedRole: string;
    checkedItems: string[];
  }
) {
  try {
    await axios.post("/api/save", {
      percentage: percentage,
      role: data.selectedRole,
      checklist: data.checkedItems,
      createdAt: Date.now().toString(),
    });
    toast.success("updated!");
  } catch (error: any) {
    toast.error(error.message);
  }
}
