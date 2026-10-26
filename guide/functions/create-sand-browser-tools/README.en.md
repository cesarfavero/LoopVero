# `createSandBrowserTools`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: browser-computer](../../components/browser-computer/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:778908-778937](../../../reference/runtime/host-main.cjs#L778908-L778937). Static analysis of the original snapshot; names preserved from the bundle.

## Responsibility

`createSandBrowserTools(context)` assembles the browser toolset that corresponds to the host's surface and capabilities. Returns a list of tools, which may be empty.

## Algorithm

Resolves `browserSurface`; none stops assembly. For the selected surface, it passes the operation harness, run-code, box resource accessor, MCP resource accessor, review, display/window, secure-value guard, and code-mode gates. Adds a run-code refusal counter to each tool.

## Resource separation

The operation uses `remoteBoxResourceAccessor`, while parts of MCP/review may use the accessor from props. This distinction matters when differentiating the box's browser from the personal computer. The code receives display resolution; it does not assume a global monitor.

## Subsequent wrappers

`gateSandBrowserTools` applies a credential-fill lease and failure counting. The browser builder calls both. The factory is neither the navigation action nor final authorization; the assembled tool still has to pass through the execution path.

## Limit

The analysis confirms conditional assembly and dependencies. It does not demonstrate that a particular surface is enabled in production, that the browser is connected, or that a script has executed. Those are separate runtime checks.
