# `sandWebAuthnOriginClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/gateway/README.md).

**Módulo:** `shared/webauthn/webauthn-gateway.ts` · [README do módulo](../../../../../modules/shared/webauthn/webauthn-gateway-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487440-487451](../../../../../../reference/runtime/host-main.cjs#L487440-L487451) | `FunctionDeclaration` | não | `origin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487440-487451](../../../../../../reference/runtime/host-main.cjs#L487440-L487451) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:487440

Chamadas escritas diretamente neste corpo: `hostname4.endsWith`, `new URL`.

Alvos de atribuição ou incremento: `hostname4`.

SHA-256 do trecho: `6f253d5393e03bc2e21661df3105e610ab09d6ee8c46f20415c23ee4c12dbfec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
