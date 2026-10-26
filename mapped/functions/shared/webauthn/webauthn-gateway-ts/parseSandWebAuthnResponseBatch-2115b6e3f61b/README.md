# `parseSandWebAuthnResponseBatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/gateway/README.md).

**Módulo:** `shared/webauthn/webauthn-gateway.ts` · [README do módulo](../../../../../modules/shared/webauthn/webauthn-gateway-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487501-487507](../../../../../../reference/runtime/host-main.cjs#L487501-L487507) | `FunctionDeclaration` | não | `u2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487501-487507](../../../../../../reference/runtime/host-main.cjs#L487501-L487507) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:487501

Chamadas escritas diretamente neste corpo: `describeZodIssues`, `new SandWireParseError`, `sandWebAuthnResponseBatchSchema.safeParse`.

Alvos de lançamento explícito: `SandWireParseError`.

SHA-256 do trecho: `00ff07223d8cb11deb52e5e3e0d5fe9f2e7b134178e9718b9706ebfcbb2b4313`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
