# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680916-681119](../../../../../../../reference/runtime/host-main.cjs#L680916-L681119) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680916-681119](../../../../../../../reference/runtime/host-main.cjs#L680916-L681119) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:680916

Chamadas escritas diretamente neste corpo: `.replace`, `.start`, `.withName`, `applySharedDesktop`, `context2.host.log`, `context2.onStop`, `createContext`, `createDeadlinePolicy`, `createDeletedAgentLookup`, `createExpiryPolicy`, `createIdleDesktopPark`, `createPhoneUiGatesService`, `createPollingPolicy2`, `createRetryPolicy`, `createSandBox`, `createSandCursorBackendClient`, `formatSandBoxStartupSummary`, `getSandRootDir`, `idleDesktopPark.start`, `imageWatchIntervalMs`, `imageWatchJitterRatio`, `initialImageWatchDelayMs`, `isImageAutoUpdateEnabled`, `jitteredImageWatchIntervalMs`, `new ForeverBoxService`, `new HostBox`, `service.start`, `startDiskPressureWatch`, `startPromptArtifactProvisioning`.

SHA-256 do trecho: `76dd080e6bb93b01903b14d16fcc7de5c5bc1acdc4cbf7e0a0031360b8b65689`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
