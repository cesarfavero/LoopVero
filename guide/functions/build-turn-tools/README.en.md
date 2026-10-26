# `buildTurnTools`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: tools](../../components/tools/README.en.md) · [Index](../../README.en.md)

**Primary source:** [sand-eval-runner.cjs:582666-582732](../../../reference/runtime/sand-eval-runner.cjs#L582666-L582732). Static analysis of the original snapshot; names preserved from the bundle.

## Signature and purpose

`buildTurnTools(host, turn, props)` composes the toolset for a turn. The complete recovered implementation is in the evaluation bundle; it does not prove that the retired BOX host accepts that turn.

## Algorithm

Resolves the policy; returns an empty set if there are no tools. A special sharing pass has its own path. On the normal path, it creates the context, runs builders, and adds devices. Applies readonly refusals and legacy forwarding. It then places tools in the context according to the manifest, retention behind lookup, canvas exceptions, or hints. Finally, it wraps handoffs and timeouts and calls `fencedToolSet`.

## Concrete inputs

`host` supplies ports, gates, agent type, review, and capabilities. `turn` supplies the session, controllers, and subagent prefetch. `props` supplies the state handler and resource accessor. If the policy allows a tool but its port does not exist, the builder may return nothing.

## Return value and failures

Returns `ToolSetHandle`. Unknown builders and builders that produce undeclared names are filtered and generate a metric in `runTurnToolBuilders`. Dynamic invocation receives its own wrapper, including timeout, observation, and MCP pause cancellation; normal tools receive a timeout based on name and runner class. Building the toolset does not execute user effects.

## Engineering invariant

Prompt documentation must reflect the assembled set, not just flags. The runtime provides `sandMountedTurnTools` to inspect executable/visible tools. An implementation that merely concatenates every tool loses this control.
