# `countMcpArgumentFix`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-argument-fix-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-argument-fix-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:579105-579110](../../../../../../reference/runtime/sand-eval-runner.cjs#L579105-L579110) | `FunctionDeclaration` | não | `ctx, kind, serverIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:579105-579110](../../../../../../reference/runtime/sand-eval-runner.cjs#L579105-L579110) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:579105

Chamadas escritas diretamente neste corpo: `automaticArgumentFixes.increment`, `boundedConnectorTag`.

SHA-256 do trecho: `eb232d48a9b001bdf804eb1fd7e564ae97ab47ac2cc22193928a0a27699d18d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
