# `placePhoneCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/place-phone-call-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/place-phone-call-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763640-763663](../../../../../../../reference/runtime/host-main.cjs#L763640-L763663) | `FunctionDeclaration` | sim | `deps, args` |
| [evaluation:556682-556705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556682-L556705) | `FunctionDeclaration` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763640-763663](../../../../../../../reference/runtime/host-main.cjs#L763640-L763663) | 4 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:556682-556705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556682-L556705) | 4 | 0 | 3 | 4 | 0 | 0 |

### host:763640

Chamadas escritas diretamente neste corpo: `declaredPurposes.increment`, `deps.outboundCall.checkEligibility`, `deps.outboundCall.placeCall`, `deps.reviewCall`, `part`, `whatToTellTheUser`.

SHA-256 do trecho: `8467efc7069dfaf2bb8d0f103ccacdbf92611d9ec143e77d109001e0a1f42ab4`.

### evaluation:556682

Chamadas escritas diretamente neste corpo: `declaredPurposes.increment`, `deps.outboundCall.checkEligibility`, `deps.outboundCall.placeCall`, `deps.reviewCall`, `part`, `whatToTellTheUser`.

SHA-256 do trecho: `8467efc7069dfaf2bb8d0f103ccacdbf92611d9ec143e77d109001e0a1f42ab4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
