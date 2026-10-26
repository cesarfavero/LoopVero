# `recordToolCallError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725044-725057](../../../../../../../reference/runtime/host-main.cjs#L725044-L725057) | `FunctionDeclaration` | não | `ctx, toolName, visibility, error64` |
| [evaluation:480015-480028](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480015-L480028) | `FunctionDeclaration` | não | `ctx, toolName, visibility, error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725044-725057](../../../../../../../reference/runtime/host-main.cjs#L725044-L725057) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:480015-480028](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480015-L480028) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:725044

Chamadas escritas diretamente neste corpo: `errorClassLabel`, `errorLogTag`, `process.stderr.write`, `toolCallErrors.increment`.

SHA-256 do trecho: `5840093f6cef053a05d18684d72ad8624b0d76e3bc0c95799a7ae302e3ce5dd6`.

### evaluation:480015

Chamadas escritas diretamente neste corpo: `errorClassLabel`, `errorLogTag`, `process.stderr.write`, `toolCallErrors.increment`.

SHA-256 do trecho: `e3677ef25c78239bda118a0c7c40300a0c32e671e2dc55b113169c1420e31f73`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
