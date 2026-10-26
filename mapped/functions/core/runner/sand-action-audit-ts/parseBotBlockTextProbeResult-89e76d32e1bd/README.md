# `parseBotBlockTextProbeResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512519-512546](../../../../../../reference/runtime/sand-eval-runner.cjs#L512519-L512546) | `FunctionDeclaration` | não | `stdout, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512519-512546](../../../../../../reference/runtime/sand-eval-runner.cjs#L512519-L512546) | 5 | 1 | 0 | 4 | 0 | 0 |

### evaluation:512519

Chamadas escritas diretamente neste corpo: `.findLast`, `Array.isArray`, `isUnknownRecord2`, `markerLine.indexOf`, `markerLine.slice`, `new Map`, `parseJsonOrUndefined2`, `request3.targets.find`, `requestedTextProbeVerdict`, `stdout.split`, `verdicts.has`, `verdicts.set`.

SHA-256 do trecho: `8a4a809a28ea985d57fcff15f7ee2c7e0307dc39d89d2df85f5d6a9f3a8b6647`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
