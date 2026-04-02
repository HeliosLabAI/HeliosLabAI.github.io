import { motion } from "framer-motion";
import { ArrowLeft, Calculator, Brain, Target, Lightbulb, Code } from "lucide-react";
import { Link } from "react-router-dom";
import agentImage from "@/assets/adaptive-arithmetic.jpg";

const AdaptiveArithmeticAgent = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="section-padding pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl font-semibold text-foreground tracking-tight">Adaptive Arithmetic Agent</h1>
            </div>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              A reinforcement learning agent that learns to solve addition problems through trial and error.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <section className="px-5 md:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated overflow-hidden"
          >
            <img
              src={agentImage}
              alt="Adaptive Arithmetic Agent"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">Overview</h2>
            </div>
            <p className="text-foreground leading-relaxed">
              This project focuses on building a Reinforcement Learning (RL) agent capable of solving addition problems in a unique and intelligent way. Instead of programming mathematical rules directly into the system, the agent learns through trial and error, gradually discovering the most efficient strategy to reach a given target number. The objective is simple but powerful: reach a target value (up to 5,000) by repeatedly selecting numbers from 1 to 10, without ever exceeding the target.
            </p>
          </motion.div>

          {/* Environment */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">The Environment</h2>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              At the core of this system lies the concept of an environment, which acts as the agent's playground. In this environment, the agent starts from zero and interacts step-by-step by choosing numbers to add. Each action changes its position relative to the target, and the goal is to reach the exact value. While the task appears straightforward, designing an agent that can generalize this behavior across all possible targets requires careful thinking.
            </p>
            <p className="text-foreground leading-relaxed">
              The most important breakthrough in this project was redefining how the agent perceives its situation, known as the state representation. Initially, the state was defined as the current sum. However, this approach limited the agent's ability to generalize. It could only learn solutions for specific targets and failed to apply that knowledge elsewhere. This is similar to memorizing individual math problems instead of understanding the underlying logic.
            </p>
          </motion.div>

          {/* State Representation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">State Representation Breakthrough</h2>
            </div>
            <p className="text-foreground leading-relaxed">
              To overcome this limitation, the state was redefined as the remaining distance to the target. For example, if the target is 100 and the current sum is 90, the state becomes 10. This simple shift transformed the problem entirely. Instead of learning isolated solutions, the agent began learning a universal rule: "If I am X units away, what is the best action to take?" This allowed the agent to apply the same knowledge across all targets, making it highly scalable and efficient.
            </p>
          </motion.div>

          {/* Q-Learning */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated p-6 md:p-8"
          >
            <h2 className="font-semibold text-foreground mb-4">Q-Learning Mechanism</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The learning mechanism used in this system is Q-Learning, a well-known algorithm in reinforcement learning. The agent maintains a structure called a Q-Table, which acts as its memory. This table consists of 5,001 rows (representing all possible distances from 0 to 5000) and 10 columns (representing the possible actions from 1 to 10). Each cell in the table stores a value that estimates how beneficial a specific action is in a given state. Over time, these values are updated based on the rewards received, allowing the agent to refine its decision-making process.
            </p>
            <p className="text-foreground leading-relaxed">
              A carefully designed reward system plays a crucial role in guiding the agent's behavior. The agent receives a reward of +100 when it reaches the target exactly, reinforcing successful outcomes. If it overshoots the target, it is penalized with -100, discouraging risky or incorrect actions. Additionally, a small reward of +1 is given for each step that moves the agent closer to the target. This ensures that the agent consistently progresses toward its goal rather than remaining inactive.
            </p>
          </motion.div>

          {/* Training */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="card-elevated p-6 md:p-8"
          >
            <h2 className="font-semibold text-foreground mb-4">Training Process</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Training the agent involves running a large number of simulations, known as episodes. In this case, the agent is trained over 100,000 episodes, allowing it to explore various scenarios and gradually improve its strategy. A key technique used during training is epsilon decay, which balances exploration and exploitation. At the beginning, the agent behaves randomly, exploring all possible actions to understand their outcomes. As training progresses, the randomness decreases, and the agent increasingly relies on learned knowledge to make better decisions.
            </p>
            <p className="text-foreground leading-relaxed">
              This transition from randomness to strategy is essential. In the early stages, the agent makes many mistakes, but these mistakes are valuable because they provide learning opportunities. In the middle stages, it begins to recognize patterns and prefers actions that lead to higher rewards. By the final stage, the agent becomes greedy, meaning it consistently chooses the action with the highest expected reward based on its Q-Table.
            </p>
          </motion.div>

          {/* Generalization */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card-elevated p-6 md:p-8"
          >
            <h2 className="font-semibold text-foreground mb-4">Generalization and Final Behavior</h2>
            <p className="text-foreground leading-relaxed mb-4">
              One of the most significant outcomes of this approach is generalization. Because the agent learns based on distance rather than specific sums, it effectively understands the logic of addition. It does not memorize answers but instead learns how to solve any target dynamically. This makes the system robust and adaptable.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In its final behavior, the agent demonstrates both efficiency and precision. It typically prioritizes selecting the number 10 to reduce the distance quickly when far from the target. As it gets closer, it switches to smaller numbers to ensure it reaches the exact value without overshooting. This strategy reflects an optimal balance between speed and accuracy.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Another important characteristic of the trained agent is its deterministic nature. Once training is complete, the agent always selects the action with the highest Q-value for a given state. This means that for any specific input, the output will always be the same. This consistency is a result of the agent having learned the optimal policy, which defines the best possible action for every state.
            </p>
            <p className="text-foreground leading-relaxed">
              From a teaching perspective, this project demonstrates how machines can learn complex behaviors without explicit instructions. By designing the right environment, defining an effective state representation, and guiding learning through rewards, it is possible to create systems that discover solutions on their own.
            </p>
          </motion.div>

          {/* Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="card-elevated p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-4 h-4 text-primary" />
              <h2 className="font-semibold text-foreground">Implementation</h2>
            </div>
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
              <pre className="text-xs md:text-sm font-mono text-[#d4d4d4] p-4 overflow-x-auto">
                <code>{`import numpy as np
import random
import pandas as pd

# 1. THE ENVIRONMENT
class AdditionEnv:
    def __init__(self, target_range=(1, 5000)):
        self.target_range = target_range
        self.inputs = list(range(1, 11))
        self.reset()

    def reset(self, target=None):
        if target is not None:
            self.target = target
        else:
            self.target = random.randint(*self.target_range)
        self.current_sum = 0
        return self.target  # State is the Remaining Distance

    def step(self, action_idx):
        added_value = self.inputs[action_idx]
        self.current_sum += added_value
        remaining = self.target - self.current_sum

        if remaining == 0:
            reward = 100
            done = True
        elif remaining < 0:
            reward = -100
            done = True
        else:
            reward = 1
            done = False
        return remaining, reward, done

# 2. THE AGENT
class QLearningAgent:
    def __init__(self, n_states, n_actions, lr=0.1, gamma=0.9, epsilon=1.0):
        self.q_table = np.zeros((n_states, n_actions))
        self.lr = lr
        self.gamma = gamma
        self.epsilon = epsilon

    def choose_action(self, state):
        if random.uniform(0, 1) < self.epsilon:
            return random.randint(0, 9) # Explore
        else:
            return np.argmax(self.q_table[state]) # Exploit

    def learn(self, state, action, reward, next_state):
        old_value = self.q_table[state, action]
        next_max = np.max(self.q_table[next_state])
        new_value = (1 - self.lr) * old_value + self.lr * (reward + self.gamma * next_max)
        self.q_table[state, action] = new_value

# 3. INITIALIZATION AND TRAINING
env = AdditionEnv()
agent = QLearningAgent(n_states=5001, n_actions=10)

# Training Parameters
episodes = 100000
epsilon_start = 1.0
epsilon_end = 0.01
decay_rate = 0.0001

print('Starting Training (100,000 episodes)...')
for episode in range(episodes):
    state = env.reset()
    done = False
    agent.epsilon = epsilon_end + (epsilon_start - epsilon_end) * np.exp(-decay_rate * episode)

    while not done:
        action = agent.choose_action(state)
        next_state, reward, done = env.step(action)

        # Safety bounds for state
        safe_next = max(0, min(next_state, 5000))
        agent.learn(state, action, reward, safe_next)
        state = safe_next

print('Training Complete.')

# 4. EXECUTION FUNCTION
def get_agent_sequence(target):
    state = env.reset(target=target)
    path = []
    done = False
    while not done:
        action = np.argmax(agent.q_table[state])
        val = env.inputs[action]
        path.append(val)
        state, _, done = env.step(action)
        state = max(0, min(state, 5000))
    return sum(path), path

# 5. QUICK TEST
test_target = 91
final_sum, sequence = get_agent_sequence(test_target)
print(f'\\nTest Target: {test_target}')
print(f'Agent Sequence: {sequence}')
print(f'Final Sum: {final_sum} | Status: {"SUCCESS" if final_sum == test_target else "FAILED"}')`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card-elevated p-6 md:p-8"
          >
            <h2 className="font-semibold text-foreground mb-4">Conclusion</h2>
            <p className="text-foreground leading-relaxed">
              Overall, this project highlights the power of reinforcement learning in building intelligent systems. It shows how a simple problem can lead to deep insights when approached correctly, and how redefining a single concept—like the state—can completely transform the learning capability of an agent.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdaptiveArithmeticAgent;
