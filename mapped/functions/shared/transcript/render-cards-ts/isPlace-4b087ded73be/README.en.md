# `isPlace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707852-707854](../../../../../../reference/runtime/host-main.cjs#L707852-L707854) | `FunctionDeclaration` | no | `value` |
| [evaluation:564339-564341](../../../../../../reference/runtime/sand-eval-runner.cjs#L564339-L564341) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707852-707854](../../../../../../reference/runtime/host-main.cjs#L707852-L707854) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564339-564341](../../../../../../reference/runtime/sand-eval-runner.cjs#L564339-L564341) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707852

Calls written directly in this body: `Array.isArray`, `isNonEmptyString3`, `isOptional`, `isUnknownRecord2`, `value.photos.every`.

SHA-256 of the source span: `db50e90e7b067f4eb1f0abf2b10b27f8481abaf76bfc72db9803c63fe0ea2330`.

### evaluation:564339

Calls written directly in this body: `Array.isArray`, `isNonEmptyString2`, `isOptional`, `isUnknownRecord2`, `value.photos.every`.

SHA-256 of the source span: `ce595d60c6f3895a0e3b5d553f1449e989caeb67c6493d93a26e74c52d4669f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
