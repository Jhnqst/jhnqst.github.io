const agentImage = document.getElementById("agent-image");
const agentName = document.getElementById("agent-name");
const agentRole = document.getElementById("agent-role");
const agentDescription = document.getElementById("agent-description");
const fetchAgentBtn = document.getElementById("fetchAgentBtn");

async function fetchRandomAgent() {
    try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        if (!response.ok) throw new Error("Failed to fetch agents.");

        const data = await response.json();
        const agents = data.data.filter(agent => agent.isPlayableCharacter);
        const randomAgent = agents[Math.floor(Math.random() * agents.length)];

        agentImage.src = randomAgent.displayIcon;
        agentName.textContent = randomAgent.displayName;
        agentRole.textContent = `Role: ${randomAgent.role.displayName}`;
        agentDescription.textContent = randomAgent.description;
    } catch (error) {
        agentName.textContent = "Failed to Load Agent";
        agentRole.textContent = "";
        agentDescription.textContent = "";
        console.error("Error:", error);
    }
}

fetchAgentBtn.addEventListener("click", fetchRandomAgent);
