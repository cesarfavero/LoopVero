# `mergeUnresolvedAccountServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/account-display-cache.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/account-display-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685051-685068](../../../../../../../reference/runtime/host-main.cjs#L685051-L685068) | `FunctionDeclaration` | não | `display, cached2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685051-685068](../../../../../../../reference/runtime/host-main.cjs#L685051-L685068) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:685051

Chamadas escritas diretamente neste corpo: `cached2.servers.flatMap`, `cached2.servers.map`, `display.servers.filter`, `display.servers.map`, `new Map`, `new Set`.

SHA-256 do trecho: `148360d012da64cb396a67fbcd7af53124040aa1ba0d535ef37aa3672fc61dff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
