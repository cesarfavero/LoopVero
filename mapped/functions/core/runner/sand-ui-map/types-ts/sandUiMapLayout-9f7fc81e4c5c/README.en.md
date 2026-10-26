# `sandUiMapLayout`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/types.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557812-557818](../../../../../../../reference/runtime/host-main.cjs#L557812-L557818) | `FunctionDeclaration` | no | `map4, layout, agentKind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557812-557818](../../../../../../../reference/runtime/host-main.cjs#L557812-L557818) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:557812

Calls written directly in this body: `map4.infoPane.layouts.find`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `72d9f49e2380328e1a1096066d2b87200f4805bf449ab22af5744e701f6801bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
