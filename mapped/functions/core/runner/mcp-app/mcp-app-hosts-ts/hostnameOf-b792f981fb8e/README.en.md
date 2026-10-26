# `hostnameOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-hosts.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-hosts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585496-585500](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585496-L585500) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585496-585500](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585496-L585500) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585496

Calls written directly in this body: `.toLowerCase`, `URL.canParse`, `entry.trim`, `new URL`, `trimmed.includes`.

SHA-256 of the source span: `68f05ebb0ffe4c8f4cdde25ca27707a6343bffad7173c696ac02ba3aa0391422`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
