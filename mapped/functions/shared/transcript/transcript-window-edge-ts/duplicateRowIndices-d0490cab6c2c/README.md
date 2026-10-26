# `duplicateRowIndices`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/transcript-window-edge.ts` · [README do módulo](../../../../../modules/shared/transcript/transcript-window-edge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:712716-712727](../../../../../../reference/runtime/host-main.cjs#L712716-L712727) | `FunctionDeclaration` | não | `rows, from2, to3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712716-712727](../../../../../../reference/runtime/host-main.cjs#L712716-L712727) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:712716

Chamadas escritas diretamente neste corpo: `duplicates.add`, `getEntryRowKey`, `isTimelineHiddenEntry`, `new Set`, `seenKeys.add`, `seenKeys.has`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `95eb9566d77819a91565ece7fdc316f246a04cce2e2aca2ea6e418b2d18f55ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
