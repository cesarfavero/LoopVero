# `sendEmail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-email-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764379-764392](../../../../../../../reference/runtime/host-main.cjs#L764379-L764392) | `FunctionDeclaration` | sim | `deps, args` |
| [evaluation:557747-557760](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557747-L557760) | `FunctionDeclaration` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764379-764392](../../../../../../../reference/runtime/host-main.cjs#L764379-L764392) | 1 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:557747-557760](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557747-L557760) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:764379

Chamadas escritas diretamente neste corpo: `attemptEmailSend`, `deps.reportDelivery.failed`, `deps.reportDelivery.settled`, `errorClassOf`.

Alvos de atribuição ou incremento: `outcome`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `c4fce2e93f6a6cb644c2e10297c32acb84a32b842c1d3c34473e317a4a9a8530`.

### evaluation:557747

Chamadas escritas diretamente neste corpo: `attemptEmailSend`, `deps.reportDelivery.failed`, `deps.reportDelivery.settled`, `errorClassOf`.

Alvos de atribuição ou incremento: `outcome`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `1051ff84f9ddb86e65dedc09b893947ef9df5c61d6e9c1a5f1d53d6106904008`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
