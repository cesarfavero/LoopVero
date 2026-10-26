# `createTurnRunShell/interruptAll`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591369-591375](../../../../../../reference/runtime/sand-eval-runner.cjs#L591369-L591375) | `FunctionDeclaration` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591369-591375](../../../../../../reference/runtime/sand-eval-runner.cjs#L591369-L591375) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:591369

Chamadas escritas diretamente neste corpo: `host.subagents.abortSubagent`, `host.subagents.sessions.keys`, `interrupt`.

SHA-256 do trecho: `3f5d60596d8f3a4c6b6090c7d0adafeaa048bce559f0ea6f78be9e8d9d2a7022`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
