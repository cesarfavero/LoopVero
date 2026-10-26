# `placeRatingValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768715-768718](../../../../../../reference/runtime/host-main.cjs#L768715-L768718) | `FunctionDeclaration` | no | `rating` |
| [evaluation:564226-564229](../../../../../../reference/runtime/sand-eval-runner.cjs#L564226-L564229) | `FunctionDeclaration` | no | `rating` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768715-768718](../../../../../../reference/runtime/host-main.cjs#L768715-L768718) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564226-564229](../../../../../../reference/runtime/sand-eval-runner.cjs#L564226-L564229) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:768715

Calls written directly in this body: `Math.min`, `Math.round`, `Number.isFinite`.

SHA-256 of the source span: `2baaf6bb018a01cc6ae13828173a1764d6e70795610bd5d85dc56ecd20b256e0`.

### evaluation:564226

Calls written directly in this body: `Math.min`, `Math.round`, `Number.isFinite`.

SHA-256 of the source span: `2baaf6bb018a01cc6ae13828173a1764d6e70795610bd5d85dc56ecd20b256e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
