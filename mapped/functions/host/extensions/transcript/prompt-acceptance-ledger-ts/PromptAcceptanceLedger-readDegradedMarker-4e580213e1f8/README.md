# `PromptAcceptanceLedger.readDegradedMarker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733360-733377](../../../../../../../reference/runtime/host-main.cjs#L733360-L733377) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733360-733377](../../../../../../../reference/runtime/host-main.cjs#L733360-L733377) | 3 | 0 | 0 | 5 | 0 | 2 |

### host:733360

Chamadas escritas diretamente neste corpo: `JSON.parse`, `isFiniteNumber4`, `readSandDataFileIfPresentSync`, `reportFallbackUnlessAbsent`, `this.markerPath`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `c6c776ccd074babf60a5842cb3c6046ececf0dddca572dc97be6fb0f7c8f44a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
