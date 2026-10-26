# `unresolvedTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-fallback.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-fallback-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585229-585234](../../../../../../reference/runtime/sand-eval-runner.cjs#L585229-L585234) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585229-585234](../../../../../../reference/runtime/sand-eval-runner.cjs#L585229-L585234) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585229

Chamadas escritas diretamente neste corpo: `.join`, `isUnresolvedTargetReason`, `playwrightToolErrorReason`, `result.result.value.content.flatMap`.

SHA-256 do trecho: `2a8fd4a86be717016ecaced3caac32a1f6fba3c604a7ed1e330ce19520720d9f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
