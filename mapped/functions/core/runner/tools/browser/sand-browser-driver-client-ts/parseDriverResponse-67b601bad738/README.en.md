# `parseDriverResponse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724243-724261](../../../../../../../../reference/runtime/host-main.cjs#L724243-L724261) | `FunctionDeclaration` | no | `stdout` |
| [evaluation:560137-560155](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560137-L560155) | `FunctionDeclaration` | no | `stdout` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724243-724261](../../../../../../../../reference/runtime/host-main.cjs#L724243-L724261) | 2 | 1 | 0 | 3 | 0 | 1 |
| [evaluation:560137-560155](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560137-L560155) | 2 | 1 | 0 | 3 | 0 | 1 |

### host:724243

Calls written directly in this body: `JSON.parse`, `line.indexOf`, `line.slice`, `stdout.split`, `toDriverResponse`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `bb436e25871695e6d8cf13c6e5deeabf8d26636c611b15875d384269aa7df2ea`.

### evaluation:560137

Calls written directly in this body: `JSON.parse`, `line.indexOf`, `line.slice`, `stdout.split`, `toDriverResponse`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `18cb7bc7357cb25dd7178ab1b373be39cf36956922885655cad31209126ac6cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
