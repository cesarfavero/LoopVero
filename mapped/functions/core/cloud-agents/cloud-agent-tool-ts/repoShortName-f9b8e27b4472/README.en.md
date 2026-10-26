# `repoShortName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568878-568888](../../../../../../reference/runtime/sand-eval-runner.cjs#L568878-L568888) | `FunctionDeclaration` | no | `repoUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568878-568888](../../../../../../reference/runtime/sand-eval-runner.cjs#L568878-L568888) | 3 | 0 | 0 | 4 | 0 | 1 |

### evaluation:568878

Calls written directly in this body: `.filter`, `.pathname.split`, `last.endsWith`, `last.slice`, `new URL`, `segments.at`.

SHA-256 of the source span: `ee99a66f9be8f35cc9900cfb26f194359a5305260a61afa2de370c866db9458f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
