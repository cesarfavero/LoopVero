# `readAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771911-771929](../../../../../../../../reference/runtime/host-main.cjs#L771911-L771929) | `FunctionDeclaration` | não | `deps, id` |
| [evaluation:571144-571162](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571144-L571162) | `FunctionDeclaration` | não | `deps, id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771911-771929](../../../../../../../../reference/runtime/host-main.cjs#L771911-L771929) | 5 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:571144-571162](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571144-L571162) | 5 | 0 | 0 | 2 | 2 | 0 |

### host:771911

Chamadas escritas diretamente neste corpo: `.find`, `.join`, `JSON.stringify`, `cronTimingLines`, `deps.activeAutomationWakeId`, `deps.automationStore.list`, `deps.canCreateAutomation`, `describeTriggerWithWindow`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `763425944041540b62756c8f2ddb089fa4bc51c6495188030227ee0d31949637`.

### evaluation:571144

Chamadas escritas diretamente neste corpo: `.find`, `.join`, `JSON.stringify`, `cronTimingLines`, `deps.activeAutomationWakeId`, `deps.automationStore.list`, `deps.canCreateAutomation`, `describeTriggerWithWindow`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `763425944041540b62756c8f2ddb089fa4bc51c6495188030227ee0d31949637`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
