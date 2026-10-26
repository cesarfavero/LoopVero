# `samePorts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706167-706169](../../../../../../../reference/runtime/host-main.cjs#L706167-L706169) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706167-706169](../../../../../../../reference/runtime/host-main.cjs#L706167-L706169) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706167

Calls written directly in this body: `left.every`.

SHA-256 of the source span: `404586477f4c5c7e71d246751bbe0b05850f94f6fbe3bb1d4d8c7467bc76a5d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
