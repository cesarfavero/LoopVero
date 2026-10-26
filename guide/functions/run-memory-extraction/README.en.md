# `runMemoryExtraction`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: memory](../../components/memory/README.en.md) · [Index](../../README.en.md)

**Primary source:** [sand-eval-runner.cjs:590613-590674](../../../reference/runtime/sand-eval-runner.cjs#L590613-L590674). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`runMemoryExtraction(memoryStore, session, ctx, exchange, runner, isRenamedSpelling, options)` executes the auxiliary memory pass after a turn. It is distinct from the Dream type. Returns `{ok:true}` or `{ok:false,error}`.

## Algorithm

Obtains the audience for the person's private memory, records the pending exchange, and includes previous exchanges that have not yet been reviewed. Gathers profile, recent, and relevant archived memory. `extractMemories` uses `session.getExecutor()` to request facts; the result is parsed and deduplicated. On success, it clears pending items, applies removals of known facts/additions, and increments metrics by type and scope.

## When the caller executes

The path in `settleCompletedTurn` requires memory extraction to be enabled, a store to be present, a run that has not been superseded, a visible turn, a non-empty/memorable prompt, and the main runner. Subagents and hidden turns do not pass through this call. [Complete conditions](../../../reference/runtime/sand-eval-runner.cjs#L591126-L591150).

## Continuity

The audience key prevents pending exchanges from different people from being combined. When the call fails, it keeps pending items only if continuity indicates an interruption and the error is a cancellation. Another error clears pending items and returns a failure with diagnostics. This is an explicit continuity decision, not a universal retry.

## Dependencies and limits

`gatherExtractionMemories` examines an archive with a requested limit of 500 and adds up to 10 relevant facts. The default prompt requests durable profile facts. The parser supports broader categories, and `applyExtractedMemories` prevents removal of facts outside the known set. The store determines actual persistence and the semantics of `addMemory`/`removeMemoryByContent`.

## Evidence

Eval contains a complete control implementation and executor call. This page does not claim that the same pass is enabled for every production turn/account, or that inference produces correct memory in every case.
