# `defineAgentTools`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: tools](../../components/tools/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:756590-756630](../../../reference/runtime/host-main.cjs#L756590-L756630). Static analysis of the original snapshot; names preserved from the bundle.

## Signature and purpose

`defineAgentTools(spec)` transforms a declarative specification into a complete policy over the known tool IDs. The output records offered and omitted tools, placement, hints, and connector access. It does not execute a tool.

## Algorithm

1. Builds inclusion sets by name/group and omission maps with reasons.
2. Iterates over `GROK_BOT_TOOL_IDS`.
3. If the same name was explicitly included and omitted, throws an error.
4. Inclusion by name takes precedence over groups; omission by name takes precedence over inclusion by group.
5. A conflict between included/omitted groups requires a decision by name.
6. Without either inclusion or an omission reason, throws an error: a new tool is not implicitly allowed.
7. Validates that top-level tools and hints belong to the offered set.
8. Delegates to `agentTools` to materialize the policy object.

## Contracts and effects

The input is an in-memory specification. The output is another in-memory object; there is no network access or persistence. Errors are synchronous and prevent an inconsistent policy from being assembled. `extendAgentTools` derives variants afterward, without changing the base by reference, using copies of sets/maps.

## Consequence for a reconstruction

Adding a tool requires deciding its place in every manifest, or inheriting an explicit decision by group. “Appears in the catalog” and “allowed for the agent” remain separate checks. Manifest logic does not replace authorization of the concrete call.
