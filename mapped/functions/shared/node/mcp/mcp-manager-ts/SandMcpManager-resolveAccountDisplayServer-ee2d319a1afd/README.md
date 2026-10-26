# `SandMcpManager.resolveAccountDisplayServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690124-690155](../../../../../../../reference/runtime/host-main.cjs#L690124-L690155) | `method` | sim | `serverId, requireFreshRead` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690124-690155](../../../../../../../reference/runtime/host-main.cjs#L690124-L690155) | 9 | 0 | 2 | 3 | 5 | 1 |

### host:690124

Chamadas escritas diretamente neste corpo: `findDisplayServerByAddress`, `new SandMcpConfigError`, `this.accountDisplayConfigProvider`, `this.accountServersProvider`, `this.accountSlots.noteAccountDisplayConfig`, `this.lastAccountDisplayConfigView`.

Alvos de atribuição ou incremento: `display`.

Alvos de lançamento explícito: `SandMcpConfigError`, `error64`.

SHA-256 do trecho: `d6b1c3fc31ce202997be538717dcb21ec66c2316c6eb80eea1e11b73485b7335`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
