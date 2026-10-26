# `createHostMcp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700939-701354](../../../../../../reference/runtime/host-main.cjs#L700939-L701354) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700939-701354](../../../../../../reference/runtime/host-main.cjs#L700939-L701354) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:700939

Chamadas escritas diretamente neste corpo: `createMcpListingSpanObserver`, `createMcpToolsDiscovery`, `createStdioSignInAbsenceLedger`, `manager.definitionSourceView`, `manager.setAuthCompletionObserver`, `manager.setBoxRuntime`, `new SandMcpManager`, `pluginInstallFolderOption`, `signInAbsence.observe`.

SHA-256 do trecho: `9b753d5ed7891dd3bf0714488de1b841a9f82cd907e30375de5e35de49faa426`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
