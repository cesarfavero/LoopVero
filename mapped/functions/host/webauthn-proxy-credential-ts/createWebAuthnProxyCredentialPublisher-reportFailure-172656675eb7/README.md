# `createWebAuthnProxyCredentialPublisher/reportFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/webauthn-proxy-credential.ts` · [README do módulo](../../../../modules/host/webauthn-proxy-credential-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786832-786836](../../../../../reference/runtime/host-main.cjs#L786832-L786836) | `ArrowFunctionExpression` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786832-786836](../../../../../reference/runtime/host-main.cjs#L786832-L786836) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:786832

Chamadas escritas diretamente neste corpo: `options2.reportFailure`.

Alvos de atribuição ou incremento: `failureReported`.

SHA-256 do trecho: `cec6a2ba7ca9135ac2b46d7f6338a0dda2214703efa5e22a976fc55e2f084af7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
