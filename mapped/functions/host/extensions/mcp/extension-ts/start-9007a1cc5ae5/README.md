# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702433-702516](../../../../../../../reference/runtime/host-main.cjs#L702433-L702516) | `ArrowFunctionExpression` | sim | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702433-702516](../../../../../../../reference/runtime/host-main.cjs#L702433-L702516) | 0 | 0 | 1 | 1 | 0 | 1 |

### host:702433

Chamadas escritas diretamente neste corpo: `cleanupLegacyMcpAuthCredentials`, `context2.deps.telemetry.logs.reportMcpAuthCleanup`, `context2.onStop`, `createMcpService`, `createPollingPolicy2`, `createSandSkillPublishClient`, `createSharedInstalledPluginsLoader`, `getSandRootDir`, `new SandPluginSkillsService`, `new SandSkillPublishService`, `pinMcpDiagnosticsReporter`, `startPluginSkillsWhenAuthenticated`.

SHA-256 do trecho: `5b8c39201aee19b1931e6873cd15e54f12fbe33f3d8db9a6cc51c1ca28333209`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
