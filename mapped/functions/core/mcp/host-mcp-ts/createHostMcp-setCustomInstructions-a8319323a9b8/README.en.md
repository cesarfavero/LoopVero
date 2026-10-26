# `createHostMcp/setCustomInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701079-701083](../../../../../../reference/runtime/host-main.cjs#L701079-L701083) | `FunctionExpression` | yes | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701079-701083](../../../../../../reference/runtime/host-main.cjs#L701079-L701083) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701079

Calls written directly in this body: `manager.setServerCustomInstructions`, `serversMutated`.

SHA-256 of the source span: `a5630905b32e6a1233891a8c7e3824e6fcd333359c5cc7bb885f39d6c7cda70f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
