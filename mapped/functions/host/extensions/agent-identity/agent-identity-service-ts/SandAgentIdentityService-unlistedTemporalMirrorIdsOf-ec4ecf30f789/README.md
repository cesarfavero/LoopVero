# `SandAgentIdentityService.unlistedTemporalMirrorIdsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495842-495853](../../../../../../../reference/runtime/host-main.cjs#L495842-L495853) | `method` | não | `listing` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495842-495853](../../../../../../../reference/runtime/host-main.cjs#L495842-L495853) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:495842

Chamadas escritas diretamente neste corpo: `.filter`, `this.clock.monotonicNow`, `this.readTemporalMirrorIds`, `this.reportDropFailure`.

SHA-256 do trecho: `ac98156f3a48f36c057074cd02334c7d7465f6437ea2c7bc1fdb0eaaa1a4d370`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
