# `botSkillSlugFromPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/bot-skill-writes.ts` · [Module README](../../../../../modules/core/skills/bot-skill-writes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762031-762034](../../../../../../reference/runtime/host-main.cjs#L762031-L762034) | `FunctionDeclaration` | no | `filePath` |
| [evaluation:554609-554612](../../../../../../reference/runtime/sand-eval-runner.cjs#L554609-L554612) | `FunctionDeclaration` | no | `filePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762031-762034](../../../../../../reference/runtime/host-main.cjs#L762031-L762034) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554609-554612](../../../../../../reference/runtime/sand-eval-runner.cjs#L554609-L554612) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762031

Calls written directly in this body: `/\/skills\/([^/]+)\/SKILL\.md$/.exec`.

SHA-256 of the source span: `40f7e62ccf0bccaae07428333f6e40ceeed6b81ebeb4d941d757ede49a9ebbdb`.

### evaluation:554609

Calls written directly in this body: `/\/skills\/([^/]+)\/SKILL\.md$/.exec`.

SHA-256 of the source span: `40f7e62ccf0bccaae07428333f6e40ceeed6b81ebeb4d941d757ede49a9ebbdb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
