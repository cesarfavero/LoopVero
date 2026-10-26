# `urlWithoutFragment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727306-727311](../../../../../../../reference/runtime/host-main.cjs#L727306-L727311) | `FunctionDeclaration` | no | `url2` |
| [evaluation:561812-561817](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561812-L561817) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727306-727311](../../../../../../../reference/runtime/host-main.cjs#L727306-L727311) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:561812-561817](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561812-L561817) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:727306

Calls written directly in this body: `URL.canParse`, `new URL`.

Assignment or increment targets: `parsed2.hash`.

SHA-256 of the source span: `2b4312ef0e9894ff125b8dad489f906f72c5092f0cb74389e705b830b64ebc05`.

### evaluation:561812

Calls written directly in this body: `URL.canParse`, `new URL`.

Assignment or increment targets: `parsed.hash`.

SHA-256 of the source span: `1a407217036d5dd0c64f28dbcb8f5f35e2a63b7399af26ec4b623300b094eefc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
