# `parseGuestBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/auth/identity-socket-server.ts` · [README do módulo](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499525-499576](../../../../../../../reference/runtime/host-main.cjs#L499525-L499576) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499525-499576](../../../../../../../reference/runtime/host-main.cjs#L499525-L499576) | 14 | 0 | 0 | 10 | 0 | 1 |

### host:499525

Chamadas escritas diretamente neste corpo: `Array.isArray`, `JSON.parse`, `NONCE_PRINTABLE_ASCII.test`, `parsed2.aud.trim`, `parsed2.sub_claim.trim`, `raw.toString`.

Alvos de atribuição ou incremento: `nonce`, `parsed2`, `subClaim`.

SHA-256 do trecho: `bf376f0ed5e76faa946f372adac7a1c46fc22b0d0b799ddc12ecd8ea13683138`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
