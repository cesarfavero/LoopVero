# `createBoxSandMcpExec/readResource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684994-685009](../../../../../../reference/runtime/host-main.cjs#L684994-L685009) | `FunctionExpression` | sim | `{ serverIdentifier, uri }` |
| [evaluation:514782-514797](../../../../../../reference/runtime/sand-eval-runner.cjs#L514782-L514797) | `FunctionExpression` | sim | `{ serverIdentifier, uri }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684994-685009](../../../../../../reference/runtime/host-main.cjs#L684994-L685009) | 0 | 0 | 2 | 2 | 0 | 1 |
| [evaluation:514782-514797](../../../../../../reference/runtime/sand-eval-runner.cjs#L514782-L514797) | 0 | 0 | 2 | 2 | 0 | 1 |

### host:684994

Chamadas escritas diretamente neste corpo: `.execute`, `accessor.get`, `boxMcpResourceAccessor`, `boxResourceReadToShared`, `errorLabel2`, `new ReadMcpResourceExecArgs`.

SHA-256 do trecho: `1c54c3e3402918aac001caead8dfb83993332747aa2b3cbb6dd89e9fa9de720a`.

### evaluation:514782

Chamadas escritas diretamente neste corpo: `.execute`, `accessor.get`, `boxMcpResourceAccessor`, `boxResourceReadToShared`, `errorLabel`, `new ReadMcpResourceExecArgs`.

SHA-256 do trecho: `393bc55e4d225e85902afbceff042dbfebac315073d8987a76a1fc680d126d79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
