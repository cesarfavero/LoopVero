# `parsePermissions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486834-486843](../../../../../../reference/runtime/host-main.cjs#L486834-L486843) | `FunctionDeclaration` | no | `value` |
| [evaluation:495150-495159](../../../../../../reference/runtime/sand-eval-runner.cjs#L495150-L495159) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486834-486843](../../../../../../reference/runtime/host-main.cjs#L486834-L486843) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495150-495159](../../../../../../reference/runtime/sand-eval-runner.cjs#L495150-L495159) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:486834

Calls written directly in this body: `Object.keys`, `isPermissionRequested`, `isUnknownRecord2`.

SHA-256 of the source span: `7c178497409f120b53781ee043fbab561898f143c617f77da354ea7a384404ab`.

### evaluation:495150

Calls written directly in this body: `Object.keys`, `isPermissionRequested`, `isUnknownRecord2`.

SHA-256 of the source span: `7c178497409f120b53781ee043fbab561898f143c617f77da354ea7a384404ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
