# `SandAgentIdentityService.stampFromRemote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496308-496314](../../../../../../../reference/runtime/host-main.cjs#L496308-L496314) | `method` | não | `agentId, profilePath, remote, expectedLocal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496308-496314](../../../../../../../reference/runtime/host-main.cjs#L496308-L496314) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:496308

Chamadas escritas diretamente neste corpo: `bindSandProfileToServer`, `identityFromRowKeepingNamedBy`, `localIdentityDiverged`, `readSandProfileFile`, `serverBindingOf`, `this.rememberServerIdentity`.

SHA-256 do trecho: `9dd93a4b3a16cb2ad6dc8bf1bf158870f82bed0a70284412657722196ecb962f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
