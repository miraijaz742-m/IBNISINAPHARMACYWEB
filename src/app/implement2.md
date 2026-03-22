Create a modern UI component for a pharmacy website where users can check medicine availability.

Feature flow:

1. User Interface:
- Clean card layout (mobile + desktop responsive)
- Input field to enter medicine name
- Quantity selector (optional)
- Button: "Add Item"
- List view showing added medicines

2. Interaction:
- User can add multiple medicines to the list
- Each item shows:
  - Medicine name
  - Quantity
  - Remove option

3. Main Action:
- Button: "Send Message"

4. Functionality:
- When user clicks "Send Message":
  - Generate a formatted message containing all medicines and quantities
  - Send this message to admin via:
    - WhatsApp OR
    - Backend API

5. Message Format:
Example:
"Hello, I want to check availability of the following medicines:
1. Paracetamol - 2 strips
2. Vitamin D3 - 1 bottle"

6. Design Style:
- Minimal, modern, medical theme
- Sky blue + white colors
- Soft shadows, rounded corners
- Clean typography

7. Important Constraints:
- No cart or checkout system
- No payment integration
- Only availability checking (offline store model)

Goal:
Make it simple, fast, and user-friendly so customers can easily check medicine availability before visiting the store.