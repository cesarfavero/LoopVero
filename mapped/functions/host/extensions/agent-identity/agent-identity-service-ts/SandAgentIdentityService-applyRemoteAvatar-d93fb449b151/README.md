# `SandAgentIdentityService.applyRemoteAvatar`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495938-495960](../../../../../../../reference/runtime/host-main.cjs#L495938-L495960) | `method` | sim | `agent, expectedVersion, bytes, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495938-495960](../../../../../../../reference/runtime/host-main.cjs#L495938-L495960) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:495938

Chamadas escritas diretamente neste corpo: `errorMessage`, `signal.throwIfAborted`, `this.deps.log`, `this.deps.setLocalAvatarBytes`, `this.unresolvedAvatarBaselines.delete`, `this.unresolvedAvatarBaselines.set`, `this.unsupportedLocalAvatarBaselines.delete`.

SHA-256 do trecho: `100bcf7f975ff6bbfa9065e39d1d2b174e3f9c1d6ada45fb2feaf7b0bd15de9f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
