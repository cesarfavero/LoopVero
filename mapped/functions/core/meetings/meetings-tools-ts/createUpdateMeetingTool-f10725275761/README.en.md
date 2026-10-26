# `createUpdateMeetingTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773571-773580](../../../../../../reference/runtime/host-main.cjs#L773571-L773580) | `FunctionDeclaration` | no | `deps` |
| [evaluation:572797-572806](../../../../../../reference/runtime/sand-eval-runner.cjs#L572797-L572806) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773571-773580](../../../../../../reference/runtime/host-main.cjs#L773571-L773580) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572797-572806](../../../../../../reference/runtime/sand-eval-runner.cjs#L572797-L572806) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773571

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `6ce85d84363ba8c3f43fd61697e3e20fb1982f16aacee5d1e64c8fcf37454275`.

### evaluation:572797

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `6ce85d84363ba8c3f43fd61697e3e20fb1982f16aacee5d1e64c8fcf37454275`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
