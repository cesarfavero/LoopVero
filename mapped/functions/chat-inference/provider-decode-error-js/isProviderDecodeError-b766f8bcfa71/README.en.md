# `isProviderDecodeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/provider-decode-error.js` · [Module README](../../../../modules/chat-inference/provider-decode-error-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:618035-618047](../../../../../reference/runtime/host-main.cjs#L618035-L618047) | `FunctionDeclaration` | no | `error64` |
| [evaluation:287406-287418](../../../../../reference/runtime/sand-eval-runner.cjs#L287406-L287418) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:618035-618047](../../../../../reference/runtime/host-main.cjs#L618035-L618047) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:287406-287418](../../../../../reference/runtime/sand-eval-runner.cjs#L287406-L287418) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:618035

Calls written directly in this body: `carrier.metadata.get`, `new Set`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `36082f6ce54346297ac53d79cf894339738a02fbcc362aa59f020f98edc89334`.

### evaluation:287406

Calls written directly in this body: `carrier.metadata.get`, `new Set`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `e8bf97cc09b81cc8c9e101be7dba6e6b7f5825723fe63ce6011f974cb0a42902`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
