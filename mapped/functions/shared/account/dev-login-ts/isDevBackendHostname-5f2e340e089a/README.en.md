# `isDevBackendHostname`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/account/dev-login.ts` · [Module README](../../../../../modules/shared/account/dev-login-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:175703-175705](../../../../../../reference/runtime/host-main.cjs#L175703-L175705) | `FunctionDeclaration` | no | `hostname4` |
| [evaluation:511679-511681](../../../../../../reference/runtime/sand-eval-runner.cjs#L511679-L511681) | `FunctionDeclaration` | no | `hostname3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175703-175705](../../../../../../reference/runtime/host-main.cjs#L175703-L175705) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511679-511681](../../../../../../reference/runtime/sand-eval-runner.cjs#L511679-L511681) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175703

Calls written directly in this body: `hostname4.endsWith`, `isLoopbackHostname`.

SHA-256 of the source span: `a5566d7f53a284bd73a772ab69123ab18e0e7449b17798556ceacf04ac5f7a20`.

### evaluation:511679

Calls written directly in this body: `hostname3.endsWith`, `isLoopbackHostname2`.

SHA-256 of the source span: `7a3418e6219664f1f9daaa414c919f5bae7555a82dc8bde5a13b795a381c54bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
