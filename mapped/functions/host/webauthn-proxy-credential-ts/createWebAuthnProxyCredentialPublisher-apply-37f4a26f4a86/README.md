# `createWebAuthnProxyCredentialPublisher/apply`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/webauthn-proxy-credential.ts` · [README do módulo](../../../../modules/host/webauthn-proxy-credential-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786846-786869](../../../../../reference/runtime/host-main.cjs#L786846-L786869) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786846-786869](../../../../../reference/runtime/host-main.cjs#L786846-L786869) | 2 | 0 | 3 | 2 | 0 | 2 |

### host:786846

Chamadas escritas diretamente neste corpo: `errorLogTag`, `publishWebAuthnProxyCredential`, `readEnabled`, `reportFailure`, `withdrawWebAuthnProxyCredential`.

Alvos de atribuição ou incremento: `failureReported`, `live`.

SHA-256 do trecho: `d3922b9dd20f9587555443f11d82fac2849685cce4df330e48f0c5e6e26486a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
