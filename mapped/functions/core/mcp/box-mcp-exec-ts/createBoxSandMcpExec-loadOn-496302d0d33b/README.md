# `createBoxSandMcpExec/loadOn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684888-684894](../../../../../../reference/runtime/host-main.cjs#L684888-L684894) | `ArrowFunctionExpression` | sim | `host, configJson, load2` |
| [evaluation:514676-514682](../../../../../../reference/runtime/sand-eval-runner.cjs#L514676-L514682) | `ArrowFunctionExpression` | sim | `host, configJson, load2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684888-684894](../../../../../../reference/runtime/host-main.cjs#L684888-L684894) | 1 | 0 | 2 | 0 | 0 | 0 |
| [evaluation:514676-514682](../../../../../../reference/runtime/sand-eval-runner.cjs#L514676-L514682) | 1 | 0 | 2 | 0 | 0 | 0 |

### host:684888

Chamadas escritas diretamente neste corpo: `boxLoadMcpServers`, `host.loadMcpServers`.

SHA-256 do trecho: `bc85e57fcbe074fbe68d76f632db14ed4fe76fc229ce702c5891e3da45a26271`.

### evaluation:514676

Chamadas escritas diretamente neste corpo: `boxLoadMcpServers`, `host.loadMcpServers`.

SHA-256 do trecho: `bc85e57fcbe074fbe68d76f632db14ed4fe76fc229ce702c5891e3da45a26271`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
