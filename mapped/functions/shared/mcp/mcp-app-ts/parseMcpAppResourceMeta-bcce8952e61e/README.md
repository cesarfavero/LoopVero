# `parseMcpAppResourceMeta`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-app.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-app-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486844-486856](../../../../../../reference/runtime/host-main.cjs#L486844-L486856) | `FunctionDeclaration` | não | `metaJson` |
| [evaluation:495160-495172](../../../../../../reference/runtime/sand-eval-runner.cjs#L495160-L495172) | `FunctionDeclaration` | não | `metaJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486844-486856](../../../../../../reference/runtime/host-main.cjs#L486844-L486856) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495160-495172](../../../../../../reference/runtime/sand-eval-runner.cjs#L495160-L495172) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:486844

Chamadas escritas diretamente neste corpo: `Object.keys`, `isUnknownRecord2`, `parseCsp`, `parseJsonOrUndefined`, `parsePermissions`.

SHA-256 do trecho: `371f554b4a7385558db64c33705a70897e186120dfbfc6f43e18307983ae3e82`.

### evaluation:495160

Chamadas escritas diretamente neste corpo: `Object.keys`, `isUnknownRecord2`, `parseCsp`, `parseJsonOrUndefined2`, `parsePermissions`.

SHA-256 do trecho: `5757b180e473ab9862fdbc6ebd142096734278fba75c43ff23580fb096ad50f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
