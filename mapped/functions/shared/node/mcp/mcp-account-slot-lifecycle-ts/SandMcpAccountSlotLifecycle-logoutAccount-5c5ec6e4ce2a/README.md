# `SandMcpAccountSlotLifecycle.logoutAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-account-slot-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-account-slot-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685259-685268](../../../../../../../reference/runtime/host-main.cjs#L685259-L685268) | `method` | sim | `rawServerId, rawAccountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685259-685268](../../../../../../../reference/runtime/host-main.cjs#L685259-L685268) | 0 | 0 | 3 | 1 | 0 | 0 |

### host:685259

Chamadas escritas diretamente neste corpo: `normalizeAccountKey`, `this.deps.backendMcpExec.logoutAccount`, `this.deps.clearPendingAuthWatch`, `this.deps.reloadServers`, `this.resolveHttpDisplayServer`.

SHA-256 do trecho: `b876e832106ed3628e4f6d5b6d5ec82ff92b7dff11ccd78040d2a947c4c3a9ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
