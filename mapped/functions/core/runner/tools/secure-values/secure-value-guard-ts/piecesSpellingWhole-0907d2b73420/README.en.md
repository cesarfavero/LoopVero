# `piecesSpellingWhole`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767638-767646](../../../../../../../../reference/runtime/host-main.cjs#L767638-L767646) | `FunctionDeclaration` | no | `pieces, start, value` |
| [evaluation:563155-563163](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563155-L563163) | `FunctionDeclaration` | no | `pieces, start, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767638-767646](../../../../../../../../reference/runtime/host-main.cjs#L767638-L767646) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:563155-563163](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563155-L563163) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:767638

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `count2`, `spelled`.

SHA-256 of the source span: `30a94f79315f0e63c66f0441d091690ec372123855ff822a457cc6c9307f4f0a`.

### evaluation:563155

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `count2`, `spelled`.

SHA-256 of the source span: `30a94f79315f0e63c66f0441d091690ec372123855ff822a457cc6c9307f4f0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
