# `confineLineBreaks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/spotlight/sand-spotlight.ts` · [Module README](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761620-761626](../../../../../../reference/runtime/host-main.cjs#L761620-L761626) | `FunctionDeclaration` | no | `text3` |
| [evaluation:552435-552441](../../../../../../reference/runtime/sand-eval-runner.cjs#L552435-L552441) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761620-761626](../../../../../../reference/runtime/host-main.cjs#L761620-L761626) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552435-552441](../../../../../../reference/runtime/sand-eval-runner.cjs#L552435-L552441) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761620

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `71136d3bef303d681b088bd2f3087aeb44e50c182fcda320c177eb808eb0daa4`.

### evaluation:552435

Calls written directly in this body: `text3.replace`.

SHA-256 of the source span: `71136d3bef303d681b088bd2f3087aeb44e50c182fcda320c177eb808eb0daa4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
