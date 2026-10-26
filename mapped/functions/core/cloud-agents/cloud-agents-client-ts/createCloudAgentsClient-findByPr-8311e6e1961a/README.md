# `createCloudAgentsClient/findByPr`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513097-513113](../../../../../../reference/runtime/host-main.cjs#L513097-L513113) | `FunctionDeclaration` | sim | `prUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513097-513113](../../../../../../reference/runtime/host-main.cjs#L513097-L513113) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513097

Chamadas escritas diretamente neste corpo: `listPrComposersInCallerScope`, `new Set`, `prUrl.trim`, `response.coordinatorComposers.map`, `response.involvedComposers.map`, `response.otherComposers.map`.

SHA-256 do trecho: `962bbaa6dc65fd8edca5ca325c2321b3ac3cde6708111e1298e3fc7e24819f06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
