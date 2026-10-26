# `computeDeterministicFallbackMaxChars`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/deterministic-summary-builder.js` · [Module README](../../../../modules/agent-summarization/deterministic-summary-builder-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621831-621837](../../../../../reference/runtime/host-main.cjs#L621831-L621837) | `FunctionDeclaration` | no | `contextWindowTokens, windowRatio` |
| [evaluation:306185-306191](../../../../../reference/runtime/sand-eval-runner.cjs#L306185-L306191) | `FunctionDeclaration` | no | `contextWindowTokens, windowRatio` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621831-621837](../../../../../reference/runtime/host-main.cjs#L621831-L621837) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:306185-306191](../../../../../reference/runtime/sand-eval-runner.cjs#L306185-L306191) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:621831

Calls written directly in this body: `Math.floor`, `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `23c8832953299e9fbc1f5a82a23ef5215074f14e330c2bc0edaad3d19e06169c`.

### evaluation:306185

Calls written directly in this body: `Math.floor`, `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `23c8832953299e9fbc1f5a82a23ef5215074f14e330c2bc0edaad3d19e06169c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
