# `explainMissingSourcePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/upload-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774591-774600](../../../../../../../reference/runtime/host-main.cjs#L774591-L774600) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:574194-574203](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574194-L574203) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774591-774600](../../../../../../../reference/runtime/host-main.cjs#L774591-L774600) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574194-574203](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574194-L574203) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774591

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `isUnknownRecord2`.

SHA-256 do trecho: `44ccc8d0b71dd60b94130eea3cc9723da5372d6fe64428d2e5d2bfca6db972e6`.

### evaluation:574194

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `isUnknownRecord2`.

SHA-256 do trecho: `141215916d77e1578e792641a33a94480caec1305a06f9e39f8bf20eb601fcb1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
