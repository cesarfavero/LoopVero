# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/session/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728399-728510](../../../../../../../reference/runtime/host-main.cjs#L728399-L728510) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728399-728510](../../../../../../../reference/runtime/host-main.cjs#L728399-L728510) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:728399

Chamadas escritas diretamente neste corpo: `.with`, `DeletedAgentRecord.open`, `context2.deps.telemetry.analytics.trackEvent.bind`, `context2.onStop`, `createContext`, `getSandRootDir`, `new AgentMediaRootObservability`, `new BoxHandoffService`, `new SandAgentSessionStore`, `new UserFormService`, `pinConversationEnvironment`, `pinConversationGcReporter`, `pinConversationSizeLimitsReader`, `pinSessionDiagnosticsReporter`, `store.removeDeletedAgentDirs`, `store.setDeletedAgentRecord`, `store.setMediaRootPreparationObserver`.

SHA-256 do trecho: `b47b02500f1ef42de4a1afac9d369a15b8908a0677b5db7b2776d110484c2da3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
