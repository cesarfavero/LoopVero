# `createPromptCollectorGlue/getAutomationStatusReminderForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-collector-glue.ts` · [README do módulo](../../../../../modules/core/runner/prompt-collector-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533706-533726](../../../../../../reference/runtime/sand-eval-runner.cjs#L533706-L533726) | `FunctionDeclaration` | não | `compactionEpoch, firingAutomationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533706-533726](../../../../../../reference/runtime/sand-eval-runner.cjs#L533706-L533726) | 8 | 0 | 0 | 4 | 0 | 0 |

### evaluation:533706

Chamadas escritas diretamente neste corpo: `.slice`, `Object.keys`, `host.requestContext.resolve`, `lastSeenAutomationStatusReminder`, `renderAutomationClearedStatusReminder`, `renderAutomationRuntimeStatusReminder`, `store.getLocation`, `store.list`, `store.listDefinitions`.

SHA-256 do trecho: `7edfac23c30ac444dab042f781cb12fe02884c8f932eb0d597474fbc856bb92e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
