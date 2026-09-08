export async function submitContactForm(formData: FormData) {
  // Web3Forms Access Key
  formData.append("access_key", "3b2e57b3-daf3-49b1-98e3-a1fac436047e");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const text = await response.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Non-JSON response from Web3Forms:", text);
      return {
        success: false,
        error: "Received an invalid response from transmission service.",
      };
    }

    if (data.success) {
      return { success: true };
    } else {
      return {
        success: false,
        error: data.message || "Failed to submit form.",
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Transmission failed. Please try again." };
  }
}

