# `createRemoteBoxResourceAccessor/onBoxRetryingOnceIfReplaced/sendUnrepeatable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/remote-box-resources.ts` · [Module README](../../../../../modules/core/runner/remote-box-resources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534511-534514](../../../../../../reference/runtime/sand-eval-runner.cjs#L534511-L534514) | `ArrowFunctionExpression` | yes | `call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534511-534514](../../../../../../reference/runtime/sand-eval-runner.cjs#L534511-L534514) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:534511

Calls written directly in this body: `call`.

Assignment or increment targets: `unrepeatableSent`.

SHA-256 of the source span: `d5120c278e4e8f81dd1db924b1ff9cb02e4d1e28648c2d3fa0f7973bab478aa6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
