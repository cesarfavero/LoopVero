# `hashPromptPrefixTail/sizeOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546524-546524](../../../../../../reference/runtime/sand-eval-runner.cjs#L546524-L546524) | `ArrowFunctionExpression` | no | `texts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546524-546524](../../../../../../reference/runtime/sand-eval-runner.cjs#L546524-L546524) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:546524 uses an implicit arrow-function return.

### evaluation:546524

Calls written directly in this body: `texts.reduce`.

SHA-256 of the source span: `ef770ae7ad2f9e15e59b00642c83bba4618e6db1a68e710c3263a5efc2742ec2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
