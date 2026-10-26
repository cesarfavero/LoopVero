# `refineSendMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741594-741783](../../../../../../../reference/runtime/host-main.cjs#L741594-L741783) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:482541-482730](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482541-L482730) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741594-741783](../../../../../../../reference/runtime/host-main.cjs#L741594-L741783) | 30 | 2 | 0 | 8 | 0 | 0 |
| [evaluation:482541-482730](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482541-L482730) | 30 | 2 | 0 | 8 | 0 | 0 |

### host:741594

Chamadas escritas diretamente neste corpo: `.entries`, `.join`, `ctx.addIssue`, `isFieldProvided`, `isKnownNonImage`, `isValidAttachmentUrl`, `refineCards`, `refineLinkItems`, `refineShipment`, `refineShopping`, `textContentIssue`, `types4.includes`, `types4.map`.

SHA-256 do trecho: `7746fa38ba6d7df579ccb76374b3dba84523205c205342e4ecf51a31a4c2bf67`.

### evaluation:482541

Chamadas escritas diretamente neste corpo: `.entries`, `.join`, `ctx.addIssue`, `isFieldProvided`, `isKnownNonImage`, `isValidAttachmentUrl`, `refineCards`, `refineLinkItems`, `refineShipment`, `refineShopping`, `textContentIssue`, `types4.includes`, `types4.map`.

SHA-256 do trecho: `cbb4092f8f75e3018b16f722626d48d20682f83d58a5bdc196b317dac04a43ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
