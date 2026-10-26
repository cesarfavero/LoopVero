# `shipmentCardOfArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760842-760870](../../../../../../../reference/runtime/host-main.cjs#L760842-L760870) | `FunctionDeclaration` | não | `rawArgs, deps` |
| [evaluation:551657-551685](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551657-L551685) | `FunctionDeclaration` | não | `rawArgs, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760842-760870](../../../../../../../reference/runtime/host-main.cjs#L760842-L760870) | 6 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:551657-551685](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551657-L551685) | 6 | 0 | 0 | 2 | 2 | 0 |

### host:760842

Chamadas escritas diretamente neste corpo: `Date.now`, `deps.renderCards.shipmentOffered`, `new SandToolInputError`, `read2.errors.join`, `readShipmentCard`, `registrableDomainOf`, `shipmentFallbackText`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `7c0f0359ff82f4d966c85249fe0fb640d17fa526193ca9e0c942a63c15faef55`.

### evaluation:551657

Chamadas escritas diretamente neste corpo: `Date.now`, `deps.renderCards.shipmentOffered`, `new SandToolInputError`, `read2.errors.join`, `readShipmentCard`, `registrableDomainOf`, `shipmentFallbackText`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `7c0f0359ff82f4d966c85249fe0fb640d17fa526193ca9e0c942a63c15faef55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
