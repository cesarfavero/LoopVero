# `SandAgentIdentityService.readServerRoster`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496339-496346](../../../../../../../reference/runtime/host-main.cjs#L496339-L496346) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496339-496346](../../../../../../../reference/runtime/host-main.cjs#L496339-L496346) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:496339

Chamadas escritas diretamente neste corpo: `errorMessage`, `listingOf`, `this.deps.listRemoteAgents`, `this.deps.log`.

SHA-256 do trecho: `d42eb6b858c9faef552473b49e9ec66268c47b396c7df30e89db56cd6c6e81a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
