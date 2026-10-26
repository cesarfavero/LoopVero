# `validateRemoteMcpUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779582-779596](../../../../../../../reference/runtime/host-main.cjs#L779582-L779596) | `FunctionDeclaration` | não | `rawUrl` |
| [evaluation:579820-579834](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579820-L579834) | `FunctionDeclaration` | não | `rawUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779582-779596](../../../../../../../reference/runtime/host-main.cjs#L779582-L779596) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:579820-579834](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579820-L579834) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:779582

Chamadas escritas diretamente neste corpo: `new URL`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `779dba681798d28353e2605e4601ac9035fc382843b9390b85e362dec893f650`.

### evaluation:579820

Chamadas escritas diretamente neste corpo: `new URL`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `0ed9e296f5e9260a4520a436bfbc958d2e903a158f007a43f33eecfde6b9caed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
