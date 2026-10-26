# `createSystemPromptAssembly/staticPrefixLength`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553760-553763](../../../../../../reference/runtime/sand-eval-runner.cjs#L553760-L553763) | `ArrowFunctionExpression` | no | `systemText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553760-553763](../../../../../../reference/runtime/sand-eval-runner.cjs#L553760-L553763) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553760

Calls written directly in this body: `.map`, `Math.max`, `recentStaticPrefixes.filter`.

SHA-256 of the source span: `bb45f2f02c9c8ed30701c7c21666ef3b3f3923493894bf708fd4f77fc313937e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
