# `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726989-727004](../../../../../../../reference/runtime/host-main.cjs#L726989-L727004) | `FunctionDeclaration` | no | `text3` |
| [evaluation:561600-561615](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561600-L561615) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726989-727004](../../../../../../../reference/runtime/host-main.cjs#L726989-L727004) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:561600-561615](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561600-L561615) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:726989

Calls written directly in this body: `collapsed.push`, `wordsOf2`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `db495096c24eee326c09d4343352b659060adbb323c1e01af928a1b7b3692731`.

### evaluation:561600

Calls written directly in this body: `collapsed.push`, `wordsOf3`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `e5807abd64bd3cfa15d8a31b0a09d2d5bdc2cb07dccb9197ac602b5124fd7af9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
