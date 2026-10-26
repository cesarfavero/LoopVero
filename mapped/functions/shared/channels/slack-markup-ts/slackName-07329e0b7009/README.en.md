# `slackName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/slack-markup.ts` · [Module README](../../../../../modules/shared/channels/slack-markup-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721598-721602](../../../../../../reference/runtime/host-main.cjs#L721598-L721602) | `FunctionDeclaration` | no | `value` |
| [evaluation:539850-539854](../../../../../../reference/runtime/sand-eval-runner.cjs#L539850-L539854) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721598-721602](../../../../../../reference/runtime/host-main.cjs#L721598-L721602) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539850-539854](../../../../../../reference/runtime/sand-eval-runner.cjs#L539850-L539854) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721598

Calls written directly in this body: `.replace`, `.trim`, `nonEmpty`, `value.replace`.

SHA-256 of the source span: `fa31de37234fcb7b829c284598ce1cafb4efe6d93065905b7dac004a44bf51a2`.

### evaluation:539850

Calls written directly in this body: `.replace`, `.trim`, `nonEmpty`, `value.replace`.

SHA-256 of the source span: `fa31de37234fcb7b829c284598ce1cafb4efe6d93065905b7dac004a44bf51a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
