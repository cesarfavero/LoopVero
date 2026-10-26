# `describeRemovalRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780148-780159](../../../../../../../reference/runtime/host-main.cjs#L780148-L780159) | `FunctionDeclaration` | no | `refusal4, target` |
| [evaluation:580393-580404](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580393-L580404) | `FunctionDeclaration` | no | `refusal4, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780148-780159](../../../../../../../reference/runtime/host-main.cjs#L780148-L780159) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580393-580404](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580393-L580404) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:780148

Calls written directly in this body: `describeRepair`, `removalEffect`.

SHA-256 of the source span: `bc6a0fa73e32ce5a28bb746e9d5d3ab04121423ae59d8add25ba182196db3d71`.

### evaluation:580393

Calls written directly in this body: `describeRepair`, `removalEffect`.

SHA-256 of the source span: `bc6a0fa73e32ce5a28bb746e9d5d3ab04121423ae59d8add25ba182196db3d71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
