# `encodeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724989-724993](../../../../../../../reference/runtime/host-main.cjs#L724989-L724993) | `FunctionDeclaration` | no | `activity, message` |
| [evaluation:479960-479964](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479960-L479964) | `FunctionDeclaration` | no | `activity, message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724989-724993](../../../../../../../reference/runtime/host-main.cjs#L724989-L724993) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479960-479964](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479960-L479964) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724989

Calls written directly in this body: `encodeSandStep`, `new CommunicateUpdateArgs`.

SHA-256 of the source span: `b4a8efbd7fb0d161a3376d2133dc41c01dfea17088a7a55e1699182c5ea644cd`.

### evaluation:479960

Calls written directly in this body: `encodeSandStep`, `new CommunicateUpdateArgs`.

SHA-256 of the source span: `b4a8efbd7fb0d161a3376d2133dc41c01dfea17088a7a55e1699182c5ea644cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
