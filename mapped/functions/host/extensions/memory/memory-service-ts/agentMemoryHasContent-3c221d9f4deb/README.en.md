# `agentMemoryHasContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `host/extensions/memory/memory-service.ts` · [Module README](../../../../../../modules/host/extensions/memory/memory-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702846-702870](../../../../../../../reference/runtime/host-main.cjs#L702846-L702870) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702846-702870](../../../../../../../reference/runtime/host-main.cjs#L702846-L702870) | 2 | 2 | 0 | 2 | 0 | 2 |

### host:702846

Calls written directly in this body: `.filter`, `.map`, `FACT_LINE.exec`, `getAgentMemoryDir`, `normalizeMemoryContent`, `raw.split`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `logFiles`, `raw`.

SHA-256 of the source span: `c42584e961df45f790581f456074037528b032e5579f5d6b70b632a2b5220573`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
