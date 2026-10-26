# `startsWithHiddenPromptMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/sand-prompt-markers.ts` · [Module README](../../../../../modules/core/runner/sand-prompt-markers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491160-491162](../../../../../../reference/runtime/host-main.cjs#L491160-L491162) | `FunctionDeclaration` | no | `text3` |
| [evaluation:526066-526068](../../../../../../reference/runtime/sand-eval-runner.cjs#L526066-L526068) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491160-491162](../../../../../../reference/runtime/host-main.cjs#L491160-L491162) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526066-526068](../../../../../../reference/runtime/sand-eval-runner.cjs#L526066-L526068) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491160

Calls written directly in this body: `leadingMarkerOf`.

SHA-256 of the source span: `f39b854e71ca9c5148ce1a39befde12a24bf9cdc37a3bd3d15052eb778871085`.

### evaluation:526066

Calls written directly in this body: `leadingMarkerOf`.

SHA-256 of the source span: `f39b854e71ca9c5148ce1a39befde12a24bf9cdc37a3bd3d15052eb778871085`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
