# `listedDomains`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767194-767203](../../../../../../../../reference/runtime/host-main.cjs#L767194-L767203) | `FunctionDeclaration` | no | `metadata2, site` |
| [evaluation:562713-562722](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562713-L562722) | `FunctionDeclaration` | no | `metadata2, site` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767194-767203](../../../../../../../../reference/runtime/host-main.cjs#L767194-L767203) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:562713-562722](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562713-L562722) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:767194

Calls written directly in this body: `domains.add`, `new Set`, `parseSecureValueHttpsSite`, `secureValueDomainMatchesSite`.

SHA-256 of the source span: `d6f843f137ddc675d2232c7b265fead13d9ec1ab88c2a9f2fa5f1c01f2d8876e`.

### evaluation:562713

Calls written directly in this body: `domains.add`, `new Set`, `parseSecureValueHttpsSite`, `secureValueDomainMatchesSite`.

SHA-256 of the source span: `370bff667d38d734d60feda151ba911d52b998dee1b0e22b03f2fdc30c4d9327`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
