# `recordMcpExecRefusedBeforeDispatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-diagnostics.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226208-226212](../../../../../../../reference/runtime/host-main.cjs#L226208-L226212) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:479061-479065](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479061-L479065) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226208-226212](../../../../../../../reference/runtime/host-main.cjs#L226208-L226212) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479061-479065](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479061-L479065) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:226208

Chamadas escritas diretamente neste corpo: `ctx.get`.

Alvos de atribuição ou incremento: `attribution.refusedBeforeDispatch`.

SHA-256 do trecho: `4bf7040ad55563517057329b49c861190a1dd61b67a9a1a738b5e3b4f3efe9a9`.

### evaluation:479061

Chamadas escritas diretamente neste corpo: `ctx.get`.

Alvos de atribuição ou incremento: `attribution.refusedBeforeDispatch`.

SHA-256 do trecho: `4bf7040ad55563517057329b49c861190a1dd61b67a9a1a738b5e3b4f3efe9a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
