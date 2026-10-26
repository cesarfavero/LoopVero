# `createRecallMemoryTool`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: memory](../../components/memory/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:769686-769840](../../../reference/runtime/host-main.cjs#L769686-L769840). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`createRecallMemoryTool(deps, offersMemoryUpdate=true, library=false)` creates the `RecallMemory` read tool. The update flag changes textual guidance; it does not perform a write. The library flag enables opening a file by path in addition to querying.

## Decisions

Without library mode, it requires a non-empty query and forwards it to `recallMemory`. With library mode, a non-empty path takes precedence over the query; without either, it returns usage instructions. `openMemoryFile` normalizes the extension and slash, tries the exact path, then a suffix; multiple matching paths prevent automatic selection.

## Search

Execution gathers candidates from the available stores through the `/memories` mount and uses lexical overlap search, with a literal fallback when there is no ranking. The default limit is 20, with a maximum of 50. Presentation has a 4,000-character budget, allowing at least one item even if it exceeds the budget. Date, type, and visible origin accompany results.

## Errors and ambiguity

No match returns a message with the number of facts examined. A missing or ambiguous file returns guidance to use a query/full path. The recall metric counts scope and whether there was a result; it does not publish the facts' text in the metric.

## Boundary

Available data depends on the supplied stores and their ports' ACLs. The tool does not search the entire remote history and does not use embeddings in this recovered path. The decay helper `memoryRecallRank` is separate from this search's lexical ranking.
