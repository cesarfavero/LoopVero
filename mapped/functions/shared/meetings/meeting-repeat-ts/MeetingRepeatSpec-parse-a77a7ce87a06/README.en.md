# `MeetingRepeatSpec.parse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-repeat.ts` · [Module README](../../../../../modules/shared/meetings/meeting-repeat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763262-763266](../../../../../../reference/runtime/host-main.cjs#L763262-L763266) | `method` | no | `fields3` |
| [evaluation:556227-556231](../../../../../../reference/runtime/sand-eval-runner.cjs#L556227-L556231) | `method` | no | `fields3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763262-763266](../../../../../../reference/runtime/host-main.cjs#L763262-L763266) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556227-556231](../../../../../../reference/runtime/sand-eval-runner.cjs#L556227-L556231) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:763262

Calls written directly in this body: `Array.isArray`, `schema2.safeParse`.

SHA-256 of the source span: `8ce82256095240f8dbf4160d402adc43be8ee4cf3c9cd19acc02046299870183`.

### evaluation:556227

Calls written directly in this body: `Array.isArray`, `schema.safeParse`.

SHA-256 of the source span: `c24d79c694bb6765f6ac89ab9bf9aa8fe546a9a5cae323c713de76b5028451e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
