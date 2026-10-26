# `createListenerIntegrationReads/getIntegrations`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/listener-integrations.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505455-505495](../../../../../../../reference/runtime/host-main.cjs#L505455-L505495) | `FunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505455-505495](../../../../../../../reference/runtime/host-main.cjs#L505455-L505495) | 1 | 0 | 3 | 1 | 0 | 0 |

### host:505455

Chamadas escritas diretamente neste corpo: `.catch`, `.map`, `LISTENER_INTEGRATIONS.map`, `Promise.all`, `SCM_CONNECT_CARD_INTEGRATIONS.map`, `cardPlatforms.filter`, `cardPlatforms.map`, `countListenerPlatforms`, `deps.isDesktopScmConnectEnabled`, `deps.transcript.listAllAutomationDefinitions`, `readScmConnections`.

SHA-256 do trecho: `55f8516abddf12c53e095dd55066f80f62b0e6a0be88ffe4020f642f15647860`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
