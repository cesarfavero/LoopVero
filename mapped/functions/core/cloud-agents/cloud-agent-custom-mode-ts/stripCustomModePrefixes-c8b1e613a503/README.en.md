# `stripCustomModePrefixes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-custom-mode.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-custom-mode-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509901-509910](../../../../../../reference/runtime/host-main.cjs#L509901-L509910) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509901-509910](../../../../../../reference/runtime/host-main.cjs#L509901-L509910) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:509901

Calls written directly in this body: `name18.slice`, `name18.startsWith`, `name18.trim`, `value.trim`.

Assignment or increment targets: `name18`.

SHA-256 of the source span: `8708949b1206ab954c03167f222585cbceaaad32e3181f96dcc1ed38c4c6a13d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
