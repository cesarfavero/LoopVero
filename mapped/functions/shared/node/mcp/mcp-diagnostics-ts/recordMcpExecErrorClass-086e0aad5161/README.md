# `recordMcpExecErrorClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-diagnostics.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226203-226207](../../../../../../../reference/runtime/host-main.cjs#L226203-L226207) | `FunctionDeclaration` | não | `ctx, error64` |
| [evaluation:479056-479060](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479056-L479060) | `FunctionDeclaration` | não | `ctx, error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226203-226207](../../../../../../../reference/runtime/host-main.cjs#L226203-L226207) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479056-479060](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479056-L479060) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:226203

Chamadas escritas diretamente neste corpo: `ctx.get`, `mcpErrorClassOf`.

Alvos de atribuição ou incremento: `attribution.errorClass`.

SHA-256 do trecho: `124546fc3439105d48745bf7fcd7e5fc95331abaa5188de9c107509499d54b9c`.

### evaluation:479056

Chamadas escritas diretamente neste corpo: `ctx.get`, `mcpErrorClassOf`.

Alvos de atribuição ou incremento: `attribution.errorClass`.

SHA-256 do trecho: `302269d99ccbcebecbad859b6ec4b09cad7b3ffd238139806d84abbacfce9487`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
