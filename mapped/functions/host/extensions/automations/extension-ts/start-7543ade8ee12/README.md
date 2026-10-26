# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505919-506023](../../../../../../../reference/runtime/host-main.cjs#L505919-L506023) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505919-506023](../../../../../../../reference/runtime/host-main.cjs#L505919-L506023) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505919

Chamadas escritas diretamente neste corpo: `context2.onStop`, `createListenerIntegrationReads`, `createPollingPolicy2`, `createSandCursorBackendClient`, `new Map`, `new SandAutomationCloudSync`, `new SandWebhookCredentialService`, `reconcileWhenAuthenticated`, `startCloudSyncPoll`.

SHA-256 do trecho: `9dc50c644891cf492d5928583a799bb770d2ca37dd7858c315f242ea889ea2e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
