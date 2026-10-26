# `playwrightToolSettles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-settle.ts` · [Module README](../../../../../modules/core/mcp/playwright-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742631-742633](../../../../../../reference/runtime/host-main.cjs#L742631-L742633) | `FunctionDeclaration` | no | `toolName, args` |
| [evaluation:515294-515296](../../../../../../reference/runtime/sand-eval-runner.cjs#L515294-L515296) | `FunctionDeclaration` | no | `toolName, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742631-742633](../../../../../../reference/runtime/host-main.cjs#L742631-L742633) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515294-515296](../../../../../../reference/runtime/sand-eval-runner.cjs#L515294-L515296) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742631

Calls written directly in this body: `SETTLING_TOOLS[computed]`.

SHA-256 of the source span: `09a11db64147de04cc78c438d297c66fc14fc3397e0cf0de8c60253e1750379d`.

### evaluation:515294

Calls written directly in this body: `SETTLING_TOOLS[computed]`.

SHA-256 of the source span: `09a11db64147de04cc78c438d297c66fc14fc3397e0cf0de8c60253e1750379d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
