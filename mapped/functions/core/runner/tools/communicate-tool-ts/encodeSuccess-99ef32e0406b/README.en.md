# `encodeSuccess`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724994-724998](../../../../../../../reference/runtime/host-main.cjs#L724994-L724998) | `FunctionDeclaration` | no | `activity, result` |
| [evaluation:479965-479969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479965-L479969) | `FunctionDeclaration` | no | `activity, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724994-724998](../../../../../../../reference/runtime/host-main.cjs#L724994-L724998) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479965-479969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479965-L479969) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724994

Calls written directly in this body: `encodeSandStep`, `new CommunicateUpdateArgs`.

SHA-256 of the source span: `69ebc6a2c17514a0a33a61d1857d3dc54cd0eaa45df85e777b7e11069407a78d`.

### evaluation:479965

Calls written directly in this body: `encodeSandStep`, `new CommunicateUpdateArgs`.

SHA-256 of the source span: `69ebc6a2c17514a0a33a61d1857d3dc54cd0eaa45df85e777b7e11069407a78d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
