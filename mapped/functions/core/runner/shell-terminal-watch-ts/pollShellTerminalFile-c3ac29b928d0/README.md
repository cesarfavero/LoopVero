# `pollShellTerminalFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/shell-terminal-watch.ts` · [README do módulo](../../../../../modules/core/runner/shell-terminal-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533304-533345](../../../../../../reference/runtime/sand-eval-runner.cjs#L533304-L533345) | `FunctionDeclaration` | sim | `host, id, isCancelled, settle2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533304-533345](../../../../../../reference/runtime/sand-eval-runner.cjs#L533304-L533345) | 3 | 0 | 1 | 1 | 0 | 0 |

### evaluation:533304

Chamadas escritas diretamente neste corpo: `Date.now`, `awaitShellTerminalOutcome`, `boxTerminalsFolder`, `pinFirstSourceWithFile`, `settle2`, `shellCompletionForOutcome`.

SHA-256 do trecho: `925749bff366672186b6821a242062355e87305e1303f6d3fa2709bed98f2faa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
