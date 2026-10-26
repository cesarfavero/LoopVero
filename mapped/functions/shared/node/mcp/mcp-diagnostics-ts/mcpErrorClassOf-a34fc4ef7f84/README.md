# `mcpErrorClassOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-diagnostics.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226169-226172](../../../../../../../reference/runtime/host-main.cjs#L226169-L226172) | `FunctionDeclaration` | não | `error64` |
| [evaluation:479042-479045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479042-L479045) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226169-226172](../../../../../../../reference/runtime/host-main.cjs#L226169-L226172) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:479042-479045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479042-L479045) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:226169

Chamadas escritas diretamente neste corpo: `errorClassOf`.

SHA-256 do trecho: `f98e66e44c253d48e3eb30df65dfcc0a9ab1f45ab6c8c6f9c24cd64451235ad2`.

### evaluation:479042

Chamadas escritas diretamente neste corpo: `errorClassOf`.

SHA-256 do trecho: `6a164b6c02ec7cf96e1803e936507254da973bb99ea786639ad9daad591c3a5f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
