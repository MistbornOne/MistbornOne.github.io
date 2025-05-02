document.addEventListener("DOMContentLoaded", () => {
  // Find all pre > code blocks
  const codeBlocks = document.querySelectorAll("pre > code");

  // Process each code block
  codeBlocks.forEach((codeBlock) => {
    // Get the parent pre element
    const preBlock = codeBlock.parentNode;

    // Create a container to wrap the pre and position the button
    const container = document.createElement("div");
    container.className = "code-block-container";
    container.style.position = "relative";

    // Create the copy button
    const copyButton = document.createElement("button");
    copyButton.className = "copy-code-button";
    copyButton.textContent = "Copy";
    copyButton.setAttribute("aria-label", "Copy code to clipboard");

    // Style the button
    copyButton.style.position = "absolute";
    copyButton.style.top = "5px";
    copyButton.style.right = "5px";
    copyButton.style.padding = "3px 8px";
    copyButton.style.fontSize = "0.8rem";
    copyButton.style.cursor = "pointer";
    copyButton.style.background = "#f1f1f1";
    copyButton.style.border = "1px solid #ccc";
    copyButton.style.borderRadius = "4px";
    copyButton.style.opacity = "0.7";
    copyButton.style.transition = "opacity 0.3s";

    // Add hover effect
    copyButton.addEventListener("mouseover", () => {
      copyButton.style.opacity = "1";
    });

    copyButton.addEventListener("mouseout", () => {
      copyButton.style.opacity = "0.7";
    });

    // Add copy functionality
    copyButton.addEventListener("click", () => {
      // Get the text content
      const code = codeBlock.textContent;

      // Copy to clipboard
      navigator.clipboard
        .writeText(code)
        .then(() => {
          // Indicate success
          copyButton.textContent = "Copied!";
          setTimeout(() => {
            copyButton.textContent = "Copy";
          }, 2000);
        })
        .catch((error) => {
          console.error("Failed to copy code: ", error);
          copyButton.textContent = "Error!";
          setTimeout(() => {
            copyButton.textContent = "Copy";
          }, 2000);
        });
    });

    // Insert the button and wrap the pre in the container
    preBlock.parentNode.insertBefore(container, preBlock);
    container.appendChild(preBlock);
    container.appendChild(copyButton);
  });
});
