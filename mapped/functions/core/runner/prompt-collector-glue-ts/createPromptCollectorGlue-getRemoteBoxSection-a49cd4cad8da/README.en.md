# `createPromptCollectorGlue/getRemoteBoxSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533789-533791](../../../../../../reference/runtime/sand-eval-runner.cjs#L533789-L533791) | `FunctionDeclaration` | no | `canUseUserComputer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533789-533791](../../../../../../reference/runtime/sand-eval-runner.cjs#L533789-L533791) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533789

Calls written directly in this body: `renderRemoteBoxSection`.

SHA-256 of the source span: `64a22d8b72a1192249df37b53b04b97ce92ffcc98e57dca473f5a9f7b71017e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
