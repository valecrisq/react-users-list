import { render, screen, waitFor } from "@testing-library/react";
import UserList from "./../components/UserList";
import userEvent from "@testing-library/user-event";

const mockFetch = (data: any) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );
};

describe("UserList Component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("fetches and displays the user list container", async () => {
    render(<UserList />);
    await waitFor(() => {
      const userListItem = screen.getByTestId("users-list").children[0];
      expect(userListItem).toBeInTheDocument();
    });
  });

  test("clicking a user displays user details", async () => {
    render(<UserList />);
    await waitFor(() => {
      userEvent.click(screen.getByTestId("users-list").children[0]);
    });
    expect(screen.getByText("City:")).toBeInTheDocument();
  });

  test("displays error message when fetch fails", async () => {
    mockFetch(Promise.reject);
    render(<UserList />);
    await waitFor(() => expect(screen.getByRole("alert")));
  });
});
