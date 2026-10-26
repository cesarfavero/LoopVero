# `createTurnRunShell/interrupt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591341-591359](../../../../../../reference/runtime/sand-eval-runner.cjs#L591341-L591359) | `FunctionDeclaration` | não | `reason, supersede` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591341-591359](../../../../../../reference/runtime/sand-eval-runner.cjs#L591341-L591359) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591341

Chamadas escritas diretamente neste corpo: `cancelActiveRun`, `clearActiveRunStopRequest`, `host.setActiveRunInterrupted`, `markActiveRunInterrupted`, `markActiveRunSupersededByUser`, `new SandRunAbortError`.

Alvos de atribuição ou incremento: `unfinishedTasksReminderPending`.

SHA-256 do trecho: `d6c0a3f09c2895d39672e3aebdc821cb802fc0ed1bdf1ee38386e2af503a444a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
