# `computerUseSessionMetadata`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/ports/computer-use-diagnostics.ts` · [README do módulo](../../../../../modules/core/ports/computer-use-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:514580-514609](../../../../../../reference/runtime/sand-eval-runner.cjs#L514580-L514609) | `FunctionDeclaration` | não | `report, harness, outcome, abortReason2, durationMs, servedModel, runCode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:514580-514609](../../../../../../reference/runtime/sand-eval-runner.cjs#L514580-L514609) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:514580

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `Math.round`, `String`, `codeModeLabel`, `computerUseDispatchMetadata`, `requestSource.trim`, `runCodeAttended`, `servedModel.trim`.

SHA-256 do trecho: `edd84eb32d46758bb8e3f5ec6ea1e9ee1d686d93239c49d89a229804a38ba522`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
