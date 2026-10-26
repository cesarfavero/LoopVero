# `createCloudAgentsClient/listPullRequests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513046-513062](../../../../../../reference/runtime/host-main.cjs#L513046-L513062) | `FunctionDeclaration` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513046-513062](../../../../../../reference/runtime/host-main.cjs#L513046-L513062) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513046

Chamadas escritas diretamente neste corpo: `.listBackgroundComposers`, `client`, `new ListBackgroundComposersRequest`, `response.composers.map`.

SHA-256 do trecho: `1a75bdad1d159e902b5d9bd16058da5ab3ec1cae604839cec699c55d6e62a45c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
