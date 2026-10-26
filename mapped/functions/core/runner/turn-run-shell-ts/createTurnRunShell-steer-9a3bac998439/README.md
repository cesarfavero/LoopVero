# `createTurnRunShell/steer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591337-591340](../../../../../../reference/runtime/sand-eval-runner.cjs#L591337-L591340) | `FunctionDeclaration` | não | `prompt, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591337-591340](../../../../../../reference/runtime/sand-eval-runner.cjs#L591337-L591340) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:591337

Chamadas escritas diretamente neste corpo: `steerInbox.enqueue`.

SHA-256 do trecho: `cc8b98983def0d0b08242173fdf668a4510675a50b82be15a6c1ee828c79b6df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
