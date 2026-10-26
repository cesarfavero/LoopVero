# `slackBodyProblems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755111-755137](../../../../../../../reference/runtime/host-main.cjs#L755111-L755137) | `FunctionDeclaration` | no | `body` |
| [evaluation:539736-539762](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539736-L539762) | `FunctionDeclaration` | no | `body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755111-755137](../../../../../../../reference/runtime/host-main.cjs#L755111-L755137) | 8 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539736-539762](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539736-L539762) | 8 | 1 | 0 | 1 | 0 | 0 |

### host:755111

Calls written directly in this body: `.trimEnd`, `/\s/.test`, `FENCE_AFTER_TEXT.exec`, `FENCE_OPENING.exec`, `SLACK_BULLET.test`, `SLACK_LINK.test`, `body.split`, `line.replace`, `line.trim`, `new Set`, `opening[computed].includes`, `opening[computed].startsWith`, `opening[computed].trim`, `problems.add`, `readFenceLine`.

Assignment or increment targets: `fence`.

SHA-256 of the source span: `2e6396da5d8c040e34aa635799f6fd2c580735033504202c32e8d6ff416b2fb0`.

### evaluation:539736

Calls written directly in this body: `.trimEnd`, `/\s/.test`, `FENCE_AFTER_TEXT.exec`, `FENCE_OPENING.exec`, `SLACK_BULLET.test`, `SLACK_LINK.test`, `body.split`, `line.replace`, `line.trim`, `new Set`, `opening[computed].includes`, `opening[computed].startsWith`, `opening[computed].trim`, `problems.add`, `readFenceLine`.

Assignment or increment targets: `fence`.

SHA-256 of the source span: `2e6396da5d8c040e34aa635799f6fd2c580735033504202c32e8d6ff416b2fb0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
