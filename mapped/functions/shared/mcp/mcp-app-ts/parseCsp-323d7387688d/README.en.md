# `parseCsp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486817-486830](../../../../../../reference/runtime/host-main.cjs#L486817-L486830) | `FunctionDeclaration` | no | `value` |
| [evaluation:495133-495146](../../../../../../reference/runtime/sand-eval-runner.cjs#L495133-L495146) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486817-486830](../../../../../../reference/runtime/host-main.cjs#L486817-L486830) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495133-495146](../../../../../../reference/runtime/sand-eval-runner.cjs#L495133-L495146) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:486817

Calls written directly in this body: `Object.keys`, `cspSourceList`, `isUnknownRecord2`.

SHA-256 of the source span: `a2d75c1e5d75c06c68cd4edc6a4565c163f1ec090007e3a01653ffbd974fb030`.

### evaluation:495133

Calls written directly in this body: `Object.keys`, `cspSourceList`, `isUnknownRecord2`.

SHA-256 of the source span: `a2d75c1e5d75c06c68cd4edc6a4565c163f1ec090007e3a01653ffbd974fb030`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
