# `listConnectedCredentials`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751981-752021](../../../../../../../reference/runtime/host-main.cjs#L751981-L752021) | `FunctionDeclaration` | yes | `access5, args` |
| [evaluation:525047-525087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525047-L525087) | `FunctionDeclaration` | yes | `access4, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751981-752021](../../../../../../../reference/runtime/host-main.cjs#L751981-L752021) | 16 | 0 | 2 | 6 | 0 | 0 |
| [evaluation:525047-525087](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525047-L525087) | 16 | 0 | 2 | 6 | 0 | 0 |

### host:751981

Calls written directly in this body: `.join`, `access5.connectedProviders`, `access5.list`, `oneTimeCodeGuidance`, `providers.includes`, `vaultCredentialRequestGuidance`, `views.map`, `views.some`.

SHA-256 of the source span: `fc68ecb7b072e993067edfce4d9dab1d852e78d876cf80e5cd5c55ca71ad4253`.

### evaluation:525047

Calls written directly in this body: `.join`, `access4.connectedProviders`, `access4.list`, `oneTimeCodeGuidance`, `providers.includes`, `vaultCredentialRequestGuidance`, `views.map`, `views.some`.

SHA-256 of the source span: `97ff0987a0833495f6938091c6d64eb4b5af741e9d3694b12dfea8c51f3fe5a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
