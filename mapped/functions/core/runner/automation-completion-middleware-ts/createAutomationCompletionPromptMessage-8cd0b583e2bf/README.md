# `createAutomationCompletionPromptMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/automation-completion-middleware.ts` · [README do módulo](../../../../../modules/core/runner/automation-completion-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586339-586350](../../../../../../reference/runtime/sand-eval-runner.cjs#L586339-L586350) | `FunctionDeclaration` | não | `completion, isRenamedSpelling` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586339-586350](../../../../../../reference/runtime/sand-eval-runner.cjs#L586339-L586350) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586339

Chamadas escritas diretamente neste corpo: `hiddenPromptMarker`, `isSandAutomationHandoffId`, `renderAutomationHandoffInboxPrompt`.

SHA-256 do trecho: `1caf18a12b7f27b2443303f727ef5d1611ce89b7d76810be52ce5d4a018c4f34`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
