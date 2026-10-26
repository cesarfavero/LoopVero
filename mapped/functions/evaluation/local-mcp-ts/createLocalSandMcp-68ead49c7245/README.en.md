# `createLocalSandMcp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/integrations/README.en.md).

**Module:** `evaluation/local-mcp.ts` · [Module README](../../../../modules/evaluation/local-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628152-628186](../../../../../reference/runtime/sand-eval-runner.cjs#L628152-L628186) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628152-628186](../../../../../reference/runtime/sand-eval-runner.cjs#L628152-L628186) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628152

Calls written directly in this body: `.withName`, `createContext`, `loader2.load`, `new FileConfigMcpLoader`, `new InMemoryTokenStorage`, `new LocalMcpToolExecutor`, `new ManagerMcpLease`, `new MockPendingDecisionProvider`, `new MockPermissionsService`.

SHA-256 of the source span: `bae330ddad53f8d9b7476daf007c10e8a8ac29d8aa938b4c88aab98ba35920f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
