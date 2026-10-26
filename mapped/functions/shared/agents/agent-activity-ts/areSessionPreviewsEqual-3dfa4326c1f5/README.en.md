# `areSessionPreviewsEqual`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/agent-activity.ts` · [Module README](../../../../../modules/shared/agents/agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490220-490222](../../../../../../reference/runtime/host-main.cjs#L490220-L490222) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490220-490222](../../../../../../reference/runtime/host-main.cjs#L490220-L490222) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490220

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `1cb6b6b4f1aa0c850a10930515def96b04678e3002bf9e5315b726b457504827`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
