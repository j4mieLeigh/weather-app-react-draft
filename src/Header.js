import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <form>
        <input
          type="search"
          className="search-input"
          placeholder="Enter city..."
        />
        <input
          type="submit"
          className="submit-button"
          value="Search"
        />
      </form>
    </div>
  );
}
