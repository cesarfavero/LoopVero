# `renderSavedCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767270-767291](../../../../../../../../reference/runtime/host-main.cjs#L767270-L767291) | `FunctionDeclaration` | no | `cards` |
| [evaluation:562789-562810](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562789-L562810) | `FunctionDeclaration` | no | `cards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767270-767291](../../../../../../../../reference/runtime/host-main.cjs#L767270-L767291) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:562789-562810](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562789-L562810) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:767270

Calls written directly in this body: `.flatMap`, `.join`, `cards.slice`, `unlistedLine`.

SHA-256 of the source span: `2130191a2b5ab2dd083563723a9f92b301d920897257fce552abf1b14092d619`.

### evaluation:562789

Calls written directly in this body: `.flatMap`, `.join`, `cards.slice`, `unlistedLine`.

SHA-256 of the source span: `2130191a2b5ab2dd083563723a9f92b301d920897257fce552abf1b14092d619`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
