# `createListenerIntegrationReads/completeGithubConnect`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/listener-integrations.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505533-505565](../../../../../../../reference/runtime/host-main.cjs#L505533-L505565) | `FunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505533-505565](../../../../../../../reference/runtime/host-main.cjs#L505533-L505565) | 5 | 0 | 1 | 6 | 0 | 1 |

### host:505533

Chamadas escritas diretamente neste corpo: `.completeGithubConnectFlow`, `dashboard`, `deps.log`, `errorLogTag`, `new CompleteGithubConnectFlowRequest`, `verifierByMintedState.delete`, `verifierByMintedState.get`.

Alvos de atribuição ou incremento: `response`.

SHA-256 do trecho: `3baeadd6ef032a7a281f587a44461d27c09912d7afd54726de59f09a37e0206d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
