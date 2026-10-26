# `brandedErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/errors/bounded.ts` · [Module README](../../../../../modules/shared/errors/bounded-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:155173-155175](../../../../../../reference/runtime/host-main.cjs#L155173-L155175) | `FunctionDeclaration` | no | `value` |
| [evaluation:475837-475839](../../../../../../reference/runtime/sand-eval-runner.cjs#L475837-L475839) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:155173-155175](../../../../../../reference/runtime/host-main.cjs#L155173-L155175) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475837-475839](../../../../../../reference/runtime/sand-eval-runner.cjs#L475837-L475839) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:155173

Calls written directly in this body: `brandedMatch`.

SHA-256 of the source span: `99f22c31efdc1cb64cd157d10d3ba14f2bb2639451357965f67a1f1b1f4b3b44`.

### evaluation:475837

Calls written directly in this body: `brandedMatch`.

SHA-256 of the source span: `99f22c31efdc1cb64cd157d10d3ba14f2bb2639451357965f67a1f1b1f4b3b44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
