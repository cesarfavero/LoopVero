# `CredentialOneTimeCodeFollowUp.retryAfterLeaseRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/credential-one-time-code-follow-up.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/credential-one-time-code-follow-up-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548884-548889](../../../../../../../reference/runtime/host-main.cjs#L548884-L548889) | `method` | não | `targetWebSocketDebuggerUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548884-548889](../../../../../../../reference/runtime/host-main.cjs#L548884-L548889) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:548884

Chamadas escritas diretamente neste corpo: `Math.max`, `this.sessions.get`.

Alvos de atribuição ou incremento: `session.attempts`, `session.lastSignature`.

SHA-256 do trecho: `8119c980902e9d02ddd7a0dac7a2eb849fe8f596b599d22f121cd4633486352f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
