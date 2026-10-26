# `expirePendingAutoReviewApprovalEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/pending-card-sweeps.ts` · [README do módulo](../../../../../../modules/host/extensions/session/pending-card-sweeps-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719491-719493](../../../../../../../reference/runtime/host-main.cjs#L719491-L719493) | `FunctionDeclaration` | não | `db, onlyRequestId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719491-719493](../../../../../../../reference/runtime/host-main.cjs#L719491-L719493) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719491

Chamadas escritas diretamente neste corpo: `expirePendingCardEntries`.

SHA-256 do trecho: `42528c89380973f3e044074885b679f1e8a2332f17938a9e19ae7764dd8a91be`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
