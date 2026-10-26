# `createListenerIntegrationReads/mintScmConnectFlow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/listener-integrations.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505402-505423](../../../../../../../reference/runtime/host-main.cjs#L505402-L505423) | `ArrowFunctionExpression` | sim | `fields3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505402-505423](../../../../../../../reference/runtime/host-main.cjs#L505402-L505423) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:505402

Chamadas escritas diretamente neste corpo: `.catch`, `.digest`, `.next`, `.prepareGithubConnectFlow`, `.toString`, `.update`, `dashboard`, `invariant`, `new PrepareGithubConnectFlowRequest`, `verifierByMintedState.delete`, `verifierByMintedState.keys`, `verifierByMintedState.set`.

SHA-256 do trecho: `62b7d066c7da3e23e9ce12be862f6bca30f08ca366a525e2eaccac1b2651adc5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
