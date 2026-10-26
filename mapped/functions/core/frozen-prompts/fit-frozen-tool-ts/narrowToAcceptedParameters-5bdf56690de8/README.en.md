# `narrowToAcceptedParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/frozen-prompts/fit-frozen-tool.ts` · [Module README](../../../../../modules/core/frozen-prompts/fit-frozen-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553834-553874](../../../../../../reference/runtime/sand-eval-runner.cjs#L553834-L553874) | `FunctionDeclaration` | no | `{   schema: schema3,   accepting,   adjustments,   acceptorLabel = "the live tool" }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553834-553874](../../../../../../reference/runtime/sand-eval-runner.cjs#L553834-L553874) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553834

Calls written directly in this body: `.flatMap`, `Object.entries`, `Object.fromEntries`, `objectSchema.safeParse`, `required2.filter`.

SHA-256 of the source span: `f495722de0f8686c21c769aed0d27aef5b86315d777bb497193054987cdb93c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
