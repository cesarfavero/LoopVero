# `bestOfferOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707732-707736](../../../../../../reference/runtime/host-main.cjs#L707732-L707736) | `FunctionDeclaration` | no | `variant` |
| [evaluation:481854-481858](../../../../../../reference/runtime/sand-eval-runner.cjs#L481854-L481858) | `FunctionDeclaration` | no | `variant` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707732-707736](../../../../../../reference/runtime/host-main.cjs#L707732-L707736) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481854-481858](../../../../../../reference/runtime/sand-eval-runner.cjs#L481854-L481858) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:707732

Calls written directly in this body: `.sort`, `variant.offers.filter`.

SHA-256 of the source span: `7f5619eb26433a0a0e34f33996fb647c636d2bef7c8adee805f562260b4470d7`.

### evaluation:481854

Calls written directly in this body: `.sort`, `variant.offers.filter`.

SHA-256 of the source span: `7f5619eb26433a0a0e34f33996fb647c636d2bef7c8adee805f562260b4470d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
