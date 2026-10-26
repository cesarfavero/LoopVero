# `runTurnToolBuilders`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/turn-tool-builder.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-builder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:564594-564640](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564594-L564640) | `FunctionDeclaration` | não | `builders, ctx, withheld, presenceOnly` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:564594-564640](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564594-L564640) | 9 | 4 | 0 | 1 | 0 | 0 |

### evaluation:564594

Chamadas escritas diretamente neste corpo: `GROK_BOT_TOOL_ID_BY_MODEL_NAME.get`, `builder.build`, `builder.names.flatMap`, `builder.names.some`, `builtNames.add`, `decisions.offers`, `declared.has`, `missing.has`, `new Set`, `presenceOnly.ctx`, `tools.push`, `undeclaredTools.increment`, `withheld.push`.

Alvos de atribuição ou incremento: `presenceCtx`.

SHA-256 do trecho: `84ba743c45d4ae6356e1b6e0a536d0d1352cc7df91fd2bcb28368372fdf669ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
