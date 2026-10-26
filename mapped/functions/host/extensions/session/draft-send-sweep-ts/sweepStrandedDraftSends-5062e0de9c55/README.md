# `sweepStrandedDraftSends`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/draft-send-sweep.ts` · [README do módulo](../../../../../../modules/host/extensions/session/draft-send-sweep-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719455-719466](../../../../../../../reference/runtime/host-main.cjs#L719455-L719466) | `FunctionDeclaration` | não | `db, isInFlight` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719455-719466](../../../../../../../reference/runtime/host-main.cjs#L719455-L719466) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:719455

Chamadas escritas diretamente neste corpo: `db.getTranscriptEntries`, `db.updateTranscriptEntry`, `isInFlight`, `settleSendingDraftEntry`, `settledEntries.push`.

SHA-256 do trecho: `663aa4b00242e067af798eb47a1959cfae1c295b83cb0ead7a9b4c38f8ea90c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
