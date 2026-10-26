# `browserLoginLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725541-725543](../../../../../../../reference/runtime/host-main.cjs#L725541-L725543) | `FunctionDeclaration` | no | `request5` |
| [evaluation:524644-524646](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524644-L524646) | `FunctionDeclaration` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725541-725543](../../../../../../../reference/runtime/host-main.cjs#L725541-L725543) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524644-524646](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524644-L524646) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:725541

Calls written directly in this body: `credentialProviderOf`.

SHA-256 of the source span: `e663381dbf03e5fbc25268547067c4e451df1224bc30a77e89e9d589a6628e47`.

### evaluation:524644

Calls written directly in this body: `credentialProviderOf`.

SHA-256 of the source span: `8bfaf3b2c341917e1230d56daaa63b4ed709f2fff200b8f363ab0fa479957e37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
