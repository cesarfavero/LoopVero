# `spellingsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715757-715764](../../../../../../reference/runtime/host-main.cjs#L715757-L715764) | `FunctionDeclaration` | no | `letters` |
| [evaluation:527426-527433](../../../../../../reference/runtime/sand-eval-runner.cjs#L527426-L527433) | `FunctionDeclaration` | no | `letters` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715757-715764](../../../../../../reference/runtime/host-main.cjs#L715757-L715764) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527426-527433](../../../../../../reference/runtime/sand-eval-runner.cjs#L527426-L527433) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715757

Calls written directly in this body: `.reduce`.

SHA-256 of the source span: `37ff32b380fc0ab5e8af3128ad1245a5ae6f2c2a466ec8661dfe655af2af59f0`.

### evaluation:527426

Calls written directly in this body: `.reduce`.

SHA-256 of the source span: `37ff32b380fc0ab5e8af3128ad1245a5ae6f2c2a466ec8661dfe655af2af59f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
