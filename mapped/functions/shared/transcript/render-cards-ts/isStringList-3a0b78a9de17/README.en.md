# `isStringList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707849-707851](../../../../../../reference/runtime/host-main.cjs#L707849-L707851) | `FunctionDeclaration` | no | `value` |
| [evaluation:564336-564338](../../../../../../reference/runtime/sand-eval-runner.cjs#L564336-L564338) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707849-707851](../../../../../../reference/runtime/host-main.cjs#L707849-L707851) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564336-564338](../../../../../../reference/runtime/sand-eval-runner.cjs#L564336-L564338) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707849

Calls written directly in this body: `Array.isArray`, `value.every`.

SHA-256 of the source span: `678e8ab35a5fc9f5616fcfbf59282c4d88ecc0f60b4e40e909023aefeb7c41e7`.

### evaluation:564336

Calls written directly in this body: `Array.isArray`, `value.every`.

SHA-256 of the source span: `678e8ab35a5fc9f5616fcfbf59282c4d88ecc0f60b4e40e909023aefeb7c41e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
