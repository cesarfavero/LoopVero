# `createWindowMcpHost/loadMcpServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554217-554230](../../../../../../reference/runtime/host-main.cjs#L554217-L554230) | `ArrowFunctionExpression` | sim | `ctx, configJson, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554217-554230](../../../../../../reference/runtime/host-main.cjs#L554217-L554230) | 2 | 0 | 2 | 2 | 1 | 1 |

### host:554217

Chamadas escritas diretamente neste corpo: `daemon.loadMcpServers`.

Alvos de atribuição ou incremento: `pushed`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `f19b27102600fa3c23e47ef3eeec921a3cce3b8cb855bee3641e5b47bb71135f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
