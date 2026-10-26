# `createListenerIntegrationReads/getConnectUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/listener-integrations.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505496-505519](../../../../../../../reference/runtime/host-main.cjs#L505496-L505519) | `FunctionExpression` | sim | `platform2, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505496-505519](../../../../../../../reference/runtime/host-main.cjs#L505496-L505519) | 4 | 0 | 3 | 5 | 0 | 1 |

### host:505496

Chamadas escritas diretamente neste corpo: `.getSlackInstallUrl`, `dashboard`, `dashboardIntegrationsUrl`, `mintScmConnectFlow`, `new GetSlackInstallUrlRequest`.

SHA-256 do trecho: `ea1f2d5fb878984c411b7e204390fb59ea3f7c92f568ed2110a20910fd11e93f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
