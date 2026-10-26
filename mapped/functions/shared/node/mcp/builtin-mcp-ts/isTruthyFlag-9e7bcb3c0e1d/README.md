# `isTruthyFlag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/builtin-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/builtin-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451450-451453](../../../../../../../reference/runtime/host-main.cjs#L451450-L451453) | `FunctionDeclaration` | não | `value` |
| [evaluation:597054-597057](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597054-L597057) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451450-451453](../../../../../../../reference/runtime/host-main.cjs#L451450-L451453) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597054-597057](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597054-L597057) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451450

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `value.trim`.

SHA-256 do trecho: `9156e941142eded5b6b8cb891d8c5ecb7aa70f631ebb9d171dbdeb754d33db29`.

### evaluation:597054

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `value.trim`.

SHA-256 do trecho: `9156e941142eded5b6b8cb891d8c5ecb7aa70f631ebb9d171dbdeb754d33db29`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
