# `PromptAcceptanceLedger.removeDegradedMarker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733419-733428](../../../../../../../reference/runtime/host-main.cjs#L733419-L733428) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733419-733428](../../../../../../../reference/runtime/host-main.cjs#L733419-L733428) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:733419

Chamadas escritas diretamente neste corpo: `removeSandDataFileSync`, `this.markerPath`.

Alvos de atribuição ou incremento: `this.markerMayExist`.

SHA-256 do trecho: `318f4a3ef42bcea04a304b9b87975b54be24605d83a9315d19bd1dbc1bd71f7b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
