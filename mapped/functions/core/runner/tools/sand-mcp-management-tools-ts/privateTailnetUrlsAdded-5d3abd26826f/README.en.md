# `privateTailnetUrlsAdded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780087-780093](../../../../../../../reference/runtime/host-main.cjs#L780087-L780093) | `FunctionDeclaration` | no | `before, after` |
| [evaluation:580332-580338](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580332-L580338) | `FunctionDeclaration` | no | `before, after` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780087-780093](../../../../../../../reference/runtime/host-main.cjs#L780087-L780093) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580332-580338](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580332-L580338) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:780087

Calls written directly in this body: `.sort`, `after.servers.flatMap`, `before.servers.map`, `new Set`.

SHA-256 of the source span: `a889e09865834c31c343fa26cfaaefb2df5351270a8dfae7550a465e5d93f000`.

### evaluation:580332

Calls written directly in this body: `.sort`, `after.servers.flatMap`, `before.servers.map`, `new Set`.

SHA-256 of the source span: `a889e09865834c31c343fa26cfaaefb2df5351270a8dfae7550a465e5d93f000`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
