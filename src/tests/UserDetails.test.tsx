import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserDetails from "./../components/UserDetails";
import { User } from "../user";

describe("UserDetails Component", () => {
  const mockUser: User = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    phone: "555-1234",
    address: {
      street: "123 Main St",
      suite: "Apt 456",
      city: "Random City",
      zipcode: "12345",
      geo: {
        lat: "12.3456",
        lng: "78.9012",
      },
    },
    company: {
      name: "ABC Inc",
      catchPhrase: "Let's go!",
      bs: "Business Stuff",
    },
    website: "https://johndoe.com",
  };

  test("renders user details correctly", () => {
    render(<UserDetails user={mockUser} onGoBack={() => {}} />);

    const userNameElement = screen.getByText("John Doe");
    const usernameElement = screen.getByText("Username:");
    const emailElement = screen.getByText("Email:");
    const streetElement = screen.getByText("Street:");
    const suiteElement = screen.getByText("Suite:");

    expect(userNameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(streetElement).toBeInTheDocument();
    expect(suiteElement).toBeInTheDocument();
  });

  test("calls onGoBack when 'Go Back' button is clicked", () => {
    const mockOnGoBack = jest.fn();
    render(<UserDetails user={mockUser} onGoBack={mockOnGoBack} />);

    const goBackButton = screen.getByLabelText("Go Back");
    userEvent.click(goBackButton);

    expect(mockOnGoBack).toHaveBeenCalledTimes(1);
  });
});
