# `shipmentFallbackText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707224-707237](../../../../../../reference/runtime/host-main.cjs#L707224-L707237) | `FunctionDeclaration` | não | `card` |
| [evaluation:481347-481360](../../../../../../reference/runtime/sand-eval-runner.cjs#L481347-L481360) | `FunctionDeclaration` | não | `card` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707224-707237](../../../../../../reference/runtime/host-main.cjs#L707224-L707237) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481347-481360](../../../../../../reference/runtime/sand-eval-runner.cjs#L481347-L481360) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:707224

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `card.items.slice`, `deliveryText`, `escapeCardMarkdown`, `shown.join`, `trackingLink`.

SHA-256 do trecho: `7b0a832c3d198cb8ec0904cdd35be7056e5349c90c5e2fa1870dbd30452e32db`.

### evaluation:481347

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `card.items.slice`, `deliveryText`, `escapeCardMarkdown`, `shown.join`, `trackingLink`.

SHA-256 do trecho: `7b0a832c3d198cb8ec0904cdd35be7056e5349c90c5e2fa1870dbd30452e32db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
