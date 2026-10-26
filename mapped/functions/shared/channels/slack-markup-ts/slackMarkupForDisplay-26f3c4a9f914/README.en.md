# `slackMarkupForDisplay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/slack-markup.ts` · [Module README](../../../../../modules/shared/channels/slack-markup-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721618-721641](../../../../../../reference/runtime/host-main.cjs#L721618-L721641) | `FunctionDeclaration` | no | `text3, options2 = {}` |
| [evaluation:539870-539893](../../../../../../reference/runtime/sand-eval-runner.cjs#L539870-L539893) | `FunctionDeclaration` | no | `text3, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721618-721641](../../../../../../reference/runtime/host-main.cjs#L721618-L721641) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539870-539893](../../../../../../reference/runtime/sand-eval-runner.cjs#L539870-L539893) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:721618

Calls written directly in this body: `mapProse`, `text3.includes`.

SHA-256 of the source span: `d1876ab2c256c2f4f4f2203f601ad8ec2b3bb3f35a1e38473d9c7d6a6dc28ef9`.

### evaluation:539870

Calls written directly in this body: `mapProse`, `text3.includes`.

SHA-256 of the source span: `d1876ab2c256c2f4f4f2203f601ad8ec2b3bb3f35a1e38473d9c7d6a6dc28ef9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
