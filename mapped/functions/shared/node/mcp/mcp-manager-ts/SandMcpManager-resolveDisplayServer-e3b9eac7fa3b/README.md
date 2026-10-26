# `SandMcpManager.resolveDisplayServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690099-690123](../../../../../../../reference/runtime/host-main.cjs#L690099-L690123) | `method` | sim | `rawServerId, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690099-690123](../../../../../../../reference/runtime/host-main.cjs#L690099-L690123) | 5 | 0 | 2 | 4 | 0 | 0 |

### host:690099

Chamadas escritas diretamente neste corpo: `findDisplayServerByAddress`, `isGrokDisplayServerId`, `rawServerId.trim`, `this.loadGrokBotAgentServers`, `this.resolveAccountDisplayServer`.

SHA-256 do trecho: `2673ff7e83f231eff991d63e9a9050a9164ad87cb5b17d9de94ea8485bd73803`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
