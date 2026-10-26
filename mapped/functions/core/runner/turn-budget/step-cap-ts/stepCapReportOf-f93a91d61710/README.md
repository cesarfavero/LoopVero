# `stepCapReportOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/budgets-recovery/README.md).

**Módulo:** `core/runner/turn-budget/step-cap.ts` · [README do módulo](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587321-587327](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587321-L587327) | `FunctionDeclaration` | não | `maxSteps, messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587321-587327](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587321-L587327) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587321

Chamadas escritas diretamente neste corpo: `latestHelperUpdate`, `messages.at`.

SHA-256 do trecho: `5e3208b47a5976be9cf3eccb4be1a5c9e0035a4e8dbe10853161dadcdd6c0386`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
