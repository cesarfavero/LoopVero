# `publishWebAuthnProxyCredential`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/webauthn-proxy-credential.ts` · [README do módulo](../../../../modules/host/webauthn-proxy-credential-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786811-786822](../../../../../reference/runtime/host-main.cjs#L786811-L786822) | `FunctionDeclaration` | sim | `credential, credentialPath = SAND_BOX_WEBAUTHN_PROXY_CREDENTIAL_PATH` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786811-786822](../../../../../reference/runtime/host-main.cjs#L786811-L786822) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:786811

Chamadas escritas diretamente neste corpo: `withdrawWebAuthnProxyCredential`, `writeFileAtomic`.

SHA-256 do trecho: `b8b8a937f942d6fda8a45dd2a99280b80cb170a704ba54aadf6481b5b43a7cc2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
