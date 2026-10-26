# `appToolCallResultOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-app-runtime.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-app-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701448-701465](../../../../../../../reference/runtime/host-main.cjs#L701448-L701465) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701448-701465](../../../../../../../reference/runtime/host-main.cjs#L701448-L701465) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:701448

Calls written directly in this body: `mcpAppToolResultPayload`, `writeMcpAppJson`.

SHA-256 of the source span: `6a0bcc22c026aa36710757d833e4a3bf1d2216fbec7bcede3c0c681c6bf035b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
