# `compiledSpelling`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/email/email-display-name.ts` · [Module README](../../../../../modules/core/email/email-display-name-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715765-715784](../../../../../../reference/runtime/host-main.cjs#L715765-L715784) | `FunctionDeclaration` | no | `letters` |
| [evaluation:527434-527453](../../../../../../reference/runtime/sand-eval-runner.cjs#L527434-L527453) | `FunctionDeclaration` | no | `letters` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715765-715784](../../../../../../reference/runtime/host-main.cjs#L715765-L715784) | 3 | 3 | 0 | 1 | 1 | 0 |
| [evaluation:527434-527453](../../../../../../reference/runtime/sand-eval-runner.cjs#L527434-L527453) | 3 | 3 | 0 | 1 | 1 | 0 |

### host:715765

Calls written directly in this body: `Object.keys`, `STANDS_FOR[computed].includes`, `new Error`, `new Int32Array`, `unit.charCodeAt`.

Assignment or increment targets: `j2`, `lettersByUnit[computed]`, `lettersEnteredOnRepeat`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `b356d760fb5e013cf560ad403fae8882569e6857850a78c87860888e2af7a556`.

### evaluation:527434

Calls written directly in this body: `Object.keys`, `STANDS_FOR[computed].includes`, `new Error`, `new Int32Array`, `unit.charCodeAt`.

Assignment or increment targets: `j2`, `lettersByUnit[computed]`, `lettersEnteredOnRepeat`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `b356d760fb5e013cf560ad403fae8882569e6857850a78c87860888e2af7a556`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
