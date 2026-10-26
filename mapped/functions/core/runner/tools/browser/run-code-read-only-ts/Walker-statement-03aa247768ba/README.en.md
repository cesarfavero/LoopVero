# `Walker.statement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:749797-749892](../../../../../../../../reference/runtime/host-main.cjs#L749797-L749892) | `method` | no | `node2, scope` |
| [evaluation:522648-522743](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522648-L522743) | `method` | no | `node2, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749797-749892](../../../../../../../../reference/runtime/host-main.cjs#L749797-L749892) | 37 | 1 | 0 | 12 | 0 | 0 |
| [evaluation:522648-522743](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522648-L522743) | 37 | 1 | 0 | 12 | 0 | 0 |

### host:749797

Calls written directly in this body: `elementOf`, `fail2`, `isDataLike`, `isInlineFunction`, `new Scope3`, `scope.declare`, `this.block`, `this.dataOnly`, `this.declarePattern`, `this.expr`, `this.isNumeric`, `this.returns.push`, `this.statement`.

SHA-256 of the source span: `90821715e83db19a12c61635db165e1a448378dc2262a3137c2e5d697f942412`.

### evaluation:522648

Calls written directly in this body: `elementOf`, `fail`, `isDataLike`, `isInlineFunction`, `new Scope3`, `scope.declare`, `this.block`, `this.dataOnly`, `this.declarePattern`, `this.expr`, `this.isNumeric`, `this.returns.push`, `this.statement`.

SHA-256 of the source span: `5087043c80de39607c0a2e4dcd44beca6601588643d159c6c40b8c117b4c1705`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
