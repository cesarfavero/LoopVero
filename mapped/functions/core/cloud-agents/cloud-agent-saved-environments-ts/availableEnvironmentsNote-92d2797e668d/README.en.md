# `availableEnvironmentsNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-saved-environments.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-saved-environments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509841-509852](../../../../../../reference/runtime/host-main.cjs#L509841-L509852) | `FunctionDeclaration` | no | `environments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509841-509852](../../../../../../reference/runtime/host-main.cjs#L509841-L509852) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:509841

Calls written directly in this body: `.join`, `.map`, `environments.slice`.

SHA-256 of the source span: `5697b91673b603eac0e778b494369b78937f6bb406d9f9f762319fba7cf87e82`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
