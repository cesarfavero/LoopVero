# `parseFatalStartupMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-crash-marker.ts` · [Module README](../../../../modules/host/host-crash-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471441-471456](../../../../../reference/runtime/host-main.cjs#L471441-L471456) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471441-471456](../../../../../reference/runtime/host-main.cjs#L471441-L471456) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:471441

Calls written directly in this body: `isBoundedTag`, `isFatalStartupStage`, `readCommonTimes`.

SHA-256 of the source span: `4970fd4be607ae8fdea32c1ec25738c1dd688918a38a6fbc0c030b4295f828ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
