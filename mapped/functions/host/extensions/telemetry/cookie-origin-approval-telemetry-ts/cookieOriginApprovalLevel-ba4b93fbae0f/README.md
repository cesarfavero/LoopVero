# `cookieOriginApprovalLevel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/telemetry/cookie-origin-approval-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/cookie-origin-approval-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:456188-456200](../../../../../../../reference/runtime/host-main.cjs#L456188-L456200) | `FunctionDeclaration` | não | `outcome, refusalReason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456188-456200](../../../../../../../reference/runtime/host-main.cjs#L456188-L456200) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:456188

Chamadas escritas diretamente neste corpo: `INFO_REFUSAL_REASONS.has`.

SHA-256 do trecho: `69479c88948acefc1d38a617b1d9ecc0e840dc3193831003bf7a92e6cfc9fb8d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
