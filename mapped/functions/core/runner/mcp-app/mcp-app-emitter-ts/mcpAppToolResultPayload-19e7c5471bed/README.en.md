# `mcpAppToolResultPayload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-emitter.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701406-701427](../../../../../../../reference/runtime/host-main.cjs#L701406-L701427) | `FunctionDeclaration` | no | `success2` |
| [evaluation:585378-585399](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585378-L585399) | `FunctionDeclaration` | no | `success2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701406-701427](../../../../../../../reference/runtime/host-main.cjs#L701406-L701427) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:585378-585399](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585378-L585399) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:701406

Calls written directly in this body: `success2.content.flatMap`, `success2.structuredContent.toJson`.

SHA-256 of the source span: `cd5493cb884cedcfc1a90ed8fb8111b37026f65cdf18713d81ac1f32de18db48`.

### evaluation:585378

Calls written directly in this body: `success2.content.flatMap`, `success2.structuredContent.toJson`.

SHA-256 of the source span: `cd5493cb884cedcfc1a90ed8fb8111b37026f65cdf18713d81ac1f32de18db48`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
