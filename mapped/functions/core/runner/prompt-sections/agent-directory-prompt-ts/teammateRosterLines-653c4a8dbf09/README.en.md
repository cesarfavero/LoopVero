# `teammateRosterLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/agent-directory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/agent-directory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536960-536970](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536960-L536970) | `FunctionDeclaration` | no | `others, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536960-536970](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536960-L536970) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:536960

Calls written directly in this body: `.map`, `others.slice`, `sectionedTeammateRosterLines`.

SHA-256 of the source span: `2a5fbdec602a0a34b5da03acf4531ab1b2a0362c14ac2206f1a9742ef8963f58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
