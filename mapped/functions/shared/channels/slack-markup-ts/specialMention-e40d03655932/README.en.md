# `specialMention`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/slack-markup.ts` · [Module README](../../../../../modules/shared/channels/slack-markup-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721603-721611](../../../../../../reference/runtime/host-main.cjs#L721603-L721611) | `FunctionDeclaration` | no | `id, label` |
| [evaluation:539855-539863](../../../../../../reference/runtime/sand-eval-runner.cjs#L539855-L539863) | `FunctionDeclaration` | no | `id, label` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721603-721611](../../../../../../reference/runtime/host-main.cjs#L721603-L721611) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:539855-539863](../../../../../../reference/runtime/sand-eval-runner.cjs#L539855-L539863) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:721603

Calls written directly in this body: `.replace`, `BROADCASTS.has`, `id.startsWith`, `label.trim`, `nonEmpty`, `slackName`.

SHA-256 of the source span: `51902536589096b71c7e5ca16709e5c97cf1e2066bb0f08703b6905d393f5cae`.

### evaluation:539855

Calls written directly in this body: `.replace`, `BROADCASTS.has`, `id.startsWith`, `label.trim`, `nonEmpty`, `slackName`.

SHA-256 of the source span: `51902536589096b71c7e5ca16709e5c97cf1e2066bb0f08703b6905d393f5cae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
