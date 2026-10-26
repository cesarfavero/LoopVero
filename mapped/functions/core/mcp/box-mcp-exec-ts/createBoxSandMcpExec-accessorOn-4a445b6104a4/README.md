# `createBoxSandMcpExec/accessorOn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684895-684903](../../../../../../reference/runtime/host-main.cjs#L684895-L684903) | `ArrowFunctionExpression` | sim | `host` |
| [evaluation:514683-514691](../../../../../../reference/runtime/sand-eval-runner.cjs#L514683-L514691) | `ArrowFunctionExpression` | sim | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684895-684903](../../../../../../reference/runtime/host-main.cjs#L684895-L684903) | 2 | 0 | 3 | 2 | 0 | 0 |
| [evaluation:514683-514691](../../../../../../reference/runtime/sand-eval-runner.cjs#L514683-L514691) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:684895

Chamadas escritas diretamente neste corpo: `boxMcpResourceAccessor`, `host.loadMcpServers`, `host.mcpResourceAccessor`, `loadOptions`.

SHA-256 do trecho: `d41d0bc2e74b0bb154d7bd9ecc75e4a0e25186c1424ce1fffa423049227d9a7c`.

### evaluation:514683

Chamadas escritas diretamente neste corpo: `boxMcpResourceAccessor`, `host.loadMcpServers`, `host.mcpResourceAccessor`, `loadOptions`.

SHA-256 do trecho: `d41d0bc2e74b0bb154d7bd9ecc75e4a0e25186c1424ce1fffa423049227d9a7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
