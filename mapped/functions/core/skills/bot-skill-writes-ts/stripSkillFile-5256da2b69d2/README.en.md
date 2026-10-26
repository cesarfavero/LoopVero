# `stripSkillFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/bot-skill-writes.ts` · [Module README](../../../../../modules/core/skills/bot-skill-writes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762035-762037](../../../../../../reference/runtime/host-main.cjs#L762035-L762037) | `FunctionDeclaration` | no | `path33` |
| [evaluation:554613-554615](../../../../../../reference/runtime/sand-eval-runner.cjs#L554613-L554615) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762035-762037](../../../../../../reference/runtime/host-main.cjs#L762035-L762037) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554613-554615](../../../../../../reference/runtime/sand-eval-runner.cjs#L554613-L554615) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762035

Calls written directly in this body: `.replace`, `path33.replace`.

SHA-256 of the source span: `ed782c93d47c36d26495e2b6e37a5b851982e1ea668d98c2ab84d8ab3c297684`.

### evaluation:554613

Calls written directly in this body: `.replace`, `path33.replace`.

SHA-256 of the source span: `ed782c93d47c36d26495e2b6e37a5b851982e1ea668d98c2ab84d8ab3c297684`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
