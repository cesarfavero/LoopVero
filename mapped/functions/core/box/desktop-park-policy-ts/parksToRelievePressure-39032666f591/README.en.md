# `parksToRelievePressure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/desktop-park-policy.ts` · [Module README](../../../../../modules/core/box/desktop-park-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553732-553737](../../../../../../reference/runtime/host-main.cjs#L553732-L553737) | `FunctionDeclaration` | no | `memory, config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553732-553737](../../../../../../reference/runtime/host-main.cjs#L553732-L553737) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:553732

Calls written directly in this body: `Math.ceil`, `Math.max`.

SHA-256 of the source span: `c2680ff6e868fc4de2de810e697bfe60735d4f27252d6fe2fd3e8f7e189c9dcd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
