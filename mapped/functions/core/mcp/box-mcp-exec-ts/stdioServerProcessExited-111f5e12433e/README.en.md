# `stdioServerProcessExited`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684843-684845](../../../../../../reference/runtime/host-main.cjs#L684843-L684845) | `FunctionDeclaration` | no | `error64` |
| [evaluation:514631-514633](../../../../../../reference/runtime/sand-eval-runner.cjs#L514631-L514633) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684843-684845](../../../../../../reference/runtime/host-main.cjs#L684843-L684845) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514631-514633](../../../../../../reference/runtime/sand-eval-runner.cjs#L514631-L514633) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:684843

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `5b7c6d9d5e33efc75a8cef2de33d54b74bc308e05ac8b2baab0155b6e40cde54`.

### evaluation:514631

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `84eb39508c3a80287ef0389f4da002e0c59569e0d08d9a91c9b20d530c4dc7d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
