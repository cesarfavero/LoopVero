# `createSetStatusTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/status/sand-status-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/status/sand-status-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740898-740901](../../../../../../../../reference/runtime/host-main.cjs#L740898-L740901) | `ArrowFunctionExpression` | sim | `_ctx, args, deps` |
| [evaluation:480253-480256](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480253-L480256) | `ArrowFunctionExpression` | sim | `_ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740898-740901](../../../../../../../../reference/runtime/host-main.cjs#L740898-L740901) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480253-480256](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480253-L480256) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740898

Chamadas escritas diretamente neste corpo: `deps.set`.

SHA-256 do trecho: `87f4c2d06a887801dcf629bcefdf23d1a22f55c1df3db8e815dc10cf1419f36b`.

### evaluation:480253

Chamadas escritas diretamente neste corpo: `deps.set`.

SHA-256 do trecho: `87f4c2d06a887801dcf629bcefdf23d1a22f55c1df3db8e815dc10cf1419f36b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
