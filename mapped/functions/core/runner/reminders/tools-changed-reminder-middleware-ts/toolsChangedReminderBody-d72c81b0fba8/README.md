# `toolsChangedReminderBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/reminders/tools-changed-reminder-middleware.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/tools-changed-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586925-586942](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586925-L586942) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586925-586942](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586925-L586942) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586925

Chamadas escritas diretamente neste corpo: `args.offered.join`, `args.subagentTypes.types.join`, `lines2.join`, `lines2.push`.

SHA-256 do trecho: `ccece4e08a4225b1851ca986e4235fe07bebaf07cf0e41bba9c140d6e6d49946`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
