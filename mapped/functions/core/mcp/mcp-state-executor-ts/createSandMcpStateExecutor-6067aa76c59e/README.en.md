# `createSandMcpStateExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-state-executor.ts` · [Module README](../../../../../modules/core/mcp/mcp-state-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693465-693534](../../../../../../reference/runtime/host-main.cjs#L693465-L693534) | `FunctionDeclaration` | no | `provider, mcpConfigJson` |
| [evaluation:584702-584771](../../../../../../reference/runtime/sand-eval-runner.cjs#L584702-L584771) | `FunctionDeclaration` | no | `provider, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693465-693534](../../../../../../reference/runtime/host-main.cjs#L693465-L693534) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:584702-584771](../../../../../../reference/runtime/sand-eval-runner.cjs#L584702-L584771) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693465

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a4eebb8503382ce810d932dfad123f86e138c75717ac1f45e5d206aa235b9e2b`.

### evaluation:584702

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e5e88188c0b6b8f4b94875a1c7cac80fb7b2d2df25b1e9a8fa519b6c3cf07be2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
