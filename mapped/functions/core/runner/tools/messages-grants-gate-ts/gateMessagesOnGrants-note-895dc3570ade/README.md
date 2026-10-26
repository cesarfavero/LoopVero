# `gateMessagesOnGrants/note`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/messages-grants-gate.ts` · [README do módulo](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777845-777851](../../../../../../../reference/runtime/host-main.cjs#L777845-L777851) | `ArrowFunctionExpression` | não | `ctx, row` |
| [evaluation:577580-577586](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577580-L577586) | `ArrowFunctionExpression` | não | `ctx, row` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777845-777851](../../../../../../../reference/runtime/host-main.cjs#L777845-L777851) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:577580-577586](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577580-L577586) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:777845

Chamadas escritas diretamente neste corpo: `errorLogTag`, `logger123.warn`, `report`.

SHA-256 do trecho: `9824c55f976b63c923f2a7d5402730164e6b2873f611b66d8a9b2cac58ba0fb8`.

### evaluation:577580

Chamadas escritas diretamente neste corpo: `errorLogTag`, `logger96.warn`, `report`.

SHA-256 do trecho: `33531094608573798c0d07ddfc6f4389d019eca45efc0d91f7f7486693151909`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
