# `SandMcpDefinitionSource.clearLastKnownAccountConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-definition-source.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686660-686664](../../../../../../../reference/runtime/host-main.cjs#L686660-L686664) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686660-686664](../../../../../../../reference/runtime/host-main.cjs#L686660-L686664) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:686660

Calls written directly in this body: `Promise.resolve`.

Assignment or increment targets: `this.accountConfigEpoch`, `this.accountConfigPromise`, `this.lastKnownConfig`.

SHA-256 of the source span: `673bbe2387654e2cdd989152badc433ad166bb1701e82ecdcb4edca54775ae06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
