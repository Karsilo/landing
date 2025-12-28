// Simple toast replacement until sonner is installed
export const toast = {
  success: (message: string) => {
    console.log('Success:', message);
    // You can replace this with a custom toast implementation later
  },
  error: (message: string) => {
    console.error('Error:', message);
    // You can replace this with a custom toast implementation later
  }
};
