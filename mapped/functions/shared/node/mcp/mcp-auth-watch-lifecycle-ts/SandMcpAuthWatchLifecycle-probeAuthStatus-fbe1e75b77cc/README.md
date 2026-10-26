# `SandMcpAuthWatchLifecycle.probeAuthStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685872-685891](../../../../../../../reference/runtime/host-main.cjs#L685872-L685891) | `method` | sim | `attempt, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685872-685891](../../../../../../../reference/runtime/host-main.cjs#L685872-L685891) | 0 | 0 | 2 | 1 | 1 | 1 |

### host:685872

Chamadas escritas diretamente neste corpo: `authStatusRequest`, `connectorAuthStartFailure`, `this.deps.backendMcpExec.checkAuthStatus`, `this.emit`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `6cf4a0545a2dafc8e592bbf81a20feecf3545b8f5038a47664b2bd805a1668bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
