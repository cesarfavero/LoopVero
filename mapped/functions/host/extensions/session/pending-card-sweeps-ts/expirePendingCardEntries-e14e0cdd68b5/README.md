# `expirePendingCardEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/pending-card-sweeps.ts` · [README do módulo](../../../../../../modules/host/extensions/session/pending-card-sweeps-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719469-719490](../../../../../../../reference/runtime/host-main.cjs#L719469-L719490) | `FunctionDeclaration` | não | `kind, db, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719469-719490](../../../../../../../reference/runtime/host-main.cjs#L719469-L719490) | 5 | 1 | 0 | 1 | 0 | 0 |

### host:719469

Chamadas escritas diretamente neste corpo: `db.getTranscriptEntries`, `db.updateTranscriptEntry`, `expiredRequestIds.push`, `kind.pendingOf`, `kind.requestIdOf`, `settlePendingCardEntry`, `unlessRequestId`.

SHA-256 do trecho: `32cf09b4b3b31453c7b0d08176b0769a617da790ebfb617df8d5dc2143f07ca5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
