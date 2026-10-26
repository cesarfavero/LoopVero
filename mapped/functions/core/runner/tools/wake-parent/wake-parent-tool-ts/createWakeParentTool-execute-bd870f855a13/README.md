# `createWakeParentTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/wake-parent/wake-parent-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/wake-parent/wake-parent-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768638-768644](../../../../../../../../reference/runtime/host-main.cjs#L768638-L768644) | `ArrowFunctionExpression` | sim | `_ctx, args, toolDeps` |
| [evaluation:564153-564159](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564153-L564159) | `ArrowFunctionExpression` | sim | `_ctx, args, toolDeps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768638-768644](../../../../../../../../reference/runtime/host-main.cjs#L768638-L768644) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564153-564159](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564153-L564159) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768638

Chamadas escritas diretamente neste corpo: `toolDeps.requestAutomationParentWake`.

SHA-256 do trecho: `393961951fbcec8d0a7c7d44dae7434f276f021c278e8e117e3c0828ea8e140c`.

### evaluation:564153

Chamadas escritas diretamente neste corpo: `toolDeps.requestAutomationParentWake`.

SHA-256 do trecho: `393961951fbcec8d0a7c7d44dae7434f276f021c278e8e117e3c0828ea8e140c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
