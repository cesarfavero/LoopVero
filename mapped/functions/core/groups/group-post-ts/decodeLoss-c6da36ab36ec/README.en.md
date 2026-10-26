# `decodeLoss`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-post.ts` · [Module README](../../../../../modules/core/groups/group-post-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708220-708243](../../../../../../reference/runtime/host-main.cjs#L708220-L708243) | `FunctionDeclaration` | no | `input2, output2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708220-708243](../../../../../../reference/runtime/host-main.cjs#L708220-L708243) | 7 | 2 | 0 | 2 | 0 | 0 |

### host:708220

Calls written directly in this body: `.some`, `Array.isArray`, `Object.entries`, `Object.keys`, `isUnknownRecord2`, `next.output.forEach`, `pending.pop`, `pending.push`.

Assignment or increment targets: `next`, `stripped`.

SHA-256 of the source span: `ddc228605031fd4c1435b1ba7645ce21878a62122e2356b40b17157ad344d2d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
