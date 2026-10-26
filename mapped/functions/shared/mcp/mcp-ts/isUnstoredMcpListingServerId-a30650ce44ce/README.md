# `isUnstoredMcpListingServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225984-225987](../../../../../../reference/runtime/host-main.cjs#L225984-L225987) | `FunctionDeclaration` | não | `rawId` |
| [evaluation:495208-495211](../../../../../../reference/runtime/sand-eval-runner.cjs#L495208-L495211) | `FunctionDeclaration` | não | `rawId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225984-225987](../../../../../../reference/runtime/host-main.cjs#L225984-L225987) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495208-495211](../../../../../../reference/runtime/sand-eval-runner.cjs#L495208-L495211) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225984

Chamadas escritas diretamente neste corpo: `id.startsWith`, `isMcpListingServerId`, `rawId.trim`.

SHA-256 do trecho: `c88cfaadf1722e86ceb85674222734c9076ef195ccdfe72b84ee74e09ff6c765`.

### evaluation:495208

Chamadas escritas diretamente neste corpo: `id.startsWith`, `isMcpListingServerId`, `rawId.trim`.

SHA-256 do trecho: `c88cfaadf1722e86ceb85674222734c9076ef195ccdfe72b84ee74e09ff6c765`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
