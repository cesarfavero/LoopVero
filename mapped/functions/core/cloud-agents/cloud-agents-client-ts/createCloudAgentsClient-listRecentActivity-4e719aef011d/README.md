# `createCloudAgentsClient/listRecentActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513114-513132](../../../../../../reference/runtime/host-main.cjs#L513114-L513132) | `FunctionDeclaration` | sim | `limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513114-513132](../../../../../../reference/runtime/host-main.cjs#L513114-L513132) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:513114

Chamadas escritas diretamente neste corpo: `.filter`, `.listDetailedBackgroundComposers`, `Math.max`, `Math.min`, `Math.trunc`, `Number.isFinite`, `client`, `new ListDetailedBackgroundComposersRequest`, `new Map`, `response.composers.flatMap`, `response.composers.map`.

SHA-256 do trecho: `5727a7971df5285e141a95b63616ca827daee45c2c08eaca60524ac53fac2a3b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
